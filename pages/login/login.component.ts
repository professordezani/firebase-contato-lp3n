import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { ListaComponent } from '../lista/lista.component';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  public form = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl('')
  });

  constructor(public afAuth: AngularFireAuth,
              public navCtrl: NavController) 
  {}

  entrar() 
  {
    let email = this.form.value.email;
    let senha = this.form.value.senha;

    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then((user) => {
        this.navCtrl.push(ListaComponent);
      })
      .catch((error) => { 
        alert(error.message);
      })
  }

}