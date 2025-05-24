/**
 * @module aqsObjectsDefinition
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description        En JavaScript, los métodos de objetos como Object.keys, Object.values, y Object.entries te permiten trabajar fácilmente con las propiedades de los objetos.
 * 
 */

export class ObjectsDefinition {
  notacionLiteral() {
    const coche = {
      marca: "Toyota",
      modelo: "Corolla",
      año: 2020
    };
    console.log("Notación literal:", coche);
  }

  newObject() {
    const animal = new Object();
    animal.tipo = "Perro";
    animal.nombre = "Max";
    console.log("new Object():", animal);
  }

  funcionConstructora() {
    function Persona(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    const p1 = new Persona("Luis", 25);
    console.log("Función constructora:", p1);
  }

  claseModerna() {
    class Persona {
      constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
      }

      saludar() {
        console.log(`Hola, soy ${this.nombre}`);
      }
    }
    const ana = new Persona("Ana", 30);
    ana.saludar();
    console.log("Clase moderna:", ana);
  }

  manipulacionBasica() {
    const coche = {
      marca: "Toyota",
      modelo: "Corolla"
    };
    coche.color = "Rojo";
    coche["puertas"] = 4;
    delete coche.modelo;
    console.log("Manipulación:", coche);
    console.log("'marca' in coche:", "marca" in coche);
    for (let clave in coche) {
      console.log(`${clave}: ${coche[clave]}`);
    }
  }

  metodosUtiles() {
    const persona = { nombre: "Ana", edad: 30 };

    console.log("Object.keys:", Object.keys(persona));
    console.log("Object.values:", Object.values(persona));
    console.log("Object.entries:", Object.entries(persona));

    const destino = { ciudad: "Madrid" };
    const combinado = Object.assign(destino, persona);
    console.log("Object.assign:", combinado);

    const config = { modo: "producción" };
    Object.freeze(config);
    config.modo = "desarrollo"; // No se aplica
    console.log("Object.freeze:", config);

    const datos = { activo: true };
    console.log("Object.hasOwn:", Object.hasOwn(datos, "activo"));
    console.log("Object.hasOwn:", Object.hasOwn(datos, "inactivo"));
  }

  ejecutarTodo() {
    console.log("\n--- Notación Literal ---");
    this.notacionLiteral();

    console.log("\n--- new Object() ---");
    this.newObject();

    console.log("\n--- Función Constructora ---");
    this.funcionConstructora();

    console.log("\n--- Clase Moderna ---");
    this.claseModerna();

    console.log("\n--- Manipulación de Propiedades ---");
    this.manipulacionBasica();

    console.log("\n--- Métodos de Objetos ---");
    this.metodosUtiles();
  }
}

// Ejecutar ejemplos
const ejemplos = new EjemplosObjetos();
ejemplos.ejecutarTodo();
