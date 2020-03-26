import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSaludComponent } from './show-salud.component';

describe('ShowSaludComponent', () => {
  let component: ShowSaludComponent;
  let fixture: ComponentFixture<ShowSaludComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSaludComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
