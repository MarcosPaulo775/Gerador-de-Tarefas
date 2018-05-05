import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PessoasRoutingModule } from './pessoas.routing';

import { PessoasComponent } from './pessoas.component';

@NgModule({
  imports: [
    CommonModule,
    PessoasRoutingModule
  ],
  declarations: [PessoasComponent],
})
export class PessoasModule { }
