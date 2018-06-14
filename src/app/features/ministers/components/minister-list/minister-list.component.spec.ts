import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisterListComponent } from './minister-list.component';

describe('MinisterListComponent', () => {
  let component: MinisterListComponent;
  let fixture: ComponentFixture<MinisterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
