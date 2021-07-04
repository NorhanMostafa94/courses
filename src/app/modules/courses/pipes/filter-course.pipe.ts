import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCourseByDuration'
})
export class FilterCoursePipe implements PipeTransform {

  transform(courses: any[], args: any[]): any[] {
    if (!courses.length) return [];
    if (!args.length) return courses;
    let filteredList = [];
    args.forEach(checbox => {
      if (checbox.id === 1) {
        filteredList = filteredList.concat(courses.filter(course => course.CourseDuration == 2));
      }
      if (checbox.id === 2) {
        filteredList = filteredList.concat(courses.filter(course => (course.CourseDuration >= 2) && (course.CourseDuration <= 10)));
      }
      if (checbox.id === 3) {
        filteredList = filteredList.concat(courses.filter(course => course.CourseDuration > 10));
      }
    });
    return filteredList;
  }

}
