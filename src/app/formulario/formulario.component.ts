import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {
  enviarForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.instanciaFormulario();
  }

  instanciaFormulario() {
    this.enviarForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }

}
