import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceNdtComponent } from './advance-ndt.component';

describe('AdvanceNdtComponent', () => {
  let component: AdvanceNdtComponent;
  let fixture: ComponentFixture<AdvanceNdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceNdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceNdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
