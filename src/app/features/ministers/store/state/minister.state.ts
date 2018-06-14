import { State, Selector, Action, StateContext } from "@ngxs/store";
import { MinisterStateModel } from "@features/ministers/store/model/minister.state.model";
import { FetchMinisters } from "@features/ministers/store/actions/minister.action";
import { MinistersService } from "@features/ministers/services/ministers.service";
import { MinistersModel } from "@features/ministers/models/ministers.model";
import { map } from "rxjs/operators";

const DEFAULT_STATES: MinisterStateModel = {
  entities: {},
  pageIndex: 0,
  pageSize: 5,
  pageLength: 0,
  sort: { active: "name", direction: "asc" },
  selectedEntity: null,
  isLoading: false
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
  static tableEvent(state: MinisterStateModel) {
    const { pageIndex, pageSize, pageLength, sort } = state;
    const pageEvent = { pageIndex, pageSize, pageLength };
    const sortEvent = { active: sort.active, direction: sort.direction };
    return { pageEvent, sortEvent };
  }

  @Selector()
  static selectedEntity(state: MinisterStateModel) {
    const { selectedEntity, entities } = state;
    return entities[selectedEntity];
  }

  @Selector()
  public static isLoading(state: MinisterStateModel) {
    return state.isLoading;
  }

  @Action(FetchMinisters)
  fetchMinisters(
    ctx: StateContext<MinisterStateModel>,
    action: FetchMinisters
  ) {
    const state = ctx.getState();
    return this.service.fetchData(state).pipe(
      map(result => {
        const { count, data } = result;
        const entities = data.reduce(
          (
            entities: { [id: number]: MinistersModel },
            data: MinistersModel
          ) => {
            return {
              ...entities,
              [data.id]: data
            };
          },
          {
            ...state.entities
          }
        );
        return ctx.patchState({ entities, pageLength: count });
      })
    );
  }

  constructor(private service: MinistersService) {}
}
