import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEventosComponent } from './show-eventos.component';

describe('ShowEventosComponent', () => {
  let component: ShowEventosComponent;
  let fixture: ComponentFixture<ShowEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
