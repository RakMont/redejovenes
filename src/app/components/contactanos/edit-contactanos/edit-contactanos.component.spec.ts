import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactanosComponent } from './edit-contactanos.component';

describe('EditContactanosComponent', () => {
  let component: EditContactanosComponent;
  let fixture: ComponentFixture<EditContactanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
