import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  @Input() todo!: Todo;
  @Output() cambiarEstado = new EventEmitter<void>();
  @Output() borrar = new EventEmitter<void>();
}
