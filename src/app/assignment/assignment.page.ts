import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';
import { data } from '../../assets/data';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InformationComponent } from '../information/information.component';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {

  public loading: boolean = false
  public showAll: boolean = false
  public showInfo: boolean = false
  
  public answer: any;
  public activeChallenge: any = [];
  public challenges: any;
  constructor(
    private translate: TranslateService, 
    private modalController: ModalController, 
    private router: Router,
    private photoViewer: PhotoViewer) {
  	  this.challenges = data.challenges;
      this.activeChallenge = data.challenges[0];
  }

  async ngOnInit() {
  }

  async openInformationModal() {
  	this.showInfo = true
  	const modal = await this.modalController.create({
	    component: InformationComponent,
	    componentProps: {
        	assignment: data.assignment,
	    },
	    showBackdrop: true,
	    cssClass: 'info-modal'
    });
  	modal.present()
  	await modal.onDidDismiss();
  	this.showInfo = false
  }

  answerChallenge(id) {
  	if(this.activeChallenge.questionType === 'splitscreen' && this.activeChallenge.answer.status === 'correct') {
		return
  	} else {
	  	this.answer = id
	  	if(this.activeChallenge.correctAnswer === id) {
		  	this.activeChallenge.answer = { status: "correct", answer: id }
		  	let correctAnswers = this.challenges.filter((challenge) => challenge.answer.status === 'correct').length
		  	if(correctAnswers === this.challenges.length) {
		  		setTimeout(() => {
		  			this.router.navigate([''], {queryParams: {status: 'finished'}})
		  		}, 1500)
		  	}
	  	} else {
		  	this.activeChallenge.answer = { status: "incorrect", answer: id }
	  	}
    }
  }

  nextChallenge() {
  	this.answer = false
	this.activeChallenge = this.challenges[this.activeChallenge.id]
  }

  previousChallenge() {
  	this.answer = false
  	this.activeChallenge = this.challenges[this.activeChallenge.id - 2]
  }

  async fullScreen() {
  	if(this.activeChallenge.onlineImgSrc) this.photoViewer.show(this.activeChallenge.onlineImgSrc);
  }

  openChallenge(challenge: any) {
  	this.answer = false
    this.activeChallenge = challenge;
    this.showAll = false
  }

}
