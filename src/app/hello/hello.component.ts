import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

public comments = [
  {"value":"What the fuck is this thing?"},
  {"value":"Cann anyone see the cat?"},
  {"value":"What is this"},
  {"value":"It looks like an anonymou chat room"}

]



public message = "Whazaaaa" 
test() {
  this.message = prompt("What is your name");
}

  public color= "no color";


  public changeColor() {
    if (this.color==="green"){
      this.color="red";
    }
    else if (this.color==="red"){
      this.color="blue";
    }
    else if (this.color==="blue"){
      this.color="no color";}

    else {
      this.color="green";
    }
    
  }

  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  public animals = ["cat","dog","pigeon","bear", "cricket", "Beetle"]
  public variable = "Guadalajara";
  public date = new Date();
  public person ={
    "firstName": "John",
    "lastName": "Rambo"
  }

  public fireEvent() {
    console.log("In fire Event");
    this.childEvent.emit(this.message);

  
    
  }
}


