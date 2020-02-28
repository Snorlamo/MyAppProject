import { Component } from '@angular/core';
import { Platform, ActionSheetController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public alertController: AlertController
  ) {}

  async openMenu() {
    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [

        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },

        {
          text: 'share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },

        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },

        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-empty' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },

        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert!!',
      subHeader: 'Just a test alert',
      message: 'Nothing to worry about here!',
      buttons: ['Whew']
    });

    await alert.present();
  }


}

