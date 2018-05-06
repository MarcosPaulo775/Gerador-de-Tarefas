import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Tarefa } from '../../core/model/tarefa';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  formularioTarefas: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioTarefas = this.formBuilder.group({
      nome: [null],
      descricao: [null],
      dateInicio: [null],
      dateFim: [null]
    });
  }

  OnSubmit(){
    console.log(this.formularioTarefas.value);
  }

}
