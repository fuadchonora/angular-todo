import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../resources/tasks.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onTaskToggle: EventEmitter<Task> = new EventEmitter();
  @Output() onTaskDelete: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit = (): void => {};

  onTaskToggleClick(task: Task) {
    this.onTaskToggle.emit(task);
  }

  onTaskDeleteClick(task: Task) {
    this.onTaskDelete.emit(task);
  }
}
