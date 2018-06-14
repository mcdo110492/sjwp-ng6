import { LoginModel } from "@features/login/models/login.model";
import { AuthStateModel } from "@store/auth/models/auth.state.model";

export class Login {
  static readonly type = "[LOGIN PAGE] Login";
  constructor(public payload: LoginModel) {}
}

export class LoginSuccess {
  static readonly type = "[LOGIN API] Login Success";
  constructor(public payload: AuthStateModel) {}
}

export class LoginFailed {
  static readonly type = "[LOGIN API] Login Failed";
  constructor(public payload: any) {}
}
