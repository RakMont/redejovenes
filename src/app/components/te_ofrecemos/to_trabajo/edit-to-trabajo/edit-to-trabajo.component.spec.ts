import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToTrabajoComponent } from './edit-to-trabajo.component';

describe('EditToTrabajoComponent', () => {
  let component: EditToTrabajoComponent;
  let fixture: ComponentFixture<EditToTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
