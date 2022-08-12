export interface TableLabel {
    title: string;
}

export interface TablaAnticipos {

    grupo: number;
    rut_pagador: string;
    pagador: string;
    fecha_pago_original: string;
    monto_original: number;
    monto_utilizado: number;
    saldo_disponible: number;
    monto_seleccionado: number;

}

export interface DetalleGrupo {

    grupo: any;
    rut_pagador: any;
    pagador: any;
    fecha_pago_original: any;
    monto_original: any;
    monto_utilizado: any;
    saldo_disponible: any;
    monto_seleccionado: any;
    nomina?: string;

}

export interface TablaDocumentos {

    numero_documento: number;
    numero_relacion: number;
    tipo_documento: string;
    monto: number;

}


export interface Confirmar {
    title: string;
    valor: any;
}