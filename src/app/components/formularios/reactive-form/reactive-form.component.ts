import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Formulario reactivo';
  }

}
