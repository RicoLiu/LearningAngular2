import { Component, OnInit} from '@angular/core';
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
    operators: string[]

    constructor(operatorService: OperatorService) { 
        this.operators = operatorService.getOperatorService()
    }

    ngOnInit() {

    }
}