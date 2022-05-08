import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  //styleUrls: ['./success.component.css']
  styles:[`
  p{
    padding: 20px;
    background-color: palegreen;
    border: 1px solid green;
  }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
