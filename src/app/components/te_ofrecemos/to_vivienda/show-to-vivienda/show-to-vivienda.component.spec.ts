import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowToViviendaComponent } from './show-to-vivienda.component';

describe('ShowToViviendaComponent', () => {
  let component: ShowToViviendaComponent;
  let fixture: ComponentFixture<ShowToViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowToViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowToViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
