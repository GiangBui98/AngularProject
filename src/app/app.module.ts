import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoListService } from './services/todo-list.service';
import { ListManagerComponent } from './list-manager/list-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputButtonUnitComponent,
    ListManagerComponent
  ],
  imports: [BrowserModule],
  providers: [TodoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
