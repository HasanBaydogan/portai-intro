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
              <span className="brand-mark" />
              <span>PORT&nbsp;AI</span>
            </div>
            <div className="nav-right">
              <div className="nav-links">
                <a className="nav-link" href="#products">Ürünler</a>
                <a className="nav-link" href="#fly-ai">FLY&nbsp;AI</a>
                <a className="nav-link" href="#export-ai">Export AI</a>
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
                PORT&nbsp;AI ürün ailesiyle karmaşık satış süreçlerini orkestre edin.
              </h1>
              <p className="hero-desc">
                Havacılık parçalarından global ihracat operasyonlarına kadar, PORT&nbsp;AI Suite sektör odaklı SaaS çözümleri sunar.
                FLY&nbsp;AI, client taleplerini doğru supplier ağıyla eşleştirirken Export AI ihracat ekiplerine uçtan uca otomasyon sağlar.
              </p>
              <div className="hero-actions">
                <a href="#products" className="btn btn-primary">Ürünleri Keşfet</a>
                <a href="#contact" className="btn btn-secondary">Bize Ulaşın</a>
              </div>
            </div>
            <aside>
              <div className="hero-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="icon" aria-hidden>◆</div>
                    <div>
                      <div style={{ fontWeight: 700 }}>PORT&nbsp;AI Konsolu</div>
                      <div style={{ color: 'var(--muted)', fontSize: 13 }}>Client → Supplier → Export</div>
                    </div>
                  </div>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>AI destekli</span>
                </div>
                <div className="hero-card-grid">
                  <div className="stat">
                    <div className="label">FLY&nbsp;AI Quote</div>
                    <div className="value">128</div>
                  </div>
                  <div className="stat">
                    <div className="label">Marjin Skoru</div>
                    <div className="value">%22↑</div>
                  </div>
                  <div className="stat">
                    <div className="label">Mail Cevabı</div>
                    <div className="value">~4dk</div>
                  </div>
                  <div className="stat">
                    <div className="label">Export Wizard</div>
                    <div className="value">4</div>
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
              PORT&nbsp;AI, FLY&nbsp;AI ve Export AI ile başlayarak farklı sektörler için ölçeklenebilir SaaS ürünleri sunar. Yakında yeni ürünler ekleniyor.
            </p>

            <div className="card-grid" style={{ marginTop: 18 }}>
              {[
                {
                  title: 'FLY&nbsp;AI',
                  desc: 'Havacılık parça ticaretinde client → supplier → satış zincirini yöneten, marjin motoru ve mail otomasyonlarıyla donatılmış platform.',
                  link: { href: '#fly-ai', label: 'Detaylar →' },
                },
                {
                  title: 'Export AI',
                  desc: 'İhracat ekipleri için teklif, gümrük ve lojistik süreçlerini otomatikleştiren, mail takip ve doküman üreticilerini içeren çözüm.',
                  link: { href: '#export-ai', label: 'Detaylar →' },
                },
                {
                  title: 'Yeni Ürün (Yakında)',
                  desc: 'PORT&nbsp;AI roadmap’inde yer alan yeni sektör odaklı SaaS çözümü. İhtiyacınıza göre özelleştirilen erken erişim programına katılın.',
                  link: { href: '#contact', label: 'Erken erişim →' },
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

        {/* FLY AI */}
        <section className="section" id="fly-ai">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="badge">Yapay zekâ destekli RFQ</span>
                <h2 className="section-title">FLY&nbsp;AI: Akıllı Tedarik ve RFQ Yönetimi</h2>
                <p className="section-subtitle">
                  FLY&nbsp;AI, üretim ve tedarik zinciri ekiplerinin teklif toplama, parça listesi yönetimi ve supplier iletişimini tek panelde ve saniyeler içinde yöneten
                  akıllı asistanıdır. Karmaşık BOM’ları sadeleştirir, çok aşamalı onay süreçlerini otomatikleştirir ve küresel tedarikçi ağınızı güçlendirir.
                </p>
              </div>
              <div className="section-cta">
                <a className="btn btn-primary" href="#contact">Demo talep et</a>
                <a className="btn btn-secondary" href="#workflow">Dakikalar içinde teklif al</a>
              </div>
            </div>

            <div className="stat-grid">
              {[
                { label: 'Teklif hazırlama süresi', value: '%60↓', detail: 'Dakikalar içinde teklif al' },
                { label: 'Tedarik maliyetleri', value: '%18↓', detail: 'Akıllı marjin optimizasyonu' },
                { label: 'Manuel veri girişi', value: '250+ saat', detail: 'Yıllık kişi başı tasarruf' },
                { label: 'Küresel supplier ağı', value: '12.000+', detail: '42 ülkede tedarikçi, anında erişim' },
              ].map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-detail">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div className="fly-layout">
              <div className="fly-column">
                <h3 className="section-subheading">Üretim ekiplerinin acı noktaları</h3>
                <p className="section-text">
                  Dağınık e-posta trafiği, günler süren RFQ döngüleri, tutarsız fiyatlandırmalar ve manuel veri temizliği yüzünden kaçırılan fırsatlar…
                  FLY&nbsp;AI, bu riskleri ortadan kaldırarak sürdürülebilir maliyet optimizasyonu sağlar.
                </p>
                <div className="pill-list">
                  {[
                    'Dağınık RFQ e-postaları',
                    'Tutarsız fiyatlandırma',
                    'Manuel veri temizleme',
                    'Tedarik riski ve gecikmeler',
                  ].map((item) => (
                    <span key={item} className="pill">#{item}</span>
                  ))}
                </div>
              </div>
              <div className="fly-column">
                <div className="highlight-card">
                  <h4>Problem → Çözüm</h4>
                  <ul>
                    <li><strong>Problem:</strong> Karmaşık BOM’lar ve eksik datalar.</li>
                    <li><strong>FLY&nbsp;AI:</strong> Parça listesi içgörüleri ve alternatif önerilerle hataları minimize eder.</li>
                    <li><strong>Problem:</strong> Yavaş, manuel RFQ süreçleri.</li>
                    <li><strong>FLY&nbsp;AI:</strong> Tek tıkla çoklu supplier karşılaştırması ve dinamik fiyat simülasyonları.</li>
                    <li><strong>Problem:</strong> Onay süreçlerinde şeffaflık eksikliği.</li>
                    <li><strong>FLY&nbsp;AI:</strong> Onay iş akışlarıyla ERP/MES entegrasyonu ve denetim izleri.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="feature-grid">
              {[
                {
                  title: 'Parça listesi içgörüleri',
                  desc: 'Otomatik risk analizi, alternatif parça önerisi ve gerçek zamanlı fiyat/termin takibi ile proaktif kararlar alın.',
                  tags: ['BOM Insight', 'Risk Scoring'],
                },
                {
                  title: 'Akıllı RFQ otomasyonu',
                  desc: 'Tek tıkla çoklu tedarikçi karşılaştırması, dinamik fiyat simülasyonları ve onay iş akışlarına hazır entegrasyon.',
                  tags: ['Dynamic Pricing', 'Workflow'],
                },
                {
                  title: 'Uyumluluk & güvenlik',
                  desc: 'ISO 27001 uyumlu altyapı, tam şeffaf denetim izleri ve 7/24 güvenlik izleme ile verileriniz güvende.',
                  tags: ['ISO 27001', 'Audit Trail'],
                },
                {
                  title: 'No-code entegrasyonlar',
                  desc: 'Açık API ve no-code adaptörler ile ERP/MES sistemlerine hızla bağlanın, süreçleri kesintiye uğratmadan dijitalleştirin.',
                  tags: ['Open API', 'No-code'],
                },
              ].map((feature, idx) => (
                <article className="card feature-card" key={idx}>
                  <div className="icon" aria-hidden>⚙</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <div className="tag-row">
                    {feature.tags.map((tag) => (
                      <span key={tag} className="mini-tag">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="fly-story">
              <article className="story-card">
                <h4>Müşteri hikâyesi</h4>
                <p className="quote">
                  “FLY&nbsp;AI’yi devreye aldıktan sonra global RFQ döngümüzü 48 saatten 9 dakikaya indirdik. Supplier ağımız tek dashboard üzerinden yönetiliyor,
                  fiyat tutarsızlıklarını sistem proaktif olarak yakalıyor ve yılda 1,2 milyon dolar tasarruf ettik.”
                </p>
                <div className="story-meta">
                  <span>Avrupa merkezli havacılık üreticisi</span>
                  <span>Üretim Dijital Dönüşüm Direktörü</span>
                </div>
              </article>
              <div className="story-side">
                <h4>FLY&nbsp;AI neden farklı?</h4>
                <ul>
                  <li>42 ülkede 12.000+ sertifikalı supplier’a tek tıkla erişim.</li>
                  <li>Yapay zekâ destekli RFQ motoru ile maliyet avantajını maksimize et.</li>
                  <li>Yerleşik eğitim modülleri ve kişiselleştirilmiş onboarding.</li>
                  <li>7/24 uzman destek ve operasyonel SLA taahhütleri.</li>
                </ul>
                <a className="btn btn-secondary" href="#contact">Uygulamalı demo iste</a>
              </div>
            </div>
          </div>
        </section>

        {/* Tech */}
        <section id="tech" className="section">
          <div className="container">
            <h2 className="section-title">Kullandığımız Teknolojiler</h2>
            <p className="section-subtitle">Gerçek zamanlı karar destek ve AI servisleri için modern ve güvenilir teknoloji yığını.</p>

            <div className="tech-logos">
              {[
                { label: 'React', svg: (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12a2.23 2.23 0 1 1-4.46 0 2.23 2.23 0 0 1 4.46 0z"/><path fill="none" stroke="currentColor" strokeWidth="1.2" d="M12 7.1c3.15 0 6.1.56 8.2 1.48 2.45 1.08 3.8 2.53 3.8 3.42s-1.35 2.34-3.8 3.42c-2.1.92-5.05 1.48-8.2 1.48s-6.1-.56-8.2-1.48C1.35 14.34 0 12.9 0 12s1.35-2.34 3.8-3.42C5.9 7.66 8.85 7.1 12 7.1z"/></svg>) },
                { label: 'Next.js', svg: (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 0L23 20h-3L8.5 0h3zM0 0h3v20H0V0zm21 0h3v20h-3V0z"/></svg>) },
                { label: 'Node.js', svg: (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5l10 5.8v11.4l-10 5.8-10-5.8V6.3L12 .5zm-1.3 6.8v9.4l-3.6-2.1V9.3l3.6-2zM16.9 9v6l-3.6 2.1V8.9l3.6.1z"/></svg>) },
                { label: 'PostgreSQL', svg: (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c5.5 0 10 2.7 10 6s-4.5 6-10 6S2 11.3 2 8 6.5 2 12 2zm0 12c3.9 0 7 1.3 7 3v3H5v-3c0-1.7 3.1-3 7-3z"/></svg>) },
                { label: 'AWS', svg: (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v3H3V6zm0 5h12v3H3v-3zm0 5h18v3H3v-3z"/></svg>) },
                { label: 'Docker', svg: (<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 12h3v3H4v-3zm4 0h3v3H8v-3zm4 0h3v3h-3v-3zm-8-4h3v3H4V8zm4 0h3v3H8V8zm4 0h3v3h-3V8zM3 16h18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"/></svg>) },
              ].map((l, i) => (
                <div key={i} className="logo" aria-label={l.label} title={l.label}>
                  {l.svg}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="workflow" className="section">
          <div className="container">
            <h2 className="section-title">FLY&nbsp;AI User Akışı</h2>
            <p className="section-subtitle">Client’tan gelen talep, supplier’dan bulunan parça ve satış sürecinde FLY&nbsp;AI nasıl destek olur?</p>
            <div className="process">
              {[
                { n: '01', t: 'Talep Yakalama', d: 'Client’tan gelen parça maili otomatik analiz edilir, ihtiyaç kodu ve SLA parametreleri çıkarılır.' },
                { n: '02', t: 'Eşleştirme & Skorlama', d: 'FLY&nbsp;AI, veri tabanındaki supplier ve stokları, AI skorları ile FLY&nbsp;AI User için sıralar.' },
                { n: '03', t: 'Teklif Hazırlama', d: 'Marjin motoru fiyat önerisi sunar; quote ve proforma wizard’ları PDF’yi hazırlar.' },
                { n: '04', t: 'Satış & Teslim', d: 'Mail sender teklifi client’a yollar, PO onayı sonrası lojistik formu otomatik oluşur.' },
              ].map((s, i) => (
                <div key={i} className="step">
                  <div className="num">{s.n}</div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Export AI */}
        <section className="section" id="export-ai">
          <div className="container">
            <h2 className="section-title">Export AI: İhracat Operasyon Otomasyonu</h2>
            <p className="section-subtitle">
              Export AI, tekliften sevkiyata kadar olan uçtan uca ihracat akışını yönetir. Mail tracking, teklif wizard’ları ve PDF üreticileriyle ekiplerinize hız kazandırır.
            </p>
            <div className="card-grid" style={{ marginTop: 18 }}>
              {[
                { title: 'İhracat Pipeline', desc: 'Quote, Proforma Invoice, Purchase Order ve lojistik formlarını adım adım yönetin, statü değişimlerini otomatik bildirin.' },
                { title: 'Mail Tracking & Listener', desc: 'Global zaman dilimlerine göre mail gönderimini optimize edin, yanıtlanmayan teklifleri Export AI hatırlatsın.' },
                { title: 'KPI & Raporlama', desc: 'Hedef pazar, ürün kategorisi ve forwarder performansını ölçen dashboard’lar ile karar verin.' },
              ].map((card, idx) => (
                <article className="card" key={idx}>
                  <div className="icon" aria-hidden>✱</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <a className="link" href="#contact">Demo talep et →</a>
                </article>
              ))}
            </div>
            <div style={{ marginTop: 28, color: 'var(--muted)' }}>
              Export AI hakkında daha fazla içeriği yakında paylaşacağız. Erken erişim ve entegrasyon detayları için bizimle iletişime geçin.
            </div>
          </div>
        </section>

        {/* Sectors / References */}
        <section className="section" id="insights">
          <div className="container">
            <h2 className="section-title">İstatistikler & İçgörüler</h2>
            <p className="section-subtitle">Satış performansı, tedarikçi güvenilirliği ve operasyon sağlığı tek bakışta.</p>
            <div className="tags">
              {[
                'AI Skor Kartları',
                'Supplier SLA Analizi',
                'Margin Heatmap',
                'Revenue Forecast',
                'Export AI Günlükleri',
                'Otomatik Mail Logları',
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
                  <h3>FLY&nbsp;AI ile havacılık satışlarını yeniden düşünün</h3>
                  <p>
                    Platformu canlı görmek, Export AI yeteneklerini dinlemek ve ekibiniz için uyarlamak isterseniz bize ulaşın.
                  </p>
                </div>
                <a className="btn btn-primary" href="mailto:hello@example.com">Demo Planla</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="brand-mark" />
              <span>PORT&nbsp;AI</span>
            </div>
            <div>© {new Date().getFullYear()} PORT&nbsp;AI Yazılım. Tüm hakları saklıdır.</div>
          </div>
        </div>
      </footer>
    </>
  );
}


