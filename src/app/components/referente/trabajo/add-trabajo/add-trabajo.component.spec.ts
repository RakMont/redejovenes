import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrabajoComponent } from './add-trabajo.component';

describe('AddTrabajoComponent', () => {
  let component: AddTrabajoComponent;
  let fixture: ComponentFixture<AddTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
