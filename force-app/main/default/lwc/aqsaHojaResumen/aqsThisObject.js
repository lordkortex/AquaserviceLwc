/**
 * @module aqsThisObject
 * @author            :  Jhon Cortes - lordkortex@gmail.com
 * @description       Context this en JavaScript se refiere al objeto que está ejecutando el código actual. El valor de this puede cambiar dependiendo de cómo se llame a la función, y es uno de los aspectos más confusos del lenguaje.
 */

const obj = {
  valor: 420,
  metodoTradicional: function() {
    novalor = 500;
    console.log(this.valor + ' ' + this.novalor);
  }
};

//obj.metodoTradicional();        // 42, porque `this` es `obj`
//const f = obj.metodoTradicional;
//f();      
//const g = obj;
//g.metodoTradicional();


const obj0 = {
  valor: 50,
  metodoTradicional() {
     console.log(this.valor);
  }
};
obj0.metodoTradicional(); 
const sal = obj0.metodoTradicional;
sal();

//El comportamiento de this en funciones tradicionales

const obj1 = {
  valor: 50,
  metodoInterno: function () {
      console.log(this.valor);
      
  } 
};

/*obj1.metodoInterno(); 
const miObje1 = obj1.metodoInterno;
miObje1();*/

//El comportamiento de this en funciones flecha

const obj2 = {
  valor: 50,
  metodoInterno: () => console.log(this.valor)
};

/*obj2.metodoInterno(); 
const miObje2 = obj2.metodoInterno;
miObje2();*/



const obj3 = {
  valor: 50,
  metodoInterno: function () {
      console.log(this.valor);
      
      function metodoInterno2 () {
            console.log(this.valor);
      } 
      
      metodoInterno2();
  } 
};

const obj4 = {
  valor: 50,
  metodoInterno: function () {
      console.log(this.valor);
      
      const metodoInterno2 = function () {
            console.log(this.valor);
      } 
      
      metodoInterno2();
  } 
};

const obj5 = {
  valor: 50,
  metodoInterno: function () {
      const self = this;
      console.log(self.valor);
      
      const metodoInterno2 = function () {
            console.log(self.valor);
      } 
      
      metodoInterno2();
  } 
};

const obj6 = {
  valor: 50,
  metodoInterno: function () {
      console.log(this.valor);
      
      const metodoInterno2 = () =>  {
            console.log(this.valor);
      } 
      
      metodoInterno2();
  } 
};

//obj1.metodoInterno();  
//obj2.metodoInterno();
//obj3.metodoInterno();
//obj4.metodoInterno();
//obj5.metodoInterno();
//obj6.metodoInterno();