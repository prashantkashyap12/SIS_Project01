import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgasComponent } from './bgas.component';

describe('BgasComponent', () => {
  let component: BgasComponent;
  let fixture: ComponentFixture<BgasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
