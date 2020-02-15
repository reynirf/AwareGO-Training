import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';
import { challenges } from '../../assets/challenges';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InformationComponent } from '../information/information.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {

  public loading: boolean = false
  public showAll: boolean = false
  public showInfo: boolean = true
  
  public activeChallenge: any = [];
  public challenges: any;
  constructor(
    private translate: TranslateService, 
    private modalController: ModalController, 
    private router: Router) {
  	  this.challenges = challenges;
      this.activeChallenge = challenges[0];
  	  this.openInformationModal();
  }

  async ngOnInit() {
  }

  async openInformationModal() {
  	this.showInfo = true
  	const modal = await this.modalController.create({
	    component: InformationComponent,
	    componentProps: {
        challenge: this.activeChallenge,
	    },
	    showBackdrop: true,
	    cssClass: 'info-modal'
    });
  	await modal.present()
  	await modal.onDidDismiss();
  	this.showInfo = false
  }

  openAssignment(challenge: any) {
    this.activeChallenge = challenge;
    this.showAll = false
    console.log(challenge);
  }

}
