import { Component } from '@angular/core';
import { AnimappService } from '../animapp.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  buscar: string = '';

  constructor(private animapService: AnimappService){}

  busqueda(){
    this.animapService.buscarGifs(this.buscar);
    this.buscar = '';
  }
}
