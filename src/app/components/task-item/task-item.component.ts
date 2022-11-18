import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task:Task;
@Output() DeleteTask:EventEmitter<Task>=new EventEmitter();
@Output() OnToggle:EventEmitter<Task>=new EventEmitter();

faTimes=faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  OnDelete(task){
this.DeleteTask.emit(task)
  }
  ondblToggle(task:Task){
this.OnToggle.emit(task)

  }


}
