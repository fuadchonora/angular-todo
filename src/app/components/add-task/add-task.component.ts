import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from '../../resources/tasks.interface';

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onTaskAdd: EventEmitter<Task> = new EventEmitter();

  showAddForm!: boolean;
  subscription!: Subscription;

  constructor(uiService: UiService) {
    uiService.onToggle().subscribe((value) => (this.showAddForm = value));
  }

  ngOnInit(): void {}

  onSubmit(event: any) {
    let task: Task = {
      id: Math.floor(Math.random() * 1000),
      text: event.target.value,
      done: false,
    };
    this.onTaskAdd.emit(task);
  }
}
