import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { SidenavModel, superAdmin } from "./sidenav.metadata";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  links: SidenavModel[];
  constructor() {}

  ngOnInit() {
    this.links = superAdmin;
  }
}
