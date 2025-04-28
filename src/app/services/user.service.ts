import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private username: string | null = null;
  private studentId: number | null = null;

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string | null {
    return this.username;
  }

  setStudentId(studentId: number) {
    this.studentId = studentId;
  }

  getStudentId(): number | null {
    return this.studentId;
  }
}
