import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent implements OnInit {
  public task: string = '';
  constructor() {}
  ngOnInit(): void {}

  @Output() registerTask = new EventEmitter();

  public addTask(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.registerTask.emit({ id: 0, task: this.task, completed: false });
      this.task = '';
    }
  }
}
