import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComentarioViviendaComponent } from './edit-comentario-vivienda.component';

describe('EditComentarioViviendaComponent', () => {
  let component: EditComentarioViviendaComponent;
  let fixture: ComponentFixture<EditComentarioViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComentarioViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComentarioViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
