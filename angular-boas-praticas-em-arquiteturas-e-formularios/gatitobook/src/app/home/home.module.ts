import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    // formularios reativos
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
