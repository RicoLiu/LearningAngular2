import { RouterModule } from '@angular/router';

import { OperatorPermissionComponent } from './operator-permission/operator-permission.component';
import { OperatorAboutComponent } from './operator-about/operator-about.component'

export const operatorRoutes = [
    {
        path: 'operator',
        component: OperatorPermissionComponent
    },
    {
        path: 'about',
        component: OperatorAboutComponent
    }
];