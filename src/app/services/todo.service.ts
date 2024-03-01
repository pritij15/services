import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todoArray : Array<Itodo> = [
  
    {todoItem : "Javascript", id :"111"},
    {todoItem : "Typescript", id :"222"},
    {todoItem : "Angular", id :"333"}
]
  constructor() {}

  fetchTodo() : Array<Itodo>{
    //API call to get todo data from db
    return this.todoArray;
  }

  addTodo(todoObj : Itodo){
    //API call to get todo data from db
    this.todoArray.push(todoObj)
  }
  removeTodoItem(id : string){
    let getIndex = this.todoArray.findIndex(todo => todo.id === id)
    console.log(getIndex);
    this.todoArray.splice(getIndex, 1)
  }
}
