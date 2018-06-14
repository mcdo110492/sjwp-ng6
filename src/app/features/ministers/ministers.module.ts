import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "@material/index";
import { SharedModule } from "@shared/shared.module";

import { NgxsModule } from "@ngxs/store";
import { MinisterState } from "@features/ministers/store/state/minister.state";

import { MinistersRoutingModule } from "./ministers-routing.module";

import * as fromComponents from "./components";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MinistersRoutingModule,
    MaterialModule,
    SharedModule,
    NgxsModule.forFeature([MinisterState])
  ],
  declarations: [...fromComponents.components]
})
export class MinistersModule {}
