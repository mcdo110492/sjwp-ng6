import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BaptismRoutingModule } from "./baptism-routing.module";

import * as fromComponents from "./components";

@NgModule({
  imports: [CommonModule, BaptismRoutingModule],
  declarations: [...fromComponents.components]
})
export class BaptismModule {}
