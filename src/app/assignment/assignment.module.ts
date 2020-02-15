import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AssignmentPageRoutingModule } from './assignment-routing.module';

import { AssignmentPage } from './assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AssignmentPageRoutingModule
  ],
  declarations: [AssignmentPage]
})
export class AssignmentPageModule {}
