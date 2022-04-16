import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrls: ['./todo-button-delete-all.component.scss'],
})
export class TodoButtonDeleteAllComponent implements OnInit {
  constructor() {}
  @Output() public deleteTasks = new EventEmitter();
  public deleteAllTasks(): void {
    this.deleteTasks.emit();
  }
  ngOnInit(): void {}
}
