import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCourseByCategory'
})
export class FilterCourseByCategoryPipe implements PipeTransform {

  transform(courses: any[], args: any[]): any[] {
    if (!courses.length) return [];
    if (!args.length) return courses;
    let filteredList = [];
    args.forEach(checbox => {
      if (checbox.id === 1) {
        filteredList = filteredList.concat(courses.filter(course => course.CourseCategory == 'Development'));
      }
      if (checbox.id === 2) {
        filteredList = filteredList.concat(courses.filter(course => course.CourseCategory == 'Math'));
      }
      if (checbox.id === 3) {
        filteredList = filteredList.concat(courses.filter(course => course.CourseCategory == 'IT & Software'));
      }
      if (checbox.id === 4) {
        filteredList = filteredList.concat(courses.filter(course => course.CourseCategory != 'Development' && course.CourseCategory != 'Math' && course.CourseCategory != 'IT & Software'));
      }
    });
    return filteredList;
  }

}
