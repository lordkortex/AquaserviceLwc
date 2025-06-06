/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-06-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
public with sharing class SharingClassChild extends SharingClassParent {
    public override List<Account> mostrarCuentas() {
        List<Account> cuentas = super.mostrarCuentas();
        System.debug('Clase hija sin modificador de sharing');
        return cuentas;
    }
}
