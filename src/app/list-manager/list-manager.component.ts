import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  template: `
  <div class="todo-app">
    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem" (remove)="removeItem($event)" (update)="updateItem($event.item, $event.changes)"></app-todo-item>
      </li>
    </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  // todoList: TodoItem[] = [
  //   {title: 'install NodeJS'},
  //   {title: 'install Angular CLI'},
  //   {title: 'create new app'},
  //   {title: 'serve app'},
  //   {title: 'develop app'},
  //   {title: 'deploy app'},
  // ];

  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
}

updateItem(item, changes): void {
  this.todoListService.updateItem(item, changes);
}

removeItem(item): void {
  this.todoListService.deleteItem(item);
}
}