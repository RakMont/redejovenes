import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComentarioSaludComponent } from './edit-comentario-salud.component';

describe('EditComentarioSaludComponent', () => {
  let component: EditComentarioSaludComponent;
  let fixture: ComponentFixture<EditComentarioSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComentarioSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComentarioSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
