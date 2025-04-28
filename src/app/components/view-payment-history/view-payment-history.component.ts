import { Component, Directive, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  selector: 'app-view-payment-history',
  templateUrl: './view-payment-history.component.html',
  styleUrls: ['./view-payment-history.component.css'],
})
export class ViewPaymentHistoryComponent implements OnInit {
  students: any[] = []; // List of all students
  selectedStudentId: number | null = null; // Store selected student's ID
  transactions: any[] = []; // Store transactions of selected student

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch all students along with their transactions
    this.http
      .get<any[]>('http://localhost:3000/api/with-transactions')
      .subscribe({
        next: (response) => {
          this.students = response;
        },
        error: (err) => {
          console.error('Error fetching students', err);
        },
      });
  }

  // This method is called when a student is clicked
  onStudentClick(studentId: number): void {
    const selectedStudent = this.students.find(
      (student) => student.id === studentId,
    );
    if (selectedStudent) {
      this.selectedStudentId = studentId;
      this.transactions = selectedStudent.transactions; // Load the student's transactions
    }
  }
}
