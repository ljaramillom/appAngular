import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  title: string;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.title = 'Registro de usuario';
    this.createForm();
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', {
        validators: [Validators.required],
        updateOn: 'blur'
      }],
      password: ['', {
        validators: [Validators.required, Validators.minLength(4)]
      }]
    });
  }

  submit() {
    if (!this.registerForm.valid) {
      alert('Por favor verifica la información.');
      return;
    }
    console.log(this.registerForm.value);
  }

  refrescar() {
    this.registerForm.patchValue({
      username: '',
      password: ''
    });
  }

}
