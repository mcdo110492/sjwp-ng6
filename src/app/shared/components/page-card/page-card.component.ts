import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-page-card",
  templateUrl: "./page-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCardComponent {
  @Input() back: boolean = false;
  @Input() backColor: string = "accent";
  @Input() link: string;
  @Input() toolbarColor: string = "primary";
}
