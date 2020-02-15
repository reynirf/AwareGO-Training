import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';
import { Storage } from '@ionic/storage'
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
  	private translate: TranslateService,
    private storage: Storage, 
    private platform: Platform
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

  ngOnInit() {
  }




  changeLanguage() {
  	if(this.translate.currentLang == 'is'){
      this.translate.use('en')
    } else if(this.translate.currentLang == 'en'){
      this.translate.use('is')
    } else {
      this.translate.use('en')
    }
	if(this.translate.currentLang !== null) this.storage.set('lang', this.translate.currentLang)
  }
}
