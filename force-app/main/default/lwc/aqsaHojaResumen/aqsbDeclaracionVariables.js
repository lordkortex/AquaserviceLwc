/**
 * ***************************************************************************************************************
 * @module aqsDeclaracionVariables
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       :  Módulo de utilidades para demostrar el comportamiento de variables en JavaScript.
 * Demuestra el comportamiento de variables 'var' y 'let' dentro de un mismo ámbito.
 * 'var' tiene ámbito de función, mientras que 'let' tiene ámbito de bloque.
 * https://jsbin.com/
 * ***************************************************************************************************************
 */

/**
 *var tiene ámbito de función (function scope).
 *let tiene ámbito de bloque (block scope)
 */
export function ambito() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a); // ✅ 1
  //console.log(b); // ❌ ReferenceError

  return "mensaje de ambito";
}

/**
 * Muestra la diferencia entre 'var' y 'let' al redeclarar variables.
 * 'var' permite redeclaración en el mismo ámbito; 'let' no lo permite.
 */
export function redeclaracion() {
  var x = 1;
  var x = 2; // ✅ No hay error

  let y = 1;
  // let y = 2; // ❌ SyntaxError: Identifier 'y' has already been declared

  return "mensaje de redeclaracion";
}

/**
 * Ilustra el concepto de hoisting en JavaScript.
 * Las declaraciones con 'var' son elevadas y asignadas como 'undefined'.
 * Las de 'let' y 'const' son elevadas pero no inicializadas, provocando error si se accede antes.
 */
export function hoisting() {
  console.log(a); // ✅ undefined
  var a = 5;

  //console.log(t); // ❌ ReferenceError
  //let t = 10;

  return "mensaje de hoisting";
}