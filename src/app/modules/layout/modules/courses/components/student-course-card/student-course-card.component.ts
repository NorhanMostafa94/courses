import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-student-course-card',
  templateUrl: './student-course-card.component.html',
  styleUrls: ['./student-course-card.component.scss']
})
export class StudentCourseCardComponent implements OnInit {

  @Input('course') course: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
