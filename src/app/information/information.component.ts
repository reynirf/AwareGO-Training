import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {

  public videoURL:string = ''
  public assignment: any;
  constructor(navParams: NavParams, private modalCtrl: ModalController, public sanitizer: DomSanitizer) { 
  	this.assignment = navParams.get('assignment')
  	if(!this.assignment) {
  		this.dismiss()
  	}
  	if(this.assignment.videoID) {
  		this.videoURL = 'https://www.youtube.com/embed/' + this.assignment.videoID
  	}

  	console.log('assignment: ', this.assignment)
  }

  ngOnInit() {}


  dismiss() {
    this.modalCtrl.dismiss();
  }

  updateVideoUrl(id: string) {
    let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
	}
}
