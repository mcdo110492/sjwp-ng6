import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy
} from "@angular/core";

import { MatPaginator, MatSort } from "@angular/material";
import { MinistersModel } from "@features/ministers/models/ministers.model";
import { Observable } from "rxjs";
import { MinisterListDataSource } from "@features/ministers/components/minister-list/minister-list.datasource";
import { Store, Select } from "@ngxs/store";
import {
  FetchMinisters,
  SearchMinisters,
  SelectMinister,
  ChangeMinisterStatus
} from "@features/ministers/store/actions/minister.action";
import { MinisterState } from "@features/ministers/store/state/minister.state";
import { Navigate } from "@ngxs/router-plugin";

@Component({
  selector: "app-minister-list",
  templateUrl: "./minister-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MinisterListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Select(MinisterState.getEntities) entities$: Observable<MinistersModel[]>;
  @Select(MinisterState.isLoading) isLoadingResults$: Observable<boolean>;
  @Select(MinisterState.tableEvent)
  tableEvent$: Observable<{ pageEvent; sort }>;

  displayedColumns = ["name", "status", "updateActions"];
  pageSizeOptions = [5, 10, 25, 50, 100];
  dataSource = new MinisterListDataSource(this.entities$);

  ngOnInit() {
    this.store.dispatch(
      new FetchMinisters({
        pageSize: 5,
        pageIndex: 0,
        active: "name",
        direction: "asc"
      })
    );
  }

  fetchData() {
    const { pageSize, pageIndex } = this.paginator;
    const { active, direction } = this.sort;
    this.store.dispatch(
      new FetchMinisters({
        pageSize,
        pageIndex,
        active,
        direction
      })
    );
  }

  search(filter: string) {
    this.store.dispatch(new SearchMinisters(filter));
  }

  update(id: number) {
    this.store.dispatch(new SelectMinister(id));
    this.store.dispatch(new Navigate([`/registrar/ministers/update/${id}`]));
  }

  changeStatus(id: number, status: number) {
    this.store.dispatch(new ChangeMinisterStatus({ id, status }));
  }

  constructor(private store: Store) {}
}
