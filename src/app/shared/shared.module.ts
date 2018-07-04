import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "@material/index";

import * as fromComponents from "./components";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class SharedModule {}
