/**
  * @module aqsbClosures
  * @author            :  Jhon Cortes - lordkortex@gmail.com
  * @description     
    Un closure es una función que recuerda y puede acceder a variables de su contexto léxico (scope) aunque ese contexto ya haya terminado de ejecutarse.
 */
function crearContador() {
  let contador = 0; // variable local de la función externa

  return function() {
    contador++;          // esta función interna accede y modifica 'contador'
    console.log(contador);
  };
}

const contar = crearContador(); // crearContador() devuelve la función interna

contar(); // 1
contar(); // 2
contar(); // 3