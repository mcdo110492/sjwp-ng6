import { HttpClientInterceptorService } from "@services/http-client-interceptor/http-client-interceptor.service";
import { TestBed, inject } from "@angular/core/testing";
import { Store, NgxsModule } from "@ngxs/store";
import { AuthState } from "@store/auth";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { AuthStateModel } from "@store/auth/models/auth.state.model";
import { SetCredentials } from "@store/auth/actions/auth.action";

describe("Test Http Client Custom Interceptor Service", () => {
  let httpMock: HttpTestingController;
  let http: HttpClient;
  let store: Store;

  let state: AuthStateModel;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthState]), HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpClientInterceptorService,
          multi: true
        }
      ]
    });
  });

  beforeEach(inject(
    [Store, HttpTestingController, HttpClient],
    (_store, _httpMock, _http) => {
      store = _store;
      httpMock = _httpMock;
      http = _http;

      state = {
        username: "Test Mock Username",
        role: 1,
        name: "Test Mock Name",
        token: "Test Mock JWT TOKEN"
      };

      //Set the credentials of the state by dispatching ang action
      store.dispatch(new SetCredentials(state));
    }
  ));

  it("should have an Authorization header with a token from the state", () => {
    http.get("/data").subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(
      r =>
        r.headers.has("Authorization") &&
        r.headers.get("Authorization") === `Bearer ${state.token}`
    );

    expect(req.request.method).toEqual("GET");

    req.flush({ test: true });

    httpMock.verify();
  });
});
