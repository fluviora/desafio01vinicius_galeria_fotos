import { Component } from '@angular/core';
import { TesteService } from '../services/teste.service';
import { ActionSheetController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public testeService: TesteService, public actionSheetController : ActionSheetController ) {}

  async presentActionSheet(i : number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'O quer deseja fazer?',
      buttons: [{
        text: 'Deletar',
        icon: 'trash',
        handler: () => {
          this.testeService.deleteFoto(i);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }
}
