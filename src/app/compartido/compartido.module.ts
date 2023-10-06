import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MaterialModule } from '../material/material.module';
import { AppRouterModule } from '../app-router.module';

@NgModule({
  declarations: [
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRouterModule
  ],
  exports:[
    CabeceraComponent
  ]
})
export class CompartidoModule { }
