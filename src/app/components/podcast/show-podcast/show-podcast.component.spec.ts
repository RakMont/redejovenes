import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPodcastComponent } from './show-podcast.component';

describe('ShowPodcastComponent', () => {
  let component: ShowPodcastComponent;
  let fixture: ComponentFixture<ShowPodcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPodcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
