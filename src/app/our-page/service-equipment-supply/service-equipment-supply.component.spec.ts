import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEquipmentSupplyComponent } from './service-equipment-supply.component';

describe('ServiceEquipmentSupplyComponent', () => {
  let component: ServiceEquipmentSupplyComponent;
  let fixture: ComponentFixture<ServiceEquipmentSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceEquipmentSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEquipmentSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
