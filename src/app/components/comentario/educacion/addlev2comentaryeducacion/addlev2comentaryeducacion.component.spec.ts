import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addlev2comentaryeducacionComponent } from './addlev2comentaryeducacion.component';

describe('Addlev2comentaryeducacionComponent', () => {
  let component: Addlev2comentaryeducacionComponent;
  let fixture: ComponentFixture<Addlev2comentaryeducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addlev2comentaryeducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addlev2comentaryeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
