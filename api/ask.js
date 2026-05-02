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

    if (
      q.includes("deprem") ||
      q.includes("enkaz") ||
      q.includes("artçı") ||
      q.includes("sarsıntı")
    ) {
      answer = `ARZ Local Brain Analizi – Deprem

Deprem sonrası ilk 72 saat; arama-kurtarma, triyaj, barınma, temiz su, gıda, haberleşme ve lojistik açısından en kritik dönemdir.

Öncelikli aksiyonlar:
1. Önce can güvenliği sağlanmalı ve güvenli toplanma alanı belirlenmelidir.
2. Yaralılar triyaj sistemiyle hafif, orta, ağır ve kritik olarak sınıflandırılmalıdır.
3. Enkaz, yangın, gaz kaçağı, bina hasarı ve yol kapanmaları ayrı ayrı raporlanmalıdır.
4. Su, gıda, battaniye, çadır ve tıbbi malzeme ihtiyacı hızlıca kaydedilmelidir.
5. Kritik bölgeler harita üzerinde işaretlenmeli ve sevkiyat önceliği buna göre verilmelidir.

ARZ önerisi:
Saha bildirimi, harita, lojistik, klinik destek ve halk sağlığı modülleri birlikte kullanılmalıdır. İlk aşamada can kaybını azaltacak triyaj ve ulaşım koridoru yönetimi önceliklendirilmelidir.`;
    }

    else if (
      q.includes("sel") ||
      q.includes("taşkın") ||
      q.includes("su baskını") ||
      q.includes("yağış")
    ) {
      answer = `ARZ Local Brain Analizi – Sel / Taşkın

Sel durumunda temiz suya erişim kaybı, kanalizasyon karışması, elektrik tehlikesi, yol kapanması ve tahliye ihtiyacı temel risklerdir.

Öncelikli aksiyonlar:
1. Dere yatakları, bodrum katlar ve düşük kotlu bölgeler hızla boşaltılmalıdır.
2. İçme suyu güvenliği kontrol edilmeli ve şüpheli sular kullanılmamalıdır.
3. Kapalı yollar ve riskli geçişler lojistik sistemine işlenmelidir.
4. Çocuklar, yaşlılar, gebeler, engelliler ve kronik hastalar öncelikli tahliye edilmelidir.
5. Geçici barınma alanlarında hijyen ve atık yönetimi sağlanmalıdır.

Halk sağlığı notu:
Sel sonrası ishal, cilt enfeksiyonları, su kaynaklı bulaşıcı hastalıklar ve hijyen sorunları açısından aktif izlem yapılmalıdır.`;
    }

    else if (
      q.includes("yangın") ||
      q.includes("orman") ||
      q.includes("duman") ||
      q.includes("yanık")
    ) {
      answer = `ARZ Local Brain Analizi – Yangın

Yangın yönetiminde rüzgar yönü, sıcaklık, tahliye koridorları, yerleşim yerine yakınlık ve solunum riski kritik önemdedir.

Öncelikli aksiyonlar:
1. Rüzgar yönüne göre güvenli tahliye planı yapılmalıdır.
2. Duman maruziyeti olanlar sağlık ekiplerine yönlendirilmelidir.
3. Yanık vakaları klinik destek modülüne kaydedilmelidir.
4. Lojistikte su, maske, serum, yanık seti ve oksijen desteği önceliklendirilmelidir.
5. Gönüllüler yalnızca güvenli alanlarda görevlendirilmelidir.

ARZ önerisi:
Yangın bölgesi haritada turuncu/kırmızı riskle gösterilmeli; sağlık, lojistik ve tahliye ekipleri aynı operasyon ekranında takip edilmelidir.`;
    }

    else if (
      q.includes("lojistik") ||
      q.includes("sevkiyat") ||
      q.includes("tır") ||
      q.includes("kamyon") ||
      q.includes("rota") ||
      q.includes("malzeme") ||
      q.includes("yardım")
    ) {
      answer = `ARZ Local Brain Analizi – Lojistik / Sevkiyat

Afet lojistiğinde sadece en kısa yol değil; yol güvenliği, trafik, hasarlı köprü/tünel, hava durumu, yakıt durumu ve ihtiyaç önceliği dikkate alınmalıdır.

Sevkiyat planı:
1. Çıkış noktası ve varış noktası net belirlenmelidir.
2. İçerik sınıflandırılmalıdır: su, gıda, tıbbi malzeme, barınma, hijyen, enerji.
3. Öncelik seviyesi atanmalıdır: düşük, orta, yüksek, kritik.
4. Alternatif rota hazırlanmalı ve yol kapanmaları takip edilmelidir.
5. Tahmini varış, gecikme riski ve güvenlik skoru izlenmelidir.

ARZ önerisi:
Yeni sevkiyat kaydı oluşturulmalı, rota güvenlik skoru hesaplanmalı ve harita modülünde lojistik katmanı aktif edilmelidir. Kritik bölgelere giden sevkiyatlar ayrı izlenmelidir.`;
    }

    else if (
      q.includes("triyaj") ||
      q.includes("yaralı") ||
      q.includes("hasta") ||
      q.includes("klinik") ||
      q.includes("sağlık") ||
      q.includes("hekim")
    ) {
      answer = `ARZ Local Brain Analizi – Klinik Destek / Triyaj

Afet sahasında triyaj, hastaların aciliyetine göre sınıflandırılmasıdır. Amaç, sınırlı sağlık kaynağını en fazla hayat kurtaracak şekilde kullanmaktır.

Öncelikli gruplar:
1. Solunum sıkıntısı olanlar
2. Aktif kanaması olanlar
3. Bilinç değişikliği olanlar
4. Şok bulgusu olanlar
5. Çocuklar, gebeler ve yaşlılar
6. Kronik hastalığı ve düzenli ilaç ihtiyacı olanlar

ARZ önerisi:
Klinik destek modülünde nabız, tansiyon, SpO2, ateş, bilinç durumu, kronik hastalık ve ilaç bilgisi girilmelidir. Sistem hasta için öncelik önerisi üretmelidir.

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

Afet sonrası temiz su, sanitasyon, kalabalık barınma, gıda güvenliği, atık yönetimi ve bulaşıcı hastalık riski ön plana çıkar.

İzlenecek göstergeler:
1. Su güvenliği
2. Klorlama durumu
3. Aşılama oranı
4. Enfeksiyon bildirimi
5. Gıda hijyeni
6. Barınma alanı yoğunluğu
7. Sağlık hizmetlerinde normalleşme oranı

ARZ önerisi:
Halk sağlığı panelinde su güvenliği, enfeksiyon riski, aşılama oranı ve sağlık hizmetlerinde normalleşme oranı düzenli takip edilmelidir. Kritik bölgeler için mobil aşılama, hijyen denetimi ve temiz su planlaması yapılmalıdır.`;
    }

    else if (
      q.includes("gönüllü") ||
      q.includes("ekip") ||
      q.includes("görev")
    ) {
      answer = `ARZ Local Brain Analizi – Gönüllü Yönetimi

Gönüllüler afet sahasında doğru görev, doğru alan ve doğru yetki ile görevlendirilmelidir. Kontrolsüz gönüllü hareketi operasyonu zorlaştırabilir.

Görev dağılımı:
1. Sağlık bilgisi olanlar sağlık destek alanına yönlendirilmelidir.
2. Araç kullanabilenler lojistik desteğe alınabilir.
3. Yerel bölgeyi bilenler saha yönlendirmede değerlendirilebilir.
4. İletişim becerisi güçlü olanlar kayıt ve bilgilendirmeye alınabilir.
5. Deneyimsiz gönüllüler güvenli alanlarda destek görevlerine verilmelidir.

ARZ önerisi:
Gönüllü kaydı, yetkinlik filtresi ve görev atama sistemi birlikte kullanılmalıdır. Her gönüllünün görev, konum ve uygunluk durumu sistemde takip edilmelidir.`;
    }

    else if (
      q.includes("rapor") ||
      q.includes("json") ||
      q.includes("pdf") ||
      q.includes("çıktı")
    ) {
      answer = `ARZ Local Brain Analizi – Raporlama

Afet raporunda olay yeri, zaman, afet türü, ihtiyaçlar, yaralı sayısı, yol durumu, saha bildirimi, lojistik durum ve halk sağlığı riski bulunmalıdır.

Önerilen rapor formatı:
1. Genel durum
2. Kritik bölgeler
3. İhtiyaç analizi
4. Klinik durum
5. Lojistik plan
6. Halk sağlığı riski
7. Gönüllü/ekip durumu
8. İlk 3 operasyonel aksiyon

ARZ önerisi:
Raporlar karar destek panelinde kullanılmalı, operasyon sonrası değerlendirme için saklanmalı ve gerektiğinde JSON/PDF demo çıktısı üretilebilmelidir.`;
    }

    else if (
      q.includes("yozgat") ||
      q.includes("bozok") ||
      q.includes("pilot")
    ) {
      answer = `ARZ Local Brain Analizi – Yozgat Pilot Modeli

Yozgat, ARZ sistemi için pilot koordinasyon merkezi olarak modellenebilir. Üniversite, tıp fakültesi, halk sağlığı birimi ve gönüllü öğrenci yapısı pilot uygulama için uygun bir çerçeve sunar.

Pilot başlıklar:
1. Üniversite kampüsü afet hazırlığı
2. Tıp fakültesi gönüllü sağlık ekibi
3. Halk sağlığı izlem göstergeleri
4. Lojistik çıkış noktaları
5. İl bazlı risk haritalama
6. Tatbikat ve raporlama sistemi
7. Sağlık hizmetlerinde normalleşme oranı takibi

ARZ önerisi:
Yozgat Bozok Üniversitesi Tıp Fakültesi ve Halk Sağlığı Anabilim Dalı üzerinden küçük ölçekli pilot veri seti oluşturulabilir. Bu yapı daha sonra il ve bölge düzeyine genişletilebilir.`;
    }

    else if (
      q.includes("nfc") ||
      q.includes("qr") ||
      q.includes("barkod") ||
      q.includes("kimlik")
    ) {
      answer = `ARZ Local Brain Analizi – Tarama Merkezi

QR, barkod, kimlik ve NFC tabanlı tarama sistemi afet sahasında hızlı doğrulama için kullanılabilir.

Kullanım alanları:
1. Yardım kolisi veya sevkiyat etiketi doğrulama
2. Gönüllü kartı kontrolü
3. Hasta/sağlık kartı demo okuması
4. Malzeme giriş-çıkış takibi
5. Bölgeye gönderilen yardımın doğrulanması

ARZ önerisi:
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
