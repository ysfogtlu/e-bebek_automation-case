Feature: Ürün Sepete Ekleme İşlemi
  Kullanıcı olarak ürünler listesinden ürün sepete eklenebilmeli

  Scenario: Arama sonuçlarından bir ürünü sepete ekleme
    Given Kullanıcı arama yapmak için ana sayfayı açar
    When Kullanıcı arama kutusuna "biberon" yazar ve enter tuşuna basar
    Then Arama sonuçları sayfası açılır ve URL "biberon" kelimesini içerir
    And Arama sonuçlarında "biberon" kelimesi görünür
    When Kullanıcı arama sonuçlarından ilk ürünü sepete ekler
    Then Ürün sepete başarıyla eklenmelidir
    When Kullanıcı "Sepete Git" butonuna tıklar
    Then Sepet sayfası açılmalıdır
