import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { FilterCoursePipe } from './pipes/filter-course.pipe';
import { FilterCourseByCategoryPipe } from './pipes/filter-course-by-category.pipe';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { StudentCourseCardComponent } from './components/student-course-card/student-course-card.component';
import { CoursesHeaderComponent } from './components/courses-header/courses-header.component';


@NgModule({
  declarations: [
    CoursesComponent,
    FilterCoursePipe,
    FilterCourseByCategoryPipe,
    CourseCardComponent,
    StudentCourseCardComponent,
    CoursesHeaderComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
