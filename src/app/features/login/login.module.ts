import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "@material/index";

import { LoginRoutingModule } from "./login-routing.module";

import { LoginComponent } from "./login.component";

import * as fromComponents from "./components";

import { NgxsModule } from "@ngxs/store";
import { LoginState } from "./store/state/login.state";

import { LoginService } from "./services/login.service";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxsModule.forFeature([LoginState])
  ],
  declarations: [LoginComponent, ...fromComponents.components],
  exports: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {}
