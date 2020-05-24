import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComentarioComponent } from './show-comentario.component';

describe('ShowComentarioComponent', () => {
  let component: ShowComentarioComponent;
  let fixture: ComponentFixture<ShowComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
