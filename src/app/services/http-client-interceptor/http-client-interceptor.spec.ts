import { HttpClientInterceptorService } from "@services/http-client-interceptor/http-client-interceptor.service";
import { TestBed } from "@angular/core/testing";

describe("Test Http Client Custom Interceptor Service", () => {
  let serviceSpy: jasmine.SpyObj<HttpClientInterceptorService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj("HttpClientInterceptorService", [
      "intercept"
    ]);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClientInterceptorService, useValue: spy }]
    });
  });

  it("#intercept should return custom header value from spy", () => {
    serviceSpy = TestBed.get(HttpClientInterceptorService);
    const customHeader = { headers: { Authorization: `Bearer jwtToken` } };

    serviceSpy.intercept.and.returnValue(customHeader);

    expect(serviceSpy.intercept()).toBe(customHeader);
  });
});
