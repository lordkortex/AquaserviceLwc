/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-07-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement, wire } from 'lwc';
import BIENVENIDA from '@salesforce/label/c.BienvenidaLabel';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

import LOCALE from '@salesforce/i18n/locale';
import TIMEZONE from '@salesforce/i18n/timeZone';
import LANG from '@salesforce/i18n/lang';

export default class AqsLanguages extends LightningElement {
    // Custom label
    label = BIENVENIDA;

    // Campo labels traducidos
    nameFieldLabel = NAME_FIELD.label;
    industryFieldLabel = INDUSTRY_FIELD.label;

    // Locale info
    locale = LOCALE;
    timezone = TIMEZONE;
    lang = LANG;

    // Formato de fecha y número
    formattedNumber = new Intl.NumberFormat(LOCALE).format(1234567.89);
    formattedDate = new Intl.DateTimeFormat(LOCALE, {
        dateStyle: 'long',
        timeStyle: 'short'
    }).format(new Date());

    industryOptions = [];

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$objectInfo.data.defaultRecordTypeId',
        fieldApiName: INDUSTRY_FIELD
    })
    wiredPicklist({ data, error }) {
        if (data) {
            this.industryOptions = data.values;
        }
    }
}
