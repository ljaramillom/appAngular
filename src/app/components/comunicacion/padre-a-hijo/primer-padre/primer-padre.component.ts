import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-padre',
  templateUrl: './primer-padre.component.html',
  styleUrls: ['./primer-padre.component.css']
})
export class PrimerPadreComponent implements OnInit {

  title: string;
  textoPadre: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Comunicación de componente padre a hijo';
  }

}
