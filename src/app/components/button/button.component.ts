import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  @Input() text:string = ""
  @Input() color: string = ""
  @Output() btnClick = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
    
  }

  // Emit the event from the button so we can latch onto it in other components
  // for custom functions
  onClick() {
    this.btnClick.emit()
  }
}
