import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../shared/models/Task';

@Component({
  selector: 'app-top-task-item',
  templateUrl: './top-task-item.component.html',
  styleUrls: ['./top-task-item.component.css']
})
export class TopTaskItemComponent implements OnInit {

  @Input() task: Task;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentStyles();
  }

  currentStyles = {};

  setCurrentStyles() {
    if (this.task.priority === 'low') {
      this.currentStyles = {
        'background-color': 'green'
      }
    } else if (this.task.priority === 'med') {
      this.currentStyles = {
        'background-color': 'yellow'
      }
    } else {
      this.currentStyles = {
        'background-color': 'red'
      }
    }
  }
  

}
