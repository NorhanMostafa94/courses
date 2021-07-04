import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { FilterCoursePipe } from './pipes/filter-course.pipe';
import { FilterCourseByCategoryPipe } from './pipes/filter-course-by-category.pipe';
import { CourseCardComponent } from './components/course-card/course-card.component';


@NgModule({
  declarations: [
    CoursesComponent,
    FilterCoursePipe,
    FilterCourseByCategoryPipe,
    CourseCardComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
