import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoViewChildComponent } from '../hijo-view-child/hijo-view-child.component';

@Component({
  selector: 'app-padre-view-child',
  templateUrl: './padre-view-child.component.html',
  styleUrls: ['./padre-view-child.component.css']
})
export class PadreViewChildComponent implements OnInit {

  title: string;
  @ViewChild(HijoViewChildComponent, null)
  componenteHijo: HijoViewChildComponent;
  texto: string;
  mensajeDeError: string;


  constructor() { }

  ngOnInit() {
    this.title = 'ViewChild: Referenciando un componente desde una clase';
  }

  enviarMensaje(){
    if (!this.texto) {
      this.mensajeDeError = ' Debes ingresar un mensaje';
    } else {
      this.mensajeDeError = '';
      this.componenteHijo.editarMensaje(this.texto);
    }
  }

}
