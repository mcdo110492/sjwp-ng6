import { MinistersModel } from "@features/ministers/models/ministers.model";
import { Sort } from "@angular/material";

export interface MinisterStateModel {
  entities: { [id: number]: MinistersModel };
  pageIndex: number;
  pageSize: number;
  pageLength: number;
  sort: Sort;
  selectedEntity: number;
  isLoading: boolean;
}
