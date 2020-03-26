import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactanosComponent } from './add-contactanos.component';

describe('AddContactanosComponent', () => {
  let component: AddContactanosComponent;
  let fixture: ComponentFixture<AddContactanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
