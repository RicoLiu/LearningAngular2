
import { OperatorPermissionComponent } from './operator-permission/operator-permission.component';
import { OperatorAboutComponent } from './operator-about/operator-about.component'
import { OperatorMainComponent } from './operator-main/operator-main.component'
import { OperatorDashBoardComponent } from './operator-dashboard/operator-dashboard.component';

export const operatorRoutes = [
    {
        path:'',
		component:OperatorMainComponent,
	    children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{ path: 'dashboard', component: OperatorDashBoardComponent},
	    	{ path: 'list', component: OperatorPermissionComponent },
	    	{ path: 'about', component: OperatorAboutComponent },
			{ path: '**', redirectTo: 'dashboard'}
	    ]
    }
];