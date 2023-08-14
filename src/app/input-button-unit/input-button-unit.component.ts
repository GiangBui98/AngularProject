import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  // templateUrl: './input-button-unit.component.html',

  template: `
    <input class="todo-input"
      #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue(getInputValue($event))"
    />

    <button class="btn" (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,

  styleUrls: ['./input-button-unit.component.scss'],
})
export class InputButtonUnitComponent {
  title = 'Hello World';

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
