
import { NgModule } from '@angular/core';
import {  BciTableModule, 
          BciWkAlertModule, 
          BciWkButtonModule, 
          BciWkTypographyModule, 
          BciWkStepperModule, 
          BciCardModule,
          BciWkInputTextModule,
          BciFormMsgModule,
          BciWkInputNumberModule,
          BciWkInputMoneyModule,
          BciWkListModule,
          BciWkRadioModule,
          BciSpinnerModule,
          BciWkTooltipModule,
          BciWkCheckboxModule,
          BciAccordionModule

        } from '@bci/webkitbci';


@NgModule({
  exports: [
    BciWkAlertModule,
    BciWkButtonModule,
    BciTableModule,
    BciWkTypographyModule,
    BciWkStepperModule,
    BciCardModule,   
    BciWkButtonModule,
    BciWkInputTextModule,
    BciFormMsgModule,
    BciWkInputNumberModule,
    BciWkInputMoneyModule,
    BciWkListModule,
    BciWkRadioModule,
    BciSpinnerModule,
    BciWkTooltipModule,
    BciWkCheckboxModule,
    BciAccordionModule
  ]
})
export class WebkitModule { }
