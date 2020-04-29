import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTemaComponent } from './show-tema.component';

describe('ShowTemaComponent', () => {
  let component: ShowTemaComponent;
  let fixture: ComponentFixture<ShowTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
