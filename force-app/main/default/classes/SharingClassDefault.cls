/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-06-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
public class SharingClassDefault {
    public static void mostrarCuentas() {
        List<Account> cuentas = [SELECT Id, Name FROM Account];
        System.debug('Default sharing: ' + cuentas.size());
    }
}