import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BciWkModalService } from '@bci/webkitbci';
import { DetalleGrupo, TablaAnticipos, TableLabel } from '../../interfaces/portal.interface';
import { ModalGrupoComponent } from '../modal-grupo/modal-grupo.component';

@Component({
  selector: 'app-tabla-pagadores',
  templateUrl: './tabla-pagadores.component.html',
  styleUrls: ['./tabla-pagadores.component.css']
})
export class TablaPagadoresComponent implements OnInit {

  @Input()  dataTable: TablaAnticipos[] = [];
  @Input()  resetForm: boolean = false;
  @Output() radioSelected: EventEmitter<boolean> = new EventEmitter();

  itemSeleccionado: DetalleGrupo | undefined;

  tableLabel: TableLabel[] = [
    {title: 'Grupo'},
    {title: 'Pagador'},
    {title: 'Fecha pago original'},
    {title: 'Monto original'},
    {title: 'Monto utilizado'},
    {title: 'Saldo disponible'},
    {title: 'Monto seleccionado'}
  ];

  radioTablePagadores: FormGroup;

  
  constructor(
    private fb: FormBuilder, 
    private modal: BciWkModalService) {
      
    this.radioTablePagadores = this.fb.group({
      radioTable: ['', Validators.required]
    });
  }


  ngOnInit() {
  }

  onRadio(item: DetalleGrupo) {
    this.radioSelected.emit(this.radioTablePagadores.valid);
    this.itemSeleccionado = item;
  }

  openModal(item: DetalleGrupo) {
    
    const num = 15000000 + Math.floor(Math.random()* 15000000)
    item.nomina = num.toString();
  

    this.modal.open(
      ModalGrupoComponent,   // Componente modal
      item // Objeto con la data
    );

    
  }


}
