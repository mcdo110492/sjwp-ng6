import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BaptismComponent } from "@features/baptism/components";

const routes: Routes = [{ path: "", component: BaptismComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaptismRoutingModule {}
