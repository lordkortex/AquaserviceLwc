/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsTemplateBindingClassAdvance extends LightningElement {


     activo = true;

    // ✅ Correcto: string directo
    claseSimple = 'texto-verde';

    // ❌ Incorrectos: estos no deberían usarse como clase directamente
    claseBooleana = true;
    claseNumero = 42;
    claseObjeto = { clase: 'error' };
    claseFuncion = () => 'funcion';
    claseArray = ['a', 'b'];

    claseArrayQuotes = ["note", "highlight"];
    claseArrayComplex = ['block', { note: true }, ['highlight']];
    claseObject = {block: true, hidden: false, 'note highlight': true };

    // ✅ Correcto: getter con lógica condicional que retorna string
    get claseCondicional() {
        return this.activo ? 'texto-verde' : 'texto-rojo';
    }

    alternarEstado() {
        this.activo = !this.activo;
    }
}