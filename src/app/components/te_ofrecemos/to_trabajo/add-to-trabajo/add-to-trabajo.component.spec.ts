import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTrabajoComponent } from './add-to-trabajo.component';

describe('AddToTrabajoComponent', () => {
  let component: AddToTrabajoComponent;
  let fixture: ComponentFixture<AddToTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
