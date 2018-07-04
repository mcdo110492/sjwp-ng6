import { Injectable } from "@angular/core";

import { GenerateHashIdService } from "@services/helpers/generate-hash-id/generate-hash-id.service";

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
        //Generate hash ID base on the unique id of the data that will be use to uniquely identify the entity
        const hash = this.generate.generateHash(data.id);
        const newData = { ...data, hash };
        return { ...entities, [hash]: newData };
      },
      {
        ...stateEntities
      }
    );

    return entities;
  }

  constructor(private generate: GenerateHashIdService) {}
}
