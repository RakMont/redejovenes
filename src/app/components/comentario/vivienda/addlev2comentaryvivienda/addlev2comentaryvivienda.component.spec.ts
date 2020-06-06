import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addlev2comentaryviviendaComponent } from './addlev2comentaryvivienda.component';

describe('Addlev2comentaryviviendaComponent', () => {
  let component: Addlev2comentaryviviendaComponent;
  let fixture: ComponentFixture<Addlev2comentaryviviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addlev2comentaryviviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addlev2comentaryviviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
