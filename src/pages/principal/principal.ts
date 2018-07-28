import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage { // clase principal

  constructor(public navCtrl: NavController, public navParams: NavParams) { // Constructor
  }

  ionViewDidLoad() { // metodo creado
    console.log('ionViewDidLoad PrincipalPage');
  }

}
