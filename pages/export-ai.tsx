import Head from 'next/head';

export default function ExportAI() {
  return (
    <>
      <Head>
        <title>Export AI | Akıllı Veri Dışa Aktarım Platformu</title>
      </Head>
      <main className="container" style={{ padding: '48px 0' }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>Export AI – Akıllı Veri Dışa Aktarım Platformu</h1>
        <p style={{ fontSize: 18, marginBottom: 32 }}>
          Export AI, şirketinizin verilerini analiz ederek otomatik raporlar, içgörüler ve dışa aktarım süreçlerini kolaylaştırır. Yapay zeka destekli otomasyonlarla iş süreçlerinizi hızlandırır.
        </p>
        <section style={{ marginBottom: 32 }}>
          <h2>Öne Çıkan Özellikler</h2>
          <ul style={{ fontSize: 16, marginLeft: 24 }}>
            <li>Veri analizi ve otomatik raporlama</li>
            <li>Farklı formatlarda veri dışa aktarımı</li>
            <li>AI tabanlı öngörüler ve öneriler</li>
            <li>Güvenli ve hızlı entegrasyon</li>
            <li>Kullanıcı dostu arayüz</li>
          </ul>
        </section>
        <section style={{ marginBottom: 32 }}>
          <h2>Kimler İçin?</h2>
          <p>Veriyle çalışan, raporlama ve dışa aktarım süreçlerini optimize etmek isteyen tüm işletmeler için uygundur.</p>
        </section>
        <section style={{ marginBottom: 32 }}>
          <h2>Demo ve İletişim</h2>
          <p>Daha fazla bilgi ve demo talebi için <a href="mailto:info@portai.com.tr">info@portai.com.tr</a> adresine ulaşabilirsiniz.</p>
        </section>
      </main>
    </>
  );
}
