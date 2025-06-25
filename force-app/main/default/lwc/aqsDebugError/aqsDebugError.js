/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-25-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class TextEcho extends LightningElement {
    inputText = '';

    handleInputChange(event) {
        this.inputext = event.target.value;
    }
}
