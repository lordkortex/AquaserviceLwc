/**
 * @module aqsSpreadRest
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Los operadores ... spread y rest son muy útiles en JavaScript moderno. Aunque usan la misma sintaxis (...), hacen cosas diferentes según el contexto
 */
export function spread() {

    // === TRADICIONAL ===

    const original = [1, 2, 3];

    // Mala práctica: referencia compartida
    const copia = original;
    copia.push(4);

    console.log("Original:", original); // ⚠️ [1, 2, 3, 4]
    console.log("Copia:", copia);       // [1, 2, 3, 4]


    // === SPREAD OPERATOR (expande elementos) ===

    // 1. Copiar arrays
    const frutas = ["manzana", "pera"];
    const copiaFrutas = [...frutas];
    console.log("Copia de frutas:", copiaFrutas); // ["manzana", "pera"]

    // 2. Combinar arrays
    const verduras = ["zanahoria", "lechuga"];
    const comida = [...frutas, ...verduras];
    console.log("Comida:", comida); // ["manzana", "pera", "zanahoria", "lechuga"]

    // 3. Expandir en argumentos de función
    function sumar(a, b, c) {
        return a + b + c;
    }
    const numeros = [1, 2, 3];
    console.log("Suma:", sumar(...numeros)); // 6

    // 4. Copiar/combinar objetos
    const persona = { nombre: "Juan", edad: 30 };
    const copiaPersona = { ...persona };
    console.log("Copia persona:", copiaPersona);

    const datosExtra = { ciudad: "Madrid" };
    const personaCompleta = { ...persona, ...datosExtra };
    console.log("Persona completa:", personaCompleta);

    // === REST OPERATOR (recoge elementos) ===

    // 5. Parámetros de función dinámicos
    function saludar(mensaje, ...nombres) {
        for (const nombre of nombres) {
            console.log(`${mensaje}, ${nombre}`);
        }
    }
    saludar("Hola", "Ana", "Luis", "Carlos");

    // 6. Desestructuración con rest
    const [primero, segundo, ...otros] = ["uno", "dos", "tres", "cuatro"];
    console.log("Primero:", primero); // "uno"
    console.log("Segundo:", segundo); // "dos"
    console.log("Otros:", otros); // ["tres", "cuatro"]

    // 7. Rest en objetos
    const auto = { marca: "Toyota", modelo: "Corolla", año: 2020 };
    const { marca, ...restoAuto } = auto;
    console.log("Marca:", marca); // "Toyota"
    console.log("Resto del auto:", restoAuto); // { modelo: "Corolla", año: 2020 }


}
