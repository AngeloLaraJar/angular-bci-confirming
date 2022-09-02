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



  filterProveedor = '';

  tableLabel1: TableLabel[] = [
    {title: 'Rut Proveedor'},
    {title: 'Razón social proveedor'},
    {title: 'Banco abono'},
    {title: 'Monto a pagar'},
    {title: 'N° de documentos'},
    {title: 'Fecha ingreso'},
    {title: 'Hora ingreso'},
    {title: 'Firma LBTR'},
    {title: 'Re-ceder'},
    
    
  ];

  tableLabel2: TableLabel[] = [
    {title: 'Rut Proveedor'},
    {title: 'Razón social proveedor'},
    {title: 'Estado'},
    {title: 'Banco abono'},
    {title: 'Monto a pagar'},
    {title: 'Cantidad de documentos'},
    {title: 'Fecha ingreso'},
    {title: 'Hora ingreso'},
    {title: 'Firma LBTR'},
    {title: 'Re-ceder'}
  ];

  tableLabel3: TableLabel[] = [
    {title: 'Estado'},
    {title: 'Rut Proveedor'},
    {title: 'Razón social proveedor'},
    {title: 'Banco abono'},
    {title: 'Monto a pagar'},
    {title: 'N° de documentos'},
    {title: 'Fecha ingreso'},
    {title: 'Hora ingreso'},
    {title: 'Firma LBTR'},
    {title: 'Re-ceder'},
    
    
  ];


  ingresadas: any[] = [

    { id: 9572377,
      rut_proveedor:'78254124-1',
      razon_social_proveedor:'Ingenieros exitosos',
      banco_abono:'Bci',
      monto_pagar:125000000,
      cantidad_documentos:12,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:05:03',
      estado: 'ingresadas'
    },
    { id: 957237324,
      rut_proveedor:'96568780-2',
      razon_social_proveedor:'Extracciones el solar',
      banco_abono:'Banco itaú',
      monto_pagar:1958000000,
      cantidad_documentos:3,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:25:05',
      estado: 'ingresadas'
    },
    { id: 76879377,
      rut_proveedor:'73581654-2',
      razon_social_proveedor:'Surcos el placer',
      banco_abono:'Banco de chile',
      monto_pagar:658321471,
      cantidad_documentos:6,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:25:10',
      estado: 'ingresadas'
    },
    { id: 7687912097,
      rut_proveedor:'71475455-k',
      razon_social_proveedor:'Maquinaria el pesar',
      banco_abono:'Banco estado',
      monto_pagar:2356581000,
      cantidad_documentos:10,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:26:05',
      estado: 'ingresadas'
    }

  ]

  rechazadas: any[] = [


      { id: 2342659,
        rut_proveedor:'96568780-2',
        razon_social_proveedor:'Ingeniería minera especializada',
        banco_abono:'Banco de chile',
        monto_pagar:250467897,
        cantidad_documentos:10,
        fecha_ingreso:'08/08/2022',
        hora_ingreso:'09:15:03',
        estado: 'rechazadas'
      },
      { id: 9498237324,
        rut_proveedor:'76123456-k',
        razon_social_proveedor:'Maquinaria celta',
        banco_abono:'Banco santander',
        monto_pagar:670000000,
        cantidad_documentos:12,
        fecha_ingreso:'08/08/2022',
        hora_ingreso:'10:03:05',
        estado: 'rechazadas'
      },
      { id: 7698377,
        rut_proveedor:'77727456-3',
        razon_social_proveedor:'Transportes helip',
        banco_abono:'Banco scotiabank',
        monto_pagar:52500000,
        cantidad_documentos:5,
        fecha_ingreso:'08/08/2022',
        hora_ingreso:'10:15:10',
        estado: 'rechazadas'
      }

    ]

  desembolsadas: any[] = [

    { id: 768452097,
      rut_proveedor:'78254124-1',
      razon_social_proveedor:'Ingenieros exitosos',
      banco_abono:'Bci',
      monto_pagar:125000000,
      cantidad_documentos:12,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:05:05',
      estado: 'desembolsadas'
    },
    { id: 52097,
      rut_proveedor:'75782125-3',
      razon_social_proveedor:'Extracciones el solar',
      banco_abono:'Banco itaú',
      monto_pagar:1958000000,
      cantidad_documentos:3,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:24:05',
      estado: 'desembolsadas'
    }

  ]

  reCedidas: any[] = [

    { id: 435878435,
      rut_proveedor:'96568780-2',
      razon_social_proveedor:'Ingeniería minera especializada',
      banco_abono:'Banco de chile',
      monto_pagar:250365880,
      cantidad_documentos:10,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:15:05',
      estado: 're-cedidas'
    }

  ]

  cerradas: any[] =[

    { id: 436778435,
      rut_proveedor:'96568780-2',
      razon_social_proveedor:'Ingeniería minera especializada',
      banco_abono:'Banco de chile',
      monto_pagar:250365880,
      cantidad_documentos:10,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:15:05',
      estado: 'cerradas'
    },
    { id: 949837324,
      rut_proveedor:'76123456-k',
      razon_social_proveedor:'Maquinaria celta',
      banco_abono:'Banco santander',
      monto_pagar:670000000,
      cantidad_documentos:12,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:03:05',
      estado: 'cerradas'
    },
    { id: 7690008377,
      rut_proveedor:'77727456-3',
      razon_social_proveedor:'Transportes helip',
      banco_abono:'Banco scotiabank',
      monto_pagar:52500000,
      cantidad_documentos:5,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:15:10',
      estado: 'cerradas'
    }

  ]
  abonadas: any[] = [

      { id: 2008377,
        rut_proveedor:'68558874-2',
        razon_social_proveedor:'Químicos la azulita',
        banco_abono:'Bci',
        monto_pagar:989000000,
        cantidad_documentos:2,
        fecha_ingreso:'08/08/2022',
        hora_ingreso:'09:03:10',
        estado: 'abonadas'
      }

  ]

  operaciones: any[] = [
    { id: 9572377,
      rut_proveedor:'78254124-1',
      razon_social_proveedor:'Ingenieros exitosos',
      banco_abono:'Bci',
      monto_pagar:125000000,
      cantidad_documentos:12,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:05:03',
      estado: 'ingresadas'
    },
    { id: 957237324,
      rut_proveedor:'96568780-2',
      razon_social_proveedor:'Extracciones el solar',
      banco_abono:'Banco itaú',
      monto_pagar:1958000000,
      cantidad_documentos:3,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:25:05',
      estado: 'ingresadas'
    },
    { id: 76879377,
      rut_proveedor:'73581654-2',
      razon_social_proveedor:'Surcos el placer',
      banco_abono:'Banco de chile',
      monto_pagar:658321471,
      cantidad_documentos:6,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:25:10',
      estado: 'ingresadas'
    },
    { id: 7687912097,
      rut_proveedor:'71475455-k',
      razon_social_proveedor:'Maquinaria el pesar',
      banco_abono:'Banco estado',
      monto_pagar:2356581000,
      cantidad_documentos:10,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:26:05',
      estado: 'ingresadas'
    },
    { id: 2342659,
      rut_proveedor:'96568780-2',
      razon_social_proveedor:'Ingeniería minera especializada',
      banco_abono:'Banco de chile',
      monto_pagar:250467897,
      cantidad_documentos:10,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:15:03',
      estado: 'rechazadas'
    },
    { id: 9498237324,
      rut_proveedor:'76123456-k',
      razon_social_proveedor:'Maquinaria celta',
      banco_abono:'Banco santander',
      monto_pagar:670000000,
      cantidad_documentos:12,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:03:05',
      estado: 'rechazadas'
    },
    { id: 7698377,
      rut_proveedor:'77727456-3',
      razon_social_proveedor:'Transportes helip',
      banco_abono:'Banco scotiabank',
      monto_pagar:52500000,
      cantidad_documentos:5,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:15:10',
      estado: 'ingresadas'
    },
    { id: 768452097,
      rut_proveedor:'78254124-1',
      razon_social_proveedor:'Ingenieros exitosos',
      banco_abono:'Bci',
      monto_pagar:125000000,
      cantidad_documentos:12,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:05:05',
      estado: 'desembolsadas'
    },
    { id: 52097,
      rut_proveedor:'75782125-3',
      razon_social_proveedor:'Extracciones el solar',
      banco_abono:'Banco itaú',
      monto_pagar:1958000000,
      cantidad_documentos:3,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:24:05',
      estado: 'desembolsadas'
    },
    { id: 435878435,
      rut_proveedor:'96568780-2',
      razon_social_proveedor:'Ingeniería minera especializada',
      banco_abono:'Banco de chile',
      monto_pagar:250365880,
      cantidad_documentos:10,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:15:05',
      estado: 're-cedidas'
    },
    { id: 436778435,
      rut_proveedor:'96568780-2',
      razon_social_proveedor:'Ingeniería minera especializada',
      banco_abono:'Banco de chile',
      monto_pagar:250365880,
      cantidad_documentos:10,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:15:05',
      estado: 'cerradas'
    },
    { id: 949837324,
      rut_proveedor:'76123456-k',
      razon_social_proveedor:'Maquinaria celta',
      banco_abono:'Banco santander',
      monto_pagar:670000000,
      cantidad_documentos:12,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:03:05',
      estado: 'cerradas'
    },
    { id: 7690008377,
      rut_proveedor:'77727456-3',
      razon_social_proveedor:'Transportes helip',
      banco_abono:'Banco scotiabank',
      monto_pagar:52500000,
      cantidad_documentos:5,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'10:15:10',
      estado: 'cerradas'
    },
    { id: 2008377,
      rut_proveedor:'68558874-2',
      razon_social_proveedor:'Químicos la azulita',
      banco_abono:'Bci',
      monto_pagar:989000000,
      cantidad_documentos:2,
      fecha_ingreso:'08/08/2022',
      hora_ingreso:'09:03:10',
      estado: 'abonadas'
    },
    
  ]
  

}
