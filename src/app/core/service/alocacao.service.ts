import { Injectable } from '@angular/core';

import { TarefasService } from './tarefas.service';
import { PessoaService } from './pessoas.service';

import { PessoaTarefa } from '../model/pessoa-tarefa';
import { Tarefa } from '../model/tarefa';
import { Pessoa } from '../model/pessoa';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AlocacaoService {

    constructor(private pessoaService: PessoaService) { }

    static pessoaTarefa: PessoaTarefa[];
    
    pessoas: Pessoa[] = this.pessoaService.pessoa
    pessoaTarefa = new Array<PessoaTarefa>();
    
    alocacao: PessoaTarefa;

    tarefaSelecionada: Tarefa;
    alocacaoSelecionada: PessoaTarefa;


    setId(x: PessoaTarefa[]): number {
        return x.length;
    }

    setAlocacao(tarefa: Tarefa) {
        this.alocacao = new PessoaTarefa;

        this.alocacao.id = this.setId(this.pessoaTarefa);
        this.alocacao.tarefa = tarefa;
        this.alocacao.pessoa = new Array<Pessoa>();

        this.pessoaTarefa.push(this.alocacao);
    }


    procuraAlocacao(x: number): PessoaTarefa {

        for (let i = 0; i < this.pessoaTarefa.length; i++) {
            if (x == this.pessoaTarefa[i].tarefa.id)
                return this.pessoaTarefa[i];
        }
    }

    isPessoaEscalada(x: Number) {

        for (let i = 0; i < this.alocacaoSelecionada.pessoa.length; i++) {
            if (x == this.alocacaoSelecionada.pessoa[i].id)
                return true;
        }
        return false;
    }

}