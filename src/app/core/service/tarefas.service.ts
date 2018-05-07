import { Injectable } from '@angular/core';

import { Tarefa } from '../model/tarefa';

@Injectable()
export class TarefasService{

    static tarefa: Tarefa[];

    tarefa = this.getTarefas();

    getTarefas(): Tarefa[]{
        return [
            {id: 1, nome: "Almoço", descricao: "Delicia"},
            {id: 2, nome: "Lanche", descricao: "Delicia"},
            {id: 3, nome: "Janta", descricao: "Delicia"},
        ]
    }

    setId(tarefas: Tarefa[]):Number{
        return tarefas.length +1;
    }
    
}