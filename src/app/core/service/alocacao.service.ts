import { Injectable } from '@angular/core';

import { TarefasService } from './tarefas.service';
import { PessoaService } from './pessoas.service';

import { PessoaTarefa } from '../model/pessoa-tarefa';
import { Tarefa } from '../model/tarefa';
import { Pessoa } from '../model/pessoa';

@Injectable()
export class AlocacaoService {
    
    constructor(private pessoaService: PessoaService){}
    
    static pessoaTarefa: PessoaTarefa[];
    alocacao: PessoaTarefa;

    static pessoas: Pessoa[];
    pessoa: Pessoa;

    pessoaTarefa = this.y(this.pessoaTarefa);
    pessoas = this.pessoaService.getPessoas();
    aux: number;

    abc: Pessoa[];
    xxx: Tarefa;
    n: number;
    tarefaSelecionada: Tarefa;
    alocacaoSelecionada: PessoaTarefa;
    

    setId(x: PessoaTarefa[]):Number{
        return x.length;
    }

    x(a: PessoaTarefa): PessoaTarefa{
        a.pessoa = new Array<Pessoa>();
        a.tarefa = new Tarefa;
        return a;
    }

    y(b: PessoaTarefa[]): PessoaTarefa[]{
        b= new Array<PessoaTarefa>();
        return b;
    }

    setAlocacao(tarefa: Tarefa){
        //Sussa
        this.aux = this.pessoaTarefa.length;

        this.alocacao = new PessoaTarefa;
        this.alocacao.tarefa = tarefa;
        this.alocacao.pessoa = new Array<Pessoa>();

        this.pessoaTarefa.push(this.alocacao);

        this.pessoaTarefa[this.aux].id = this.setId(this.pessoaTarefa);

        console.log("Objeto");
        console.log(this.alocacao);
        console.log("Vetor");
        console.log(this.pessoaTarefa);
    }

}