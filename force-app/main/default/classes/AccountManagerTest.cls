/**
 * @description       :
 * @author            : jhon.cortes@maccresi.com
 * @group             :
 * @last modified on  : 06-25-2025
 * @last modified by  : jhon.cortes@maccresi.com
 **/
@isTest(seeAllData=false)
private class AccountManagerTest {

    
    // Caso positivo y uso de assertEquals
    @isTest
    static void testCreateAccount_Positive() {
        Test.startTest();
        Account acc = AccountManager.createAccount('Test Account');
        Test.stopTest();
        System.assertNotEquals(null, acc.Id, 'Account ID should not be null');
    }
    
    // Caso negativo y assertThrows
    @isTest
    static void testCreateAccount_Negative() {
        try {
            AccountManager.createAccount('');
            System.assert(false, 'Exception was expected');
        } catch (IllegalArgumentException e) {
            System.assertEquals('Account name is required', e.getMessage());
        }
    }
    
    // Prueba con System.runAs
    @isTest
    static void testRunAsUser() {
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User' LIMIT 1];
        User u = new User(Alias='stduser', Email='stduser@test.com', EmailEncodingKey='UTF-8',
        LastName='User', LanguageLocaleKey='en_US', LocaleSidKey='en_US',
        ProfileId=p.Id, TimeZoneSidKey='America/Los_Angeles', Username='stduser@test.com');
        insert u;
        
        System.runAs(u) {
            Account acc = AccountManager.createAccount('RunAs Account');
            System.assertNotEquals(null, acc.Id);
        }
    }
    
    // Test que excede el límite de SOQL (ejemplo negativo)
    //@isTest
    static void testExceedLimits() {
        List<Account> accounts = new List<Account>();
        for (Integer i = 0; i < 102; i++) {
            accounts.add(new Account(Name='Test ' + i));
        }
        insert accounts;
        
        Test.startTest();
        try {
            for (Account acc : [SELECT Id FROM Account]) {
                // Simula uso excesivo de SOQL
                List<Account> accountLIst = [SELECT Id FROM Account WHERE Id = :acc.Id];
            }
            System.assert(false, 'Should have hit SOQL limit');
        } catch (System.LimitException e) {
            System.assert(e.getMessage().contains('Too many SOQL'), 'Expected SOQL limit exception');
        } catch (Exception e) {
            System.assert(e.getMessage().contains('Too many SOQL'), 'Expected SOQL limit exception');
        }
        Test.stopTest();
    }
    
    @isTest
    static void testQuerySafeService() {
        Test.startTest();
        try {
            for (Integer i = 0; i < Limits.getLimitQueries(); i++) {
                AccountManager.doSafeQuery();
            }
        } catch (AccountManager.CustomException e) {
            Assert.fail('Expected CustomException');
            Assert.isTrue(e.getMessage().contains('Too close to SOQL limit'));
        }
        Test.stopTest();
    }
    
    // Test parcial (60%) sin cubrir deleteAccount ni excepción
    @isTest
    static void testPartialCoverage() {
        AccountManager.createAccount('Partial Test');
        // No se prueba deleteAccount ni errores
    }
    
    // Test completo (100%) con cobertura de excepción
    @isTest
    static void testDeleteAccountWithException() {
        try {
            AccountManager.deleteAccount('001XXXXXXXXXXXX'); // ID no válido
        } catch (AccountManager.CustomException e) {
            System.assert(e.getMessage().contains('Error deleting account'));
        }  catch (System.StringException e) {
            System.assert(e.getMessage().contains('Invalid id'));
        }
    }
    
    // Mock para HTTP callout
    class MockHttpResponseGenerator implements HttpCalloutMock {
        public HTTPResponse respond(HTTPRequest req) {
            HttpResponse res = new HttpResponse();
            res.setHeader('Content-Type', 'application/json');
            res.setBody('{"message":"success"}');
            res.setStatusCode(200);
            return res;
        }
    }
    
    @isTest
    static void testHttpCallout() {
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        String response = AccountManager.makeCallout();
        System.assertEquals('{"message":"success"}', response);
    }
    
    // Prueba con Test.startTest y Test.stopTest vs sin usarlos
    @isTest
    static void testWithStartAndStopTest() {
        Test.startTest();
        Account acc = AccountManager.createAccount('StartStop Account');
        Test.stopTest();
        System.assertNotEquals(null, acc.Id);
    }
    
    @isTest
    static void testWithoutStartAndStopTest() {
        Account acc = AccountManager.createAccount('NoStartStop Account');
        System.assert(acc.Id != null);
    }
    
    // Uso de SeeAllData=true (solo para propósito demostrativo; no recomendado)
    @isTest
    static void testWithSeeAllDataTrue() {
        List<Account> accs = [SELECT Id FROM Account LIMIT 1];
        System.assert(accs.size() >= 0); // Solo verifica acceso
    }

      /************************************************************** */

     @isTest
    static void testCreateAccountSuccess() {
        Account acc = AccountManager.createAccount('Test Account');
        System.assertNotEquals(null, acc.Id, 'Account should have been inserted');
    }

    @isTest
    static void testCreateAccountFailure() {
        try {
            AccountManager.createAccount('');
            System.assert(false, 'Expected exception for blank name');
        } catch (IllegalArgumentException e) {
            System.assertEquals('Account name is required', e.getMessage());
        }
    }

    @isTest
    static void testSelectAccount() {
        Account acc = new Account(Name = 'Test');
        insert acc;
        // Método selectAccount no hace nada significativo con el parámetro, pero llamamos para cubrirlo.
        AccountManager.selectAccount(acc.Id);
    }

    @isTest
    static void testDeleteAccountSuccess() {
        Account acc = new Account(Name = 'ToDelete');
        insert acc;
        Test.startTest();
        AccountManager.deleteAccount(acc.Id);
        Test.stopTest();
        System.assertEquals(0, [SELECT count() FROM Account WHERE Id = :acc.Id]);
    }

    @isTest
    static void testDeleteAccountFailure() {
        try {
            AccountManager.deleteAccount(Id.valueOf('001000000000000AAA')); // ID inexistente
        } catch (AccountManager.CustomException e) {
            System.assert(e.getMessage().contains('Error deleting account'));
        }
    }

    @isTest
    static void testMakeCallout() {
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        Test.startTest();
        String response = AccountManager.makeCallout();
        Test.stopTest();
        System.assertEquals('{"message":"success"}', response);
    }

    @isTest
    static void testDoSafeQuerySuccess() {
        Test.startTest();
        AccountManager.doSafeQuery();
        Test.stopTest();
    }

  


}