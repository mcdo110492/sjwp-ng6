import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConfirmationRoutingModule } from "./confirmation-routing.module";

import * as fromComponents from "./components";

@NgModule({
  imports: [CommonModule, ConfirmationRoutingModule],
  declarations: [...fromComponents.components]
})
export class ConfirmationModule {}
