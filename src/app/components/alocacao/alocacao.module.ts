import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlocacaoRoutingModule } from "./alocacao.routing";

import { AlocacaoComponent } from './alocacao.component';

@NgModule({
  imports: [
    CommonModule,
    AlocacaoRoutingModule
  ],
  declarations: [AlocacaoComponent]
})
export class AlocacaoModule { }
