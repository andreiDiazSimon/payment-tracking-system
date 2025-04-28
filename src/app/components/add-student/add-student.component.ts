import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  addStudentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addStudentForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Getter for username form control
  get username() {
    return this.addStudentForm.get('username');
  }

  // Getter for password form control
  get password() {
    return this.addStudentForm.get('password');
  }

  // Method to handle the form submission
  onSave(): void {
    console.log(this.addStudentForm.value);
    if (this.addStudentForm.invalid) {
      alert('Please fill in all fields');
      return;
    }

    const studentData = this.addStudentForm.value;
    this.http
      .post<{
        message: string;
      }>('http://localhost:3000/api/add-student', studentData)
      .subscribe({
        next: (response) => {
          if (response.message === 'Student added successfully') {
            alert('Student added successfully');
          } else {
            alert('Failed to add student');
          }
        },
        error: (err) => {
          alert('Failed to add student');
          console.error(err);
        },
      });
  }
}
