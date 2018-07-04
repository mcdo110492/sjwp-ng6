import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "@material/index";

import * as fromComponents from "./components";
import * as fromDirectives from "./directives";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  declarations: [...fromComponents.components, ...fromDirectives.directives],
  exports: [...fromComponents.components, ...fromDirectives.directives]
})
export class SharedModule {}
