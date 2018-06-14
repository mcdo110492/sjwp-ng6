import {
  Component,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Select } from "@ngxs/store";
import { Observable } from "rxjs";

import { LoginModel } from "../../models";
import { LoginState } from "@features/login/store/state/login.state";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @Output()
  authenticate: EventEmitter<LoginModel> = new EventEmitter<LoginModel>();

  @Select(LoginState.isLoading) isLoading$: Observable<boolean>;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  login() {
    this.authenticate.emit(this.loginForm.value);
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
