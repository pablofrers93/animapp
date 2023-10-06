import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviarFormulario() {
    // Aquí puedes implementar la lógica para enviar el correo electrónico,
    // como hacer una solicitud HTTP a un servicio de correo o enviarlo por correo electrónico.
    // También puedes utilizar Angular Reactive Forms para una validación más avanzada.

    // Por ahora, simplemente imprime los valores en la consola:
    console.log('Nombre:', this.nombre);
    console.log('Correo Electrónico:', this.correo);
    console.log('Mensaje:', this.mensaje);
  }

}