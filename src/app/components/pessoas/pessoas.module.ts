import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas.routing';
import { SharedModule } from '../../shared/shared.module';

import { PessoasComponent } from './pessoas.component';
import { PessoaService } from '../../core/service/pessoas.service';

@NgModule({
  imports: [
    CommonModule,
    PessoasRoutingModule,
    SharedModule
  ],
  providers: [PessoaService],
  declarations: [PessoasComponent],
})
export class PessoasModule { }
