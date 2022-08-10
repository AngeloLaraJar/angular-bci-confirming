import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnticipoComponent } from './pages/anticipo/anticipo.component';
import { MedioPagoComponent } from './pages/medio-pago/medio-pago.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';
import { ComprobanteComponent } from './pages/comprobante/comprobante.component';



@NgModule({
  declarations: [
    AnticipoComponent,
    MedioPagoComponent,
    ConfirmacionComponent,
    ComprobanteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnticipoComponent,
    ConfirmacionComponent,
    ComprobanteComponent,
    MedioPagoComponent
  ]
})
export class PortalModule { }
