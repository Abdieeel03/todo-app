import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  @Input({required: true}) todos: Todo[] = [];
  @Output() cambiar = new EventEmitter<Todo>();
  @Output() borrar = new EventEmitter<number>();

  cambiarEstado(todo: Todo) {
    this.cambiar.emit(todo);
  }

  borrarTarea(id: number) {
    this.borrar.emit(id);
  }
}
