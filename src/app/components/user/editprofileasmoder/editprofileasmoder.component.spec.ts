import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileasmoderComponent } from './editprofileasmoder.component';

describe('EditprofileasmoderComponent', () => {
  let component: EditprofileasmoderComponent;
  let fixture: ComponentFixture<EditprofileasmoderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileasmoderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileasmoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
