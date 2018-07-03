import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistersCreateComponent } from './ministers-create.component';

describe('MinistersCreateComponent', () => {
  let component: MinistersCreateComponent;
  let fixture: ComponentFixture<MinistersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
