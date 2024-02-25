import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { HeaderComponent } from "./header/header.component";
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodoListComponent, HeaderComponent, PopUpComponent]
})
export class AppComponent {
  title = 'todo-app';
}
