/** 
 * @module aqsIteracionDeclarativa
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Todos estos métodos—forEach, map, filter, reduce, find, some y every—
 * pertenecen a la familia de los métodos de orden superior (higher-order functions) 
 * de los arrays en JavaScript.
 */
export function iterativeDeclaration() {

    // Ejemplos de métodos de arrays en JavaScript

    const nums = [1, 2, 3, 4, 5];

    // forEach
    nums.forEach((n, i) => console.log(`forEach - Índice ${i}: ${n}`));

    // map
    const dobles = nums.map(n => n * 2);
    console.log('map - Dobles:', dobles);

    // filter
    const pares = nums.filter(n => n % 2 === 0);
    console.log('filter - Pares:', pares);

    // reduce
    const suma = nums.reduce((acc, n) => acc + n, 0);
    console.log('reduce - Suma:', suma);

    // find
    const primerPar = nums.find(n => n % 2 === 0);
    console.log('find - Primer par:', primerPar);

    // some
    const hayMayor4 = nums.some(n => n > 4);
    console.log('some - Hay >4?:', hayMayor4);

    // every
    const todosMenor10 = nums.every(n => n < 10);
    console.log('every - Todos <10?:', todosMenor10);

}
