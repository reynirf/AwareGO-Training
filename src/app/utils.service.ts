import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable()
export class UtilsService {

  constructor(private toastController: ToastController) { }

  async presentToast(msg='', position, duration=2000) {
    if(!position) position = 'top'
    const toast = await this.toastController.create({
      message: msg,
      duration: duration,
      position: position,
      color: 'dark'
    });
    toast.present();
  }

}
