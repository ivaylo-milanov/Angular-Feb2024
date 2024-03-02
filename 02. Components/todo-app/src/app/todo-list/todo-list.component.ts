import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
    selector: 'todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
    imports: [CommonModule, TodoItemComponent]
})
export class TodoListComponent {
  @Input() users: string[] = [];


}
