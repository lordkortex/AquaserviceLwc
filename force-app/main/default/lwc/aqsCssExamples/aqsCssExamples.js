/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-25-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement } from 'lwc';

import { loadStyle } from 'lightning/platformResourceLoader';
import AQS_STYLE from '@salesforce/resourceUrl/aqsCssExamplesYellow';

import redStyles from 'c/aqsCssShareStyle';
import greenStyles from "./aqsCssExamplesGreen.css";
import blueStyles from "./aqsCssExamplesBlue.css";

export default class AqsCssExamples extends LightningElement {

    static stylesheets = [greenStyles, blueStyles,redStyles];

    connectedCallback() {
        loadStyle(this, AQS_STYLE)
            .then(() => console.log('WWW Estilos cargados'))
            .catch(error => console.error('WWW Error cargando CSS', error));
    }


}