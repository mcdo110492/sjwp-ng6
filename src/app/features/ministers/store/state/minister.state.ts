import {
  map,
  debounceTime,
  distinctUntilChanged,
  catchError,
  switchMap
} from "rxjs/operators";

import { State, Selector, Action, StateContext } from "@ngxs/store";
import { MinisterStateModel } from "@features/ministers/store/model/minister.state.model";

import {
  FetchMinisters,
  SearchMinisters,
  SelectMinister,
  CreateMinister,
  UpdateMinister,
  ChangeMinisterStatus
} from "@features/ministers/store/actions/minister.action";
import { MinistersService } from "@features/ministers/services/ministers.service";
import { ToasterService } from "@services/helpers/toaster/toaster.service";

const DEFAULT_STATES: MinisterStateModel = {
  entities: {},
  pageIndex: 0,
  pageSize: 5,
  pageLength: 0,
  sort: { active: "name", direction: "asc" },
  filter: "",
  selectedEntity: 0,
  isLoading: false,
  isSaving: false
};

@State<MinisterStateModel>({
  name: "minister",
  defaults: DEFAULT_STATES
})
export class MinisterState {
  @Selector()
  static getEntities(state: MinisterStateModel) {
    const { entities } = state;
    return Object.keys(entities).map(id => entities[id]);
  }

  @Selector()
  static selectedEntityData(state: MinisterStateModel) {
    const { selectedEntity, entities } = state;
    return entities[selectedEntity];
  }

  @Selector()
  static isLoading(state: MinisterStateModel) {
    return state.isLoading;
  }

  @Selector()
  static isSaving(state: MinisterStateModel) {
    return state.isSaving;
  }

  @Selector()
  static tableEvent(state: MinisterStateModel) {
    const { pageIndex, pageSize, pageLength, sort } = state;
    const { active, direction } = sort;
    const pageEvent = { pageIndex, pageSize, pageLength };
    const sortEvent = { active, direction };
    return { pageEvent, sortEvent };
  }

  @Action(FetchMinisters)
  fetchMinisters(
    ctx: StateContext<MinisterStateModel>,
    action: FetchMinisters
  ) {
    const state = ctx.getState();
    const { pageIndex, pageSize, active, direction } = action.payload;
    const sort = { active, direction };
    ctx.patchState({ isLoading: true, pageIndex, pageSize, sort });
    const params = {
      page: pageIndex + 1,
      limit: pageSize,
      field: active,
      order: direction,
      filter: state.filter
    };
    return this.service.fetchData(params, []).pipe(
      map(response => {
        const { count, data } = response;

        return ctx.patchState({
          entities: data,
          pageLength: count,
          pageIndex,
          pageSize,
          isLoading: false
        });
      }),
      catchError(() => {
        return ctx.patchState({ isLoading: false });
      })
    );
  }

  @Action(SearchMinisters)
  search(ctx: StateContext<MinisterStateModel>, action: SearchMinisters) {
    ctx.patchState({ isLoading: true });
    const { pageIndex, pageSize, sort } = ctx.getState();
    const { active, direction } = sort;
    const filter = action.payload;
    const params = {
      page: pageIndex + 1,
      limit: pageSize,
      field: active,
      order: direction,
      filter
    };

    return this.service.fetchData(params, []).pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(response => {
        const { data } = response;

        return ctx.patchState({
          entities: data,
          filter,
          isLoading: false
        });
      })
    );
  }

  @Action(SelectMinister)
  select(ctx: StateContext<MinisterStateModel>, action: SelectMinister) {
    const selectedEntity = action.payload;
    ctx.patchState({ selectedEntity });
  }

  @Action(CreateMinister)
  create(ctx: StateContext<MinisterStateModel>, action: CreateMinister) {
    ctx.patchState({ isSaving: true });
    const { payload } = action;
    return this.service.create(payload).pipe(
      map(() => {
        this.toast.showSuccess(
          "Create Minister Success",
          "Minister has been created."
        );
        return ctx.patchState({ isSaving: false });
      }),
      catchError(() => ctx.patchState({ isSaving: false }))
    );
  }

  @Action(UpdateMinister)
  update(ctx: StateContext<MinisterStateModel>, action: UpdateMinister) {
    ctx.patchState({ isSaving: true });
    const { payload } = action;
    return this.service.update(payload).pipe(
      map(() => {
        this.toast.showSuccess(
          "Update Minister Success",
          "Minister has been updated."
        );
        return ctx.patchState({ isSaving: false });
      }),
      catchError(() => ctx.patchState({ isSaving: false }))
    );
  }

  @Action(ChangeMinisterStatus)
  changeStatus(
    ctx: StateContext<MinisterStateModel>,
    action: ChangeMinisterStatus
  ) {
    const { pageIndex, pageSize, sort } = ctx.getState();
    const { active, direction } = sort;
    ctx.patchState({ isLoading: true });
    const { id, status } = action.payload;
    return this.service.changeStatus(id, status).pipe(
      map(() => {
        this.toast.showSuccess(
          "Status Changed Successfully",
          "The minister status has been changed."
        );
        return ctx.dispatch(
          new FetchMinisters({ pageSize, pageIndex, active, direction })
        );
      }),
      catchError(() => ctx.patchState({ isLoading: false }))
    );
  }

  constructor(
    private service: MinistersService,
    private toast: ToasterService
  ) {}
}
