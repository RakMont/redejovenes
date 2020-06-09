import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileasadminComponent } from './editprofileasadmin.component';

describe('EditprofileasadminComponent', () => {
  let component: EditprofileasadminComponent;
  let fixture: ComponentFixture<EditprofileasadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileasadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofileasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
