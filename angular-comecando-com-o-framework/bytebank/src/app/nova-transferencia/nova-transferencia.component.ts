import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

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

  constructor(private service: TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    // console.log(this.valor, this.destino);

    // const valorEmitir = {
    //   valor: this.valor,
    //   destino: this.destino
    // }

    // this.aoTransferir.emit(valorEmitir);
    // this.limparCampos();

    // tipando
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }

    // usando o service, nao mais emitindo o evento
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();

        // caso precisasse de parametros
        // this.router.navigate(['extrato', params]);

        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
