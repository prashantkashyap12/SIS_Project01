import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswipTwoComponent } from './cswip-two.component';

describe('CswipTwoComponent', () => {
  let component: CswipTwoComponent;
  let fixture: ComponentFixture<CswipTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswipTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CswipTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
