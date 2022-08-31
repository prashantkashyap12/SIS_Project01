import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsntComponent } from './asnt.component';

describe('AsntComponent', () => {
  let component: AsntComponent;
  let fixture: ComponentFixture<AsntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
