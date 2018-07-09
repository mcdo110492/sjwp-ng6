import { Injectable } from "@angular/core";
import { ApiHttpService } from "@services/helpers/api-http/api-http.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  verifyToken() {
    const url = "verify/token";
    return this.api.get(url);
  }

  constructor(private api: ApiHttpService) {}
}
