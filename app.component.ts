import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  todos = [
    {
      label: 'Fazer um To Do List app',
      done: true,
      priority: 2
    },
    {
      label: 'Comprar um mouse',
      done: false,
      priority: 5
    },
    {
      label: 'Criar um banco de dados',
      done: false,
      priority: 1
    },
    {
      label: 'Ir para Santos',
      done: false,
      priority: 3
    }
  ];

  addTodo(newTodoLabel) {
     const newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label );
  }
}
