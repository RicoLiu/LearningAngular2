import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule, ModalModule } from 'ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { mapRoutes } from './map.routes';
import { MapComponent } from './map.component';
import { GaodeMapComponent } from './gaode-map/gaode-map.component';
import { AmapComponent } from './gaode-map/amap/amap.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(mapRoutes)
  ],
  declarations: [
    MapComponent,
    GaodeMapComponent,
    AmapComponent
  ]
})
export class MapModule { }
