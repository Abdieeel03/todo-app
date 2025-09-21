import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodo {
  titulo: string = '';

  @Output() nuevaTarea = new EventEmitter<string>();

  agregarTarea(){
    if(!this.titulo.trim()) return;
    this.nuevaTarea.emit(this.titulo.trim());
    this.titulo = '';
  }
}
