import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import {FormsModule} from '@angular/forms'; // Ya que lo voy a usar en todas los componentes lo importo desde aca.

@NgModule({
  declarations: [ // componentes a tener disponibles
    MyApp,
    HomePage,
    PrincipalPage // tengo que indicar que lo voy a tener disponible
  ],
  imports: [  // todo lo que importe desde aca, estara disponible para todas los componentes, pero deja mas lenta la app, por lo cual es mejor en el componente cuando el lo necesite.
    BrowserModule, // los modulos se cargan en el orden, por lo cual los mas importantes deben ser los primeros.
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ // componentes a usar
    MyApp,
    HomePage,
    PrincipalPage // Digo que lo voy a usar. Nombre de la clase principal de la pagina creada
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
