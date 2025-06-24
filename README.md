# E-Bebek Otomasyon Case

## Proje Hakkında
Bu proje, e-bebek e-ticaret sitesi için temel kullanıcı senaryolarının otomasyon testi amacıyla hazırlanmıştır.  
Test senaryoları:  
- Login: Kullanıcı giriş işlemleri
- Search: Ürün arama ve sonuç doğrulama
- Add to Cart: Ürünün sepete eklenmesi
- Logout: Kullanıcı çıkış işlemi  

Teknik olarak **JavaScript**, **Playwright**, **Cucumber**  kullanılmıştır.  
Testlerde modüler yapı için Page Object Pattern ve yeniden kullanılabilir hazır step’ler tercih edilmiştir.

---

Testleri çalıştırabilmek için lütfen .env dosyasındaki gerekli alanlara e-bebek account bilgilerinizi girin.

## Proje Yapısı
- `features/` : Cucumber senaryoları (`.feature` dosyaları)  
- `step_definitions/` : Step implementation dosyaları  
- `pages/` : Page Object modelleri  
- `tests/` : Cucumber ve Playwright konfigürasyon dosyaları  

---
Önemli Notlar
-Tüm locator seçimlerinde stabil ve anlamlı selector’lar tercih edilmiştir.
-Asenkron yapı (async/await) doğru kullanılmıştır.
-UI gecikmelerine karşı waitForSelector ve expect gibi beklemeler eklenmiştir.
-Gereksiz sleep kullanımından kaçınılmıştır.
-Test adımları mümkün olduğunca yeniden kullanılabilir step’ler ile yazılmıştır.

## Gereksinimler
- Node.js v16 veya üzeri  
- npm (Node Package Manager)  

---

## Kurulum

1. Projeyi klonlayın:  
```bash
git clone <repository-url>
cd <project-folder>


2. Bağımlılıkları yükleyin:  
npm install
