import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule, DatepickerModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTableComponent } from './user-table/user-table.component';
import { FormControlComponent } from './user-profile/dynamic-form/form-control.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserComponent,
    UserProfileComponent,
    UserTableComponent,
    FormControlComponent
  ]
})
export class UserModule { }
