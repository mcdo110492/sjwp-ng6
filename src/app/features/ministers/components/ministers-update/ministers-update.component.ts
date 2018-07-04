import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { MinistersModel } from "@features/ministers/models/ministers.model";
import { Store, Select } from "@ngxs/store";
import { UpdateMinister } from "@features/ministers/store/actions/minister.action";
import { MinisterState } from "@features/ministers/store/state/minister.state";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { Navigate } from "@ngxs/router-plugin";

@Component({
  selector: "app-ministers-update",
  templateUrl: "./ministers-update.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinistersUpdateComponent implements OnInit {
  @Select(MinisterState.selectedEntityData)
  selectedData: Observable<MinistersModel>;

  titlePage: string = "Update Minister";
  buttonLabel: string = "Save Changes";
  isUpdate: boolean = true;

  submitForm(data: MinistersModel) {
    this.store.dispatch(new UpdateMinister(data));
  }

  //Check if the selected data is in store otherwise go back to data list
  checkDataInStore() {
    this.selectedData.pipe(take(1)).subscribe(data => {
      if (data === undefined) {
        this.store.dispatch(new Navigate(["/registrar/ministers/list"]));
      }
    });
  }

  ngOnInit() {
    this.checkDataInStore();
  }

  constructor(private store: Store) {}
}
