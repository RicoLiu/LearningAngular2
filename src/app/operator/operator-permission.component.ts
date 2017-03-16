import { Component, OnInit} from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
    selector: 'app-operator-Component',
    templateUrl: './operator-permission.component.html',
    styleUrls: ['./operator-permission.component.scss'],
    animations: [
        flyIn
    ]
})

export class operatorPermissionComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }
}