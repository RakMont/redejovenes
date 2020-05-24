import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComentarioSaludComponent } from './show-comentario-salud.component';

describe('ShowComentarioSaludComponent', () => {
  let component: ShowComentarioSaludComponent;
  let fixture: ComponentFixture<ShowComentarioSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComentarioSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComentarioSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
