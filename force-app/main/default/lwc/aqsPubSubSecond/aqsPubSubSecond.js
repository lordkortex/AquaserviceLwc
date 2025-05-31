/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-01-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';
import pubsub from 'c/aqsPubsub';

export default class AqsPubSubSecond extends LightningElement {
      mensajeRecibido;

    connectedCallback() {
        pubsub.subscribe('eventoPersonalizado', this.handleMensaje.bind(this));
    }

    handleMensaje(payload) {
        this.mensajeRecibido = payload.mensaje;
    }
}