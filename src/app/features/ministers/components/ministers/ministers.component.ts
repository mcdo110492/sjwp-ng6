import { Component, ChangeDetectionStrategy } from "@angular/core";

import { fadeInOut } from "@animation/fade-in-out.animation";

@Component({
  selector: "app-ministers",
  templateUrl: "./ministers.component.html",
  styleUrls: ["./ministers.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
export class MinistersComponent {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
