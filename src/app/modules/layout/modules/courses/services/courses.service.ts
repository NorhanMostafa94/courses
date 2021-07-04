import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get('assets/json/courses.json').pipe(map(res => res));
  }

  getCourse(coursId) {
    return this.http.get('assets/json/courses.json').pipe(map((courses: Course[]) => courses.filter(course => course.CourseId == coursId)));
  }

  getStudentCourses(studentId, coursesList) {
    // let courses;
    // courses = this.http.get('assets/json/courses.json').pipe(map(res => res));
    // let requests;
    // requests = this.http.get('assets/json/requests.json').pipe(map((requests: any[]) => requests.filter(request => request.StudentId == studentId)));
    // let studentCourses = requests.courses.filter((course, index) => {
    //   if (course.CourseId == courses[index].CourseId) {
    //     return courses[index]
    //   }
    // });
    return this.http.get('assets/json/requests.json').pipe(map((requests: any[]) => {
      let courses = [];
      requests =  requests.filter((request, index) => {
        if (request.StudentId == studentId) {
          request.Courses.filter((requestCourse, index) => {
            coursesList.filter(course => {
              if (requestCourse.CourseId == course.CourseId) {
                courses.push(course)
              }
            })
          });
        }
      })
      return courses;
    }
    ))
    // return studentCourses;
  }

  addCourse(course) {
    return this.http.post('assets/json/courses.json', course).pipe(map(res => res));
  }

  editCourseSeats(courseId, availableSeats) {

    return this.http.get('assets/json/courses.json').pipe(map((courses: Course[]) => courses.map(course => {
      if (course.CourseId == courseId) {
        course.AvailableSeats = availableSeats;
      }
    })));
  }

}
