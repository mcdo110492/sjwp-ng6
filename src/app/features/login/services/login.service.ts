import { Injectable } from "@angular/core";

import { LoginModel } from "@features/login/models/login.model";

import { Observable, of, throwError } from "rxjs";

@Injectable()
export class LoginService {
  constructor() {}

  authenticate(credentials: LoginModel): Observable<string> {
    const { username, password } = credentials;

    if (username === "john" && password === "doe") {
      return of(username);
    }

    return throwError(new Error("Incorrect Credentials"));
  }
}
