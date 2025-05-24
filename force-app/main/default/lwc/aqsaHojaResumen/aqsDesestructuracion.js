/**
 * @module aqsDesestructuracion
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description        
 * 
1️⃣ Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
2️⃣ En ese caso, se hace un return implícito, por lo que podemos omitir también el return.
3️⃣ Si la función no tiene parámetros, se indica como en el ejemplo anterior: () =>.
4️⃣ Si la función tiene un solo parámetro, opcionalmente te puedes ahorrar los paréntesis: e =>.
5️⃣ Si la función tiene 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
6️⃣ Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).
 */
export function desestructuracion() {

    // Tradicional
    // Permite asignar valores de un array a variables de forma concisa.
    const numeros = [10, 20, 30];

    /*let aa = numeros[0];
    let bb = numeros[1];
    let cc = numeros[2];*/

    let [aa, bb, cc] = numeros;

    console.log(aa)
    console.log(bb)
    console.log(cc)

    // 10. Desestructuración de Arrays
    // Permite asignar valores de un array a variables de forma concisa.
    const valores = [10, 20, 30, 40];

    // 10.1 Asignación básica por posición
    const [x, y, z] = valores;
    console.log(x, y, z); // 10, 20, 30

    // 10.2 Omitir elementos
    const [primero, , tercero] = valores;
    console.log(primero, tercero); // 10, 30

    // 10.3 Operador rest
    const [head, ...resto] = valores;
    console.log(head);  // 10
    console.log(resto); // [20, 30, 40]

    // 10.4 Valores por defecto
    const [a = 1, b = 2, c = 3, d = 4, e = 5] = [100, undefined, null];
    console.log(a, b, c, d, e); // 100, 2, null, 4, 5

    // 10.5 Intercambiar variables sin temporal
    let m = 1, n = 2;
    console.log('Antes:', m, n); // Antes: 1 2
    [m, n] = [n, m];
    console.log('Después:', m, n); // Después: 2 1

    // 10.6 Intercambiar variables sin temporal
    function saluda({ nombre, edad }) {
        console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
    }

    const persona = {
        nombre: "Ana",
        edad: 30,
        ciudad: "Madrid"
    };

    saluda({ nombre: "Luis", edad: 25 });
    saluda(persona);

}



