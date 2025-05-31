/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-24-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsLifeCycle extends LightningElement {


 constructor() {
    super();
    console.log('aqslifecycle constructor: Componente creado');
  }

  connectedCallback() {
    console.log('aqslifecycle connectedCallback: Componente insertado en el DOM');
  }

  renderedCallback() {
    console.log('aqslifecycle renderedCallback: Componente renderizado o re-renderizado');
  }

  disconnectedCallback() {
    console.log('aqslifecycle disconnectedCallback: Componente removido del DOM');
  }

  errorCallback(error, stack) {
    console.error('aqslifecycle errorCallback: Error capturado en el componente');
    console.error(error, stack);
  }
}