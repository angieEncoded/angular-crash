import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription; // The ! tells the compiler that this cannot be null or undefined so stop complaining about it

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
  }

  ngOnInit() : void {

  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
    
    // console.log("toggle")
  }

  hasRoute(route: string){
    return this.router.url === route
  }

}
