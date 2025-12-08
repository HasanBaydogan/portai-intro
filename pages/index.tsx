import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [language, setLanguage] = useState<'tr' | 'en' | 'ru'>('tr');
  const [isLangOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'tr' as const, label: 'Türkçe', flag: '🇹🇷' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
    { code: 'ru' as const, label: 'Русский', flag: '🇷🇺' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLang = languages.find((l) => l.code === language) ?? languages[0];

  return (
    <>
      <Head>
        <title>Modern Web Tabanlı Yazılım Ürünleri | Şirketinizin Teknoloji Ortağı</title>
      </Head>

      <header className="site-header">
        <div className="container">
          <nav className="nav">
            <div className="brand">
              <img src="/assets/logos/aiport_logo.png" alt="PORT AI Logo" className="brand-logo" />

            </div>
            <div className="nav-right">
              <div className="nav-links">
                <a className="nav-link" href="#products">Ürünler</a>
              <a className="nav-link" href="#export-ai">Export AI</a>
                <a className="nav-link" href="#fly-ai">FLY&nbsp;AI</a>
                <a className="nav-link" href="#insights">İçgörüler</a>
                <a className="nav-link" href="#contact">İletişim</a>
              </div>
              <div className="language-switcher" ref={langRef}>
                <button
                  type="button"
                  className="language-toggle"
                  onClick={() => setLangOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={isLangOpen}
                >
                  <span aria-hidden className="language-flag">{activeLang.flag}</span>
                  <span>{activeLang.label}</span>
                  <span aria-hidden className="language-caret">⌄</span>
                </button>
                {isLangOpen && (
                  <ul className="language-menu" role="listbox" aria-label="Dil seç">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={lang.code === language}
                          className={`language-option ${lang.code === language ? 'active' : ''}`}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangOpen(false);
                          }}
                        >
                          <span aria-hidden className="language-flag">{lang.flag}</span>
                          <span>{lang.label}</span>
                          {lang.code === language && <span className="language-check" aria-hidden>✓</span>}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="glow cyan" />
          <div className="glow purple" />
          <div className="container hero-grid">
            <div>
              <h1 className="hero-title">
                Yapay zekâ destekli ihracat motoru: Export AI ile üretiminizi dünyaya açın.
              </h1>
              <p className="hero-desc">
                Export AI, üretim yapan KOBİ’lerden büyük sanayi şirketlerine kadar ihracat hedefi olan ekipler için tasarlandı. Dünya haritası üzerinde pazar potansiyellerini renklendirir, şirketinize özel Export Fit Score ile en kârlı ülkeleri saniyeler içinde sıralar.
              </p>
              <p className="hero-desc">
                Ürününüzü yurt içi ve özellikle yurt dışına satma sürecinde ihtiyaç duyacağınız tüm analiz, tool ve otomasyonlar tek platformda birleşir: veri zenginleştirilmiş pazar keşfi, nitelikli müşteri listeleri ve kişiselleştirilmiş mailing akışları.
              </p>
              <div className="hero-actions">
                <a href="#export-ai" className="btn btn-primary">Export AI’ı şimdi deneyin</a>
                <a href="#fly-ai" className="btn btn-secondary">FLY&nbsp;AI’yı keşfedin</a>
              </div>
            </div>
            <aside>
              <div className="hero-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="icon" aria-hidden>◆</div>
                    <div>
                      <div style={{ fontWeight: 700 }}>Export AI Kontrol Paneli</div>
                      <div style={{ color: 'var(--muted)', fontSize: 13 }}>İhracat zekâsı tek platformda</div>
                    </div>
                  </div>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>AI destekli</span>
                </div>
                <div className="hero-card-grid">
                  <div className="stat">
                    <div className="label">Export Fit Score</div>
                    <div className="value">92/100</div>
                  </div>
                  <div className="stat">
                    <div className="label">Yeni pazar keşfi</div>
                    <div className="value">%50↓</div>
                  </div>
                  <div className="stat">
                    <div className="label">Nitelikli firma erişimi</div>
                    <div className="value">%40↑</div>
                  </div>
                  <div className="stat">
                    <div className="label">Kapanan teklifler</div>
                    <div className="value">%30↑</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section">
          <div className="container">
            <h2 className="section-title">Ürün Ailesi</h2>
            <p className="section-subtitle">
              PORT&nbsp;AI Suite, üretim ve havacılık sektörlerindeki kritik operasyonları iki çekirdek ürünle uçtan uca dijitalleştirir.
            </p>

            <div className="card-grid" style={{ marginTop: 18 }}>
              {[
                {
                  title: 'Export AI',
                  desc: 'İhracat yapmak isteyen üretici firmalar için dünya haritası, Export Fit Score, HS Code analizi ve otomatik mailing’i bir araya getiren ihracat zekâsı platformu.',
                  link: { href: '#export-ai', label: 'Export AI Detayları →' },
                },
                {
                  title: 'FLY AI',
                  desc: 'Havacılık parça ticareti için RFQ otomasyonu, supplier eşlemesi ve marjin optimizasyonuyla satış ekiplerinizi hızlandıran platform.',
                  link: { href: '#fly-ai', label: 'Fly AI Detayları →' },
                },
              ].map((item, idx) => (
                <article className="card" key={idx}>
                  <div className="icon" aria-hidden>◎</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.link && (
                    <a className="link" href={item.link.href}>{item.link.label}</a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Export AI */}
        <section className="section" id="export-ai">
          <div className="container">
            <span className="badge">Export AI</span>
            <h2 className="section-title">Export AI: İhracat zekâsı ve otomasyonu tek platformda</h2>
            <p className="section-subtitle">
              Export AI; ihracat yapmak isteyen veya mevcut ihracatını büyütmek isteyen üretici firmalara uçtan uca ihracat zekâsı sunan B2B SaaS platformudur.
              Dünya çapındaki verileri analiz ederek ürününüz için en kârlı olabilecek ülkeleri saniyeler içinde öne çıkarır, yeni pazar keşfetme sürenizi ortalama %50’ye kadar kısaltır.
            </p>
            <div className="section-header">
              <div>
                <h3 className="section-subheading">Dünya haritası ile yaşayan pazar keşfi</h3>
                <p className="section-text">
                  Ana arayüzümüzde yer alan dünya haritasında ülkeler ihracat potansiyeline göre renk kodlarıyla gösterilir:
                  yüksek potansiyelli ülkeler koyu renkle vurgulanırken, gelişmekte olan pazarlar farklı tonlarda işaretlenir.
                  Her ülkenin kartına tıkladığınızda sektörel talep, ortalama satın alma gücü, ithalat hacmi, nüfus ve şehirleşme oranı; hatta e-ticaret penetrasyonu gibi
                  demografik içgörüler ayrıntılı şekilde açılır.
                </p>
                <ul className="bullet-list">
                  <li>Export AI, dünya genelindeki verileri analiz ederek ürününüz için en kârlı olabilecek ülkeleri saniyeler içinde öne çıkarır.</li>
                  <li>Yeni pazar keşfetme sürenizi ortalama %50’ye kadar kısaltır; aynı ekiple daha fazla ülkeye ve doğru firmaya ulaşmanızı sağlar.</li>
                </ul>
              </div>
              <aside className="highlight-card">
                <h4>Global görünürlük paneli</h4>
                <ul>
                  <li>Renk kodlu pazar ısı haritası</li>
                  <li>Ülke bazlı sektör talebi ve ithalat hacmi</li>
                  <li>Şirketinize özel Export Fit Score dağılımı</li>
                  <li>HS Code trendleri ve ortalama birim fiyatlar</li>
                </ul>
              </aside>
            </div>

            <div className="stat-grid">
              {[
                { label: 'İhracat hacmi artışı', value: '%30↑', detail: '12 ay içinde %20–30’a kadar artış sağlayan kullanıcılarımız var.' },
                { label: 'Araştırma süresi', value: '%60↓', detail: 'Satış ekipleriniz liste hazırlamaya daha az zaman harcar.' },
                { label: 'Nitelikli firma erişimi', value: '%40↑', detail: 'Export motoru ile daha fazla nitelikli firma.' },
                { label: 'İlk temas dönüşümü', value: '%25↑', detail: 'Otomatik, çok dilli mailing ile doğru mesajı gönderin.' },
              ].map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-detail">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div className="feature-grid">
              {[
                {
                  title: 'Şirketinize özel AI skorlaması',
                  desc: 'Ürün gamı, fiyat seviyesi, müşteri profili, kapasite, sertifikalar ve teslim sürelerini analiz eden Export Fit Score; her ülke ve müşteri için ayrı ayrı hesaplanır.',
                  bullets: [
                    '“Hangi ülkeye, hangi ürünle girmelisiniz?” sorusuna anında yanıt.',
                    'Satış ekipleriniz gerçekten dönüşme ihtimali yüksek firmalara odaklanır; kapanan teklif oranınız %20–30’a kadar artar.',
                  ],
                },
                {
                  title: 'Export motoru ve potansiyel müşteri listeleri',
                  desc: 'HS Code, sektör, ülke, ciro, çalışan sayısı ve geçmiş ithalat verilerine göre küresel ithalatçı ve distribütörleri tarar, şirketinize uygunluğa göre sıralar.',
                  bullets: [
                    'Export AI kullanan firmalar, geleneksel yöntemlere göre %40’a kadar daha fazla nitelikli firmaya ulaşıyor.',
                    'Ortalama %35 daha fazla ülke ve firma ile temas kuruluyor.',
                  ],
                },
                {
                  title: 'Geniş HS Code veritabanı & akıllı arama',
                  desc: 'Ürününüzü yazdığınız anda doğru HS kodlarını önerir; bu kodlar üzerinden ihracat yapan ülkeleri, yıllara göre ithalat trendlerini ve ortalama birim fiyatları sunar.',
                  bullets: [
                    'Yanlış HS kodu riski ortadan kalkar, gümrük süreçlerinde gereksiz gecikmelerin önüne geçersiniz.',
                    'İthalat hacmi, fiyat ve talep grafikleriyle doğru fiyatlama yaparsınız.',
                  ],
                },
                {
                  title: 'Ülke ve firma bazlı kıyaslama',
                  desc: 'Aynı HS kodu veya sektördeki ülkeleri ve potansiyel müşteri firmalarını karşılaştırmalı olarak gösterir.',
                  bullets: [
                    '“X ülkesinde sipariş hacmi yüksek ama ödeme süresi uzun” gibi içgörülerle riskleri önceden hesaplayın.',
                    'Karar verme sürenizi kısaltan, veri destekli pazar önceliklendirmesi yapın.',
                  ],
                },
              ].map((feature, idx) => (
                <article className="card feature-card" key={idx}>
                  <div className="icon" aria-hidden>✱</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <ul>
                    {feature.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="process">
              {[
                { n: '01', t: 'Veri toplama', d: 'Şirketinizin ürün gamı, fiyat seviyesi, kapasite, sertifikalar ve teslim süreleri Export AI’a tanımlanır.' },
                { n: '02', t: 'Pazar keşfi', d: 'AI destekli dünya haritası, ürününüz için en kârlı olabilecek ülkeleri ve sektör talebini saniyeler içinde öne çıkarır.' },
                { n: '03', t: 'Potansiyel müşteri listesi', d: 'HS Code ve sektörel kriterlere göre global ithalatçı ve distribütörler filtrelenir, Export Fit Score ile sıralanır.' },
                { n: '04', t: 'Akıllı aksiyon', d: 'Çok dilli mailing şablonları, CRM entegrasyonları ve takip otomasyonlarıyla ilk temas dönüşümlerinizi %25’e kadar artırın.' },
              ].map((step) => (
                <div key={step.n} className="step">
                  <div className="num">{step.n}</div>
                  <h4>{step.t}</h4>
                  <p>{step.d}</p>
                </div>
              ))}
            </div>

            <div className="export-ai-overview">
              <div className="highlight-card">
                <h4>Öne çıkan özellikler</h4>
                <ul>
                  <li>AI tabanlı Export Fit Score ile ülke ve firma bazlı önceliklendirme.</li>
                  <li>HS Code veritabanı, trend analizleri ve ortalama birim fiyat raporları.</li>
                  <li>Otomatik ve akıllı mailing: şirket bilgilerine ve ülke kültürüne uygun çok dilli taslaklar.</li>
                  <li>Yanıt takibi, hatırlatma mailleri ve CRM entegrasyonları tek panelde.</li>
                  <li>Dashboard ve raporlama ile pipeline, teklif ve sevkiyat süreçlerinin uçtan uca yönetimi.</li>
                </ul>
              </div>
              <div className="highlight-card">
                <h4>Neden Export AI?</h4>
                <ul>
                  <li>Pazar keşfi, ülke/müşteri analizi, HS Code verileri, potansiyel müşteri listeleri ve AI skorlaması tek platformda.</li>
                  <li>Otomatik mailing, dashboard ve raporlama ile ihracat sürecinizin tüm adımları entegre çalışır.</li>
                  <li>Export AI ile ihracat hacmini 12 ay içinde %20–30’a kadar artıran kullanıcılarımız bulunuyor.</li>
                  <li>Satış ekiplerinizin araştırma ve liste hazırlama için harcadığı zamanı %60’a kadar azaltıyoruz.</li>
                  <li>Aynı ekiple, daha fazla ülkeye ve daha doğru firmalara ulaşmanızı sağlıyoruz.</li>
                </ul>
              </div>
            </div>

            <div className="faq-grid">
              <div>
                <h3 className="section-subheading">Sık sorulan sorular</h3>
                <div className="faq-item">
                  <h4>Export AI hangi verileri kullanıyor?</h4>
                  <p>
                    Küresel ticaret istatistikleri, gümrük kayıtları, HS Code raporları, sektörel talep verileri ve doğrulanmış ithalatçı listelerini birleştiriyoruz.
                    Şirketinize özel eğitimli modellerimizle bu verileri sürekli güncelliyoruz.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>Export Fit Score nasıl hesaplanıyor?</h4>
                  <p>
                    Ürün gamınız, fiyat seviyesi, sertifikalarınız, teslim süreleriniz ve mevcut müşteri profiliniz; hedef ülke talep verileriyle birlikte skorlanır.
                    Her ülke ve potansiyel müşteri için ayrı puanlama yapılır.
                  </p>
          </div>
                <div className="faq-item">
                  <h4>Otomatik mailing nasıl çalışır?</h4>
                  <p>
                    Export AI, her hedef firmanın şirket bilgisi ve ülke kültürüne göre çok dilli taslaklar önerir, gönderim zamanlamasını optimize eder,
                    yanıtları takip eder ve CRM’inize otomatik işler.
                  </p>
                </div>
              </div>
              <div className="highlight-card">
                <h4>Güven & destek</h4>
                <ul>
                  <li>Veri güvenliği bizim için öncelikli; şirket verileriniz üçüncü taraflarla paylaşılmaz.</li>
                  <li>ISO 27001 uyumlu altyapı ve şifreli saklama politikalarıyla verilerinizi koruyoruz.</li>
                  <li>Onboarding ve eğitim süreçlerinde uzman destek ekibimiz yanınızda.</li>
                  <li>Özel kullanım senaryoları için danışmanlık ve entegrasyon hizmetleri sunuyoruz.</li>
                </ul>
              </div>
            </div>

            <div className="cta" style={{ marginTop: 48 }}>
              <div className="cta-row">
                <div>
                  <h3>Ürününüzü dünyaya açmak için Export AI’ı hemen deneyin</h3>
                  <p>
                    14 gün ücretsiz deneyin, kişiselleştirilmiş Export Fit Score raporunuzu alın ve yeni pazarlara haftalar yerine günler içinde giriş yapın.
                  </p>
                </div>
                <a className="btn btn-primary" href="mailto:hello@example.com">Ücretsiz demo talep edin</a>
              </div>
            </div>
          </div>
        </section>

        {/* FLY AI */}
        <section className="section" id="fly-ai">
          <div className="container">
            <span className="badge">FLY&nbsp;AI</span>
            <h2 className="section-title">FLY&nbsp;AI: Havacılık tedarik zinciriniz için akıllı RFQ yönetimi</h2>
            <p className="section-subtitle">
              FLY&nbsp;AI, client → supplier → satış zincirinizi şeffaflaştırarak RFQ süreçlerini dakikalar içinde tamamlamanıza yardımcı olur.
              Export AI’nın stratejik ihracat otomasyonunu tamamlayan operasyonel bir kanat gibi çalışır.
            </p>

            <div className="card-grid" style={{ marginTop: 18 }}>
              {[
                {
                  title: 'RFQ otomasyonu',
                  desc: 'Karmaşık BOM’ları sadeleştirir, alternatif parça önerileri sunar ve çoklu tedarikçi karşılaştırmasını tek ekran üzerinden yönetir.',
                },
                {
                  title: 'Marjin optimizasyonu',
                  desc: 'Dinamik fiyat simülasyonları ve marjin motoru sayesinde teklif başına kârlılık kontrol altında kalır.',
                },
                {
                  title: '42 ülkede 12.000+ supplier',
                  desc: 'Ön onaylı tedarikçi ağıyla riskleri azaltır, tedarik gecikmelerine karşı proaktif aksiyon almanızı sağlar.',
                },
              ].map((item, idx) => (
                <article className="card" key={idx}>
                  <div className="icon" aria-hidden>⚙</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="highlight-card" style={{ marginTop: 32 }}>
              <h4>FLY&nbsp;AI’yi neden tercih etmelisiniz?</h4>
              <ul>
                <li>Teklif hazırlama süresini %60’a kadar kısaltır.</li>
                <li>Yıllık kişi başı 250+ saat manuel veri girişinden tasarruf sağlar.</li>
                <li>ERP/MES entegrasyonları ve denetim izleriyle süreçlerinizi güvence altına alır.</li>
                <li>7/24 uzman destek ekibi ve operasyonel SLA taahhütleri sunar.</li>
              </ul>
            </div>

            <div className="section-cta" style={{ marginTop: 32 }}>
              <a className="btn btn-secondary" href="mailto:hello@example.com">FLY&nbsp;AI için demo iste</a>
              <a className="btn btn-link" href="#export-ai">Export AI özelliklerini keşfet →</a>
            </div>
          </div>
        </section>

        {/* İçgörüler */}
        <section className="section" id="insights">
          <div className="container">
            <h2 className="section-title">İstatistikler & İçgörüler</h2>
            <p className="section-subtitle">
              Export AI ve FLY&nbsp;AI, operasyonel verileri tek yerde toplar; karar vericilere gerçek zamanlı içgörüler sunar.
            </p>
            <div className="tags">
              {[
                'Export Fit Score',
                'Pazar Potansiyeli Isı Haritası',
                'HS Code Trendleri',
                'AI Skor Kartları',
                'RFQ Performansı',
                'Otomatik Mailing Logları',
              ].map((tag) => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="section">
          <div className="container">
            <div className="cta">
              <div className="cta-row">
                <div>
                  <h3>Export AI ile ihracatınızı büyütün</h3>
                  <p>
                    Ücretsiz demo planlayın, Export Fit Score raporunuzu alın ve hangi pazarlara hangi ürünlerle girmeniz gerektiğini birlikte keşfedelim.
                  </p>
                </div>
                <a className="btn btn-primary" href="mailto:hello@example.com">Export AI demo planla</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/assets/logos/aiport_logo.png" alt="PORT AI Logo" className="brand-logo" />
              {/* <span>PORT&nbsp;AI</span> */}
            </div>
            <div>© {new Date().getFullYear()} AI&nbsp;PORT Yazılım. Tüm hakları saklıdır.</div>
          </div>
        </div>
      </footer>
    </>
  );
}


