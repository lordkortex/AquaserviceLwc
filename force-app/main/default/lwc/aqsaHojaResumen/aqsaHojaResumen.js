/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-24-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';
import { origen } from "./aqsbFuncionesInmediatas";
import { ambito, redeclaracion, hoisting } from "./aqsbDeclaracionVariables";

export default class AqsaHojaResumen extends LightningElement {

    connectedCallback() {
        let resultOrigen = origen();

        let resultAmbito = ambito();
        let resultRedeclaracion = redeclaracion();
        let resultHoisting = hoisting();

        console.log(resultOrigen);

        console.log(resultAmbito);
        console.log(resultRedeclaracion);
        console.log(resultHoisting);

    }
}