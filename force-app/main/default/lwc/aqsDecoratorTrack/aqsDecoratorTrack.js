/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement,track } from 'lwc';

export default class AqsDecoratorTrack extends LightningElement {


    // ✅ Uso de @track
  @track personaConTrack = { nombre: 'Ana', edad: 30 };

  // ❌ Sin @track y sin reemplazo
  personaSinTrack = { nombre: 'Luis', edad: 25 };

  // ✅ Sin @track, pero con reemplazo moderno
  personaModerna = { nombre: 'Carlos', edad: 40 };

  // Métodos

  incrementarEdadConTrack() {
    this.personaConTrack.edad += 1; // Sí re-renderiza
  }

  incrementarEdadSinTrack() {
    this.personaSinTrack.edad += 1; // ⚠️ No re-renderiza el DOM
  }

  incrementarEdadModerna() {
    this.personaModerna = {
      ...this.personaModerna,
      edad: this.personaModerna.edad + 1
    }; // ✅ Sí re-renderiza sin @track
  }
}