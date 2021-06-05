import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.css']
})

export class HomeTestComponent implements OnInit {

  boolean_showtable = true;

  constructor() { }

  ngOnInit(): void {
  }

  showTable(){
    this.boolean_showtable = false;
  }

  tiles: Tile[] = [
    {text: 'header', cols: 12, rows: 2, color: 'lightblue'},
    {text: 'navigate', cols: 12, rows: 1, color: 'lightgreen'},
    {text: 'content', cols: 12, rows: 10, color: 'lightpink'},
    {text: 'footer', cols: 12, rows: 2, color: '#DDBDF1'},
  ];

}
