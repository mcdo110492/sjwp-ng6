import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-minister-form",
  templateUrl: "./minister-form.component.html",
  styleUrls: ["./minister-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinisterFormComponent implements OnInit {
  titlePage: string = "Create New Minister";
  ministerForm: FormGroup;

  ngOnInit() {
    this.createForm();
    this.titlePage = this.route.snapshot.data.title;
  }

  createForm() {
    this.ministerForm = this.fb.group({
      id: [0, Validators.required],
      name: [null, [Validators.required, Validators.max(150)]]
    });
  }

  public get nameRequired(): boolean {
    return this.ministerForm.get("name").hasError("required");
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}
}
