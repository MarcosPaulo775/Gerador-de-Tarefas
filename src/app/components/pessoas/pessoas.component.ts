import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Pessoa } from '../../core/model/pessoa';
import { PessoaService } from '../../core/service/pessoas.service';
import { AlocacaoService } from '../../core/service/alocacao.service';

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
		private alocacaoService: AlocacaoService,
	) { }

	ngOnInit() {
		this.pessoas = this.pessoaService.pessoa;
		this.formulario = this.formBuilder.group({
			nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
			email: [null, [Validators.required, Validators.email]]
		});
	}

	OnSubmit() {
		if (this.formulario.valid) {
			this.pessoa = new Pessoa();

			this.pessoa.id = this.pessoaService.setId(this.pessoas);
			this.pessoa.nome = this.formulario.get('nome').value;
			this.pessoa.email = this.formulario.get('email').value;

			if (!this.pessoaService.pessoaExiste(this.pessoa)) {
				this.pessoaService.pessoa.push(this.pessoa);
				this.formulario.reset();
			}
			else {
				alert("Está pessoa já está cadastrada!");
			}
			/*
			console.log("OBJETO:");
			console.log(this.pessoa);
			console.log("VETOR:")
			console.log(this.pessoas);
			*/
		}
		else {
			console.log("ERROR");
		}

	}

	remove(pessoa: Pessoa) {
		var id = this.pessoaService.pessoa.indexOf(pessoa);

		if (id != -1) {
			this.pessoaService.pessoa.splice(id, 1);
		}
		//console.log(this.pessoaService.pessoa);
		//console.log("id que veio",id);

		var i = 0;

		for (let entry of this.pessoaService.pessoa) {
			this.pessoaService.pessoa[i].id = i;
			i = i + 1;
		}

		for (var a = 0; a < this.alocacaoService.pessoaTarefa.length; a++) {
			var id2 = this.alocacaoService.pessoaTarefa[a].pessoa.indexOf(pessoa);

			if (id2 != -1) {
				this.alocacaoService.pessoaTarefa[a].pessoa.splice(id2, 1);
			}
		}

	}


}
