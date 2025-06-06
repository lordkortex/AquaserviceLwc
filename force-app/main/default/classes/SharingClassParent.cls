/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-06-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
public virtual with sharing class SharingClassParent {
    public virtual void mostrarCuentas() {
        List<Account> cuentas = [SELECT Id, Name FROM Account];
        System.debug('Clase base (with sharing): ' + cuentas.size());
    }
}