import { State, Selector, Action, StateContext } from "@ngxs/store";

import { Navigate } from "@ngxs/router-plugin";

import { AuthStateModel } from "../models/auth.state.model";
import { SetCredentials, Logout } from "../actions/auth.action";

const DEFAULT_STATES: AuthStateModel = {
  username: null,
  role: null,
  name: null,
  token: null
};

@State<AuthStateModel>({
  name: "auth",
  defaults: DEFAULT_STATES
})
export class AuthState {
  @Selector()
  static profileName(state: AuthStateModel) {
    return state.name;
  }

  @Selector()
  static role(state: AuthStateModel) {
    return state.role;
  }

  @Selector()
  static token(state: AuthStateModel) {
    return state.token;
  }

  @Action(SetCredentials)
  setCredentials(
    { patchState, dispatch }: StateContext<AuthStateModel>,
    { payload: { username, role, name, token } }: SetCredentials
  ) {
    patchState({ username, role, name, token });
    return dispatch(new Navigate(["/registrar"]));
  }

  @Action(Logout)
  logout({ patchState, dispatch }: StateContext<AuthStateModel>) {
    const { username, role, name, token } = DEFAULT_STATES;
    patchState({ username, role, name, token });
    return dispatch(new Navigate(["/login"]));
  }
}
