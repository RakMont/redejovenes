import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomentarioComponent } from './addcomentario.component';

describe('AddcomentarioComponent', () => {
  let component: AddcomentarioComponent;
  let fixture: ComponentFixture<AddcomentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcomentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
