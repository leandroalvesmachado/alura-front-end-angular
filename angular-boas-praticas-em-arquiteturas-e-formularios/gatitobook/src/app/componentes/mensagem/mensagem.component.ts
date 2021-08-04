import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  // decorator
  // o componente vai receber o valor
  // <app-mensagem mensagem="Usuário obrigatório"></app-mensagem>
  @Input()
  mensagem = "Mensagem de erro";

  constructor() { }

  ngOnInit(): void {
  }

}
