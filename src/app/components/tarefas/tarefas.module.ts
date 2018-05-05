import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TarefasRoutingModule } from './tarefas.routing';

import { TarefasComponent } from './tarefas.component';

@NgModule({
  imports: [
    CommonModule,
    TarefasRoutingModule
  ],
  declarations: [TarefasComponent]
})
export class TarefasModule { }
