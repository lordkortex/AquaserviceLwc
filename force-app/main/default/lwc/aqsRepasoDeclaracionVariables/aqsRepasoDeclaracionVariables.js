/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-18-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';
import { ambito } from "c/aqsRepasoStringUtils";

export default class AqsRepasoDeclaracionVariables extends LightningElement {

    connectedCallback() {
       let result = ambito();
       console.log(result);
    }
}