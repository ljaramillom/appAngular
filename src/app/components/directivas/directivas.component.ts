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
  texto: string;
  dataCargada: any;
  opcion: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Directivas';
    setTimeout(() => {
      this.dataCargada = 'cargada!';
    }, 3000);
  }

  hacerMayusculas() {
    this.texto = this.texto.toUpperCase();
  }

  hacerMinusculas() {
    this.texto = this.texto.toLowerCase();
  }

}
