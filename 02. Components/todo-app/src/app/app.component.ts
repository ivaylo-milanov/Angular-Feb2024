import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { PopUpComponent } from './pop-up/pop-up.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodoListComponent, PopUpComponent, TodoItemComponent]
})
export class AppComponent {
  title = 'todo-app';
  users: string[] = ['Shopping', 'Skiing'];

  addToDo(input: HTMLInputElement) : void{
    this.users.push(input.value);
    input.value = '';
  }

}
