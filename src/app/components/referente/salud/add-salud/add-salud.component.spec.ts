import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSaludComponent } from './add-salud.component';

describe('AddSaludComponent', () => {
  let component: AddSaludComponent;
  let fixture: ComponentFixture<AddSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
