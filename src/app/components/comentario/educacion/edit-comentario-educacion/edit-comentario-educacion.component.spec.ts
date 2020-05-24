import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComentarioEducacionComponent } from './edit-comentario-educacion.component';

describe('EditComentarioEducacionComponent', () => {
  let component: EditComentarioEducacionComponent;
  let fixture: ComponentFixture<EditComentarioEducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComentarioEducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComentarioEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
