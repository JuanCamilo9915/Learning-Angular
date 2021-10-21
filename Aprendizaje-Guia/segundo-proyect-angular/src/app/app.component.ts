import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mini Calculadora';
  /*num1: number = 0;
  num2: number = 0;*/
  //Se puede dejar como number, si en el campo de texto se le asigna de tipo number.
  num1: string = "0";
  num2: string = "0";
  result: number = 0;

  //Métodos
  sumar():void{
    //this.result = this.num1 + this.num2; esto concatena
    this.result = parseInt(this.num1) + parseInt(this.num2);
  }

  restar():void{
    //this.result = this.num1 + this.num2; esto concatena
    this.result = parseInt(this.num1) - parseInt(this.num2);
  }

  multiplicar():void{
    //this.result = this.num1 + this.num2; esto concatena
    this.result = parseInt(this.num1) * parseInt(this.num2);
  }

  dividir():void{
    //this.result = this.num1 + this.num2; esto concatena
    this.result = parseInt(this.num1) / parseInt(this.num2);
  }

}
