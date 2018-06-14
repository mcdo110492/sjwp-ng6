import { DataSource } from "@angular/cdk/table";
import { MinistersModel } from "@features/ministers/models/ministers.model";
import { Observable } from "rxjs";

export class MinisterListDataSource extends DataSource<MinistersModel> {
  connect(): Observable<MinistersModel[]> {
    return this.collections$;
  }

  disconnect(): void {}

  constructor(private collections$: Observable<MinistersModel[]>) {
    super();
  }
}
