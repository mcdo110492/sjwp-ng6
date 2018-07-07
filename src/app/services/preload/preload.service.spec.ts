import { PreloadService } from "@services/preload/preload.service";
import { TestBed } from "@angular/core/testing";
import { Route } from "@angular/router";

describe("Test Preload Service", () => {
  let service: PreloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreloadService]
    });
  });

  let load: Function;

  it('should return null if the route data "preload" is false from observable', (done: DoneFn) => {
    service = TestBed.get(PreloadService);
    const data: Route = { data: { preload: false } };
    service.preload(data, load).subscribe(value => {
      expect(value).toBeNull();
      done();
    });
  });
});
