/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-18-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';
import { ambito,redeclaracion,hoisting } from "c/aqsRepasoStringUtils";


export default class AqsRepasoDeclaracionVariables extends LightningElement {

    connectedCallback() {
       let resultAmbito = ambito();
       let resultRedeclaracion = redeclaracion();
       let resultHoisting = hoisting();

       console.log(resultAmbito);
       console.log(resultRedeclaracion);
       console.log(resultHoisting);

    }
}