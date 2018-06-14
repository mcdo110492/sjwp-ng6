import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContainerComponent } from "./container/container.component";
import { AuthGuard } from "@services/guards";

const containerChildrenRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "ministers" },
  {
    path: "ministers",
    loadChildren: "app/features/ministers/ministers.module#MinistersModule"
  },
  {
    path: "baptism",
    loadChildren: "app/features/baptism/baptism.module#BaptismModule"
  },
  {
    path: "confirmation",
    loadChildren:
      "app/features/confirmation/confirmation.module#ConfirmationModule"
  }
];

const mainRoutes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    canActivateChild: [AuthGuard],
    children: containerChildrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
