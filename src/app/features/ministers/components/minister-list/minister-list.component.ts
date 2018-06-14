import { Component, OnInit, ViewChild } from "@angular/core";

import { MatPaginator } from "@angular/material";
import { MinistersModel } from "@features/ministers/models/ministers.model";
import { Observable, of } from "rxjs";
import { MinisterListDataSource } from "@features/ministers/components/minister-list/minister-list.datasource";
import { Store, Select } from "@ngxs/store";
import { FetchMinisters } from "@features/ministers/store/actions/minister.action";
import { MinisterState } from "@features/ministers/store/state/minister.state";

@Component({
  selector: "app-minister-list",
  templateUrl: "./minister-list.component.html",
  styleUrls: ["./minister-list.component.scss"]
})
export class MinisterListComponent implements OnInit {
  displayedColumns = ["name", "updateActions"];
  dataSource = new MinisterListDataSource(DATA);
  isLoadingResults: boolean = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Select(MinisterState.getEntities) entities$: Observable<MinistersModel[]>;

  constructor(private store: Store) {
    this.store.dispatch(
      new FetchMinisters({
        pageSize: 5,
        pageIndex: 5,
        active: "name",
        direction: "asc"
      })
    );
  }

  ngOnInit() {
    this.entities$.subscribe(res => console.log("Entities:::", res));
  }
}

//This is a sample Data it will be removed after fixing the ui
const MINISTER_DATA: MinistersModel[] = [
  { id: 1, name: "Hydrogen" },
  { id: 2, name: "Helium" },
  { id: 3, name: "Lithium" },
  { id: 4, name: "Beryllium" },
  { id: 5, name: "Boron" }
];

const DATA: Observable<MinistersModel[]> = of(MINISTER_DATA);
