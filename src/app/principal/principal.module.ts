import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AnimappModule } from '../animapp/animapp.module';


import { MaterialModule } from '../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HomeComponent,
    SugerenciasComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    AnimappModule,
    MaterialModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    HomeComponent,
    SugerenciasComponent,
    ContactoComponent
  ]
})
export class PrincipalModule { }
