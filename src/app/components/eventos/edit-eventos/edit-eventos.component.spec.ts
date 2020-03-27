import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventosComponent } from './edit-eventos.component';

describe('EditEventosComponent', () => {
  let component: EditEventosComponent;
  let fixture: ComponentFixture<EditEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
