import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  username: string | null = null;
  transactions: any[] = []; // Store the transactions
  studentId: number | null = null;

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Get the username and studentId from the UserService
    this.username = this.userService.getUsername();
    this.studentId = this.userService.getStudentId();  // Assuming you saved the studentId in the UserService too

    if (this.studentId) {
      this.fetchTransactions(this.studentId);
    }
  }

  // Method to fetch transactions
  fetchTransactions(studentId: number): void {
    this.http.get<any[]>(`http://localhost:3000/api/student/${studentId}`)
      .subscribe({
        next: (data) => {
          this.transactions = data;
        },
        error: (err) => {
          console.error('Failed to fetch transactions:', err);
        },
      });
  }
}
