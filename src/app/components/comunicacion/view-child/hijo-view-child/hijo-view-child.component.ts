import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo-view-child',
  templateUrl: './hijo-view-child.component.html',
  styleUrls: ['./hijo-view-child.component.css']
})
export class HijoViewChildComponent implements OnInit {

  title: string;
  mensaje: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Componente hijo';
  }


  editarMensaje(mensaje: string) {
    this.mensaje = mensaje;
  }
}
