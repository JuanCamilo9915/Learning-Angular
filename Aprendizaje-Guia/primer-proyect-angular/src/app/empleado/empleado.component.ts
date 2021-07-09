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
  //Propiedades de Binding:
  cajaCapturaTexto = false;//Recibe como valores true o false.
  usuRegis = true;//Recibe como valores true o false.
  textoInfoRegistrado = 'No hay usuarios registrados en el sistema';

  //Métodos get:
  getApellidos() {
    return this.apellidos;
  }

  getUsuRegis() {
    this.usuRegis = false;
  }

  //Métodos set:
  setUsuRegisEvent() {//Trabajando con Eventos en Angular.
    //alert('Usuario Registrado');
    this.textoInfoRegistrado = 'Se ha registrado un usuario en el sistema';
  }

  setUsuRegisEvent2(eventRegis: Event) {//Trabajando con Eventos en Angular.
    //alert('Usuario Registrado');
    //this.textoInfoRegistrado = 'Se ha registrado un usuario en el sistema 2';
    //alert("Capturando el evento: " + eventRegis.target);
    if ((<HTMLInputElement>eventRegis.target).value == 'si') {
      this.textoInfoRegistrado = 'Se ha registrado un usuario en el sistema 2';
    }else{
      this.textoInfoRegistrado = 'Gracias por visitarnos';
    }
  }
  /*
    getRol(){
      return this.rol;
    }
  */

  enviarRol(rol: String) {
    return rol;//si comento esta linea igual funciona, interesante jeje
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
