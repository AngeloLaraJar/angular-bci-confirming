import { Component, Input, OnInit } from '@angular/core';
import { Confirmar } from '../../interfaces/portal.interface';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.css']
})
export class ComprobanteComponent implements OnInit {
  @Input() dataConfirmar: Confirmar[] =[];
  today = new Date().toLocaleDateString();

  constructor() { }

  ngOnInit(): void {
  }

}
