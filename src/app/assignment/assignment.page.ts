import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';
import { challenges } from '../../assets/challenges'
import { ModalController } from '@ionic/angular';
import { InformationComponent } from '../information/information.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {


  public activeChallenge: any;
  constructor(private translate: TranslateService, private modalController: ModalController) { 
  	console.log('challenges: ', challenges)
  	this.activeChallenge = challenges[0]
  	this.openInformationModal()
  }

  async ngOnInit() {
  }

  async openInformationModal() {
  	const modal = await this.modalController.create({
    component: InformationComponent,
    componentProps: {
      challenge: this.activeChallenge
    },
    showBackdrop: true,
    cssClass: 'info-modal'
  });
  return await modal.present()
  }

}
