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

  alocacaoSelecionada: PessoaTarefa;
  pessoaAdd: Pessoa;

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


  OnSubmit(): void{
    
    this.pessoaAdd = this.selectPessoa();

    if(!this.alocacaoService.isPessoaEscalada(this.pessoaAdd.id)){
      this.alocacaoSelecionada.pessoa.push(this.pessoaAdd);
    }else{
      alert("ESTÁ PESSOA JÁ ESTAVA ALOCADA!!");
    }

    console.log("Alocacao Atualizada:");
    console.log(this.alocacaoSelecionada);
    

  }

  selectAlocacao(){

    this.alocacaoSelecionada = new PessoaTarefa;

    var x = this.formularioAlocacao.get('selectTarefa').value;
    this.alocacaoSelecionada = this.alocacaoService.procuraAlocacao(x);

    this.alocacaoService.alocacaoSelecionada = this.alocacaoSelecionada;

    console.log("Alocacao Selecionada:");
    console.log(this.alocacaoSelecionada);

  }

  selectPessoa(): Pessoa{

    this.pessoaAdd = new Pessoa;

    var x = this.formularioAlocacao.get('selectPessoa').value;
    this.pessoaAdd = this.pessoaService.procuraPessoa(x);

    console.log("Pessoa Selecionada:");
    console.log(this.pessoaAdd);

    return this.pessoaAdd;

  }

}