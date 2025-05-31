/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-24-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

export default class AqsBasicHtml extends LightningElement {

    richTextValue = '<h1>NO Welcome to the <strong>Rich Text Editor</strong> component!</h1>'

    renderedCallback() {   

        let a =  this.template.querySelector("div"); // <div>First</div>
        let b =  this.template.querySelectorAll("div"); // [<div>First</div>, <div>Second</div>]
        let c =  this.template.querySelector("h1");


        console.log('template 1:' + a);        
        console.log('template 2:' + b);        
        console.log('template 3:' + c);      

        //document.querySelector("h1").innerText += " Editors EEEEE cccddd";      
        //window .querySelector("h1").innerText += " Editors EEEEE cccddd";      

        // shadow DOM
        //this.template.querySelector("h1").innerText += " Editors EEEEE cccdddd"; 

        // light DOM
        //this.querySelector("h1").innerText += " Editors EEEEE cccddd"; 
    }
    
}