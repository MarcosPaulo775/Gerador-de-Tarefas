import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Pessoa } from '../../core/model/pessoa';
import { PessoaService } from '../../core/service/pessoas.service';

@Component({
	selector: 'app-pessoas',
	templateUrl: './pessoas.component.html',
	styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
	
	formulario: FormGroup;
	pessoas: Pessoa[];
	pessoa: Pessoa;

	constructor(
		private formBuilder: FormBuilder,
		private pessoaService: PessoaService,
	) {}

	ngOnInit() {
		this.pessoas = this.pessoaService.pessoa;
		this.formulario = this.formBuilder.group({
			nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ],
			email: [null, [Validators.required, Validators.email] ]
		});
	}
	
	OnSubmit(){
		if(this.formulario.valid){
			this.pessoa = new Pessoa();

			this.pessoa.id = this.pessoaService.setId(this.pessoas);
			this.pessoa.nome = this.formulario.get('nome').value;
			this.pessoa.email = this.formulario.get('email').value;
			this.pessoaService.pessoa.push(this.pessoa);
			console.log("OBJETO:");
			console.log(this.pessoa);
			console.log("VETOR:")
			console.log(this.pessoas);
		}
		else{
			console.log("ERROR");
		}

	}
	
}
