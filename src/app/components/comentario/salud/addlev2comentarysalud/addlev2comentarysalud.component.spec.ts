import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addlev2comentarysaludComponent } from './addlev2comentarysalud.component';

describe('Addlev2comentarysaludComponent', () => {
  let component: Addlev2comentarysaludComponent;
  let fixture: ComponentFixture<Addlev2comentarysaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addlev2comentarysaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addlev2comentarysaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
