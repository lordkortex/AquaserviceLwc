/**
 * @module aqsObjectMethods
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description        En JavaScript, los métodos de objetos como Object.keys, Object.values, y Object.entries te permiten trabajar fácilmente con las propiedades de los objetos.
 * 
 */
export function objectsMethods() {

    // Ejemplo base
    const persona = { nombre: "Ana", edad: 30 };

    // Object.keys
    console.log("Object.keys:");
    console.log(Object.keys(persona)); // ["nombre", "edad"]

    // Object.values
    console.log("\nObject.values:");
    console.log(Object.values(persona)); // ["Ana", 30]

    // Object.entries
    console.log("\nObject.entries:");
    console.log(Object.entries(persona)); // [["nombre", "Ana"], ["edad", 30"]]

    // Iterando con entries
    console.log("\nIteración con Object.entries:");
    for (const [clave, valor] of Object.entries(persona)) {
        console.log(`${clave}: ${valor}`);
    }

    // Object.assign
    console.log("\nObject.assign:");
    const destino = { ciudad: "Madrid" };
    const combinado = Object.assign(destino, persona);
    console.log(combinado); // { ciudad: "Madrid", nombre: "Ana", edad: 30 }

    // Object.freeze
    console.log("\nObject.freeze:");
    const config = { modo: "producción" };
    Object.freeze(config);
    config.modo = "desarrollo"; // No se cambia
    console.log(config.modo); // "producción"

    // Object.hasOwn
    console.log("\nObject.hasOwn:");
    const datos = { activo: true };
    console.log(Object.hasOwn(datos, 'activo')); // true
    console.log(Object.hasOwn(datos, 'inactivo')); // false



}
