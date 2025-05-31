/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement,api } from 'lwc';

export default class AqsDecoratorApiChild extends LightningElement {

    @api nombre; // propiedad pública recibida del padre

    _apellido

    @api resetNombre() {
        this.nombre = '';
    }


    @api 
    get apellido() {
        return this._apellido;
    }

    set apellido(apellidoInput) {
        this._apellido = apellidoInput;
    }



}