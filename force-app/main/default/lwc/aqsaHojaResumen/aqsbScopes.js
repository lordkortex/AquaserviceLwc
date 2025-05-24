/**
  * @module aqsbScopes
  * @author            :  Jhon Cortes - lordkortex@gmail.com
  * @description     🔍 ¿Qué es un "bloque"?
    Un bloque en JavaScript es cualquier código encerrado entre { ... }, como en:
 */
export function bloque() {
    {
        // Esto es un bloque
    }

    // Esto también es un bloque.También aparecen en estructuras como if, for, while, y funciones:
    if (true) {
        // Esto también es un bloque
    }

    //Significa que las variables declaradas con let o const sólo existen dentro del bloque donde fueron declaradas.
    {
        let mensaje = "Hola";
        console.log(mensaje); // "Hola"
    }
    console.log(mensaje); // ❌ Error: mensaje is not defined

    //Antes de let y const, solo existía var, que NO respeta el "scope de bloque", sino el scope de función.
    {
        var mensaje = "Hola";
    }
    console.log(mensaje); // ✅ Funciona: "Hola"

}


