import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class UtilsService {

  constructor(private toastController: ToastController) { }

  async presentToast(msg='', position) {
    if(!position) position = 'top'
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: position
    });
    toast.present();
  }

}
