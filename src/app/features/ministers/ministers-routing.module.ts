import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  MinistersComponent,
  MinisterListComponent,
  MinisterFormComponent
} from "./components";

const routes: Routes = [
  {
    path: "",
    component: MinistersComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "list" },
      { path: "list", component: MinisterListComponent },
      {
        path: "create",
        component: MinisterFormComponent,
        data: { title: "Create New Minister" }
      },
      {
        path: "update/:id",
        component: MinisterFormComponent,
        data: { title: "Update Minister" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinistersRoutingModule {}
