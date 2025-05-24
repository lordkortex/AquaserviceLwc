/** 
 * @module aqsPromises
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Las promesas en JavaScript son una herramienta fundamental para 
 * manejar operaciones asíncronas de manera más legible y estructurada. 
 * Permiten ejecutar código que depende de resultados futuros, como solicitudes a 
 * servidores, temporizadores o lecturas de archivos, sin caer en el problema del "callback hell" (anidamiento excesivo de funciones).
 */

/// promesas-ejemplos.js

// 1. Crear una promesa que se resuelve después de 2 segundos
const promesaExitosa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("¡Operación exitosa!");
  }, 2000);
});

// Consumir la promesa
promesaExitosa
  .then((resultado) => {
    console.log("Resultado:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Promesa completada.");
  });

// 2. Crear una promesa que se rechaza después de 1 segundo
const promesaFallida = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Algo salió mal.");
  }, 1000);
});

// Consumir la promesa
promesaFallida
  .then((resultado) => {
    console.log("Resultado:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Promesa completada.");
  });

// 3. Encadenar promesas
const promesaEncadenada = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1500);
});

promesaEncadenada
  .then((valor) => {
    console.log("Valor inicial:", valor);
    return valor * 2;
  })
  .then((nuevoValor) => {
    console.log("Valor después de multiplicar por 2:", nuevoValor);
    return nuevoValor - 3;
  })
  .then((valorFinal) => {
    console.log("Valor final después de restar 3:", valorFinal);
  })
  .catch((error) => {
    console.error("Error en la cadena de promesas:", error);
  });

// 4. Manejar múltiples promesas con Promise.all()
const promesa1 = new Promise((resolve) => setTimeout(() => resolve("Resultado 1"), 1000));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve("Resultado 2"), 2000));
const promesa3 = new Promise((resolve) => setTimeout(() => resolve("Resultado 3"), 1500));

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log("Resultados de todas las promesas:", resultados);
  })
  .catch((error) => {
    console.error("Error en alguna de las promesas:", error);
  });
