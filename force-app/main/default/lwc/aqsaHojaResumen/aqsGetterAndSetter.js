/** C:\Dev\AquaserviceLwc\force-app\main\default\lwc\aqsaHojaResumen\aqsGetterAndSetter.js
 * @module aqsGetterAndSetter
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       El encapsulamiento es un pilar de la programación orientada a objetos que consiste en proteger el estado interno de un objeto, exponiendo únicamente lo necesario a través de interfaces controladas. En JavaScript moderno, usamos getters y setters para definir esas interfaces y, opcionalmente, campos privados (con #) para ocultar datos sensibles.
 */
class Empleado {
  #nombre;
  #salario;

  constructor(nombre, salario) {
    this.#nombre = nombre;
    this.salario = salario;  // usa el setter
  }

  get nombre() {
    return this.#nombre;
  }

  get salario() {
    return this.#salario;
  }

  set salario(cantidad) {
    if (typeof cantidad !== 'number' || cantidad < 0) {
      throw new Error('Salario inválido');
    }
    this.#salario = cantidad;
  }

  incrementarSalario(porcentaje) {
    this.salario = this.salario * (1 + porcentaje / 100);
  }
}

const juan = new Empleado('Juan', 1500);
console.log(juan.nombre);     // Juan
console.log(juan.salario);    // 1500

juan.incrementarSalario(10);
console.log(juan.salario);    // 1650

juan.salario = 2000;           // OK
console.log(juan.salario);    // 2000

juan.salario = -500;           // ❌ Error: Salario inválido
