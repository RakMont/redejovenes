import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComentarioTrabajoComponent } from './add-comentario-trabajo.component';

describe('AddComentarioTrabajoComponent', () => {
  let component: AddComentarioTrabajoComponent;
  let fixture: ComponentFixture<AddComentarioTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComentarioTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComentarioTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
