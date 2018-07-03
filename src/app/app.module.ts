import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { NgxsStateModule } from "@ngxs-state-module/index";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//Http Client Interceptor Service
import { httpInterceptorProviders } from "@services/http-client-interceptor";

//Feature for Login
import { LoginModule } from "@features/login/login.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    NgxsStateModule,

    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      newestOnTop: true,
      progressBar: true,
      progressAnimation: "increasing",
      onActivateTick: true
    }),

    LoginModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
