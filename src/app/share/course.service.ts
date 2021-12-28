import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private route: Router) { }

  getAllCourses(page:number,pageSize: number) {
    return this.http.get(
      environment.backendUrl + '/course/' + page + '/' + pageSize
    );
  }
  addCourse(idprof: number, course: any) {
    return this.http.post(
      environment.backendUrl + '/course/' + idprof,
      course
    );
  }

  deleteCourse(idcourse: number) {
    return this.http.delete(
      environment.backendUrl + '/course/' + idcourse
    );
  }

  updateCourse(course: any) {
    return this.http.patch(
      environment.backendUrl + '/course/' ,
      course
    );
  }
}
