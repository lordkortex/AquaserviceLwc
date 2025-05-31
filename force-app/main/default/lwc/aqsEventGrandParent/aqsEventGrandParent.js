/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsEventGrandParent extends LightningElement {

    handleSaludo(event) {
        console.log('👂 Escuchado en el abuelo: ', event.detail.mensaje);
    }
}