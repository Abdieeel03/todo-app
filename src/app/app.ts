import { Component, signal } from '@angular/core';
import { Todo } from '../models/todo';
import { AddTodo } from './add-todo/add-todo';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [AddTodo, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
  todos: Todo[] = [
    { id: 1, title: 'Aprender Angular', completed: false },
    { id: 2, title: 'Configurar Bootstrap', completed: false },
    { id: 3, title: 'Construir una Todo App', completed: false }
  ]

  addTodo(title: string) {
    if(!title.trim()) return;
    const nuevaId = this.todos.length ? Math.max(...this.todos.map(t => t.id)) + 1 : 1;
    const nuevaTarea: Todo = { id: nuevaId, title: title.trim(), completed: false };
    this.todos.push(nuevaTarea);
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
