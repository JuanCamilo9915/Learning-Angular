import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  message = '';
  message2 = '';
  registrado = false;
  nombre: String = '';
  apellido: String = '';

  registrarUsuario(){
    this.registrado = true;
    this.message = `Se ha registrado el usuario`;
    this.message2 = 'Correctamente';
  }
}
