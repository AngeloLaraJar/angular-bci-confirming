import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BciTableModule, BciWkAlertModule, BciWkButtonModule } from '@bci/webkitbci';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BciWkAlertModule,
    BciWkButtonModule,
    BciTableModule
  ],
  exports: [
    BciWkAlertModule,
    BciWkButtonModule,
    BciTableModule
  ]
})
export class WebkitModule { }
