/** 
 * @module aqsExpresionDeclaracion
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Ejemplos de Declaración vs Expresión en JavaScript
 */
export function expresionDeclaraxion() {

    // Ejemplos de Declaración vs Expresión en JavaScript

    // 1. Declaración de función (hoisted)
    function suma(a, b) {
        return a + b;
    }

    // 2. Expresión de función (no hoisted completamente)
    const resta = function (a, b) {
        return a - b;
    };

    // 3. Arrow function (expresión)
    const multiplica = (a, b) => a * b;

    // 4. Declaración de clase (hoisted)
    class Persona {
        constructor(nombre) {
            this.nombre = nombre;
        }
        saludar() {
            console.log(`Hola, soy ${this.nombre}`);
        }
    }

    // 5. Expresión de clase (no hoisted)
    const Animal = class {
        constructor(especie) {
            this.especie = especie;
        }
        info() {
            console.log(`Especie: ${this.especie}`);
        }
    };

    // 6. Declaración de variable
    let x = 10;

    // 7. Uso de if (declaración de flujo de control)
    if (x > 5) {
        console.log('x es mayor que 5');
    }

    // 8. Uso de expresiones en contexto
    const resultado = suma(2, 3) + resta(5, 1) + multiplica(2, 4);
    console.log('Resultado combinado:', resultado);

}
