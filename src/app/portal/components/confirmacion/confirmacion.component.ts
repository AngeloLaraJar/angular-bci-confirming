import { Component, Input, OnInit } from '@angular/core';
import { Confirmar } from '../../interfaces/portal.interface';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  @Input() dataConfirmar: Confirmar[] =[];

  constructor() {}

  ngOnInit(): void {
    
  }

}
