import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowToTrabajoComponent } from './show-to-trabajo.component';

describe('ShowToTrabajoComponent', () => {
  let component: ShowToTrabajoComponent;
  let fixture: ComponentFixture<ShowToTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowToTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowToTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
