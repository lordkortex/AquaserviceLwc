/** 
 * @module aqsFuncionesAnonimas
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Context this en JavaScript se refiere al objeto que está ejecutando el código actual. El valor de this puede cambiar dependiendo de cómo se llame a la función, y es uno de los aspectos más confusos del lenguaje.
 */

// funciones-anonimas.js

// 1. Función anónima asignada a una variable
const saludar = function() {
  console.log("¡Hola desde una función anónima!");
};
saludar(); // Salida: ¡Hola desde una función anónima!

// 2. Función anónima como callback en setTimeout
setTimeout(function() {
  console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

// 3. Función anónima autoejecutable (IIFE)
(function() {
  const mensaje = "Esta función se ejecuta inmediatamente";
  console.log(mensaje);
})();

// 4. Función anónima como manejador de evento
document.getElementById("miBoton").addEventListener("click", function() {
  alert("¡Botón clickeado!");
});

// 5. Función anónima en métodos de arrays
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // Salida: [1, 4, 9, 16, 25]