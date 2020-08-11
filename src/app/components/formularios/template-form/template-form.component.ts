import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registro } from '../../../shared/models/registro';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  title: string;
  model: Registro = { username: '', password: ''};
  @ViewChild('formularioRegistro', null)
  registerForm: NgForm;

  constructor() { }

  ngOnInit() {
    this.title = 'Registro de usuario';
  }

  submit() {
    console.log(this.model);
  }

  refrescar() {
    this.model = { username: '', password: '' };
    console.log(this.registerForm);
    this.registerForm.resetForm();
  }

}

