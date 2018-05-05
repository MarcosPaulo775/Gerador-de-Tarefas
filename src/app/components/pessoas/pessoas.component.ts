import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../../core/model/pessoa';

@Component({
	selector: 'app-pessoas',
	templateUrl: './pessoas.component.html',
	styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	 pessoas: Pessoa[] = [ 
		{ id: 1, nome: "Mr. Nice", email:  "bla@hotmail.com"},
		{ id: 2, nome: "Marcos", email: "bla@gmail.com"},
		{ id: 3, nome: "Leonardo", email: "bla@yahoo.com"},
	 ];
	
}
