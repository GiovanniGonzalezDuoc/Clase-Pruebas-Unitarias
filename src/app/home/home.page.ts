import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string="";
  age:number|null=null;

  errorMessage:string="";
  succesMessage:string="";

  constructor() {}

  //funcion que suma dos elementos y retorna su resultado
  sumar(a:number,b:number){
    return a+b;
  }

  //funcion retornar un texto en mayuscula
  toMayuscula(texto:string):string{
    return texto.toUpperCase();
  }

  onSubmit(){
    this.onValidate();
    if (!this.errorMessage){
      this.succesMessage="Formulario Validado Correctamente";
    }
  }
  onValidate():void{
    if (!this.name || this.name.trim() === ""){
      this.errorMessage="Debe rellenar el campo";
    }else if (!this.age||this.age<=13){
      this.errorMessage="La edad debe ser superior a 13";
    }else{
      this.errorMessage="";
    }

  }

}
