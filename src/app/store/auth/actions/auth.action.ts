import { AuthStateModel } from "./../models/auth.state.model";

export class SetCredentials {
  static readonly type = "[AUTH API] Set Credentials";
  constructor(public payload: AuthStateModel) {}
}

export class Logout {
  static readonly type = "[AUTH API] Logout";
}
