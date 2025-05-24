/** 
 * @module aqsCallBack
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description        En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos y retornadas por otras funciones. Una función callback se aprovecha de esta característica al ser pasada como argumento a otra función para ser ejecutada posteriormente.
 * 
 */

function procesarEntradaUsuario(callback) {
  const nombre = prompt("Por favor ingresa tu nombre.");
  callback(nombre);
}

function saludar(nombre) {
  alert("Hola " + nombre);
}

procesarEntradaUsuario(saludar)