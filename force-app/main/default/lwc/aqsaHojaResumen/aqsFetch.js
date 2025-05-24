/** 
 * @module aqsPromises
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Las promesas en JavaScript son una herramienta fundamental para 
 * manejar operaciones asíncronas de manera más legible y estructurada. 
 * Permiten ejecutar código que depende de resultados futuros, como solicitudes a 
 * servidores, temporizadores o lecturas de archivos, sin caer en el problema del "callback hell" (anidamiento excesivo de funciones).
 */

/// promesas-ejemplos.js

async function obtenerDatosUsuario(id) {
  try {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let usuario = await respuesta.json();
    console.log(usuario);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

obtenerDatosUsuario(1);

function obtenerDatosUsuarioPromise(id) {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      console.log('response:' + response.ok);
      return response.json();
    })
    .then(data => {
      console.log('Publicación:', data);
    })
    .catch(error => {
      console.error('Error al obtener la publicación:', error);
    });
}
obtenerDatosUsuarioPromise(1);