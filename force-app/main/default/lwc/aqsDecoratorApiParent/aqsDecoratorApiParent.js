/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-07-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement,api,track } from 'lwc';

export default class AqsDecoratorApiParent extends LightningElement {
  nombrePadre = 'Ana';
  apellidoPadre = 'Cortes';

  @api estructuraCache;
  @api estructuraCacheConfiguration;
  @api estructuraApi;
  @track estructuraTrack;

  connectedCallback() {
    this.estructuraCacheConfiguration = { url:'httpsApi'};
    this.estructuraCache = { url:'httpsApi'};
    this.estructuraApi = { url:'httpsApi'};
    this.estructuraTrack = { url:'httpsTrack'};
  }

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