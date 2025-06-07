/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-07-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AqsContactWireController.getAccountList';

export default class AqsJestWireMock extends LightningElement {
    accounts;
    error;

    @wire(getAccountList)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }
}
