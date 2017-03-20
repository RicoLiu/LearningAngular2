import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ng2-bootstrap';

import { OperatorAboutComponent } from './operator-about/operator-about.component';
import { OperatorPermissionComponent } from './operator-permission/operator-permission.component';
import { OperatorService } from './operator-permission/services/operator.service';
import { OperatorAboutService } from './operator-about/services/operator-about.service';

import { operatorRoutes } from './operator.routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        PaginationModule.forRoot(),
        RouterModule.forChild(operatorRoutes)
    ],
    declarations: [
        OperatorPermissionComponent,
        OperatorAboutComponent
    ],
    providers: [
        OperatorService,
        OperatorAboutService
    ]
})
export class OperatorModule { }
