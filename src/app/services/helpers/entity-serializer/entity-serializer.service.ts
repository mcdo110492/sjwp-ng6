import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EntitySerializerService {
  /**
   * Reduce the data array to entites with index of an id
   * @param dataArray
   * @param stateEntities
   */
  reduceData(dataArray: any[], stateEntities: any): { [id: number]: any } {
    const entities = dataArray.reduce(
      (entities: { [id: number]: any }, data: any) => {
        return { ...entities, [data.id]: data };
      },
      {
        ...stateEntities
      }
    );

    return entities;
  }
}
