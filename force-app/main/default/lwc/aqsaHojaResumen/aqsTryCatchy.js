/** 
 * @module aqstryCatchy
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       En este ejemplo, aunque dividir por cero no genera una excepción en JavaScript, se muestra cómo estructurar el manejo de errores. Si se reemplazara 10 / 0 por una operación que realmente genere un error, como acceder a una propiedad de undefined, el bloque catch capturaría la excepción.
 */

try {
  let resultado = 10 / 0;
  console.log("Resultado:", resultado);
} catch (error) {
  console.error("Se produjo un error:", error.message);
} finally {
  console.log("Operación completada.");
}