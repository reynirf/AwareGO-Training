import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  assignment() {
  	this.router.navigate(['assignment'])
  }

}
