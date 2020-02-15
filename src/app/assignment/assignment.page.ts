import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe, LangChangeEvent } from '@ngx-translate/core';
import { challenges } from '../../assets/challenges'

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {



  constructor(private translate: TranslateService) { }

  async ngOnInit() {
  	console.log('challenges: ', challenges)
  }

}
