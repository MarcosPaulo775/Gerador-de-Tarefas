import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlocacaoRoutingModule } from "./alocacao.routing";

import { AlocacaoComponent } from './alocacao.component';
import { AlocacaoService } from '../../core/service/alocacao.service';
import { PessoaService } from '../../core/service/pessoas.service';
import { TarefasService } from '../../core/service/tarefas.service';

@NgModule({
  imports: [
    CommonModule,
    AlocacaoRoutingModule
  ],
  providers: [
    AlocacaoService,
    PessoaService,
    TarefasService
  ],
  declarations: [AlocacaoComponent]
})
export class AlocacaoModule { }