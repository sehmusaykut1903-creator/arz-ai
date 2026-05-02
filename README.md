# ARZ - Afet Raporlama ve Zamanlama

**ARZ**, afet durumlarında saha bildirimi, harita tabanlı risk gösterimi, lojistik sevkiyat, gönüllü yönetimi, halk sağlığı takibi, raporlama ve yapay zeka destekli karar desteği sağlamak amacıyla hazırlanmış web tabanlı bir demo sistemdir.

Bu sürüm, herhangi bir ücretli API gerektirmeden çalışan **ARZ Local Brain** altyapısını kullanır.

---

## Proje Bilgileri

**Proje Adı:** ARZ - Afet Raporlama ve Zamanlama  
**Slogan:** Doğru Veri, Doğru Zaman, Doğru Müdahale.  
**Ana Geliştirici:** Şehmus AYKUT  
**Proje Ekibi:** Şehmus AYKUT & Aghajan MUSALI  
**Kurum:** Yozgat Bozok Üniversitesi Tıp Fakültesi  
**Anabilim Dalı:** Halk Sağlığı Anabilim Dalı  
**Danışman:** Prof. Dr. Vugar Ali TÜRKSOY  

---

## Amaç

ARZ sisteminin temel amacı, afet anında farklı veri kaynaklarını tek bir komuta panelinde birleştirerek karar vericilere hızlı, anlaşılır ve uygulanabilir destek sağlamaktır.

Sistem şu alanlara odaklanır:

- Afet bildirimi
- Harita tabanlı risk gösterimi
- Lojistik ve sevkiyat planlama
- Klinik destek ve triyaj yaklaşımı
- Halk sağlığı risk takibi
- Gönüllü yönetimi
- QR / NFC / kimlik tarama demo altyapısı
- Raporlama
- Local Brain destekli yapay zeka yanıt sistemi

---

## Proje Yapısı

```text
arz-ai/
├── index.html
├── api/
│   └── ask.js
└── README.md
```

---

## Kullanılan Teknolojiler

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- Vercel Serverless Function
- ARZ Local Brain

---

## ARZ Local Brain Nedir?

ARZ Local Brain, ücretli yapay zeka API kullanmadan çalışan basit bir karar destek motorudur.

Kullanıcının yazdığı soruyu anahtar kelimelere göre analiz eder ve afet yönetimi, lojistik, halk sağlığı, triyaj, gönüllü yönetimi veya raporlama konularında yapılandırılmış cevap üretir.

Bu yapı:

- API key istemez
- Kredi tüketmez
- Ücretsiz çalışır
- Demo sunum için uygundur
- Afet odaklı cevaplar verir

---

## Desteklenen Konular

ARZ Local Brain şu konularda yanıt üretebilir:

- Deprem
- Sel / taşkın
- Yangın
- Lojistik / sevkiyat
- Klinik destek / triyaj
- Halk sağlığı
- Gönüllü yönetimi
- Raporlama
- Yozgat pilot modeli
- QR / NFC / kimlik tarama

---

## `index.html`

Bu dosya uygulamanın ana arayüzüdür.

İçinde şu modüller bulunur:

- Panel
- Harita
- Lojistik
- Tarama Merkezi
- Gönüllü Sistemi
- Halk Sağlığı
- Raporlar
- ARZ AI
- Ayarlar

Uygulama tek sayfa mantığıyla çalışır. Menüye basıldığında sayfa yenilenmez, yalnızca içerik değişir.

---

## `api/ask.js`

Bu dosya ARZ Local Brain motorudur.

Frontend şu endpoint’e istek gönderir:

```js
fetch("/api/ask", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: mesaj
  })
});
```

Backend, gelen mesajı analiz eder ve uygun yerel yanıtı döndürür.

---

## LocalStorage Kullanımı

ARZ demo sistemi bazı verileri tarayıcıda saklar.

Kullanılan localStorage anahtarları:

```text
arz_shipments
arz_volunteers
arz_reports
```

Bu alanlar sırasıyla:

- Sevkiyat kayıtlarını
- Gönüllü kayıtlarını
- Rapor kayıtlarını

saklar.

---

## Demo Modüller

### 1. Panel

Genel durum kartlarını gösterir:

- Vaka / yaralı verisi
- Lojistik akış
- Gönüllü yönetimi
- Sistem riski

Ayrıca hızlı işlem butonları içerir.

---

### 2. Harita

Harita modülü gerçek harita API kullanmadan demo risk haritası mantığıyla çalışır.

Katmanlar:

- Deprem
- Sel
- Yangın
- Lojistik
- Sağlık

Katman seçildiğinde marker verileri değişir.

---

### 3. Lojistik

Yeni sevkiyat eklenebilir.

Kayıt alanları:

- Sevkiyat adı
- Çıkış noktası
- Varış noktası
- Araç tipi / plaka
- İçerik / miktar
- Öncelik

Eklenen sevkiyatlar localStorage’a kaydedilir.

---

### 4. Tarama Merkezi

QR / Barkod demo tarama alanıdır.

Özellikler:

- Kamera açma denemesi
- Demo QR tarama
- Lojistiğe aktarma mantığı

Not: Kamera özelliği HTTPS ve tarayıcı izni gerektirir.

---

### 5. Gönüllü Sistemi

Gönüllü ekleme ve listeleme modülüdür.

Kayıt alanları:

- Ad soyad
- İl
- Yetkinlik

---

### 6. Halk Sağlığı

Afet sonrası halk sağlığı göstergelerini izlemek için hazırlanmıştır.

Göstergeler:

- Enfeksiyon riski
- Su güvenliği
- Aşılama oranı
- Sağlık hizmetlerinde normalleşme oranı

---

### 7. Raporlar

Demo afet raporu oluşturur ve localStorage’a kaydeder.

---

### 8. ARZ AI

ARZ Local Brain ile çalışan akıllı asistan modülüdür.

Örnek sorular:

```text
Depremde ilk 72 saatte ne yapılmalı?
```

```text
Hatay’a tıbbi malzeme sevkiyatı nasıl planlanmalı?
```

```text
Sel bölgesinde halk sağlığı riskleri nelerdir?
```

```text
Afet sonrası triyaj nasıl yapılır?
```

---

## API Key Gerekir mi?

Hayır.

Bu sürüm tamamen ücretsiz çalışır.

Google Gemini API kullanılmaz. Bu nedenle:

- API key gerekmez
- Billing gerekmez
- Kredi gerekmez
- Prepayment hatası alınmaz

---

## Vercel Deploy

1. GitHub reposu Vercel’e bağlanır.
2. `index.html` ve `api/ask.js` dosyaları yüklenir.
3. Deploy yapılır.
4. Site açılır.
5. ARZ AI modülünden soru sorularak test edilir.

---

## Test Edilecek Başlıklar

Şu sorularla test yapılabilir:

```text
Depremde ne yapılmalı?
```

```text
Lojistik sevkiyat planı nasıl yapılır?
```

```text
Sel sonrası halk sağlığı riskleri nelerdir?
```

```text
Yangında tahliye nasıl planlanır?
```

```text
Gönüllüler nasıl görevlendirilmeli?
```

```text
Yozgat pilot modeli nasıl olabilir?
```

---

## Güvenlik Notu

Bu demo sistemde kişisel veri işlenmemelidir.

Gerçek kullanım için:

- Güvenli kullanıcı girişi
- Yetkilendirme
- KVKK uyumlu veri saklama
- Backend veritabanı
- Loglama
- Denetim kaydı

eklenmelidir.

---

## Gelecek Geliştirmeler

Planlanan geliştirmeler:

- Firebase veya Supabase veritabanı
- Gerçek kullanıcı girişi
- Gerçek harita entegrasyonu
- QR kod üretme ve okuma
- PDF rapor çıktısı
- Rol bazlı yetkilendirme
- Gerçek zamanlı bildirim sistemi
- Mobil uygulama desteği
- Gemini API veya farklı AI servisleriyle hibrit kullanım

---

## Sürüm

**ARZ Demo Local Brain v1.0**

---

## Geliştirici Notu

Bu sürüm, ARZ projesinin temel çalışma mantığını göstermek için hazırlanmış stabil demo sürümdür.

Amaç, afet yönetimi için yapay zeka destekli, modüler ve geliştirilebilir bir karar destek sistemi altyapısı sunmaktır.
