import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  MinistersComponent,
  MinisterListComponent,
  MinistersCreateComponent,
  MinistersUpdateComponent
} from "./components";

const routes: Routes = [
  {
    path: "",
    component: MinistersComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "list" },
      {
        path: "list",
        component: MinisterListComponent,
        data: { state: "list" }
      },
      {
        path: "create",
        component: MinistersCreateComponent,
        data: { state: "create" }
      },
      {
        path: "update/:id",
        component: MinistersUpdateComponent,
        data: { state: "update" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinistersRoutingModule {}
