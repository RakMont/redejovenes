import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToViviendaComponent } from './edit-to-vivienda.component';

describe('EditToViviendaComponent', () => {
  let component: EditToViviendaComponent;
  let fixture: ComponentFixture<EditToViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
