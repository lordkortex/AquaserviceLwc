/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-06-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
public class AqsSharingAccountSelectorController {
    @AuraEnabled(cacheable=true)
    public static List<Account> obtenerCuentas() {
        //return [SELECT Id, Name, Industry, Phone FROM Account LIMIT 50];
        return SharingClassWithout.mostrarCuentas();
    }
}
