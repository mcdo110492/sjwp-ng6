import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MinistersModel } from "@features/ministers/models/ministers.model";

@Injectable({
  providedIn: "root"
})
export class MinistersService {
  constructor() {}

  fetchData(
    params: any
  ): Observable<{ count: number; data: MinistersModel[] }> {
    const MINISTER_DATA: MinistersModel[] = [
      { id: 1, name: "Hydrogen" },
      { id: 2, name: "Helium" },
      { id: 3, name: "Lithium" },
      { id: 4, name: "Beryllium" },
      { id: 5, name: "Boron" }
    ];

    const data = { count: 5, data: MINISTER_DATA };

    return of(data);
  }
}
