import Head from 'next/head';

export default function FlyAI() {
  return (
    <>
      <Head>
        <title>FlyAI | Havacılık Satış Yönetim Platformu</title>
      </Head>
      <main className="container" style={{ padding: '48px 0' }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 16 }}>FlyAI – Havacılık Satış Yönetim Platformu</h1>
        <p style={{ fontSize: 18, marginBottom: 32 }}>
          FlyAI, havacılık sektörüne özel geliştirilmiş, şirket bazlı bir satış yönetim platformudur. Uçak parça taleplerinin karşılanmasından, tedarikçi ve client yönetimine kadar tüm süreçleri akıllı algoritmalar ve yapay zeka ile optimize eder.
        </p>
        <section style={{ marginBottom: 32 }}>
          <h2>Nasıl Çalışır?</h2>
          <ol style={{ fontSize: 16, marginLeft: 24 }}>
            <li>B kişisi, A kişisinden gelen uçak parça arayışına yanıt verir.</li>
            <li>C kişisinden bulunan parçayı tedarik eder.</li>
            <li>Parçayı A kişisine satar ve tüm süreç platform üzerinden yönetilir.</li>
          </ol>
        </section>
        <section style={{ marginBottom: 32 }}>
          <h2>Temel Özellikler</h2>
          <ul style={{ fontSize: 16, marginLeft: 24 }}>
            <li>Parça, client, tedarikçi ve lojistik firması veritabanı</li>
            <li>Akıllı eşleştirme algoritmaları ile en iyi teklifin bulunması</li>
            <li>AI destekli mail listener ve otomatik tekliflendirme</li>
            <li>Mail tracking, akıllı marjin hesaplayıcı</li>
            <li>Quote, Proforma Invoice, Purchase Order, Lojistik Form wizardları</li>
            <li>Invoice creator, PDF oluşturucu, mail sender hizmetleri</li>
            <li>İstatistikler, chartlar ve özet raporlar ile işletme gelişimi</li>
          </ul>
        </section>
        <section style={{ marginBottom: 32 }}>
          <h2>Kimler İçin?</h2>
          <p>Havacılık sektöründe parça satışı, tedarik ve lojistik süreçlerini yöneten şirketler için idealdir.</p>
        </section>
        <section style={{ marginBottom: 32 }}>
          <h2>Demo ve İletişim</h2>
          <p>Daha fazla bilgi ve demo talebi için <a href="mailto:info@portai.com.tr">info@portai.com.tr</a> adresine ulaşabilirsiniz.</p>
        </section>
      </main>
    </>
  );
}
