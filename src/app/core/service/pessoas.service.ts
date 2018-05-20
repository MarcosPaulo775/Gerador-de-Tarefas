import { Injectable } from '@angular/core';

import { Pessoa } from '../model/pessoa';
import { FormGroup } from '@angular/forms';

@Injectable()
export class PessoaService {

    static pessoa: Pessoa[];

    pessoa = new Array<Pessoa>();

    setId(pessoas: Pessoa[]): number {
        return pessoas.length;
    }

    procuraPessoa(x: number): Pessoa {

        for (let i = 0; i < this.pessoa.length; i++) {
            if (x == this.pessoa[i].id)
                return this.pessoa[i];
        }
    }

    pessoaExiste(x: Pessoa): boolean {
        for (var i = 0; i < this.pessoa.length; i++) {
            if (x.nome == this.pessoa[i].nome && x.email == this.pessoa[i].email) {
                return true;
            }
        }
        return false;
    }

}