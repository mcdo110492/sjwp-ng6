import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import {
  MinistersModel,
  MinisterResponseModel
} from "@features/ministers/models/ministers.model";
import { ApiHttpService } from "@services/helpers/api-http/api-http.service";
import { EntitySerializerService } from "@services/helpers/entity-serializer/entity-serializer.service";

@Injectable({
  providedIn: "root"
})
export class MinistersService {
  private url: string = "ministers";

  fetchData(
    params: any,
    stateEntities: any
  ): Observable<{ count: number; data: { [id: number]: MinistersModel } }> {
    return this.api.get<MinisterResponseModel>(this.url, params).pipe(
      map(response => {
        const { count, data } = response;
        const entities = this.serializer.reduceData(data, stateEntities);
        return { count, data: entities };
      })
    );
  }

  constructor(
    private api: ApiHttpService,
    private serializer: EntitySerializerService
  ) {}
}
