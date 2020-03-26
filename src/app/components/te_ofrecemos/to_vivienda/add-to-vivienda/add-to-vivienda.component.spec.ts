import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToViviendaComponent } from './add-to-vivienda.component';

describe('AddToViviendaComponent', () => {
  let component: AddToViviendaComponent;
  let fixture: ComponentFixture<AddToViviendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToViviendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
