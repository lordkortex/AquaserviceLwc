/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsTemplateBindingClassSimple extends LightningElement {

    activo = false;

    get textoClase() {
        return this.activo ? 'texto-verde' : 'texto-rojo';
    }

    activar() {
        this.activo = true;
    }

    desactivar() {
        this.activo = false;
    }

}