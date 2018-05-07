import { Injectable } from '@angular/core';

import { TarefasService } from './tarefas.service';
import { PessoaService } from './pessoas.service';

import { PessoaTarefa } from '../model/pessoa-tarefa';
import { Tarefa } from '../model/tarefa';
import { Pessoa } from '../model/pessoa';

@Injectable()
export class AlocacaoService {
    
    static pessoaTarefa: PessoaTarefa[];
    tarefas: Tarefa[];
    pessoas: Pessoa[];

    getAlocacao(): PessoaTarefa[]{
        return [
            {id: 1, tarefa: this.tarefas[0], pessoa: this.pessoas}
        ]
    }

    constructor(
        private tarefaService: TarefasService,
        private pessoaService: PessoaService
    ){
        this.pessoas = this.pessoaService.pessoa;
        this.tarefas = this.tarefaService.tarefa;
    }



}