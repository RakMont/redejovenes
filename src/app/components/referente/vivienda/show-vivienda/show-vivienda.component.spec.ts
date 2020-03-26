import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViviendaComponent } from './show-vivienda.component';

describe('ShowViviendaComponent', () => {
  let component: ShowViviendaComponent;
  let fixture: ComponentFixture<ShowViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
