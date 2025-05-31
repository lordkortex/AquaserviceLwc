/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement, api,track } from 'lwc';
import buscarContactos from '@salesforce/apex/AqsContactWireController.buscarContactos';

export default class AqsDecoratorsImperativeCalls extends LightningElement {

    @api recordId;
    @track nombre = '';
    @track resultados = [];
    @track error;

    handleInputChange(event) {
        this.nombre = event.target.value;
    }

    buscar() {
        buscarContactos({ nombre: this.nombre })
            .then(data => {
                this.resultados = data;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error;
                this.resultados = [];
            });
    }


    /* El valor de recordId se inyecta automáticamente por el framework Salesforce después de que el componente se construye y entra en su ciclo de vida.
    connectedCallback() se ejecuta antes de que Salesforce asigne el valor a la propiedad @api recordId.
    Por eso, si accedes a this.recordId en connectedCallback(), probablemente veas undefined.*/
    connectedCallback() {
        console.log('connectedCallback recordId:', this._recordId);
    }

    renderedCallback() {
        console.log('renderedCallback recordId:', this._recordId);

    }


}