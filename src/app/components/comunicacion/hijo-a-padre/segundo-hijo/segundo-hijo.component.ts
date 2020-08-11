import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-segundo-hijo',
  templateUrl: './segundo-hijo.component.html',
  styleUrls: ['./segundo-hijo.component.css']
})
export class SegundoHijoComponent implements OnInit {

  title: string;
  @Output() enviar: EventEmitter<string> = new EventEmitter<string>();
  @Output() enviarMayusculas: EventEmitter<string> = new EventEmitter<string>();
  textoHijo: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Componente hijo';
  }

  botonClick() {
    this.enviar.emit(this.textoHijo);
  }

  botonClickMayusculas(){
    this.enviarMayusculas.emit(this.textoHijo.toUpperCase());
  }

}
