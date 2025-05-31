/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 05-31-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
public with sharing class AqsContactWireController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> obtenerContactos() {
        return [SELECT Id, Name, Email FROM Contact LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> obtenerContactoUnico() {
       return [SELECT Id, Name, Email FROM Contact LIMIT 1];
       //throw new AuraHandledException('exceptionText');
    }

    @AuraEnabled
    public static Contact getContactById(Id contactId) {
        return [SELECT Id, Name, Email FROM Contact WHERE Id = :contactId LIMIT 1];
    }

      @AuraEnabled
    public static List<Contact> buscarContactos(String nombre) {
        return [SELECT Id, Name, Email FROM Contact WHERE Name LIKE :('%' + nombre + '%') LIMIT 10];
    }

    }