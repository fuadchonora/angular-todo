import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Todo Tracker';
  showAddForm!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((value) => (this.showAddForm = value));
  }

  ngOnInit(): void {}

  onAddBtnClick() {
    this.uiService.toggleAddTask();
  }
}
