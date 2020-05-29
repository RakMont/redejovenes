import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmoderatorComponent } from './showmoderator.component';

describe('ShowmoderatorComponent', () => {
  let component: ShowmoderatorComponent;
  let fixture: ComponentFixture<ShowmoderatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmoderatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmoderatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
