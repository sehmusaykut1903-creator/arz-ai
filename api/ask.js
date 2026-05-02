export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ answer: "Sadece POST isteği desteklenir." });
    }

    const { message } = req.body || {};
    const q = (message || "").toLowerCase();

    if (!q.trim()) {
      return res.status(400).json({ answer: "Lütfen bir soru yazın." });
    }

    let answer = "";

    if (q.includes("deprem")) {
      answer = `ARZ Local Brain Analizi – Deprem

1. Genel Durum:
Deprem sonrası ilk 72 saat; arama-kurtarma, triyaj, barınma, su ve lojistik açısından en kritik dönemdir.

2. Öncelikli Aksiyonlar:
- Önce can güvenliği sağlanmalı.
- Yaralılar hafif/orta/ağır olarak sınıflandırılmalı.
- Enkaz, yangın, gaz kaçağı ve bina hasarı bilgileri ayrı raporlanmalı.
- Su, gıda, battaniye ve tıbbi malzeme ihtiyacı hızlıca kayda alınmalı.

3. ARZ Önerisi:
Saha bildirimi, klinik destek ve lojistik modülleri birlikte kullanılmalı. Kritik ilçeler haritada işaretlenmeli, sevkiyatlar risk seviyesine göre önceliklendirilmelidir.`;
    }

    else if (q.includes("sel") || q.includes("taşkın")) {
      answer = `ARZ Local Brain Analizi – Sel / Taşkın

1. Risk Yorumu:
Sel durumunda en büyük riskler boğulma, temiz suya erişim kaybı, kanalizasyon karışması, yol kapanması ve elektrik tehlikesidir.

2. Öncelikli Aksiyonlar:
- Dere yatakları ve bodrum katlar boşaltılmalı.
- İçme suyu güvenliği kontrol edilmeli.
- Kapalı yollar lojistik sistemine işlenmeli.
- Yaşlı, çocuk ve kronik hastalar öncelikli tahliye edilmeli.

3. Halk Sağlığı Notu:
Sel sonrası ishal, leptospiroz, cilt enfeksiyonları ve hijyen sorunları açısından takip yapılmalıdır.`;
    }

    else if (q.includes("yangın")) {
      answer = `ARZ Local Brain Analizi – Yangın

1. Genel Durum:
Yangında rüzgar yönü, sıcaklık, yerleşim yerine yakınlık ve tahliye koridorları kritik önemdedir.

2. Öncelikli Aksiyonlar:
- Rüzgar yönüne göre tahliye planı yapılmalı.
- Solunum problemi olan kişiler sağlık ekiplerine yönlendirilmeli.
- Yanık vakaları klinik destek modülüne kaydedilmeli.
- Lojistikte su, maske, serum ve yanık seti öncelikli olmalı.

3. ARZ Önerisi:
Yangın bölgesi haritada kırmızı/turuncu riskle gösterilmeli, gönüllüler güvenli alanlarda görevlendirilmelidir.`;
    }

    else if (q.includes("lojistik") || q.includes("sevkiyat") || q.includes("tır") || q.includes("rota")) {
      answer = `ARZ Local Brain Analizi – Lojistik / Sevkiyat

1. Durum:
Afet lojistiğinde sadece en kısa yol değil; yol güvenliği, trafik, hasarlı köprü/tünel, hava durumu ve ihtiyaç önceliği dikkate alınmalıdır.

2. Sevkiyat Planı:
- Çıkış noktası ve varış noktası belirlenir.
- İçerik türü sınıflandırılır: su, gıda, tıbbi malzeme, barınma.
- Öncelik seviyesi atanır: düşük, orta, yüksek, kritik.
- Alternatif rota hazırlanır.

3. ARZ Önerisi:
Yeni sevkiyat oluşturulmalı, rota güvenlik skoru hesaplanmalı ve harita modülünde lojistik katmanı aktif edilmelidir.`;
    }

    else if (q.includes("triyaj") || q.includes("yaralı") || q.includes("hasta") || q.includes("klinik")) {
      answer = `ARZ Local Brain Analizi – Klinik Destek / Triyaj

1. Klinik Öncelik:
Afet sahasında triyaj; hastaların aciliyetine göre sınıflandırılmasıdır.

2. Öncelikli Gruplar:
- Solunum sıkıntısı olanlar
- Aktif kanaması olanlar
- Bilinç değişikliği olanlar
- Çocuklar, gebeler, yaşlılar
- Kronik hastalığı ve düzenli ilaç ihtiyacı olanlar

3. ARZ Önerisi:
Klinik destek modülünde nabız, tansiyon, SpO2, ateş, kronik hastalık ve ilaç bilgisi girilmeli. Sistem hasta için öncelik önerisi üretmelidir.

Not:
Bu değerlendirme karar destek amaçlıdır; kesin tıbbi karar hekim tarafından verilmelidir.`;
    }

    else if (q.includes("halk sağlığı") || q.includes("su") || q.includes("salgın") || q.includes("aşı") || q.includes("hijyen")) {
      answer = `ARZ Local Brain Analizi – Halk Sağlığı

1. Riskler:
Afet sonrası temiz su, sanitasyon, kalabalık barınma, gıda güvenliği ve bulaşıcı hastalık riski ön plana çıkar.

2. İzlenecek Göstergeler:
- Su güvenliği
- Klorlama durumu
- Aşılama oranı
- Enfeksiyon bildirimi
- Gıda hijyeni
- Barınma alanı yoğunluğu

3. ARZ Önerisi:
Halk sağlığı panelinde su güvenliği, enfeksiyon riski ve bölgesel risk trendi düzenli takip edilmelidir. Kritik bölgeler için mobil aşılama ve hijyen denetimi planlanmalıdır.`;
    }

    else if (q.includes("gönüllü")) {
      answer = `ARZ Local Brain Analizi – Gönüllü Yönetimi

1. Genel Durum:
Gönüllüler afet sahasında doğru görev, doğru alan ve doğru yetki ile görevlendirilmelidir.

2. Görev Dağılımı:
- Sağlık bilgisi olanlar sağlık destek alanına
- Araç kullanabilenler lojistik desteğe
- Yerel bölgeyi bilenler saha yönlendirmeye
- İletişim becerisi güçlü olanlar kayıt ve bilgilendirmeye alınabilir.

3. ARZ Önerisi:
Gönüllü kaydı, yetkinlik filtresi ve görev atama sistemi birlikte kullanılmalıdır.`;
    }

    else if (q.includes("rapor")) {
      answer = `ARZ Local Brain Analizi – Raporlama

1. Rapor İçeriği:
Afet raporunda olay yeri, zaman, afet türü, ihtiyaçlar, yaralı sayısı, yol durumu, saha bildirimi ve lojistik durum bulunmalıdır.

2. Önerilen Format:
- Genel Durum
- Kritik Bölgeler
- İhtiyaç Analizi
- Klinik Durum
- Lojistik Plan
- Halk Sağlığı Riski
- İlk 3 Aksiyon

3. ARZ Önerisi:
Raporlar JSON/PDF demo formatında kaydedilmeli ve karar destek panelinde kullanılmalıdır.`;
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
- Yozgat pilot bölge analizi

Genel öneri:
ARZ sisteminde olay önce saha bildirimi olarak kaydedilmeli, ardından harita, lojistik, klinik destek ve halk sağlığı modülleriyle birlikte değerlendirilmelidir.`;
    }

    return res.status(200).json({ answer });

  } catch (error) {
    return res.status(500).json({
      answer: "ARZ Local Brain geçici hata verdi."
    });
  }
}
