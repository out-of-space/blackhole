import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blackhole';
  isClicked = true;

  click() {
      this.isClicked=!this.isClicked;
      this.title="False"
    }
    public name = "Kapetan Andrea Zepos";
    public message = "";

  }



