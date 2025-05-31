/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-24-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/

/* 
import { LightningElement } from 'lwc';
export default class AqsWebComponent extends LightningElement {
}
*/

class AqsWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<p>Hola desde Web Component nativo!</p>`;
  }
}

customElements.define('aqs-web-component', AqsWebComponent);
