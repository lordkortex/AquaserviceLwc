/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-06-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
public virtual with sharing class SharingClassParent {
    public virtual List<Account> mostrarCuentas() {
        List<Account> cuentas = [SELECT Id, Name, Industry, Phone FROM Account LIMIT 50];
        System.debug('Clase base (with sharing): ' + cuentas.size());
        return cuentas;
    }
}