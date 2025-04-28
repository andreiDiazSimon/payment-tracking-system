import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router: Router) {}

  navigateToAddStudent(): void {
    this.router.navigate(['/add-student']);
  }

  navigateToViewPaymentHistory(): void {
    this.router.navigate(['/view-payment-history']);
  }

  navigateToMakeTransaction(): void {
    this.router.navigate(['/make-transaction']);
  }
}
