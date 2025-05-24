/**
 * @module aqsThisOFunction
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Context this en JavaScript se refiere al objeto que está ejecutando el código actual. El valor de this puede cambiar dependiendo de cómo se llame a la función, y es uno de los aspectos más confusos del lenguaje.
 */


function foo() {
  valor = 40;
  console.log(valor);
  console.log(this);
}
foo();

console.log('*************************');
function Persona(n) {
  this.nombre = n;
}
const p = new Persona("Ana");
console.log(p.nombre); // "Ana"


console.log('*************************');

function foo2() {
  this.nombrex = 'Ramirez';
  console.log(this);
}
foo2();
new foo2();
console.log(new foo2().nombrex + ' Expl');
const pd = new foo2("");
console.log(pd.nombrex); // "Ana"