/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsEventParent extends LightningElement {

     handleSaludo(event) {
        console.log('🎧 Escuchado en el padre: ', event.detail.mensaje);
        // El abuelo también lo puede escuchar si el evento burbujea
    }
    
}