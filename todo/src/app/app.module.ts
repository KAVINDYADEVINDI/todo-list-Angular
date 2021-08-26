import { CourseService } from './course/course.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, TodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  //add dependencies
  providers: [CourseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
