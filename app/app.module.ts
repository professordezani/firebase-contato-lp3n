import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// 1. IMPORTAR CLASSE
import { ListaComponent } from 
  '../pages/lista/lista.component';

import { CadastroComponent } from '../pages/cadastro/cadastro.component';

import { LoginComponent } from '../pages/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FormsModule } from '@angular/forms';

// Configurações do Firebase:
const config = {
    apiKey: "AIzaSyBa3MPbFLcHF4PArj0HJ-Lyr6rwCgoHla4",
    authDomain: "contato-app-lp3.firebaseapp.com",
    databaseURL: "https://contato-app-lp3.firebaseio.com",
    projectId: "contato-app-lp3",
    storageBucket: "contato-app-lp3.appspot.com",
    messagingSenderId: "228428752046"
};


@NgModule({
  declarations: [
    MyApp,
    ListaComponent,
    CadastroComponent,
    LoginComponent
    // 2. ADICIONAR O NOME CLASSE AQUI
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaComponent,
    CadastroComponent,
    LoginComponent
    // 3. ADICIONAR O NOME DA CLASSE AQUI    
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
