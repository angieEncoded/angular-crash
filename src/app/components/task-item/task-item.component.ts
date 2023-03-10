import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from 'src/app/interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes
  // Needed to initialize the task or typescript was throwing an error
  @Input() task: Task = {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  };

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter


  // constructor(){}

  ngOnInit(): void {
    
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  }
  
  onToggle(task:Task){
    this.onToggleReminder.emit(task)
  }

}
