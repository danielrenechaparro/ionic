import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  // se ponen todas las variables a usar dentro del componente:
  nombre_variable:string = "";
  constructor(public navCtrl: NavController) {

  }

  redirigir(){
    this.navCtrl.push(PrincipalPage); // como estoy usando una variable de la clase (atributo) uso this.nombre_attr. con push le indico el nombre del componente a usar
    this.navCtrl
  }

}
