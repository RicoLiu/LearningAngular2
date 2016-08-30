import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";
import { HeroesComponent } from './heroes.component';
import { HeroesDetailComponent } from './hero-detail.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMath: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroesDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
