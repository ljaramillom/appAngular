import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  title: string;
  persona = {
    nombre: 'Astrid',
    apellido: 'Velásquez',
    edad: '42'
  };

  constructor() { }

  ngOnInit() {
    this.title = 'Interpolación';
  }

  duplicarTxt(vStr: string): string {
    return vStr + vStr;
  }

}
