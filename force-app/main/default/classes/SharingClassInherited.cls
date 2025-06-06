/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-06-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
public inherited sharing class SharingClassInherited {
    public static List<Account> mostrarCuentas() {
        List<Account> cuentas = [SELECT Id, Name, Industry, Phone FROM Account LIMIT 50];
        System.debug('inherited sharing: ' + cuentas.size());
        return cuentas;
    }
}
