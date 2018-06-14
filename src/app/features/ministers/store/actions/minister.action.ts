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

export class FetchMinistersSuccess {
  static readonly type = "[MINSITER API] Fetch Success";
  constructor(public payload: { count: number; data: MinistersModel[] }) {}
}

/**
 * Class that will handle all the http error
 */
export class MinisterQueryError {
  static readonly type = "[MINISTER API] Query Error";
  constructor(public payload: any) {}
}

export class CreateMinister {
  static readonly type = "[MINISTER PAGE] Create";
  constructor(public payload: MinistersModel) {}
}

export class CreateMinisterSuccess {
  static readonly type = "[MINISTER API] Create Success";
}

export class UpdateMinister {
  static readonly type = "[MINISTER PAGE] Update";
  constructor(public payload: MinistersModel) {}
}

export class UpdateSuccess {
  static readonly type = "[MINISTER API] Update Success";
}

export class SelectMinister {
  static readonly type = "[MINISTER PAGE] Select Minister";

  constructor(public payload: number) {}
}
