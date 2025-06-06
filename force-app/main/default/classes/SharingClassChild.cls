/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-06-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
public class SharingClassChild extends SharingClassParent {
    public override void mostrarCuentas() {
        super.mostrarCuentas();
        System.debug('Clase hija sin modificador de sharing');
    }
}
