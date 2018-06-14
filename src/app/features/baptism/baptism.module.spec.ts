import { BaptismModule } from './baptism.module';

describe('BaptismModule', () => {
  let baptismModule: BaptismModule;

  beforeEach(() => {
    baptismModule = new BaptismModule();
  });

  it('should create an instance', () => {
    expect(baptismModule).toBeTruthy();
  });
});
