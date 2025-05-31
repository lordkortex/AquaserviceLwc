/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-01-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement,track,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/miCanal__c';

export default class AqsLmsPublisher extends LightningElement {

     @track mensaje = '';

    @wire(MessageContext)
    messageContext;

    handleInput(event) {
        this.mensaje = event.target.value;
    }

    enviarMensaje() {
        const payload = {
            mensaje: this.mensaje
        };
        publish(this.messageContext, SAMPLEMC, payload);
    }

    // Mensje Channel 02

}