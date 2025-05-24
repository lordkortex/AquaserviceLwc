/**
 * @module aqsSMutabilidad
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Los operadores ... spread y rest son muy útiles en JavaScript moderno. Aunque usan la misma sintaxis (...), hacen cosas diferentes según el contexto
 */
export function mutabilidad() {

    // Ejemplos de manipulación inmutable de arrays en JavaScript

    // 1. Añadir elementos (inmutable)
    const nums = [1, 2, 3];
    const numsPlus = [...nums, 4];            // [1, 2, 3, 4]
    console.log('Original:', nums);
    console.log('Añadir inmutable:', numsPlus);

    // 2. Eliminar elementos (inmutable)
    const arr = [1, 2, 3];
    const without2 = arr.filter(n => n !== 2); // [1, 3]
    console.log('Original:', arr);
    console.log('Eliminar inmutable:', without2);

    // 3. Actualizar elementos (inmutable)
    const arr2 = [10, 20, 30];
    const updated = arr2.map((n, i) => i === 1 ? 25 : n); // [10, 25, 30]
    console.log('Original:', arr2);
    console.log('Actualizar inmutable:', updated);

    // 4. Insertar en medio (inmutable)
    const arr3 = [1, 2, 3];
    const insert = 1.5;
    const atIndex = 1;
    const inserted = [
        ...arr3.slice(0, atIndex),
        insert,
        ...arr3.slice(atIndex)
    ]; // [1, 1.5, 2, 3]
    console.log('Original:', arr3);
    console.log('Insertar inmutable:', inserted);

    // 5. Reordenar / mover elementos (inmutable)
    const arr4 = ['a', 'b', 'c', 'd'];
    const from = 1;
    const to = 3;
    const item = arr4[from];
    const without = arr4.filter((_, i) => i !== from);
    const moved = [
        ...without.slice(0, to),
        item,
        ...without.slice(to)
    ]; // ['a', 'c', 'd', 'b']
    console.log('Original:', arr4);
    console.log('Reordenar inmutable:', moved);


}
