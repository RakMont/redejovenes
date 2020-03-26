import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducacionComponent } from './edit-educacion.component';

describe('EditEducacionComponent', () => {
  let component: EditEducacionComponent;
  let fixture: ComponentFixture<EditEducacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEducacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
