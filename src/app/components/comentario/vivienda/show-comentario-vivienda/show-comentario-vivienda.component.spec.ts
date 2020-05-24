import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComentarioViviendaComponent } from './show-comentario-vivienda.component';

describe('ShowComentarioViviendaComponent', () => {
  let component: ShowComentarioViviendaComponent;
  let fixture: ComponentFixture<ShowComentarioViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComentarioViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComentarioViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
