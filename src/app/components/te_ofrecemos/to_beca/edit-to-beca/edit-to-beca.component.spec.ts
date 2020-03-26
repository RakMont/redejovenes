import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToBecaComponent } from './edit-to-beca.component';

describe('EditToBecaComponent', () => {
  let component: EditToBecaComponent;
  let fixture: ComponentFixture<EditToBecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToBecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToBecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
