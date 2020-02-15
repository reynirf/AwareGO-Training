import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular'
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  slideOpts = {
  	effect: 'flip',
  	zoom: {
		toggle: false
  	},
  	speed: 400,
  };
  @ViewChild('slides') slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {
  }  


  assignment() {
  	this.router.navigate(['assignment'])
  }


  next() {
	this.slides.isEnd().then((isEnd:any) => {
		if(isEnd) {
			this.assignment()
		} else {
			this.slides.slideNext()
		}
	}).catch(() => {
		this.assignment()
	})
  }

}
