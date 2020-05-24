import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComentarioViviendaComponent } from './add-comentario-vivienda.component';

describe('AddComentarioViviendaComponent', () => {
  let component: AddComentarioViviendaComponent;
  let fixture: ComponentFixture<AddComentarioViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComentarioViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComentarioViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
