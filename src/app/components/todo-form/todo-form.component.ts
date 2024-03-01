import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
todoForm !: FormGroup;

//  private _todoService = Inject(TodoService)
  constructor(
    private _uuidService : UuidService,
    private _todoService : TodoService) { }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      todoItem : new FormControl(null, [Validators.required])
    })
  }
  onPostAdd(){
    if(this.todoForm.valid){
      // console.log(this.todoForm.value);
      let obj = {...this.todoForm.value, id: this._uuidService.create_UUID()};
      // console.log(obj);
      this._todoService.addTodo(obj);
      this.todoForm.reset();
    }
  }

}
