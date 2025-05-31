/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsTemplateRenderConditional extends LightningElement {


    estado = ''; // Puede ser 'exito', 'error', 'advertencia'

  get esExito() {
    return this.estado === 'exito';
  }

  get esError() {
    return this.estado === 'error';
  }

  get esAdvertencia() {
    return this.estado === 'advertencia';
  }

  mostrarExito() {
    this.estado = 'exito';
  }

  mostrarError() {
    this.estado = 'error';
  }

  mostrarAdvertencia() {
    this.estado = 'advertencia';
  }

  reset() {
    this.estado = '';
  }
  
}