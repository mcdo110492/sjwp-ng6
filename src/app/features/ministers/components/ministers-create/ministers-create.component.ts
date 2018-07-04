import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Store } from "@ngxs/store";
import { MinistersModel } from "@features/ministers/models/ministers.model";
import { CreateMinister } from "@features/ministers/store/actions/minister.action";

@Component({
  selector: "app-ministers-create",
  templateUrl: "./ministers-create.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinistersCreateComponent {
  titlePage: string = "Create New Minister";
  buttonLabel: string = "Create New Minister";
  submitForm(formData: MinistersModel) {
    this.store.dispatch(new CreateMinister(formData));
  }

  constructor(private store: Store) {}
}
