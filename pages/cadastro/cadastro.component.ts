import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  public formulario = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl('')
  });

  constructor(public db: AngularFirestore,
              public navCtrl: NavController)
  {
    //TODO: ...
  }


  salvar()
  {
    let nome = this.formulario.value.nome;
    let email = this.formulario.value.email;

    let contato = {
      nome: nome,
      email: email
    };

    this.db.collection('contatos').add(contato);

    this.navCtrl.pop();
  }

}
