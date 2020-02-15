import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {


  public challenge: any;
  constructor(navParams: NavParams, private modalCtrl: ModalController) { 
  	this.challenge = navParams.get('challenge')
  	if(!this.challenge) {
  		this.dismiss()
  	}
  	console.log('challenge: ', this.challenge)
  }

  ngOnInit() {}


  dismiss() {
    this.modalCtrl.dismiss();
  }
}
