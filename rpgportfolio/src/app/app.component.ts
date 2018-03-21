import { Component } from '@angular/core';
import {DataService} from "./core/services/data/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private currentView = "campaign";

  constructor(private dataService: DataService) {}

  onWheel(event: WheelEvent) {
    if(event.deltaY > 0) {
      this.scrollDown();
    }
    else {
      this.scrollUp();
    }
  }

  scrollUp() {
    switch(this.currentView) {
      case "skill": this.currentView = "campaign"; break;
      case "achievement": this.currentView = "skill"; break;
    }
  }

  scrollDown() {
    switch(this.currentView) {
      case "campaign": this.currentView = "skill"; break;
      case "skill": this.currentView = "achievement"; break;
    }
  }
}
