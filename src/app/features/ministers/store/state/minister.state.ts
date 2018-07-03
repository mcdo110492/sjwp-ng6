import {
  map,
  debounceTime,
  distinctUntilChanged,
  tap,
  catchError
} from "rxjs/operators";
import { of } from "rxjs";

import { State, Selector, Action, StateContext } from "@ngxs/store";
import { MinisterStateModel } from "@features/ministers/store/model/minister.state.model";

import {
  FetchMinisters,
  SearchMinisters,
  SelectMinister,
  CreateMinister,
  UpdateMinister
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
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
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
    const pageEvent = { pageIndex, pageSize, pageLength };
    const sortEvent = { active: sort.active, direction: sort.direction };
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
      debounceTime(5000),
      distinctUntilChanged(),
      map(response => {
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
    return ctx.patchState({ selectedEntity });
  }

  @Action(CreateMinister)
  create(ctx: StateContext<MinisterStateModel>, action: CreateMinister) {
    ctx.patchState({ isSaving: true });
    const { payload } = action;
    this.toast.showCreateSuccess("New Minister");
    setTimeout(() => {
      return ctx.patchState({ isSaving: false });
    }, 5000);
  }

  @Action(UpdateMinister)
  update(ctx: StateContext<MinisterStateModel>, action: UpdateMinister) {
    ctx.patchState({ isSaving: true });
    const { payload } = action;
    this.toast.showUpdateSuccess(`Minister ${payload.name}`);
    console.log(payload);
  }

  constructor(
    private service: MinistersService,
    private toast: ToasterService
  ) {}
}
