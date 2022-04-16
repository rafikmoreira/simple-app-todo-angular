import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() public taskList: { id: number; task: string; completed: boolean }[] =
    [];

  @Output() public updateTask = new EventEmitter();

  constructor() {}
  public verifyTask(event: Event, id: number): void {
    let checkbox = event.target as HTMLInputElement;
    this.updateTask.emit({ taskId: id, enabled: checkbox.checked });
  }

  ngOnInit(): void {}
}
