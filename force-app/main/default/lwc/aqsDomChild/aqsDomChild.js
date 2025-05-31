/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-24-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsDomChild extends LightningElement {
    //static renderMode = "light"; 

    renderedCallback() {
        console.log('AqsDomChild renderedCallback called');
        //const childElement = this.template.querySelector('div');
        const childElement = this.querySelector('div');
        if (childElement) {
            childElement.style.backgroundColor = 'lightblue'; // Example manipulation
        }

        
        this.querySelectorAll("div").forEach((element) => {
              element.style.backgroundColor = 'lightblue'; // Example manipulation
            });


    }
    
}