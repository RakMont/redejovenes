import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComentarioSaludComponent } from './add-comentario-salud.component';

describe('AddComentarioSaludComponent', () => {
  let component: AddComentarioSaludComponent;
  let fixture: ComponentFixture<AddComentarioSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComentarioSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComentarioSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
