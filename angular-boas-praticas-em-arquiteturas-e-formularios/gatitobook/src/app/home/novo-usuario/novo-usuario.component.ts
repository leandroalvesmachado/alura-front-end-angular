import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';

import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  // ! informa que pode ser nulo
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
  ) { }

  // ciclo de vida, após a classe injetar todos os servicos
  // após execução do constructor
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      userName: [''],
      password: ['']
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }

}
