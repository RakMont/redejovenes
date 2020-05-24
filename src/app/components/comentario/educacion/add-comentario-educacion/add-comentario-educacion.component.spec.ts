import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComentarioEducacionComponent } from './add-comentario-educacion.component';

describe('AddComentarioEducacionComponent', () => {
  let component: AddComentarioEducacionComponent;
  let fixture: ComponentFixture<AddComentarioEducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComentarioEducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComentarioEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
