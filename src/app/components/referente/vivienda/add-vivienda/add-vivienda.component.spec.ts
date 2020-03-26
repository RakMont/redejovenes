import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddViviendaComponent } from './add-vivienda.component';

describe('AddViviendaComponent', () => {
  let component: AddViviendaComponent;
  let fixture: ComponentFixture<AddViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
