import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowToBecaComponent } from './show-to-beca.component';

describe('ShowToBecaComponent', () => {
  let component: ShowToBecaComponent;
  let fixture: ComponentFixture<ShowToBecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowToBecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowToBecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
