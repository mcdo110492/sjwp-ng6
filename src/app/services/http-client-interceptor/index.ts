import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HttpClientInterceptorService } from "./http-client-interceptor.service";

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpClientInterceptorService,
    multi: true
  }
];
