import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-padre',
  templateUrl: './segundo-padre.component.html',
  styleUrls: ['./segundo-padre.component.css']
})
export class SegundoPadreComponent implements OnInit {

  title: string;
  textoPadre: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Comunicación de componente hijo a padre';
  }

  recibirMensaje(mensaje: string) {
    this.textoPadre = mensaje;
  }

}
