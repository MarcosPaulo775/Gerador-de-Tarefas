import { Component, OnInit } from '@angular/core';

import { AlocacaoService } from '../../core/service/alocacao.service';
import { TarefasService } from '../../core/service/tarefas.service';
import { PessoaService } from '../../core/service/pessoas.service';

import { PessoaTarefa } from '../../core/model/pessoa-tarefa';
import { Tarefa } from '../../core/model/tarefa';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Pessoa } from '../../core/model/pessoa';

@Component({
  selector: 'app-alocacao',
  templateUrl: './alocacao.component.html',
  styleUrls: ['./alocacao.component.css']
})
export class AlocacaoComponent implements OnInit {

  formularioAlocacao: FormGroup;

  tarefas: Tarefa[];
  alocacao: PessoaTarefa[];
  pessoas: Pessoa[];

  alocacaoCriada: PessoaTarefa;

  tarefaSelecionada: Tarefa;
  alocacaoSelecionada: PessoaTarefa;
  pessoaAdd: Pessoa;

  aloc: PessoaTarefa;

  GPS: number;

  constructor(
    private formBuilder: FormBuilder,
    private alocacaoService: AlocacaoService,
    private tarefaService: TarefasService,
    private pessoaService: PessoaService
  ) { }

  
  ngOnInit() {
    this.alocacao = this.alocacaoService.pessoaTarefa;
    this.tarefas = this.tarefaService.tarefa;
    this.pessoas = this.pessoaService.pessoa;
    console.log(this.tarefas);
    this.formularioAlocacao = this.formBuilder.group({
      selectTarefa: [null],
      selectPessoa: [null],
    });
    this.alocacao = this.alocacaoService.pessoaTarefa;
  }
  
  OnSubmit(){
    this.alocacaoCriada = new PessoaTarefa;
    //
    var x = this.procuraAlocacao(this.formularioAlocacao.get('selectTarefa').value);
    this.pessoaAdd = new Pessoa;
    this.alocacaoSelecionada = new PessoaTarefa;

    this.pessoaAdd = this.formularioAlocacao.get('selectPessoa').value;
    this.alocacaoService.pessoaTarefa[x].pessoa.push(this.pessoaAdd);

    this.alocacaoSelecionada.pessoa.push(this.pessoaAdd);//Agora Vai!
  
    //
    this.alocacaoCriada = this.alocacaoService.x(this.alocacaoCriada);
    this.alocacaoCriada.id = this.alocacaoService.setId(this.alocacaoService.pessoaTarefa);
    this.alocacaoCriada.pessoa.push(this.formularioAlocacao.get('selectPessoa').value);
    this.alocacaoCriada.tarefa = this.formularioAlocacao.get('selectTarefa').value;

    this.alocacaoService.pessoaTarefa.push(this.alocacaoCriada);

    this.tarefaSelecionada = this.formularioAlocacao.get('selectTarefa').value;
    console.log("Alocacao Selecionaddawdwada:");
    console.log(this.tarefaSelecionada);
    console.log("Alocacao Selecionada:");
    console.log(this.tarefaSelecionada);
  
  }
  
  procuraAlocacao(x: Tarefa):number{
    for(let i=0; i<this.alocacaoService.pessoaTarefa.length; i++){
      if(x == this.alocacaoService.pessoaTarefa[i].tarefa)
        this.GPS = i;
    }
    return this.GPS;
    
  }

}