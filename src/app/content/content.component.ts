import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() boolean_showtable?: Boolean;

  title = "123";

  constructor() { }
  
  ngOnInit(): void {
  }
  

}
