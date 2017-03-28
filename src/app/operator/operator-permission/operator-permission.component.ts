import { Component, OnInit } from '@angular/core';
import { flyIn } from '../../animations/fly-in';

import { OperatorService } from './services/operator.service'

@Component({
    selector: 'app-operator-Component',
    templateUrl: './operator-permission.component.html',
    styleUrls: ['./operator-permission.component.scss'],
    animations: [
        flyIn
    ],
    providers: [OperatorService]
})

export class OperatorPermissionComponent implements OnInit {
    operators: string[];
    operator: string;
    modify_Operator: string;
    oldOperator: string;
    showOperator: Boolean;
    modifyOperator: Boolean;

    constructor(private operatorService: OperatorService) {
        this.operators = operatorService.getOperatorService();
        this.showOperator = true;
        this.modifyOperator = false;
    }

    ngOnInit() {
        this.operators = this.operatorService.getOperatorService();
    }

    ToggleShow() {
        this.showOperator = !this.showOperator;
    }

    AddOperator(operator) {
        this.operators.push(operator);
        this.operatorService.addOperator(operator);
    }

    DeleteOperator(i) {
        this.operators.splice(i, 1);
        this.operatorService.deleteOperator(i);
    }

    EditOperator(operator) {
        this.modify_Operator = operator;
        this.oldOperator = operator;
        this.modifyOperator = true;
    }

    ModifyOperator() {
        for (let i = 0; i < this.operators.length; i++) {
            if (this.operators[i] === this.oldOperator) {
                this.operators[i] = this.modify_Operator;
                console.log('modify  operator ............');
                this.operatorService.modify(this.modify_Operator, i);
            }
        }
    }

    doSomething(newValue) {
        console.log(newValue);
        this.modifyOperator = newValue !== '';
    }


}