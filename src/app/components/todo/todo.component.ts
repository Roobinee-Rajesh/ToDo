import { Component } from '@angular/core';
import { Interfacetodo } from 'src/app/model/interfacetodo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
 
  input:string = '';
  todosComponents: Interfacetodo[] = [];
  constructor(private ToDo:TodoService){
    this.todosComponents=this.ToDo.getTodos();
  }
      

 
editId=0;


  // addTodo(): void {
  //   if (this.input != "") {
  //     if (this.editId === 0){
  //       this.todos.push({ id: this.getRandomNumber(), todo: this.input });}
  //     else {
  //       this.todos =  this.todos.map((todo) => {
  //         if (todo.id === this.editId)
  //           return {
  //             ...todo,
  //             id: this.editId,
  //             todo: this.input
  //           };
  //         else return todo;
  //       });
        
  //     }
  //   }
  // }

  addTodoComponent=():void=>{
     this.todosComponents=this.ToDo.addOreditTodo(this.input);
     this.input="";
  }

  editTodoComponent(id: number) {
    const index: number = this.todosComponents.findIndex((todo) => todo.id == id);
    this.input = this.todosComponents[index].todo;
    this.ToDo.editTodo(id);
  }

  deleteTodoComponent(id: number) {
    this.todosComponents=this.ToDo.deletTodo(id);
  }
}

