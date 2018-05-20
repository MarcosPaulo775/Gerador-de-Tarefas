import { Injectable } from '@angular/core';

import { AlocacaoService } from './alocacao.service';

import { Tarefa } from '../model/tarefa';

@Injectable()
export class TarefasService{

    constructor(private alocacaoService: AlocacaoService){}

    static tarefa: Tarefa[];

    tarefa = this.getTarefas();

    getTarefas(): Tarefa[]{
        return [
            {id: 0, nome: "Almoço", descricao: "Delicia"},
            {id: 1, nome: "Lanche", descricao: "Delicia"},
            {id: 2, nome: "Janta", descricao: "Delicia"},
        ]
    }

    setId(tarefas: Tarefa[]):number{
        return tarefas.length;
    }

    tarefaExiste(x: Tarefa): boolean {
        for (var i = 0; i < this.tarefa.length; i++) {
            if (x.nome == this.tarefa[i].nome && 
                x.dataInicio == this.tarefa[i].dataInicio && 
                x.dataFim == this.tarefa[i].dataFim) {

                return true;
            }
        }
        return false;
    }
    
}