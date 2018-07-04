import { MinistersModel } from "@features/ministers/models/ministers.model";

export class FetchMinisters {
  static readonly type = "[MMINISTER PAGE] Fetch";
  constructor(
    public payload: {
      pageSize: number;
      pageIndex: number;
      active: string;
      direction: string;
    }
  ) {}
}

export class SearchMinisters {
  static readonly type = "[MINISTER PAGE] Search";
  constructor(public payload: string) {}
}

export class CreateMinister {
  static readonly type = "[MINISTER PAGE] Create";
  constructor(public payload: MinistersModel) {}
}

export class UpdateMinister {
  static readonly type = "[MINISTER PAGE] Update";
  constructor(public payload: MinistersModel) {}
}

export class SelectMinister {
  static readonly type = "[MINISTER PAGE] Select Minister";

  constructor(public payload: number) {}
}

export class ChangeMinisterStatus {
  static readonly type = "[MINISTER PAGE] Change Status";
  constructor(public payload: { id: number; status: number }) {}
}
