import { Injectable } from '@angular/core';
import { Init } from '../init-operator';

@Injectable()
export class OperatorService extends Init {
    constructor() {
        super();
        this.load();
    }

    getOperatorService(): string[] {
        let operators = JSON.parse(localStorage.getItem('operators'));

        return operators;
    }

    addOperator(operator) {
        let operators = JSON.parse(localStorage.getItem('operators'));
        operators.push(operator);

        localStorage.setItem('operators', JSON.stringify(operators));
    }

    deleteOperator(i) {
        let operators = JSON.parse(localStorage.getItem('operators'));
        operators.splice(i, 1);

        localStorage.setItem('operators', JSON.stringify(operators));
    }

    modify(operator, i) {
        let operators = JSON.parse(localStorage.getItem('operators'));
        operators[i] = operator;

        localStorage.setItem('operators', JSON.stringify(operators));
    }
}
