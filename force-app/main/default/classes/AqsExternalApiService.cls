/**
 * @description       :
 * @author            : jhon.cortes@maccresi.com
 * @group             :
 * @last modified on  : 06-27-2025
 * @last modified by  : jhon.cortes@maccresi.com
 **/
public with sharing class AqsExternalApiService {
  /**
   * @description getPost
   * @author jhon.cortes@maccresi.com | 06-27-2025
   * @return String
   **/
  @AuraEnabled(cacheable=true)
  public static String getPost() {
    Http http = new Http();
    HttpRequest request = new HttpRequest();
    request.setEndpoint('https://jsonplaceholder.typicode.com/posts/1');
    request.setMethod('GET');

    try {
      HttpResponse response = http.send(request);
      if (response.getStatusCode() == 200) {
        return response.getBody();
      } else {
        throw new AuraHandledException(
          'Error en API: ' + response.getStatusCode()
        );
      }
    } catch (Exception e) {
      throw new AuraHandledException('Excepción HTTP: ' + e.getMessage());
    }
  }
}
