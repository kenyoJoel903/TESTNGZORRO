import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  usuarios:Array<Object> =[
    {nombre : 'Luis', edad: 26},
    {nombre : 'Juan', edad: 28},
  ];

  constructor() { }

  ngOnInit() {
  }

}
