/**
 * ***************************************************************************************************************
 * @module aqsbFuncionesInmediatas
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       :  Módulo de utilidades para demostrar el comportamiento de variables en JavaScript.
 * Demuestra el comportamiento de variables 'var' y 'let' dentro de un mismo ámbito.
 * 'var' tiene ámbito de función, mientras que 'let' tiene ámbito de bloque.
 * https://jsbin.com/
 * ***************************************************************************************************************
 */


/**
    Origen: ¿Qué es una expresión de función? En JavaScript hay dos formas principales de definir funciones: Por declaracion o expresion
 */
export function origen() {

    //Version 1 : declaracion
    function saludar1() {
        console.log("Hola");
    }

    //Version 2: expresion
    const saludar2 = function () {
        console.log("Hola");
    }; //Esta se puede ejecutar si le agregas ().

    //Qué hace una IIFE? Combina estas dos ideas: define una función como expresión y la invoca inmediatamente:
    (function () {
        console.log("Soy una IIFE");
    })();

    // o tambien asi
    (() => {
        console.log("Soy una IIFE moderna");
    })();

}

/**
    Antes de que existieran los bloques (let, const, block scope), las IIFEs eran una forma de:
    Crear un ámbito local (scope) para variables y evitar contaminar el ámbito global.
    Encapsular código para que no interfiera con otras partes del programa.
    Ejecutar código inmediatamente sin dejar residuos (variables, funciones) en el ámbito global.
 */
export function immediatelyInvokedFunctionExpression() {
    //Como  function
    (function () {
        console.log('nombre');
    })(); // ← ¡Se ejecuta inmediatamente!

    //Como arrow function
    (() => {
        console.log('nombre');
    }); // ← ¡ No Se ejecuta inmediatamente!

    //Con parametros
    ((nombre) => {
        console.log(`Hola, ${nombre}`);
    })("María"); // Hola, María

    //Ejemplo tipico
    var nombre = "Juan";
    (function () {
        var nombre = "Carlos";
        console.log(nombre); // Carlos
    })();
    console.log(nombre); // Juan

}

/**
   Antes de que existieran let y const, si querías evitar contaminar el ámbito global, 
   no podías usar var dentro de bloques normales, porque se escapaba. 
   Entonces, los desarrolladores usaban IIFEs para crear un ámbito seguro y temporal:
 */
export function escapesComparativo() {

    (function () {
        var temp = "secreto";  // temp vive solo aquí en este scope
    })();

    //Pero ahora que tenemos let y const, podemos hacer lo mismo sin IIFE:
    {
        const temp = "secreto";
        // temp vive solo aquí
    }
}

