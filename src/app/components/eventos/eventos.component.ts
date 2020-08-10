import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  title: string;
  cantidad = 0;
  texto: any;
  imagenURL: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Bindings';
    this.imagenURL = (<HTMLInputElement>document.getElementById('selectImagen')).value;
  }

  incrementar() {
    this.cantidad++;
  }

  onTextboxInput(event: any) {
    console.log('event', event);
    this.texto = event.target.value;
  }

}
