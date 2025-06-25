/**
 * @description       :
 * @author            : jhon.cortes@maccresi.com
 * @group             :
 * @last modified on  : 06-25-2025
 * @last modified by  : jhon.cortes@maccresi.com
 **/
public with sharing class AccountManager {
    
    public static Account createAccount(String name) {
        if (String.isBlank(name)) {
            throw new IllegalArgumentException('Account name is required');
        }
        Account acc = new Account(Name = name);
        insert acc;
        return acc;
    }
    
    public static  List<Account>  selectAccount(Id accountId) {
         List<Account> accounts ;
        try {
           accounts =   [SELECT Id FROM Account];
        } catch (DmlException e) {
            System.debug('Error deleting account: ' + e.getMessage());
            throw new CustomException('Error deleting account');
        }
        return accounts;
    }
    
    
    public static void deleteAccount(Id accountId) {
        try {
            delete [SELECT Id FROM Account WHERE Id = :accountId];
        } catch (DmlException e) {
            System.debug('Error deleting account: ' + e.getMessage());
            throw new CustomException('Error deleting account');
        }
    }
    
    public static String makeCallout() {
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://example.com/api');
        req.setMethod('GET');
        HttpResponse res = http.send(req);
        return res.getBody();
    }
    
    @TestVisible
    private static void doSafeQuery() {
        if (Limits.getQueries() + 1 > Limits.getLimitQueries()) {
            throw new CustomException('Too close to SOQL limit');
        }
        List<Account> accounts = [SELECT Id FROM Account LIMIT 1];
    }

  
    
    public class CustomException extends Exception {}
}