import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Student } from '../classes/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, private route: Router) { }

  getStudent(login: string) {
    return this.http.get(
      environment.backendUrl + '/student/getinfo/' + login
    );
  }

  getAllStudents(page: number,pageSize: number) {
    return this.http.get(
      environment.backendUrl + '/student/' + page + '/' + pageSize
    );
  }

  activeStudent(id: number, active: boolean) {
    return this.http.get(
      environment.backendUrl+ '/student/' + id + '/' + active
    );
  }

  deleteStudent(id:number) {
    return this.http.delete(
      environment.backendUrl+ '/student/' + id
    );
  }

  updateStudent(student:Student) {
    return this.http.put(
      environment.backendUrl + '/student/',
      student
    );
  }

  getInfoStudent(id: number) {
    return this.http.get(
      environment.backendUrl + '/student/getinfo/' + id
    );
  }
}
