import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos !: Array<Itodo>

  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
    this.todos = this._todoService.fetchTodo()
    console.log(this._todoService.fetchTodo());

  }
  onDelete(id : string){
    console.log(id);
    this._todoService.removeTodoItem(id);
  }

}
