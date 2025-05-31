/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsDecoratorApiParent extends LightningElement {
  nombrePadre = 'Ana';
  apellidoPadre = 'Cortes';

  handleChange(event) {
    this.nombrePadre = event.target.value;
  }
  handleChangeApellido(event) {
    this.apellidoPadre = event.target.value;
  }

  handleClick(event) {
    this.template.querySelector('c-aqs-decorator-api-child').resetNombre();
  }

}