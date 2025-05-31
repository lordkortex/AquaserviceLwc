/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement, track } from 'lwc';
import getPost from '@salesforce/apex/AqsExternalApiService.getPost';

export default class AqsDecoratorFetchApex extends LightningElement {
  @track post;
  @track error;

  handleLoadPost() {
    this.error = null;
    this.post = null;

    getPost()
      .then(result => {
        this.post = JSON.parse(result);
      })
      .catch(error => {
        this.error = error.body ? error.body.message : error.message;
      });
  }
}