import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentHistoryComponent } from './view-payment-history.component';

describe('ViewPaymentHistoryComponent', () => {
  let component: ViewPaymentHistoryComponent;
  let fixture: ComponentFixture<ViewPaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPaymentHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
