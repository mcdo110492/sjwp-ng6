import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistersComponent } from './ministers.component';

describe('MinistersComponent', () => {
  let component: MinistersComponent;
  let fixture: ComponentFixture<MinistersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
