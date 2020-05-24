import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComentarioTrabajoComponent } from './edit-comentario-trabajo.component';

describe('EditComentarioTrabajoComponent', () => {
  let component: EditComentarioTrabajoComponent;
  let fixture: ComponentFixture<EditComentarioTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComentarioTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComentarioTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
