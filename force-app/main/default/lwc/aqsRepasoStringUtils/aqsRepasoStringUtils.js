/**
 * @description Format Custom Labels
 */
export function ambito() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a); // ✅ 1
  console.log(b); // ❌ ReferenceError
}

/**
 * @description Format Custom Labels
 */
export function redeclaracion() {
    var x = 1;
    var x = 2; // ✅ No hay error

    let y = 1;
    //let y = 2; // ❌ SyntaxError: Identifier 'y' has already been declared
}

/**
 * @description Format Custom Labels
 */
export function hoisting() {
    console.log(a); // ✅ undefined
    var a = 5;

    console.log(b); // ❌ ReferenceError
    let b = 10;
}




