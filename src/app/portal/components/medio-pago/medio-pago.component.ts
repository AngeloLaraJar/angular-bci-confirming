import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Confirmar } from '../../interfaces/portal.interface';

@Component({
  selector: 'app-medio-pago',
  templateUrl: './medio-pago.component.html',
  styleUrls: ['./medio-pago.component.css']
})
export class MedioPagoComponent implements OnInit {

  @Output() dataConfirmacion: EventEmitter<Confirmar[]> = new EventEmitter();

  radioForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.radioForm = fb.group({
      radioTest: [{ value: false }]
    });
  }

  
  ngOnInit(): void {
   
  }
  
  onRadio() {
    const valorRadio = this.radioForm.get('radioTest')?.value;

    

    const confirmar: Confirmar[] = [
      {
        title: 'Medio de pago',
        valor: valorRadio === 'otro'? 'Cuenta corriente de otros bancos'
        :  valorRadio === 'ctaBci'? 'Cuenta corriente BCI'
        :  valorRadio === 'valeVista'? 'Vale vista por oficina C/Liq'
        : ''
      },
      {
        title: 'Monto a financiar',
        valor: 401268
      },
      {
        title: 'Tasa de descuento',
        valor: 0
      },
      {
        title: 'Diferencia de precio',
        valor: 0
      },
      {
        title: 'Comisión por operación',
        valor: 2
      },
      {
        title: ' IVA Comisión por operación',
        valor: 0
      },

      {
        title: 'Comisión por forma de pago',
        valor: 0
      },
      {
        title: 'IVA comisión forma de pago',
        valor: 0
      },
      {
        title: 'Monto final Anticipar',
        valor: 401265
      }

    ]
     

    this.dataConfirmacion.emit(confirmar);
  }
}
