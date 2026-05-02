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

    if (q.includes("deprem")) {
      answer = `ARZ Local Brain Analizi – Deprem

Deprem sonrası ilk 72 saat arama-kurtarma, triyaj, barınma, su ve lojistik açısından en kritik dönemdir.

Öncelikli adımlar:
1. Güvenli alan oluşturulmalı.
2. Yaralılar hafif, orta, ağır ve kritik olarak sınıflandırılmalı.
3. Enkaz, yangın, gaz kaçağı ve yol kapanması ayrı ayrı raporlanmalı.
4. Su, gıda, battaniye ve tıbbi malzeme ihtiyacı hızla kaydedilmeli.

ARZ önerisi:
Saha bildirimi, harita, lojistik ve klinik destek modülleri birlikte kullanılmalıdır. Kritik bölgeler haritada işaretlenmeli, sevkiyatlar risk seviyesine göre önceliklendirilmelidir.`;
    }

    else if (q.includes("sel") || q.includes("taşkın")) {
      answer = `ARZ Local Brain Analizi – Sel / Taşkın

Sel durumunda en büyük riskler boğulma, temiz suya erişim kaybı, kanalizasyon karışması, yol kapanması ve elektrik tehlikesidir.

Öncelikli adımlar:
1. Dere yatakları ve bodrum katlar boşaltılmalı.
2. İçme suyu güvenliği kontrol edilmeli.
3. Kapalı yollar lojistik sistemine işlenmeli.
4. Yaşlı, çocuk ve kronik hastalar öncelikli tahliye edilmeli.

Halk sağlığı notu:
Sel sonrası ishal, leptospiroz, cilt enfeksiyonları ve hijyen sorunları açısından takip yapılmalıdır.`;
    }

    else if (q.includes("yangın")) {
      answer = `ARZ Local Brain Analizi – Yangın

Yangın yönetiminde rüzgar yönü, sıcaklık, yerleşim yerine yakınlık ve tahliye koridorları kritik önemdedir.

Öncelikli adımlar:
1. Rüzgar yönüne göre tahliye planı yapılmalı.
2. Solunum problemi olan kişiler sağlık ekiplerine yönlendirilmeli.
3. Yanık vakaları klinik destek modülüne kaydedilmeli.
4. Lojistikte su, maske, serum ve yanık seti öncelikli olmalı.

ARZ önerisi:
Yangın bölgesi haritada kırmızı/turuncu riskle gösterilmeli, gönüllüler yalnızca güvenli alanlarda görevlendirilmelidir.`;
    }

    else if (
      q.includes("lojistik") ||
      q.includes("sevkiyat") ||
      q.includes("tır") ||
      q.includes("rota")
    ) {
      answer = `ARZ Local Brain Analizi – Lojistik / Sevkiyat

Afet lojistiğinde sadece en kısa yol değil; yol güvenliği, trafik, hasarlı köprü/tünel, hava durumu ve ihtiyaç önceliği dikkate alınmalıdır.

Sevkiyat planı:
1. Çıkış noktası ve varış noktası belirlenir.
2. İçerik sınıflandırılır: su, gıda, tıbbi malzeme, barınma.
3. Öncelik seviyesi atanır: düşük, orta, yüksek, kritik.
4. Alternatif rota hazırlanır.
5. Tahmini varış ve gecikme riski takip edilir.

ARZ önerisi:
Yeni sevkiyat oluşturulmalı, rota güvenlik skoru hesaplanmalı ve harita modülünde lojistik katmanı aktif edilmelidir.`;
    }

    else if (
      q.includes("triyaj") ||
      q.includes("yaralı") ||
      q.includes("hasta") ||
      q.includes("klinik")
    ) {
      answer = `ARZ Local Brain Analizi – Klinik Destek / Triyaj

Afet sahasında triyaj, hastaların aciliyetine göre sınıflandırılmasıdır.

Öncelikli gruplar:
1. Solunum sıkıntısı olanlar
2. Aktif kanaması olanlar
3. Bilinç değişikliği olanlar
4. Çocuklar, gebeler ve yaşlılar
5. Kronik hastalığı ve düzenli ilaç ihtiyacı olanlar

ARZ önerisi:
Klinik destek modülünde nabız, tansiyon, SpO2, ateş, kronik hastalık ve ilaç bilgisi girilmelidir. Sistem hasta için öncelik önerisi üretmelidir.

Not:
Bu değerlendirme karar destek amaçlıdır. Kesin tıbbi karar hekim tarafından verilmelidir.`;
    }

    else if (
      q.includes("halk sağlığı") ||
      q.includes("su") ||
      q.includes("salgın") ||
      q.includes("aşı") ||
      q.includes("hijyen")
    ) {
      answer = `ARZ Local Brain Analizi – Halk Sağlığı

Afet sonrası temiz su, sanitasyon, kalabalık barınma, gıda güvenliği ve bulaşıcı hastalık riski ön plana çıkar.

İzlenecek göstergeler:
1. Su güvenliği
2. Klorlama durumu
3. Aşılama oranı
4. Enfeksiyon bildirimi
5. Gıda hijyeni
6. Barınma alanı yoğunluğu
7. Sağlık hizmetlerinde normalleşme oranı

ARZ önerisi:
Halk sağlığı panelinde su güvenliği, enfeksiyon riski, aşılama oranı ve sağlık hizmetlerinde normalleşme oranı düzenli takip edilmelidir. Kritik bölgeler için mobil aşılama ve hijyen denetimi planlanmalıdır.`;
    }

    else if (q.includes("gönüllü")) {
      answer = `ARZ Local Brain Analizi – Gönüllü Yönetimi

Gönüllüler afet sahasında doğru görev, doğru alan ve doğru yetki ile görevlendirilmelidir.

Görev dağılımı:
1. Sağlık bilgisi olanlar sağlık destek alanına
2. Araç kullanabilenler lojistik desteğe
3. Yerel bölgeyi bilenler saha yönlendirmeye
4. İletişim becerisi güçlü olanlar kayıt ve bilgilendirmeye

ARZ önerisi:
Gönüllü kaydı, yetkinlik filtresi ve görev atama sistemi birlikte kullanılmalıdır.`;
    }

    else if (q.includes("rapor")) {
      answer = `ARZ Local Brain Analizi – Raporlama

Afet raporunda olay yeri, zaman, afet türü, ihtiyaçlar, yaralı sayısı, yol durumu, saha bildirimi ve lojistik durum bulunmalıdır.

Önerilen rapor formatı:
1. Genel durum
2. Kritik bölgeler
3. İhtiyaç analizi
4. Klinik durum
5. Lojistik plan
6. Halk sağlığı riski
7. İlk 3 aksiyon

ARZ önerisi:
Raporlar JSON/PDF demo formatında kaydedilmeli ve karar destek panelinde kullanılmalıdır.`;
    }

    else if (q.includes("yozgat")) {
      answer = `ARZ Local Brain Analizi – Yozgat Pilot Modeli

Yozgat, ARZ sistemi için pilot koordinasyon merkezi olarak modellenebilir.

Önerilen pilot başlıklar:
1. Üniversite kampüsü afet hazırlığı
2. Tıp fakültesi gönüllü sağlık ekibi
3. Halk sağlığı izlem göstergeleri
4. Lojistik çıkış noktaları
5. İl bazlı risk haritalama
6. Tatbikat ve raporlama sistemi

ARZ önerisi:
Yozgat Bozok Üniversitesi Tıp Fakültesi ve Halk Sağlığı Anabilim Dalı üzerinden küçük ölçekli pilot veri seti oluşturulabilir.`;
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
