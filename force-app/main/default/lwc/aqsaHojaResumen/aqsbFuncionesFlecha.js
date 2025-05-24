/**
 * 
 * @module aqsbFuncionesFlecha
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       :Las Arrow functions, funciones flecha o «fat arrow» son una forma corta y compacta de escribir las funciones tradicionales de Javascript.
 * 
1️⃣ Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
2️⃣ En ese caso, se hace un return implícito, por lo que podemos omitir también el return.
3️⃣ Si la función no tiene parámetros, se indica como en el ejemplo anterior: () =>.
4️⃣ Si la función tiene un solo parámetro, opcionalmente te puedes ahorrar los paréntesis: e =>.
5️⃣ Si la función tiene 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
6️⃣ Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).
 */
export function funcionesArray() {
    // 0. Array Functions en JavaScript
    func = function () {
        return "Función tradicional.";
    };

    func = () => {
        return "Función flecha.";
    };

    // 0 parámetros: Devuelve "Función flecha"
    func = () => "Función flecha.";

    // 1 parámetro:  Devuelve el valor de e + 1
    func = (e) => e + 1;

    // 2 parámetros: Devuelve el valor de a + b
    func = (a, b) => a + b;


    // 1. forEach()
    // Ejecuta una función por cada elemento (no retorna nada).
    const numeros1 = [1, 2, 3];
    numeros1.forEach(num => {
        console.log(num * 2); // 2, 4, 6
    });

    // 2. map()
    // Crea un nuevo array con el resultado de aplicar una función a cada elemento.
    const numeros2 = [1, 2, 3];
    const dobles = numeros2.map(num => num * 2);
    console.log(dobles); // [2, 4, 6]

    // 3. filter()
    // Crea un nuevo array solo con los elementos que cumplen una condición.
    const numeros3 = [1, 2, 3, 4];
    const pares = numeros3.filter(num => num % 2 === 0);
    console.log(pares); // [2, 4]

    // 4. find()
    // Devuelve el primer elemento que cumpla una condición.
    const nombres = ["Ana", "Luis", "Carlos"];
    const encontrado = nombres.find(nombre => nombre.startsWith("C"));
    console.log(encontrado); // "Carlos"

    // 5. reduce()
    // Reduce todos los valores del array a un solo valor.
    const nums1 = [1, 2, 3, 4];
    const suma = nums1.reduce((acc, curr) => acc + curr, 0);
    console.log(suma); // 10

    // 6. some() y every()
    // some(): ¿Al menos uno cumple?
    // every(): ¿Todos cumplen?
    const edades = [22, 35, 18];
    console.log(edades.some(e => e < 21));  // true
    console.log(edades.every(e => e >= 18)); // true

    // 7. includes()
    // Verifica si un elemento está en el array.
    const frutas = ["manzana", "banana"];
    console.log(frutas.includes("banana")); // true

    // 8. sort() y reverse()
    // Ordena elementos. Modifica el array original.
    const nums2 = [3, 1, 4, 2];
    nums2.sort((a, b) => a - b); // ordena correctamente números
    console.log(nums2); // [1, 2, 3, 4]
    nums2.reverse();
    console.log(nums2); // [4, 3, 2, 1]

    // 9. flat() y flatMap()
    // flat(): Aplana arrays anidados.
    const anidado = [1, [2, [3]]];
    console.log(anidado.flat(2)); // [1, 2, 3]

    // flatMap(): Aplica map y luego aplana un nivel.
    const frases = ["hola mundo", "buenos dias"];
    const palabras = frases.flatMap(frase => frase.split(" "));
    console.log(palabras); // ["hola", "mundo", "buenos", "dias"]
}
