import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConvenioComponent } from './add-convenio.component';

describe('AddConvenioComponent', () => {
  let component: AddConvenioComponent;
  let fixture: ComponentFixture<AddConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
