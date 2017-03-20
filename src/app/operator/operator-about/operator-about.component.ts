import { Component } from '@angular/core';

import { OperatorAboutService } from './services/operator-about.service'

@Component({
    selector: 'operator-about',
    templateUrl: './operator-about.component.html',
    providers: [OperatorAboutService]
})

export class OperatorAboutComponent {

}