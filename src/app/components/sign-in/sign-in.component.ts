import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(private route: Router, private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signInForm.invalid) {
      return alert('fill all fields');
    }

    const { username, password } = this.signInForm.value;
    console.log(username, password)
    this.http.post('http://localhost:3000/api/sign-in', { username, password })
      .subscribe({

        next: response => {
          console.log('Sign-in successful', response);
        this.route.navigate(['/admin']);
        },
        error: error => {
          console.error('Sign-in failed', error);
        }
      });
  }

  get username() {
    return this.signInForm.get('username');
  }

  get password() {
    return this.signInForm.get('password');
  }
}
