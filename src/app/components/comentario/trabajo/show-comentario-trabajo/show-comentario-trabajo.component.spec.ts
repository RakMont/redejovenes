import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComentarioTrabajoComponent } from './show-comentario-trabajo.component';

describe('ShowComentarioTrabajoComponent', () => {
  let component: ShowComentarioTrabajoComponent;
  let fixture: ComponentFixture<ShowComentarioTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComentarioTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComentarioTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
