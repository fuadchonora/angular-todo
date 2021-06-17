import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from '../resources/tasks.interface';
import { TASKS } from '../resources/tasks.res';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  tasks: Observable<Task[]> = of([]);

  getTasks(): Observable<Task[]> {
    this.tasks = of(TASKS);
    return this.tasks;
  }

  toggleTask(task: Task): Observable<Task[]> {
    task.done = !task.done;
    return this.tasks;
  }

  deleteTask(task: Task): Observable<Task[]> {
    let tasksArray: Task[] = [];

    this.tasks.subscribe((tasks) => (tasksArray = tasks));
    this.tasks = of(tasksArray.filter((t) => t.id !== task.id));

    return this.tasks;
  }

  addTask(task: Task): Observable<Task[]> {
    let tasksArray: Task[] = [];

    this.tasks.subscribe((tasks) => (tasksArray = tasks));
    tasksArray.push(task);
    this.tasks = of(tasksArray);

    return this.tasks;
  }
}
