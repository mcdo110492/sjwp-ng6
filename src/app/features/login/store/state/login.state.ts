import { State, Selector, Action, StateContext } from "@ngxs/store";

import { Navigate } from "@ngxs/router-plugin";

import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { LoginStateModel } from "./../../models/login.state.model";
import { Login, LoginSuccess, LoginFailed } from "./../actions/login.action";
import { LoginService } from "./../../services/login.service";
import { SetCredentials } from "@store/auth/actions/auth.action";

const DEFAULT_STATES: LoginStateModel = {
  isLoading: false
};

@State<LoginStateModel>({
  name: "login",
  defaults: DEFAULT_STATES
})
export class LoginState {
  constructor(private service: LoginService) {}

  @Selector()
  static isLoading(state: LoginStateModel) {
    return state.isLoading;
  }

  @Action(Login)
  login(ctx: StateContext<LoginStateModel>, action: Login) {
    ctx.patchState({ isLoading: true });
    return this.service.authenticate(action.payload).pipe(
      map(username =>
        ctx.dispatch(
          new LoginSuccess({
            username,
            token: "jwtToken",
            role: 1,
            name: "John Doe"
          })
        )
      ),
      catchError(err => of(ctx.dispatch(new LoginFailed(err))))
    );
  }

  @Action(LoginSuccess)
  loginSuccess(ctx: StateContext<LoginStateModel>, action: LoginSuccess) {
    ctx.dispatch(new SetCredentials(action.payload));
    ctx.patchState({ isLoading: false });
  }

  @Action(LoginFailed)
  loginFailed(ctx: StateContext<LoginStateModel>, action: LoginFailed) {
    console.log(action.payload.message);
    ctx.patchState({ isLoading: false });
  }
}
