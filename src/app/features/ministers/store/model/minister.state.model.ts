import { MinistersModel } from "@features/ministers/models/ministers.model";

export interface MinisterStateModel {
  entities: { [id: number]: MinistersModel };
  pageIndex: number;
  pageSize: number;
  pageLength: number;
  sort: { active: string; direction: string };
  filter: string;
  selectedEntity: number;
  isLoading: boolean;
  isSaving: boolean;
}
