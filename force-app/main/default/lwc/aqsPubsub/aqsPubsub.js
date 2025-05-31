/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-01-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
const callbacks = {};

const pubsub = {
    subscribe(eventName, callback) {
        if (!callbacks[eventName]) {
            callbacks[eventName] = [];
        }
        callbacks[eventName].push(callback);
    },
    publish(eventName, payload) {
        if (callbacks[eventName]) {
            callbacks[eventName].forEach(callback => callback(payload));
        }
    }
};

export default pubsub;