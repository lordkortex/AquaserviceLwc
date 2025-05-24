/** 
 * @module aqsPromises
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Las promesas en JavaScript son una herramienta fundamental para 
 * manejar operaciones asíncronas de manera más legible y estructurada. 
 * Permiten ejecutar código que depende de resultados futuros, como solicitudes a 
 * servidores, temporizadores o lecturas de archivos, sin caer en el problema del "callback hell" (anidamiento excesivo de funciones).
 */

/// promesas-ejemplos.js

async function obtenerSaludo() {
  return "¡Hola!";
}

obtenerSaludo().then(console.log); // Salida: ¡Hola!


async function mostrarSaludo() {
  let saludo = await obtenerSaludo();
  console.log(saludo); // Salida: ¡Hola!
}

mostrarSaludo();