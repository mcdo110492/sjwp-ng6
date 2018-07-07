import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

import { Observable } from "rxjs";
import { Store } from "@ngxs/store";

import { AuthState } from "@store/auth/state/auth.state";

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpClientInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //Get the jwt token in the state
    const token = this.store.selectSnapshot(AuthState.token);

    //Append the token to the Authorization Bearer headers
    const authRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });

    //Pass the request header to be added to the next request handler
    return next.handle(authRequest);
  }

  constructor(private store: Store) {}
}
