import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css'],
})
export class MakeTransactionComponent implements OnInit {
  students: any[] = [];
  transactionForm!: FormGroup;
  selectedStudentId: number | null = null;

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form for adding transaction
    this.transactionForm = this.fb.group({
      title: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
    });

    // Fetch all students from the backend on component initialization
    this.fetchStudents();
  }

  // Fetch students from the backend
  fetchStudents(): void {
    this.http.get('http://localhost:3000/api/get-all-student').subscribe(
      (response: any) => {
        this.students = response.students; // Assuming response contains students array
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }

  // Open the transaction form for the selected student
  openTransactionForm(studentId: number): void {
    this.selectedStudentId = studentId;
  }

 // This will handle the back button
  goBack(): void {
    // Navigating back to the previous route
    this.router.navigate(['/admin']);
  }
  // Submit the transaction form
  submitTransaction(): void {
    if (this.transactionForm.invalid || this.selectedStudentId === null) {
      return;
    }

    const { title, amount } = this.transactionForm.value;
    const transactionData = {
      studentId: this.selectedStudentId,
      title,
      amount,
    };



    // Send POST request to add the transaction
    this.http.post('http://localhost:3000/api/add-transaction', transactionData).subscribe(
      (response) => {
        alert('Transaction added successfully!');
        this.selectedStudentId = null; // Close the form after successful submission
      },
      (error) => {
        console.error('Error adding transaction:', error);
        alert('Failed to add transaction');
      }
    );
  }
}
