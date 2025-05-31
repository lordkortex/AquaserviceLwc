/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

// Campos que queremos recuperar
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';

const FIELDS = [NAME_FIELD, EMAIL_FIELD, PHONE_FIELD];

export default class AqsDecoratorWireLds extends LightningElement {
  @api recordId; // se puede usar en una página de registro estándar

  @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
  contact;

  get name() {
    return getFieldValue(this.contact.data, NAME_FIELD);
  }

  get email() {
    return getFieldValue(this.contact.data, EMAIL_FIELD);
  }

  get phone() {
    return getFieldValue(this.contact.data, PHONE_FIELD);
  }
}