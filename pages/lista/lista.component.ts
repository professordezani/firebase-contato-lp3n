import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';
import { CadastroComponent } from '../cadastro/cadastro.component';

// 1. IMPORTAR A CLASSE DO SERVIÇO:
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  templateUrl: './lista.component.html'
})
export class ListaComponent 
{
  public lista: Observable<any[]>;

  // 2. INJETAR O SERVIÇO NO CONSTRUTOR:
  constructor(public db: AngularFirestore,
              public navCtrl: NavController)
  {
    this.lista = db.collection("contatos").valueChanges();
  }


  adicionar()
  {
    this.navCtrl.push(CadastroComponent);
  }

}