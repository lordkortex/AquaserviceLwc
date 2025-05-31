/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsTemplateBinding extends LightningElement {
    nombre = 'Invitado'; // One-way binding

    // Getter para evitar expresiones en el HTML
    get nombreEnMayuscula() {
        return this.nombre.toUpperCase();
    }

    // Event binding: manejar el input
    handleNombreChange(event) {
        this.nombre = event.target.value;
    }

    // Event binding: botón para limpiar
    handleLimpiar() {
        this.nombre = 'Invitado';
    }
}
