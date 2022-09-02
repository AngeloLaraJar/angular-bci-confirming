import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnticipoComponent } from './pages/anticipo/anticipo.component';
import { MedioPagoComponent } from './components/medio-pago/medio-pago.component';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { ComprobanteComponent } from './components/comprobante/comprobante.component';
import { WebkitModule } from '../webkit/webkit.module';
import { BciWkModalModule } from '@bci/webkitbci';
import { ModalGrupoComponent } from './components/modal-grupo/modal-grupo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPagadoresComponent } from './components/tabla-pagadores/tabla-pagadores.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AnticipoComponent,
    MedioPagoComponent,
    ConfirmacionComponent,
    ComprobanteComponent,
    ModalGrupoComponent,
    TablaPagadoresComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    WebkitModule,
    BciWkModalModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AnticipoComponent,
    ConfirmacionComponent,
    ComprobanteComponent,
    MedioPagoComponent,
    TablaPagadoresComponent
  ]
})
export class PortalModule { }
