import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  title: string;
  tamanoCheck = false;
  colorCheck = false;
  anchuraAltura = 100;

  constructor() { }

  ngOnInit() {
    this.title = 'Directivas';
  }

}
