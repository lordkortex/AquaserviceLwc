/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-01-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';
import pubsub from 'c/aqsPubsub';

export default class AqsPubSubFirst extends LightningElement {

     enviar() {
        pubsub.publish('eventoPersonalizado', { mensaje: 'Hola desde A' });
    }
}