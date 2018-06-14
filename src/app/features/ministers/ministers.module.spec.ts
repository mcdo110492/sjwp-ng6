import { MinistersModule } from './ministers.module';

describe('MinistersModule', () => {
  let ministersModule: MinistersModule;

  beforeEach(() => {
    ministersModule = new MinistersModule();
  });

  it('should create an instance', () => {
    expect(ministersModule).toBeTruthy();
  });
});
