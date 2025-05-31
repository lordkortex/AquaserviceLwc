/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

import templateVista from './aqsTemplateRenderMultiple.html';
import templateEdicion from './aqsTemplateRenderMultipleOptimus.html';

export default class AqsTemplateRenderMultiple extends LightningElement {

    modoEdicion = false;

    contactos = [
    { id: 1, nombre: 'Ana López', email: 'ana@example.com' },
    { id: 2, nombre: 'Carlos Pérez', email: 'carlos@example.com' },
    { id: 3, nombre: 'Lucía Gómez', email: 'lucia@example.com' }
  ];

  cambiarModo() {
    this.modoEdicion = !this.modoEdicion;
  }

  render() {
    return this.modoEdicion ? templateEdicion : templateVista;
  }

  get contactosCount() {
    return this.contactos.length;
  }

}