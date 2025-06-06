/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-06-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement, wire } from 'lwc';
import obtenerCuentas from '@salesforce/apex/AqsSharingAccountSelectorController.obtenerCuentas';

const columnas = [
    { label: 'Nombre', fieldName: 'Name' },
    { label: 'Industria', fieldName: 'Industry' },
    { label: 'Teléfono', fieldName: 'Phone', type: 'phone' }
];

export default class AqsSharing extends LightningElement {
    columnas = columnas;
    cuentas;
    error;

    @wire(obtenerCuentas)
    wiredCuentas({ error, data }) {
        if (data) {
            this.cuentas = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.cuentas = undefined;
        }
    }
}
