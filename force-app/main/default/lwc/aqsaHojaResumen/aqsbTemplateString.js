/**
 * ***************************************************************************************************************
 * @module aqsbTemplateString
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       :  Los template literals (también conocidos como template strings) son una característica de ES6 
 * en JavaScript que permiten trabajar con cadenas de texto de forma más flexible y legible. 
 * Se definen utilizando backticks (`) en lugar de comillas simples o doble
 * ***************************************************************************************************************
 */

export function templateString() {

    // 1. Interpolación de variables
    const nombre = "Juan";
    const edad = 30;
    const saludo = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    console.log(saludo); // Hola, mi nombre es Juan y tengo 30 años.

    // 2. Múltiples líneas sin caracteres especiales
    const poema = `Este es un poema
    que se escribe
    en múltiples líneas.`;
    console.log(poema);

    // 3. Expresiones embebidas
    const a = 5;
    const b = 10;
    console.log(`La suma de ${a} y ${b} es ${a + b}`); // La suma de 5 y 10 es 15

    // 4. Funciones tag (Tagged templates)
    function resaltar(strings, ...valores) {
        return strings.reduce((resultado, parte, i) => {
            return resultado + parte + (valores[i] ? `[${valores[i]}]` : '');
        },
            '');
    }

    const lenguaje = "JavaScript";
    const motivo = "potente";
    const mensaje = resaltar`El lenguaje ${lenguaje} es muy ${motivo}`;
    console.log(mensaje); // El lenguaje [JavaScript] es muy [potente]

    const mensaje1 = resaltar(["El lenguaje ", " es muy"], "Lwc", "intereante");
    console.log(mensaje1); // El lenguaje [JavaScript] es muy [potente]

    // 5. Uso con funciones
    function obtenerMensaje(nombre, producto) {
        return `Hola ${nombre}, gracias por comprar ${producto}.`;
    }
    console.log(obtenerMensaje("Ana", "una laptop")); // Hola Ana, gracias por comprar una laptop.


}
