import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceConventionalNdtComponent } from './service-conventional-ndt.component';

describe('ServiceConventionalNdtComponent', () => {
  let component: ServiceConventionalNdtComponent;
  let fixture: ComponentFixture<ServiceConventionalNdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceConventionalNdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceConventionalNdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
