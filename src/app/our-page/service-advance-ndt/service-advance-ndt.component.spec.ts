import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAdvanceNdtComponent } from './service-advance-ndt.component';

describe('ServiceAdvanceNdtComponent', () => {
  let component: ServiceAdvanceNdtComponent;
  let fixture: ComponentFixture<ServiceAdvanceNdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAdvanceNdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAdvanceNdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
