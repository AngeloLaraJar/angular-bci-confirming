import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnticipoComponent } from './pages/anticipo/anticipo.component';
import { MedioPagoComponent } from './components/medio-pago/medio-pago.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { ComprobanteComponent } from './components/comprobante/comprobante.component';
import { WebkitModule } from '../webkit/webkit.module';
import { BciWkModalModule } from '@bci/webkitbci';
import { ModalGrupoComponent } from './components/modal-grupo/modal-grupo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AnticipoComponent,
    MedioPagoComponent,
    ConfirmacionComponent,
    ComprobanteComponent,
    ModalGrupoComponent
  ],
  imports: [
    CommonModule,
    WebkitModule,
    BciWkModalModule,
    ReactiveFormsModule
  ],
  exports: [
    AnticipoComponent,
    ConfirmacionComponent,
    ComprobanteComponent,
    MedioPagoComponent
  ]
})
export class PortalModule { }
