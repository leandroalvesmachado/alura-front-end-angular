import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  // emitir evento
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log(this.valor, this.destino)
  }

}
