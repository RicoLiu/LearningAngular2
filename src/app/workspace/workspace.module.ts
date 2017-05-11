import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';

import { LeftNavComponent } from '../left-nav/left-nav.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { FooterInfoComponent } from '../footer-info/footer-info.component';
import { WorkspaceComponent } from './workspace.component';

import { workspaceRoutes } from './workspace.routes';

@NgModule({
    imports: [
        SharedModule,
        ModalModule.forRoot(),
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [],
    declarations: [
        WorkspaceComponent,
        LeftNavComponent,
        TopMenuComponent,
        FooterInfoComponent
    ],
    providers: [],
})
export class WorkspaceModule { }
