/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/


import { LightningElement, wire, track } from 'lwc';
import obtenerContactos from '@salesforce/apex/AqsContactWireController.obtenerContactos';
import obtenerContactoUnico from '@salesforce/apex/AqsContactWireController.obtenerContactoUnico';

export default class AqsDecoratorWireApex extends LightningElement {

    
    contactoIndividual;
    error

    @wire(obtenerContactos)
    contactos; // contactos.data / contactos.error

    @wire(obtenerContactoUnico)
    procesarContactos({ error, data }) {
        if (data) {
            this.contactoIndividual = [...data];
        } else if (error) {
            this.error = error;
        }
    }

}