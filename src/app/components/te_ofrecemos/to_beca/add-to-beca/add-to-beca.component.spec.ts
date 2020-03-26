import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToBecaComponent } from './add-to-beca.component';

describe('AddToBecaComponent', () => {
  let component: AddToBecaComponent;
  let fixture: ComponentFixture<AddToBecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToBecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToBecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
