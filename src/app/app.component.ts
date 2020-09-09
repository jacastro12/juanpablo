import { Component, Input } from '@angular/core';

import { Persona } from './persona'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  personas: Persona[] = [];
  personForm: FormGroup;
  pag_inicio: Boolean;
  pag_persona: Boolean;
  pag_listado: Boolean;

  constructor(private formBuilder: FormBuilder) {
    this.pag_inicio = true;
    this.personForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required)

    });
  }
  inicio() { }
  nuevaPersona() {
    if (this.personForm.valid == true) {
      let nombre = this.personForm.value.nombre;
      let apellido = this.personForm.value.apellido;
      let cedula = this.personForm.value.cedula;
      let direccion = this.personForm.value.direccion;
      let persona = new Persona(nombre, apellido, cedula, direccion);
      this.personas.push(persona);
      this.personForm.reset();
      alert("PERSONA CREADA CORRECTAMENTE")
    }
  }
  nav(value) {
    if (value == "inicio") {
      this.pag_inicio = true;
      this.pag_persona = false;
      this.pag_listado = false;
    }
    if (value == "persona") {
      this.pag_inicio = false;
      this.pag_persona = true;
      this.pag_listado = false;
    }
    if (value == "listado") {
      this.pag_inicio = false;
      this.pag_persona = false;
      this.pag_listado = true;
    }
  }
  listar() { }
}
