import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistersUpdateComponent } from './ministers-update.component';

describe('MinistersUpdateComponent', () => {
  let component: MinistersUpdateComponent;
  let fixture: ComponentFixture<MinistersUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistersUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
