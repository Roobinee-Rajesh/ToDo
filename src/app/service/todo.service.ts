import { Injectable } from '@angular/core';
import { Interfacetodo } from 'src/app/model/interfacetodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  editId=0;
  private todoservice:Interfacetodo[]=[{ id: 1, todo: 'Add' },
   { id: 2, todo: 'Edit' },
   { id: 3, todo: 'Delete' },];
  constructor() { }

  getTodos=():Interfacetodo[]=>{
    return this.todoservice;
  }
  getRandomNumber = (max = 1000): number => {
    return Math.floor(Math.random() * max);
  };

  addOreditTodo=(input:string)=>{
    if (input != "") {
          if (this.editId === 0){
            this.todoservice.push({ id: this.getRandomNumber(), todo:input });}
          else {
            this.todoservice =  this.todoservice.map((todo) => {
              if (todo.id === this.editId)
                return {
                  ...todo,
                  id: this.editId,
                  todo: input
                };
              else return todo;
            });
            
          }
        }
        return this.todoservice;
  }

  deletTodo=(id:number)=>{
    this.todoservice = this.todoservice.filter((todo) => todo.id !== id);
    return this.todoservice;
  }

  editTodo=(id:number)=>{
    this.editId=id;
  }
}
  
  
