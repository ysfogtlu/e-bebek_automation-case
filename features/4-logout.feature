@auth
Feature: E-bebek Logout İşlemi
  Kullanıcı olarak sistemden güvenli bir şekilde çıkış yapabilmeliyim

  Scenario: Kullanıcı sistemden çıkış yapar
    Given Kullanıcı giriş yapmış durumda
    When Kullanıcı çıkış yap butonuna tıklar
    Then Kullanıcı çıkış yaptığını doğrular