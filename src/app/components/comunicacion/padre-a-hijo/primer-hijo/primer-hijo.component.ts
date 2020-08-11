import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-primer-hijo',
  templateUrl: './primer-hijo.component.html',
  styleUrls: ['./primer-hijo.component.css']
})
export class PrimerHijoComponent implements OnInit {

  @Input() textoHijo: string;
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Componente hijo';
  }

}
