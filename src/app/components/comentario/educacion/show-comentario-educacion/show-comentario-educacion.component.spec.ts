import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComentarioEducacionComponent } from './show-comentario-educacion.component';

describe('ShowComentarioEducacionComponent', () => {
  let component: ShowComentarioEducacionComponent;
  let fixture: ComponentFixture<ShowComentarioEducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComentarioEducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComentarioEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
