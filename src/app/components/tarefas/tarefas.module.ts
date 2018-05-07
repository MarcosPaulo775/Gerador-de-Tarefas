import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas.routing';
import { SharedModule } from '../../shared/shared.module';

import { TarefasComponent } from './tarefas.component';
import { TarefasService } from '../../core/service/tarefas.service';

@NgModule({
  imports: [
    CommonModule,
    TarefasRoutingModule,
    SharedModule
  ],
  providers: [TarefasService],
  declarations: [TarefasComponent]
})
export class TarefasModule { }
