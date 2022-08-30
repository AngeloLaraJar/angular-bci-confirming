import { Component, OnInit } from '@angular/core';
import { TablaAnticipos, TableLabel, Confirmar } from '../../interfaces/portal.interface';

@Component({
  selector: 'app-anticipo',
  templateUrl: './anticipo.component.html',
  styleUrls: ['./anticipo.component.css']
})
export class AnticipoComponent implements OnInit {


  stepsStates = [];
  isDisabledMedioPago: boolean = false;
  isDisabledAnticipo: boolean = false;
  medioPago: string = '';
  dataConfirm!: Confirmar[];
  tableLabel: TableLabel[] = [
    {title: 'Grupo'},
    {title: 'Pagador'},
    {title: 'Fecha pago original'},
    {title: 'Monto original'},
    {title: 'Monto utilizado'},
    {title: 'Saldo disponible'},
    {title: 'Monto seleccionado'}
  ];

  tablaAnticipos: TablaAnticipos[] = [
    { grupo: 9572377,
      rut_pagador:'91755000-K',
      pagador:'Marlboro',
      fecha_pago_original:'19/07/2018',
      monto_original:401268,
      monto_utilizado:0,
      saldo_disponible:401268,
      monto_seleccionado:0,
      checked: false
    },
    { grupo: 9997967,
      rut_pagador:'96809780-6',
      pagador:'Servicios de salud integrados S.A',
      fecha_pago_original:'21/07/2018',
      monto_original:18725567,
      monto_utilizado:12353003,
      saldo_disponible:6372564,
      monto_seleccionado:0,
      checked: false
    },
    { grupo: 95766652,
      rut_pagador:'95635221-7',
      pagador:'Cencosud',
      fecha_pago_original:'25/07/2018',
      monto_original:756000,
      monto_utilizado:0,
      saldo_disponible:756000,
      monto_seleccionado:0,
      checked: true
    },
    
  ]

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    
    
  }

  getStepperStates(e: any) {
    this.stepsStates = e.join(', ');
  }

  stepperChangeIda(miStepper: any, type: string) {

    switch (type) {
      case 'anticipo':
          miStepper.changeStep('editing', 2);
          break;
      case 'medioPago':
          miStepper.changeStep('editing', 3);
          break;
      case 'confirmar':
          miStepper.changeStep('editing', 4);
          break;
      case 'comprobante':
          miStepper.finishStepper()
          break;
      default:
          break;
    }
  }

  rechazar() {
    window.location.reload();
  }


  whenActive(e: any) {
     
  }

  onDismiss(e: any) {

  }




  getDataConfirmacion(data: Confirmar[]) {
    if (data) {
      this.dataConfirm = data;
      console.log("this.dataConfirm",this.dataConfirm)
      this.dataConfirm.forEach(d => {
        if (d.title === 'Medio de pago') {
          this.isDisabledMedioPago = true;
        }
      })
      
  
    }
    
  }

  getSelectedTable(value: boolean) {
    this.isDisabledAnticipo = value;
  }
  

}
