import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addlev2comentarytrabajoComponent } from './addlev2comentarytrabajo.component';

describe('Addlev2comentarytrabajoComponent', () => {
  let component: Addlev2comentarytrabajoComponent;
  let fixture: ComponentFixture<Addlev2comentarytrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addlev2comentarytrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addlev2comentarytrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
