import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';
import { challenges } from '../../assets/challenges';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {

  public loading: boolean = false

  constructor(
  	private translate: TranslateService,
    private storage: Storage, 
    private platform: Platform,
    private router: Router
	) {
	this.translate.setDefaultLang('en')
  	const self = this
  	this.platform.ready().then(() => {
    	self.storage.get('lang').then((lang: string) => {
	      self.translate.use(lang)
	    }).catch(() => {
	      self.translate.use('en')
	    })
	})
  }

  viewAssignments() {
    this.loading = true;
    this.router.navigate(['assignments']);
  }

  async ngOnInit() {
  	console.log('challenges: ', challenges)
  }

}
