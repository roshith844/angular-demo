import { Component } from '@angular/core';
import { TASKS } from '../../../app/mock-tasks';
import {Task} from '../../Tasks'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;

}
