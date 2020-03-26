import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContactanosComponent } from './show-contactanos.component';

describe('ShowContactanosComponent', () => {
  let component: ShowContactanosComponent;
  let fixture: ComponentFixture<ShowContactanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowContactanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
