
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { TodoComponent } from './todo/todo.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  //add dependencies
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
