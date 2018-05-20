import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Tarefa } from '../../core/model/tarefa';
import { TarefasService } from '../../core/service/tarefas.service';
import { AlocacaoService } from '../../core/service/alocacao.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  formularioTarefas: FormGroup;
  tarefa: Tarefa;
  tarefas: Tarefa[];

  constructor(
    private formBuilder: FormBuilder,
    private tarefasService: TarefasService ,
    private alocacaoService: AlocacaoService 
  ) { }

  ngOnInit() {
    this.tarefas = this.tarefasService.tarefa;
    
    this.formularioTarefas = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ],
      descricao: [null, [Validators.required] ],
      dataInicio: [null, [Validators.required] ],
      dataFim: [null, [Validators.required] ]
    });
  }

  OnSubmit(){
    if(this.formularioTarefas.valid){
			this.tarefa = new Tarefa();

      this.tarefa.id = this.tarefasService.setId(this.tarefas);
			this.tarefa.nome = this.formularioTarefas.get('nome').value;
      this.tarefa.descricao = this.formularioTarefas.get('descricao').value;
      this.tarefa.dataInicio = this.formularioTarefas.get('dataInicio').value;
      this.tarefa.dataFim = this.formularioTarefas.get('dataFim').value;
      
      if(!this.tarefasService.tarefaExiste(this.tarefa)){
        this.tarefasService.tarefa.push(this.tarefa);
        this.formularioTarefas.reset();
        this.alocacaoService.setAlocacao(this.tarefa);
      }
      else {
				alert("Está tarefa já está cadastrada!");
			}
      /*
			console.log("OBJETO:");
			console.log(this.tarefa);
			console.log("VETOR:")
      console.log(this.tarefas);
      */
		}
		else{
			console.log("ERROR");
		}
  }

}
