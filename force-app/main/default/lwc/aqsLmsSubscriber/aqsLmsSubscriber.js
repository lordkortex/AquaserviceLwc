/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-01-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement,wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/miCanal__c';

export default class AqsLmsSubscriber extends LightningElement {

     mensajeRecibido = '';
    subscription;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        if (!this.subscription) {
            this.subscription = subscribe(this.messageContext, SAMPLEMC, (payload) => {
                this.mensajeRecibido = payload?.mensaje || 'Sin mensaje';
            });
        }
    }

}