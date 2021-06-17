import { Component, OnInit } from '@angular/core';

import { Task } from '../../resources/tasks.interface';

import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private tasksService: TasksService) {}

  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  toggleTask(task: Task) {
    this.tasksService
      .toggleTask(task)
      .subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.tasksService
      .deleteTask(task)
      .subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: Task) {
    this.tasksService.addTask(task).subscribe((tasks) => (this.tasks = tasks));
  }
}
