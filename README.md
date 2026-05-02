# ARZ - Afet Raporlama ve Zamanlama

ARZ; afet durumlarında saha bildirimi, harita tabanlı risk gösterimi, lojistik sevkiyat, gönüllü yönetimi, halk sağlığı takibi, raporlama ve yapay zeka destekli karar desteği sağlamak amacıyla hazırlanmış web tabanlı demo sistemdir.

Bu sürüm Firebase Authentication + Firestore profil/ayar sistemi ve ücretsiz ARZ Local Brain altyapısını kullanır.

## Proje Bilgileri

- Proje Adı: ARZ - Afet Raporlama ve Zamanlama
- Slogan: Doğru Veri, Doğru Zaman, Doğru Müdahale.
- Ana Geliştirici: Şehmus AYKUT
- Proje Ekibi: Şehmus AYKUT & Aghajan MUSALI
- Kurum: Yozgat Bozok Üniversitesi Tıp Fakültesi
- Anabilim Dalı: Halk Sağlığı Anabilim Dalı
- Danışman: Prof. Dr. Vugar Ali TÜRKSOY

## Dosya Yapısı

```text
arz-ai/
├── index.html
├── firebase-config.js
├── auth.js
├── database.js
├── roles.js
├── translations.js
├── api/
│   └── ask.js
├── README.md
└── package.json
```

## Kullanılan Teknolojiler

- HTML5
- CSS3
- Vanilla JavaScript
- Firebase Authentication
- Cloud Firestore
- Firebase Storage altyapı hazırlığı
- Vercel Serverless Function
- ARZ Local Brain

## Modüller

- Panel
- Harita
- Lojistik
- Tarama Merkezi
- Gönüllü Sistemi
- Saha Bildirimi
- Halk Sağlığı
- Raporlar
- ARZ AI
- Profil
- Ayarlar

## Firebase Koleksiyonları

Uygulama aşağıdaki koleksiyonları kullanır:

```text
profiles
userSettings
shipments
reports
aiHistory
```

Gönüllü ve saha bildirimi verileri bu sürümde localStorage ile çalışır; istenirse sonraki sürümde Firestore'a taşınabilir.

## ARZ Local Brain

ARZ Local Brain, ücretli AI API kullanmadan afet yönetimi, lojistik, halk sağlığı, triyaj, gönüllü yönetimi, raporlama ve QR/NFC tarama konularında yapılandırılmış cevap üretir.

API key, billing veya kredi gerekmez.

## Firebase Kurulum Notu

Firebase Console'da Authentication > Sign-in method bölümünden Email/Password etkinleştirilmelidir.
Firestore Database test mode ile başlatılabilir. Gerçek kullanım için güvenlik kuralları düzenlenmelidir.

## Vercel Deploy

1. Dosyalar GitHub'a eklenir.
2. Repo Vercel'e bağlanır.
3. Deploy edilir.
4. Site açılır.
5. Kayıt ol / giriş yap test edilir.

## Test Soruları

```text
Depremde ilk 72 saatte ne yapılmalı?
```

```text
Hatay’a tıbbi malzeme sevkiyatı nasıl planlanmalı?
```

```text
Sel sonrası halk sağlığı riskleri nelerdir?
```

## Güvenlik Notu

Bu demo sistemde gerçek kişisel veri işlenmemelidir. Gerçek kullanım için KVKK uyumlu veri saklama, rol bazlı yetki, güvenlik kuralları ve denetim kayıtları eklenmelidir.
