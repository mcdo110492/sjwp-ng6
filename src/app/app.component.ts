import { Component, ChangeDetectionStrategy } from "@angular/core";
import { slideUpAnim } from "@animation/slide-up.animation";

@Component({
  selector: "app-root",
  template: `
  <div [@slideUpAnim]="getState(o)" class="main-router-outlet">
  <router-outlet #o="outlet" ></router-outlet>
  </div>
  `,
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideUpAnim]
})
export class AppComponent {
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
