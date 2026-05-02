export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        answer: "Sadece POST isteği desteklenir."
      });
    }

    const { message } = req.body || {};
    const q = (message || "").toLowerCase().trim();

    if (!q) {
      return res.status(400).json({
        answer: "Lütfen bir soru yazın."
      });
    }

    let answer = "";

    if (q.includes("deprem") || q.includes("enkaz") || q.includes("artçı")) {
      answer = `ARZ Local Brain Analizi – Deprem

1. Genel Durum:
Deprem sonrası ilk 72 saat; arama-kurtarma, triyaj, barınma, temiz su, gıda, haberleşme ve lojistik açısından en kritik dönemdir.

2. Öncelikli Aksiyonlar:
- Güvenli toplanma alanı belirlenmeli.
- Yaralılar triyaj sistemiyle sınıflandırılmalı.
- Enkaz, gaz kaçağı, yangın ve yol kapanmaları ayrı raporlanmalı.
- Su, gıda, battaniye, çadır ve tıbbi malzeme ihtiyacı kaydedilmeli.
- Kritik bölgeler haritada işaretlenmeli.

3. ARZ Önerisi:
Saha bildirimi, harita, lojistik, klinik destek ve halk sağlığı modülleri birlikte kullanılmalıdır. İlk aşamada can kaybını azaltacak triyaj ve ulaşım koridoru yönetimi önceliklendirilmelidir.`;
    }

    else if (q.includes("sel") || q.includes("taşkın") || q.includes("su baskını")) {
      answer = `ARZ Local Brain Analizi – Sel / Taşkın

1. Genel Durum:
Sel durumunda temiz suya erişim kaybı, kanalizasyon karışması, elektrik tehlikesi, yol kapanması ve tahliye ihtiyacı temel risklerdir.

2. Öncelikli Aksiyonlar:
- Dere yatakları, bodrum katlar ve düşük kotlu bölgeler boşaltılmalı.
- İçme suyu güvenliği kontrol edilmeli.
- Kapalı yollar lojistik sistemine işlenmeli.
- Çocuklar, yaşlılar, gebeler ve kronik hastalar öncelikli tahliye edilmeli.
- Geçici barınma alanlarında hijyen ve atık yönetimi sağlanmalı.

3. Halk Sağlığı Notu:
Sel sonrası ishal, cilt enfeksiyonları, su kaynaklı bulaşıcı hastalıklar ve hijyen sorunları açısından aktif izlem yapılmalıdır.`;
    }

    else if (q.includes("yangın") || q.includes("orman") || q.includes("duman")) {
      answer = `ARZ Local Brain Analizi – Yangın

1. Genel Durum:
Yangın yönetiminde rüzgar yönü, sıcaklık, tahliye koridorları, yerleşim yerine yakınlık ve solunum riski kritik önemdedir.

2. Öncelikli Aksiyonlar:
- Rüzgar yönüne göre güvenli tahliye planı yapılmalı.
- Duman maruziyeti olanlar sağlık ekiplerine yönlendirilmeli.
- Yanık vakaları klinik destek modülüne kaydedilmeli.
- Lojistikte su, maske, serum, yanık seti ve oksijen desteği önceliklendirilmelidir.
- Gönüllüler yalnızca güvenli alanlarda görevlendirilmelidir.

3. ARZ Önerisi:
Yangın bölgesi haritada turuncu/kırmızı riskle gösterilmeli; sağlık, lojistik ve tahliye ekipleri aynı operasyon ekranında takip edilmelidir.`;
    }

    else if (
      q.includes("lojistik") ||
      q.includes("sevkiyat") ||
      q.includes("tır") ||
      q.includes("rota") ||
      q.includes("malzeme") ||
      q.includes("yardım")
    ) {
      answer = `ARZ Local Brain Analizi – Lojistik / Sevkiyat

1. Genel Durum:
Afet lojistiğinde sadece en kısa yol değil; yol güvenliği, trafik, hasarlı köprü/tünel, hava durumu, yakıt durumu ve ihtiyaç önceliği dikkate alınmalıdır.

2. Sevkiyat Planı:
- Çıkış noktası ve varış noktası net belirlenir.
- İçerik sınıflandırılır: su, gıda, tıbbi malzeme, barınma, hijyen, enerji.
- Öncelik seviyesi atanır: düşük, orta, yüksek, kritik.
- Alternatif rota hazırlanır.
- Tahmini varış, gecikme riski ve güvenlik skoru izlenir.

3. ARZ Önerisi:
Yeni sevkiyat kaydı oluşturulmalı, rota güvenlik skoru hesaplanmalı ve harita modülünde lojistik katmanı aktif edilmelidir.`;
    }

    else if (
      q.includes("triyaj") ||
      q.includes("yaralı") ||
      q.includes("hasta") ||
      q.includes("klinik") ||
      q.includes("sağlık")
    ) {
      answer = `ARZ Local Brain Analizi – Klinik Destek / Triyaj

1. Genel Durum:
Afet sahasında triyaj, hastaların aciliyetine göre sınıflandırılmasıdır. Amaç sınırlı sağlık kaynağını en fazla hayat kurtaracak şekilde kullanmaktır.

2. Öncelikli Gruplar:
- Solunum sıkıntısı olanlar
- Aktif kanaması olanlar
- Bilinç değişikliği olanlar
- Şok bulgusu olanlar
- Çocuklar, gebeler ve yaşlılar
- Kronik hastalığı ve düzenli ilaç ihtiyacı olanlar

3. ARZ Önerisi:
Klinik destek modülünde nabız, tansiyon, SpO2, ateş, bilinç durumu, kronik hastalık ve ilaç bilgisi girilmelidir.

Not:
Bu değerlendirme karar destek amaçlıdır. Kesin tıbbi karar hekim tarafından verilmelidir.`;
    }

    else if (
      q.includes("halk sağlığı") ||
      q.includes("su") ||
      q.includes("salgın") ||
      q.includes("aşı") ||
      q.includes("hijyen") ||
      q.includes("enfeksiyon") ||
      q.includes("normalleşme")
    ) {
      answer = `ARZ Local Brain Analizi – Halk Sağlığı

1. Genel Durum:
Afet sonrası temiz su, sanitasyon, kalabalık barınma, gıda güvenliği, atık yönetimi ve bulaşıcı hastalık riski ön plana çıkar.

2. İzlenecek Göstergeler:
- Su güvenliği
- Klorlama durumu
- Aşılama oranı
- Enfeksiyon bildirimi
- Gıda hijyeni
- Barınma alanı yoğunluğu
- Sağlık hizmetlerinde normalleşme oranı

3. ARZ Önerisi:
Halk sağlığı panelinde su güvenliği, enfeksiyon riski, aşılama oranı ve sağlık hizmetlerinde normalleşme oranı düzenli takip edilmelidir. Kritik bölgeler için mobil aşılama, hijyen denetimi ve temiz su planlaması yapılmalıdır.`;
    }

    else if (q.includes("gönüllü") || q.includes("ekip") || q.includes("görev")) {
      answer = `ARZ Local Brain Analizi – Gönüllü Yönetimi

1. Genel Durum:
Gönüllüler afet sahasında doğru görev, doğru alan ve doğru yetki ile görevlendirilmelidir. Kontrolsüz gönüllü hareketi operasyonu zorlaştırabilir.

2. Görev Dağılımı:
- Sağlık bilgisi olanlar sağlık destek alanına yönlendirilebilir.
- Araç kullanabilenler lojistik desteğe alınabilir.
- Yerel bölgeyi bilenler saha yönlendirmede değerlendirilebilir.
- İletişim becerisi güçlü olanlar kayıt ve bilgilendirmeye alınabilir.
- Deneyimsiz gönüllüler güvenli alanlarda destek görevlerine verilmelidir.

3. ARZ Önerisi:
Gönüllü kaydı, yetkinlik filtresi ve görev atama sistemi birlikte kullanılmalıdır. Her gönüllünün görev, konum ve uygunluk durumu sistemde takip edilmelidir.`;
    }

    else if (q.includes("rapor") || q.includes("json") || q.includes("pdf")) {
      answer = `ARZ Local Brain Analizi – Raporlama

1. Genel Durum:
Afet raporunda olay yeri, zaman, afet türü, ihtiyaçlar, yaralı sayısı, yol durumu, saha bildirimi, lojistik durum ve halk sağlığı riski bulunmalıdır.

2. Önerilen Format:
- Genel durum
- Kritik bölgeler
- İhtiyaç analizi
- Klinik durum
- Lojistik plan
- Halk sağlığı riski
- Gönüllü/ekip durumu
- İlk 3 operasyonel aksiyon

3. ARZ Önerisi:
Raporlar karar destek panelinde kullanılmalı, operasyon sonrası değerlendirme için saklanmalı ve gerektiğinde JSON/PDF demo çıktısı üretilebilmelidir.`;
    }

    else if (q.includes("yozgat") || q.includes("bozok") || q.includes("pilot")) {
      answer = `ARZ Local Brain Analizi – Yozgat Pilot Modeli

1. Genel Durum:
Yozgat, ARZ sistemi için pilot koordinasyon merkezi olarak modellenebilir. Üniversite, tıp fakültesi, halk sağlığı birimi ve gönüllü öğrenci yapısı pilot uygulama için uygun bir çerçeve sunar.

2. Pilot Başlıklar:
- Üniversite kampüsü afet hazırlığı
- Tıp fakültesi gönüllü sağlık ekibi
- Halk sağlığı izlem göstergeleri
- Lojistik çıkış noktaları
- İl bazlı risk haritalama
- Tatbikat ve raporlama sistemi
- Sağlık hizmetlerinde normalleşme oranı takibi

3. ARZ Önerisi:
Yozgat Bozok Üniversitesi Tıp Fakültesi ve Halk Sağlığı Anabilim Dalı üzerinden küçük ölçekli pilot veri seti oluşturulabilir. Bu yapı daha sonra il ve bölge düzeyine genişletilebilir.`;
    }

    else if (q.includes("qr") || q.includes("nfc") || q.includes("barkod") || q.includes("kimlik")) {
      answer = `ARZ Local Brain Analizi – Tarama Merkezi

1. Genel Durum:
QR, barkod, kimlik ve NFC tabanlı tarama sistemi afet sahasında hızlı doğrulama için kullanılabilir.

2. Kullanım Alanları:
- Yardım kolisi veya sevkiyat etiketi doğrulama
- Gönüllü kartı kontrolü
- Hasta/sağlık kartı demo okuması
- Malzeme giriş-çıkış takibi
- Bölgeye gönderilen yardımın doğrulanması

3. ARZ Önerisi:
Tarama Merkezi, lojistik ve klinik destek modülleriyle bağlantılı çalışmalıdır. QR ile okunan sevkiyat doğrudan lojistik listesine aktarılabilir.`;
    }

    else {
      answer = `ARZ Local Brain aktif.

Sorunu afet yönetimi açısından değerlendirdim. Daha net analiz için şu başlıklardan biriyle sorabilirsin:

- Deprem sonrası ilk 72 saat
- Sel ve halk sağlığı riskleri
- Yangın tahliye planı
- Lojistik sevkiyat planı
- Klinik triyaj
- Gönüllü görevlendirme
- Afet raporu oluşturma
- QR / NFC / kimlik tarama
- Yozgat pilot bölge analizi

Genel öneri:
ARZ sisteminde olay önce saha bildirimi olarak kaydedilmeli; ardından harita, lojistik, klinik destek, gönüllü yönetimi ve halk sağlığı modülleriyle birlikte değerlendirilmelidir.`;
    }

    return res.status(200).json({ answer });

  } catch (error) {
    return res.status(500).json({
      answer: "ARZ Local Brain geçici hata verdi."
    });
  }
}
