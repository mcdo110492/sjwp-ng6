import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { MinistersModel } from "@features/ministers/models/ministers.model";

import { Select } from "@ngxs/store";
import { MinisterState } from "@features/ministers/store/state/minister.state";
import { Observable } from "rxjs";

import { fadeOutAnim } from "@animation/fade-out.animation";

@Component({
  selector: "app-minister-form",
  templateUrl: "./minister-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeOutAnim]
})
export class MinisterFormComponent implements OnInit {
  @Input() titlePage: string;
  @Input() isUpdate: boolean = false;
  @Input() selectedData: MinistersModel;
  @Input() buttonLabel: string;

  @Output()
  submitForm: EventEmitter<MinistersModel> = new EventEmitter<MinistersModel>();

  @Select(MinisterState.isSaving) isSaving$: Observable<boolean>;

  ministerForm: FormGroup;

  ngOnInit() {
    this.createForm();
    this.checkisUpdate();
  }

  createForm() {
    this.ministerForm = this.fb.group({
      id: [0, Validators.required],
      name: [null, [Validators.required, Validators.max(150)]],
      active: [0]
    });
  }

  get nameRequired(): boolean {
    return this.ministerForm.get("name").hasError("required");
  }

  get nameIsUnique(): boolean {
    return this.ministerForm.get("name").hasError("uniqueTaken");
  }

  get ministerId(): number {
    return this.ministerForm.get("id").value;
  }

  checkisUpdate() {
    if (this.isUpdate && this.selectedData !== undefined) {
      const { id, name, active } = this.selectedData;
      this.ministerForm.patchValue({ id, name, active });
    }
  }

  submit() {
    this.submitForm.emit(this.ministerForm.value);
  }

  constructor(private fb: FormBuilder) {}
}
