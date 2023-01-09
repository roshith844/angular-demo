import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
// import { TASKS } from '../../../app/mock-tasks';
import {Task} from '../../Task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  constructor(private taskService: TaskService){

  }
ngOnInit(): void{
 this.taskService.getTasks().subscribe((tasks)=>{
  this.tasks = tasks
 })
}
}
