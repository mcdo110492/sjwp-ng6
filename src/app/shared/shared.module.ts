import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "@material/index";

import * as fromComponents from "./components";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components]
})
export class SharedModule {}