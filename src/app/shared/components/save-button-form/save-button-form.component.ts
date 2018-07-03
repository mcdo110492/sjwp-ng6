import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { fadeOutAnim } from "@animation/fade-out.animation";

@Component({
  selector: "app-save-button-form",
  templateUrl: "./save-button-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeOutAnim]
})
export class SaveButtonFormComponent {
  @Input() buttonLabel: string = "Save";
  @Input() color: string = "primary";
  @Input() disabled: boolean = false;
  @Input() isSaving: boolean = false;

  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();
}
