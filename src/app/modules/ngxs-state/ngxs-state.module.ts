import { NgModule } from "@angular/core";

import { NgxsModule } from "@ngxs/store";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";

import { environment } from "@env/environment";

import { AuthState } from "@store/auth";

@NgModule({
  imports: [
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production
    }),

    NgxsStoragePluginModule.forRoot({
      key: "auth"
    }),

    NgxsRouterPluginModule.forRoot(),

    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
      maxAge: 25
    }),

    NgxsLoggerPluginModule.forRoot()
  ]
})
export class NgxsStateModule {}
