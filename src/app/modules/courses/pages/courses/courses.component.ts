import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  checkboxList = [
    {
      id: 1,
      name: 'Less than 2 hours',
      checked: false,
    },
    {
      id: 2,
      name: 'From 2 to 10 hours',
      checked: false,
    },
    {
      id: 3,
      name: 'More than 10 hours',
      checked: false,
    }
  ];
  checkedList = [];

  categoryList = [
    {
      id: 1,
      name: 'Development',
      checked: false
    },
    {
      id: 2,
      name: 'Math',
      checked: false
    },
    {
      id: 3,
      name: 'IT & Software',
      checked: false
    },
    {
      id: 4,
      name: 'Other',
      checked: false
    },
  ];
  checkedCategoriesList = [];

  courses: Course[] = [];

  showFilter: boolean;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.getCoursesList();
  }

  /**
   * `getCoursesList()` to get the list of courses
   */
  getCoursesList() {
    this.coursesService.getCourses().subscribe((res: any) => {
      this.courses = res;
    });
  }

  filterCoursesByDuration(checkbox) {
    this.checkedList = this.checkboxList.filter(checkbox => checkbox.checked);
  }

  filterCoursesByCategory(checkbox) {
    this.checkedCategoriesList = this.categoryList.filter(checkbox => checkbox.checked);
  }

  toggleFilter(){
    this.showFilter = !this.showFilter;
  }


}
