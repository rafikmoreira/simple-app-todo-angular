import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public taskList: { id: number; task: string; completed: boolean }[] = [];

  constructor() {}

  public deletarTarefas(): void {
    this.taskList = [];
    localStorage.removeItem('taskList');
  }

  public addTask(task: { id: number; task: string; completed: boolean }) {
    let lastTaskId = localStorage.getItem('lastTaskId');
    localStorage.setItem('lastTaskId', `${Number(lastTaskId) + 1}`);

    let newTask = { ...task, id: Number(lastTaskId) + 1 };
    this.taskList.unshift(newTask);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  public updateTaskList(payload: any): void {
    let task = this.taskList.find((task) => task.id === payload.taskId);

    if (task && payload.enabled) {
      task.completed = true;
      this.taskList = this.taskList.filter(
        (task) => task.id !== payload.taskId
      );
      this.taskList.push(task);
    } else if (task && !payload.enabled) task.completed = false;

    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  ngOnInit(): void {
    let lastTaskId = localStorage.getItem('lastTaskId');
    if (!lastTaskId) localStorage.setItem('lastTaskId', '4');
    let localTaskList = localStorage.getItem('taskList');
    if (localTaskList && localTaskList.length > 0) {
      this.taskList = JSON.parse(localTaskList);
    } else {
      this.taskList = [
        {
          id: 1,
          task: 'Ir ao mercado realizar as compras do mês',
          completed: false,
        },
        {
          id: 2,
          task: 'Dizer para a Tathi que ela é uma pessoa especial',
          completed: false,
        },
        {
          id: 3,
          task: 'Terminar de arrumar o quarto',
          completed: false,
        },
        {
          id: 4,
          task: 'Ensinar para as pessoas que o Linux é o melhor sistema operacional',
          completed: false,
        },
      ];
    }
  }
}
