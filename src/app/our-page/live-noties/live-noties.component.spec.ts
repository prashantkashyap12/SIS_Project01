import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveNotiesComponent } from './live-noties.component';

describe('LiveNotiesComponent', () => {
  let component: LiveNotiesComponent;
  let fixture: ComponentFixture<LiveNotiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveNotiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveNotiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
