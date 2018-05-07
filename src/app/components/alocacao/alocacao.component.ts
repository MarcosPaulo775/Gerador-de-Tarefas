import { Component, OnInit } from '@angular/core';

import { AlocacaoService } from '../../core/service/alocacao.service';
import { TarefasService } from '../../core/service/tarefas.service';
import { PessoaService } from '../../core/service/pessoas.service';

import { PessoaTarefa } from '../../core/model/pessoa-tarefa';
import { Tarefa } from '../../core/model/tarefa';

@Component({
  selector: 'app-alocacao',
  templateUrl: './alocacao.component.html',
  styleUrls: ['./alocacao.component.css']
})
export class AlocacaoComponent implements OnInit {

  alocacao: PessoaTarefa[];
  tarefas: Tarefa[];

  constructor(
    private alocacaoService: AlocacaoService,
    private tarefaService: TarefasService,
    private pessoaService: PessoaService
  ) { }


  ngOnInit() {
    this.tarefas = this.tarefaService.tarefa;
  }

}
