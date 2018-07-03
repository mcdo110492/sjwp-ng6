import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveButtonFormComponent } from './save-button-form.component';

describe('SaveButtonFormComponent', () => {
  let component: SaveButtonFormComponent;
  let fixture: ComponentFixture<SaveButtonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveButtonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveButtonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
