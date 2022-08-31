import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswipOneComponent } from './cswip-one.component';

describe('CswipOneComponent', () => {
  let component: CswipOneComponent;
  let fixture: ComponentFixture<CswipOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswipOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CswipOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
