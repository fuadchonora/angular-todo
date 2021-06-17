import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private uiService: UiService, private router: Router) {
    this.uiService.onToggle().subscribe((value) => (this.showAddForm = value));
  }

  ngOnInit(): void {}

  hasRoute(route: string) {
    return this.router.url === route;
  }

  onAddBtnClick() {
    this.uiService.toggleAddTask();
  }
}
