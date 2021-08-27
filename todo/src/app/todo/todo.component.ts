import { TodoService } from './shared/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  toDoListArray: any[] = [];
  

  constructor(private ToDoService: TodoService) {}

  ngOnInit(): void {
    this.ToDoService.getToDoList()
      .snapshotChanges()
      .subscribe((item) => {
        this.toDoListArray = [];
        item.forEach((data) => {
          var x = data.payload.toJSON();
          //x["$key"]=data.key;
          this.toDoListArray.push(x);
        });

        //sort
        this.toDoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        });
      });
  }

  onAdd(itemTitle: any) {
    this.ToDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }
}

