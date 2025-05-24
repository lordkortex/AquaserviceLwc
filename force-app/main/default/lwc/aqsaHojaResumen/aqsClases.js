/**
 * @module aqsClass
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description        En JavaScript, los métodos de objetos como Object.keys, Object.values, y Object.entries te permiten trabajar fácilmente con las propiedades de los objetos.
 * 
 */

// Definición de la clase base Persona
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

// Clase hija que extiende de Persona
class Empleado extends Persona {
  constructor(nombre, puesto) {
    super(nombre); // Llama al constructor de Persona
    this.puesto = puesto;
  }

  trabajar() {
    console.log(`${this.nombre} trabaja como ${this.puesto}`);
  }
}

// Ejecución de los ejemplos

// Crear instancia de Persona
const ana = new Persona("Ana");
ana.saludar(); // Hola, soy Ana

// Crear instancia de Empleado
const juan = new Empleado("Juan", "Desarrollador");
juan.saludar();   // Heredado de Persona
juan.trabajar();  // Método propio de Empleado

// Otra instancia de Empleado
const maria = new Empleado("María", "Diseñadora");
maria.saludar();
maria.trabajar();




// Ejecutar ejemplos
const ejemplos = new EjemplosObjetos();
ejemplos.ejecutarTodo();
