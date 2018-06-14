import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from "@angular/router";

import { Observable } from "rxjs";

import { Store } from "@ngxs/store";
import { AuthState } from "@store/auth/state/auth.state";
import { Logout } from "@store/auth/actions/auth.action";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateToken();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.validateToken();
  }

  validateToken(): boolean {
    const token = this.store.selectSnapshot(AuthState.token);
    if (token === null) {
      this.store.dispatch(new Logout());

      return false;
    }
    return true;
  }
}
