import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GenerateHashIdService {
  generateHash(id: number) {
    const generateHashID = Math.floor(
      (id + Math.random()) * 0x9999999999
    ).toString(16);

    return generateHashID;
  }
}
