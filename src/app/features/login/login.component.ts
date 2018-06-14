import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngxs/store";
import { Login } from "./store/actions/login.action";

import { LoginModel } from "./models/login.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  constructor(private store: Store) {}

  authenticate(credentials: LoginModel) {
    this.store.dispatch(new Login(credentials));
  }
}
