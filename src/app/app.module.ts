import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { PessoaService } from './core/service/pessoas.service';
import { TarefasService } from './core/service/tarefas.service';
import { AlocacaoService } from './core/service/alocacao.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    TarefasService,
    PessoaService,
    AlocacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
