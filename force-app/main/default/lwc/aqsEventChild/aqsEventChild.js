/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsEventChild extends LightningElement {

      enviarEvento() {
        this.dispatchEvent(new CustomEvent('saludoa', {
            detail: { mensaje: 'Hola desde el hijo A 👶' },
            bubbles: true,
            composed: true // Necesario para que el abuelo lo reciba
        }));

         this.dispatchEvent(new CustomEvent('saludob', {
            detail: { mensaje: 'Hola desde el hijo B 👶' },
            bubbles: false,
            composed: false // Necesario para que el abuelo lo reciba
        }));


         this.dispatchEvent(new CustomEvent('saludoc', {
            detail: { mensaje: 'Hola desde el hijo C 👶' },
            bubbles: true,
            composed: false // Necesario para que el abuelo lo reciba
        }));


         this.dispatchEvent(new CustomEvent('saludod', {
            detail: { mensaje: 'Hola desde el hijo D 👶' },
            bubbles: false,
            composed: true // Necesario para que el abuelo lo reciba
        }));
    }
    
}