import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConvenioComponent } from './show-convenio.component';

describe('ShowConvenioComponent', () => {
  let component: ShowConvenioComponent;
  let fixture: ComponentFixture<ShowConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
