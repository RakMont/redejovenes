import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEducacionComponent } from './show-educacion.component';

describe('ShowEducacionComponent', () => {
  let component: ShowEducacionComponent;
  let fixture: ComponentFixture<ShowEducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
