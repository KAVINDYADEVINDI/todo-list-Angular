import { CourseService } from './course/course.service';
import { Component } from '@angular/core';
//html markup- template
@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
          {{course}}
      </li>
    </ul>
  `,
})
export class CourseComponent {
  title = 'List of Courses';
  courses;

  //dependency injection --add dependency  class in the constructor
  //then after we put parameter in constructor we want to register module in app.module.ts
  constructor(service:CourseService){
      //this new keyword is thightly coupled so we put inside of constructor as parameter like above
     // let service=new CourseService();
      this.courses=service.getCourses();
  }
}
