/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
import { LightningElement, track } from 'lwc';

export default class AqsDecoratorFetch extends LightningElement {


    @track post;
    @track error;

    handleFetchWithPromises() {
        this.error = null;
        this.post = null;

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                this.post = data;
            })
            .catch(error => {
                this.error = error.message;
            });
    }

    async handleFetchWithAsyncAwait() {
        this.error = null;
        this.post = null;

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!response.ok) {
                throw new Error('Error HTTP: ' + response.status);
            }
            const data = await response.json();
            this.post = data;
        } catch (error) {
            this.error = error.message;
        }
    }
}