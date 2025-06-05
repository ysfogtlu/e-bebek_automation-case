Feature: E-bebek Login İşlemi
  Kullanıcı olarak e-bebek sitesine giriş yapabilmeliyim

  Scenario: Geçerli bilgilerle giriş yapma
    Given Kullanıcı e-bebek ana sayfasını açar
    When Kullanıcı giriş sayfasına gider
    And Kullanıcı e-posta ile giriş yap sekmesine tıklar
    And Kullanıcı geçerli e-posta adresini girer
    And Kullanıcı e-posta giriş butonuna tıklar
    And Kullanıcı geçerli şifreyi girer
    And Kullanıcı şifre giriş butonuna tıklar
    Then Kullanıcı başarılı bir şekilde giriş yaptığını doğrular