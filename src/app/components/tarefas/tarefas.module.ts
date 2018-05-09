import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas.routing';
import { SharedModule } from '../../shared/shared.module';

import { TarefasComponent } from './tarefas.component';
import { TarefasService } from '../../core/service/tarefas.service';
import { AlocacaoService } from '../../core/service/alocacao.service';


@NgModule({
  imports: [
    CommonModule,
    TarefasRoutingModule,
    SharedModule
  ],
  providers: [],
  declarations: [TarefasComponent]
})
export class TarefasModule { }
