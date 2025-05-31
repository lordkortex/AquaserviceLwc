/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-24-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsDomParent extends LightningElement {

    //static renderMode = "light"; 

    renderedCallback() {
        console.log('AqsDomParent renderedCallback called');
        const parentElement = this.querySelector('div');
        const parentElementDiv = this.querySelector('div[data-id=gallery-modal-caption]');
        const parentElementChild = this.querySelector('c-aqs-dom-child');
        const parentElementDivTag = this.getElementsByTagName('div');

        const parentElementDivAllTemplate = this.template.querySelectorAll('div');
        if (parentElementDivAllTemplate) {
            parentElementDivAllTemplate.forEach((element) => {
                element.style.backgroundColor = 'gray'; // Example manipulation
            });
        }

        /*const parentElementDivAll = this.querySelectorAll('div');
        if (parentElementDivAll) {
            parentElementDivAll.forEach((element) => {
                element.style.backgroundColor = 'gray'; // Example manipulation
            });
        }*/


        
        
        /*const parentElement = this.template.querySelector('div');*/
        /*if (parentElement) {
            parentElement.style.backgroundColor = 'lightblue'; // Example manipulation
        }
        if (parentElementAll) {
            parentElementAll.style.backgroundColor = 'red'; // Example manipulation
        }
        if (parentElementAllTag) {
            parentElementAllTag.style.backgroundColor = 'green'; // Example manipulation
        }*/
    }
}