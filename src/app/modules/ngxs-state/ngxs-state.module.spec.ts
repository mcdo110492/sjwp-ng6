import { NgxsStateModule } from './ngxs-state.module';

describe('NgxsStateModule', () => {
  let ngxsStateModule: NgxsStateModule;

  beforeEach(() => {
    ngxsStateModule = new NgxsStateModule();
  });

  it('should create an instance', () => {
    expect(ngxsStateModule).toBeTruthy();
  });
});
