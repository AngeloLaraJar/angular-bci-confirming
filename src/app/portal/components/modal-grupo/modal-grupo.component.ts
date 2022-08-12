import { FactoryTarget } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BciWkModalService, BCI_WK_MODAL_DATA } from '@bci/webkitbci';
import { DetalleGrupo, TablaDocumentos } from '../../interfaces/portal.interface';


@Component({
  selector: 'app-modal-grupo',
  templateUrl: './modal-grupo.component.html',
  styleUrls: ['./modal-grupo.component.css']
})
export class ModalGrupoComponent implements OnInit {

  tablaDocumentos: TablaDocumentos[] = [
    {
      numero_documento: 29837498273,
      numero_relacion: 9809898,
      tipo_documento: 'FAC',
      monto: this.data.monto_original
    }
  ];

  formDetalle: FormGroup;
  

  constructor(private modal: BciWkModalService, @Inject(BCI_WK_MODAL_DATA) public data: DetalleGrupo) {
    
    this.formDetalle = new FormGroup({
      'pagador': new FormControl({ value: '', disabled: true }),
      'rut_pagador': new FormControl({ value: '', disabled: true }),
      'nomina': new FormControl({ value: '', disabled: true }),
      'grupo': new FormControl({ value: '', disabled: true }),
      'fecha_pago': new FormControl({ value: '', disabled: true }),
      'monto_original': new FormControl({ value: '', disabled: true }),
      'saldo_disponible': new FormControl({ value: '', disabled: true }),
      'monto_seleccionado': new FormControl({ value: '', disabled: true }),
      'comentario': new FormControl({ value: '', disabled: true })

    });

   }

  ngOnInit(): void {
  }

  close() {
    this.modal.close();
  }

}
