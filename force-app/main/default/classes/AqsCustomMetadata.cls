/**
 * @description       : 
 * @author            : jhon.cortes@maccresi.com
 * @group             : 
 * @last modified on  : 06-07-2025
 * @last modified by  : jhon.cortes@maccresi.com
**/
public with sharing class AqsCustomMetadata {
    public AqsCustomMetadata() {

    }

    /**
    * @description 
    * @author jhon.cortes@maccresi.com | 06-07-2025 
    * @return List<AqsAuthMetadata__mdt> 
    **/
    public static List<AqsAuthMetadata__mdt> obtenerTiposCambio() {
        return [SELECT DeveloperName, AqsCustomField__c, AqsLongField__c
                FROM AqsAuthMetadata__mdt];
    }

     /**
     * @description 
     * @author jhon.cortes@maccresi.com | 06-07-2025 
     * @param String developerName 
     * @return String 
     **/
     public static String obtenerTasa(String developerName) {
        AqsAuthMetadata__mdt config = AqsAuthMetadata__mdt.getInstance(developerName);
        if (config != null) {
            return config.AqsLongField__c;
        }
        return null;
    }

    /**
    * @description 
    * @author jhon.cortes@maccresi.com | 06-07-2025 
    * @return Map<String, AqsAuthMetadata__mdt> 
    **/
    public static Map<String, AqsAuthMetadata__mdt> obtenerTodos() {
        return AqsAuthMetadata__mdt.getAll();
    }

    /**
    * @description 
    * @author jhon.cortes@maccresi.com | 06-07-2025 
    * @return Map<String, AqsAuthMetadata__mdt> 
    **/
    public void ejecucion() {
        String tasa = AqsCustomMetadata.obtenerTasa('AqsProvider');
        System.debug(tasa);

        List<AqsAuthMetadata__mdt> mdt = AqsCustomMetadata.obtenerTiposCambio();
        System.debug(mdt.get(0).AqsLongField__c);

        Map<String, AqsAuthMetadata__mdt> mdtMap = AqsCustomMetadata.obtenerTodos();
        System.debug(mdtMap);
    }


}