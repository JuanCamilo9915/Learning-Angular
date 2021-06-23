import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = 'Juan Camilo';
  private apellidos = 'González Duque';
  edad = 12;
  //private rol = 'Estudiante';

  //Métodos get:
  getApellidos(){
    return this.apellidos;
  }
/*
  getRol(){
    return this.rol;
  }
*/

  enviarRol(rol:String){
    return rol;//si comento esta linea igual funciona, interesante jeje
  }
  constructor() {

  }

  ngOnInit(): void {
  }

}
