import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "@features/login/login.component";

import { AuthGuard } from "@services/guards";

import { PreloadService } from "@services/preload/preload.service";

const mainRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },

  {
    path: "registrar",
    loadChildren: "app/layout/layout.module#LayoutModule",
    data: { preload: true, state: "registrar" }
  },

  { path: "login", component: LoginComponent, data: { state: "login" } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes, { preloadingStrategy: PreloadService })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
