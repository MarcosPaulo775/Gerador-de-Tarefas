import { Injectable } from '@angular/core';

import { Pessoa } from '../model/pessoa';
import { FormGroup } from '@angular/forms';

@Injectable()
export class PessoaService{

    static pessoa: Pessoa[];

    pessoa = this.getPessoas();
    
    setId(pessoas: Pessoa[]):Number{
        return pessoas.length +1;
    }
    
    getPessoas():Pessoa[]{
        return [
            {id: 1, nome: "Marcos", email: "marcos@abc.com"},
            {id: 2, nome: "abc", email: "ad3@xx.com"},
        ];
    }
}