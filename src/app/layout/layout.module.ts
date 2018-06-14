import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";

import { MaterialModule } from "@material/index";

import { ContainerComponent } from "./container/container.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@NgModule({
  imports: [CommonModule, LayoutRoutingModule, MaterialModule],
  declarations: [ContainerComponent, SidenavComponent, ToolbarComponent]
})
export class LayoutModule {}
