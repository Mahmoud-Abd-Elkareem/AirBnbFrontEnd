import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayConfirmComponent } from './pay-confirm.component';

describe('PayConfirmComponent', () => {
  let component: PayConfirmComponent;
  let fixture: ComponentFixture<PayConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
