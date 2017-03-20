
import { OperatorPermissionComponent } from './operator-permission/operator-permission.component';
import { OperatorAboutComponent } from './operator-about/operator-about.component'
import { OperatorMainComponent } from './operator-main/operator-main.component'

export const operatorRoutes = [
    {
        path:'',
		component:OperatorMainComponent,
	    children: [
	    	{ path: 'list', component: OperatorPermissionComponent },
	    	{ path: 'about', component: OperatorAboutComponent }
	    ]
    }
];