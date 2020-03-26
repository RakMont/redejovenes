import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTrabajoComponent } from './show-trabajo.component';

describe('ShowTrabajoComponent', () => {
  let component: ShowTrabajoComponent;
  let fixture: ComponentFixture<ShowTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
