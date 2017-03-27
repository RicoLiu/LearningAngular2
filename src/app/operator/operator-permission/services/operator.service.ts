import { Injectable } from '@angular/core';
import { Init } from '../init-operator'

@Injectable()
export class OperatorService extends Init {
    constructor() {
        super();
        this.load();
    }

    getOperatorService(): string[] {
        const operators = JSON.parse(localStorage.getItem('operators'));

        return operators;
    }
}
