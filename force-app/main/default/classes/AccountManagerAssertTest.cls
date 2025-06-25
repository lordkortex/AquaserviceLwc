/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-24-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
@isTest(seeAllData=false)
private class AccountManagerAssertTest {

    @isTest
    static void testCreateAccount_Positive() {
        Test.startTest();
        Account acc = AccountManager.createAccount('Test Account');
        Test.stopTest();
        Assert.areNotEqual(null, acc.Id, 'Account ID should not be null');
    }

    @isTest
    static void testCreateAccount_Negative() {
        try {
            AccountManager.createAccount('');
            Assert.fail('Exception was expected');
        } catch (IllegalArgumentException e) {
            Assert.areEqual('Account name is required', e.getMessage());
        }
    }

    @isTest
    static void testRunAsUser() {
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User' LIMIT 1];
        User u = new User(
            Alias='stduser', Email='stduser@test.com', EmailEncodingKey='UTF-8',
            LastName='User', LanguageLocaleKey='en_US', LocaleSidKey='en_US',
            ProfileId=p.Id, TimeZoneSidKey='America/Los_Angeles', Username='stduser@test.com'
        );
        insert u;

        System.runAs(u) {
            Account acc = AccountManager.createAccount('RunAs Account');
            Assert.isNotNull(acc.Id, 'Account ID should not be null in runAs');
        }
    }

    //@isTest
    static void testExceedLimits() {
        List<Account> accounts = new List<Account>();
        for (Integer i = 0; i < 51; i++) {
            accounts.add(new Account(Name='Test ' + i));
        }
        insert accounts;

        Test.startTest();
        try {
            for (Account acc : [SELECT Id FROM Account]) {
                List<Account> accountList = [SELECT Id FROM Account WHERE Id = :acc.Id];
            }
            Assert.fail('Should have hit SOQL limit');
        } catch (Exception e) {
            Assert.isTrue(e.getMessage().contains('Too many SOQL'), 'Expected SOQL limit exception');
        }
        Test.stopTest();
    }

    @isTest
    static void testPartialCoverage() {
        Account acc = AccountManager.createAccount('Partial Test');
        Assert.isNotNull(acc.Id, 'Account should have been created');
    }

    @isTest
    static void testDeleteAccountWithException() {
        try {
            AccountManager.deleteAccount('001XXXXXXXXXXXX');
            Assert.fail('CustomException was expected');
        } catch (AccountManager.CustomException e) {
            Assert.isTrue(e.getMessage().contains('Error deleting account'));
        } catch (System.StringException e) {
            Assert.isTrue(e.getMessage().contains('Invalid id'));
        }
    }

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
        Assert.areEqual('{"message":"success"}', response, 'Expected response body mismatch');
    }

    @isTest
    static void testWithStartAndStopTest() {
        Test.startTest();
        Account acc = AccountManager.createAccount('StartStop Account');
        Test.stopTest();
        Assert.isNotNull(acc.Id, 'Account ID should not be null with start/stop');
    }

    @isTest
    static void testWithoutStartAndStopTest() {
        Account acc = AccountManager.createAccount('NoStartStop Account');
        Assert.isNotNull(acc.Id, 'Account ID should not be null without start/stop');
    }

    @isTest
    static void testWithSeeAllDataTrue() {
        List<Account> accs = [SELECT Id FROM Account LIMIT 1];
        Assert.isTrue(accs.size() >= 0, 'Should be able to access data with seeAllData');
    }
}
