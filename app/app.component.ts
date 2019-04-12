import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

// 1. IMPORTAR  CLASSE
import { LoginComponent } from 
  '../pages/login/login.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // 2. DEFINIR CLASSE INICIAL
  rootPage:any = LoginComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {

    });
  }
}
