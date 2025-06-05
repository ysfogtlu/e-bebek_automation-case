Feature: Ürün Arama İşlemi
  Kullanıcı olarak arama kutusuna ürün ismi yazarak sonuçları görebilmeliyim

  Scenario: Geçerli bir ürün adı ile arama yapma ve sonuçları doğrulama
    Given Kullanıcı arama yapmak için ana sayfayı açar
    When Kullanıcı arama kutusuna "biberon" yazar ve enter tuşuna basar
    Then Arama sonuçları sayfası açılır ve URL "biberon" kelimesini içerir
    And Arama sonuçlarında "biberon" kelimesi görünür
