import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [language, setLanguage] = useState<'tr' | 'en' | 'ru'>('tr');
  const [isLangOpen, setLangOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
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

  // Scroll-reveal + animated stat counters
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealEls = Array.from(document.querySelectorAll('.reveal, .reveal-stagger'));

    if (reduce || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    const animateCount = (el: HTMLElement) => {
      const raw = el.dataset.countText ?? el.textContent ?? '';
      el.dataset.countText = raw;
      const match = raw.match(/\d[\d.,]*/);
      if (!match) return;
      const numStr = match[0];
      const grouped = /[.,]/.test(numStr);
      const target = parseInt(numStr.replace(/[.,]/g, ''), 10);
      if (!Number.isFinite(target)) return;
      const idx = match.index ?? 0;
      const prefix = raw.slice(0, idx);
      const suffix = raw.slice(idx + numStr.length);
      const fmt = (v: number) => (grouped ? v.toLocaleString('tr-TR') : String(v));
      const duration = 1100;
      const startTime = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + fmt(Math.round(target * eased)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + fmt(target) + suffix;
      };
      requestAnimationFrame(tick);
    };

    const countObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target as HTMLElement);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    document
      .querySelectorAll<HTMLElement>('.stat-value, .stat .value')
      .forEach((el) => countObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, []);

  // Pointer-tracked subtle 3D tilt for hero product cards
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.tilt'));
    const cleanups: Array<() => void> = [];
    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 4).toFixed(2)}deg) translateY(-4px)`;
      };
      const onLeave = () => {
        card.style.transform = '';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  const activeLang = languages.find((l) => l.code === language) ?? languages[0];

  return (
    <>
      <Head>
        <title>Modern Web Tabanlı Yazılım Ürünleri | Şirketinizin Teknoloji Ortağı</title>
      </Head>

      <div className="bg-fx" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-aurora" />

        {/* Dünya ticareti – küre */}
        <span className="fx-icon i1">
          <span className="fx-rot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18" />
              <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
              <path d="M5 6.5c3.5 2 10.5 2 14 0M5 17.5c3.5-2 10.5-2 14 0" />
            </svg>
          </span>
        </span>

        {/* Havacılık – uçak */}
        <span className="fx-icon i2">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
          </svg>
        </span>

        {/* Uçak parçası / teknoloji – dişli */}
        <span className="fx-icon i3">
          <span className="fx-rot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </span>
        </span>

        {/* Yapay zekâ – çip */}
        <span className="fx-icon i4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="6" width="12" height="12" rx="1.5" />
            <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
            <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
          </svg>
        </span>

        {/* Yazılım – kod */}
        <span className="fx-icon i5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
            <path d="M13.5 4l-3 16" />
          </svg>
        </span>

        {/* Dünya ticareti – kâğıt uçak / akış */}
        <span className="fx-icon i6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round">
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22l-4-9-9-4 20-7z" />
          </svg>
        </span>

        {/* Yapay zekâ – düğüm ağı */}
        <span className="fx-icon i7">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="2.2" />
            <circle cx="6" cy="12" r="2.2" />
            <circle cx="18" cy="19" r="2.2" />
            <path d="M8 11l8-5M8 13l8 5" />
          </svg>
        </span>

        {/* Dünya ticareti – yükseliş */}
        <span className="fx-icon i8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 17 9 11 13 15 21 7" />
            <polyline points="14 7 21 7 21 14" />
          </svg>
        </span>
      </div>

      <header className="site-header">
        <div className="container">
          <nav className="nav">
            <div className="brand">
              <img src="/assets/logos/aiport_logo.png" alt="AI PORT Logo" className="brand-logo" />

            </div>
            <button
              type="button"
              className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Menüyü aç/kapat"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
            <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
              <div className="nav-links" onClick={() => setMenuOpen(false)}>
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
          <div className="container">
            <div className="hero-intro reveal">
              <span className="badge">AI&nbsp;PORT Suite</span>
              <h1 className="hero-title">
                İki farklı <span className="grad-text">yapay zekâ platformu</span>, tek çatı altında.
              </h1>
              <p className="hero-desc">
                AI&nbsp;PORT; birbirinden bağımsız iki sektöre özel çözüm sunar:
                ihracatını büyütmek isteyen üreticiler için <strong>Export AI</strong> ve
                havacılık tedarik zincirini hızlandıran <strong>FLY&nbsp;AI</strong>.
                Her ürün kendi alanında uçtan uca otomasyon sağlar.
              </p>
            </div>

            <div className="hero-products reveal-stagger">
              {/* Export AI */}
              <article className="hero-product tilt theme-export">
                <div className="hero-product-visual">
                  <img src="/assets/illustrations/export-ai-visual.png" alt="Export AI küresel ihracat zekâsı görseli" loading="lazy" />
                </div>
                <div className="hero-product-head">
                  <img src="/assets/logos/ExportAI_Logo-Latest.png" alt="Export AI" className="hero-product-logo" />
                  <span className="hero-product-tag">İhracat zekâsı</span>
                </div>
                <h2 className="hero-product-title">Yapay zekâ destekli ihracat motoru</h2>
                <p className="hero-product-desc">
                  Dünya haritası üzerinde pazar potansiyellerini renklendirir, şirketinize özel
                  Export Fit Score ile en kârlı ülkeleri saniyeler içinde sıralar; nitelikli
                  müşteri listeleri ve çok dilli mailing akışlarını tek platformda birleştirir.
                </p>
                <div className="hero-card-grid">
                  <div className="stat">
                    <div className="label">Export Fit Score</div>
                    <div className="value">92/100</div>
                  </div>
                  <div className="stat">
                    <div className="label">Analiz edilen ülke</div>
                    <div className="value">190+</div>
                  </div>
                  <div className="stat">
                    <div className="label">HS Code veritabanı</div>
                    <div className="value">5.000+</div>
                  </div>
                  <div className="stat">
                    <div className="label">Potansiyel ithalatçı havuzu</div>
                    <div className="value">1M+</div>
                  </div>
                </div>
                <div className="hero-actions">
                  <a href="https://test.aiport.tr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Export AI’ı keşfedin</a>
                </div>
              </article>

              {/* FLY AI */}
              <article className="hero-product tilt theme-fly">
                <div className="hero-product-visual">
                  <img src="/assets/illustrations/flyai-visual.png" alt="FLY AI havacılık tedarik zinciri görseli" loading="lazy" />
                </div>
                <div className="hero-product-head">
                  <img src="/assets/logos/FlyAI-Logo-Latest.png" alt="FLY AI" className="hero-product-logo" />
                  <span className="hero-product-tag">Havacılık tedariki</span>
                </div>
                <h2 className="hero-product-title">Havacılık tedarik zinciri için akıllı RFQ yönetimi</h2>
                <p className="hero-product-desc">
                  client → supplier → satış zincirinizi şeffaflaştırır; karmaşık BOM’ları
                  sadeleştirir, çoklu tedarikçi karşılaştırması ve marjin optimizasyonuyla
                  RFQ süreçlerini dakikalar içinde tamamlamanızı sağlar.
                </p>
                <div className="hero-card-grid">
                  <div className="stat">
                    <div className="label">Teklif hazırlama süresi</div>
                    <div className="value">%60↓</div>
                  </div>
                  <div className="stat">
                    <div className="label">Yıllık zaman tasarrufu</div>
                    <div className="value">250+ saat</div>
                  </div>
                  <div className="stat">
                    <div className="label">Onaylı supplier ağı</div>
                    <div className="value">12.000+</div>
                  </div>
                  <div className="stat">
                    <div className="label">Kapsanan ülke</div>
                    <div className="value">42</div>
                  </div>
                </div>
                <div className="hero-actions">
                  <a href="https://test.flyai.tr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">FLY&nbsp;AI’yı keşfedin</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section">
          <div className="container">
            <h2 className="section-title reveal">Ürün Ailesi</h2>
            <div className="panel lead-card reveal">
              <p className="section-subtitle">
                AI&nbsp;PORT Suite, üretim ve havacılık sektörlerindeki kritik operasyonları iki çekirdek ürünle uçtan uca dijitalleştirir.
              </p>
            </div>

            <div className="card-grid reveal-stagger" style={{ marginTop: 18 }}>
              {[
                {
                  logo: '/assets/logos/ExportAI_Logo-Latest.png',
                  title: 'Export AI',
                  theme: 'theme-export',
                  desc: 'İhracat yapmak isteyen üretici firmalar için dünya haritası, Export Fit Score, HS Code analizi ve otomatik mailing’i bir araya getiren ihracat zekâsı platformu.',
                  link: { href: '#export-ai', label: 'Export AI Detayları →' },
                },
                {
                  logo: '/assets/logos/FlyAI-Logo-Latest.png',
                  title: 'FLY AI',
                  theme: 'theme-fly',
                  desc: 'Havacılık parça ticareti için RFQ otomasyonu, supplier eşlemesi ve marjin optimizasyonuyla satış ekiplerinizi hızlandıran platform.',
                  link: { href: '#fly-ai', label: 'Fly AI Detayları →' },
                },
              ].map((item, idx) => (
                <article className={`card card--product ${item.theme}`} key={idx}>
                  <img src={item.logo} alt={item.title} className="card-logo" />
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
        <section className="section theme-export" id="export-ai">
          <div className="section-decor decor-export" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor">
              <circle cx="100" cy="100" r="80" strokeWidth="0.6" />
              <ellipse cx="100" cy="100" rx="80" ry="30" strokeWidth="0.6" />
              <ellipse cx="100" cy="100" rx="80" ry="55" strokeWidth="0.6" />
              <ellipse cx="100" cy="100" rx="30" ry="80" strokeWidth="0.6" />
              <ellipse cx="100" cy="100" rx="55" ry="80" strokeWidth="0.6" />
              <line x1="20" y1="100" x2="180" y2="100" strokeWidth="0.6" />
              <line x1="100" y1="20" x2="100" y2="180" strokeWidth="0.6" />
            </svg>
          </div>
          <div className="container">
            <img src="/assets/logos/ExportAI_Logo-Latest.png" alt="Export AI" className="section-logo reveal" />
            <h2 className="section-title reveal">Export AI: İhracat zekâsı ve otomasyonu tek platformda</h2>
            <div className="panel lead-card reveal">
              <p className="section-subtitle">
                Export AI; ihracat yapmak isteyen veya mevcut ihracatını büyütmek isteyen üretici firmalara uçtan uca ihracat zekâsı sunan B2B SaaS platformudur.
                Dünya çapındaki verileri analiz ederek ürününüz için en kârlı olabilecek ülkeleri saniyeler içinde öne çıkarır, yeni pazar keşfetme sürenizi ortalama %50’ye kadar kısaltır.
              </p>
            </div>
            <div className="section-visual reveal">
              <img src="/assets/illustrations/export-ai-visual.png" alt="Export AI dünya haritası ve pazar zekâsı paneli" loading="lazy" />
            </div>
            <div className="section-header reveal-stagger">
              <div className="panel">
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

            <div className="stat-grid reveal-stagger">
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

            <div className="feature-grid bento reveal-stagger">
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

            <div className="process timeline reveal-stagger">
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

            <div className="export-ai-overview reveal-stagger">
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

            <div className="faq-grid reveal-stagger">
              <div className="faq-stack">
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

            <div className="cta reveal" style={{ marginTop: 48 }}>
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
        <section className="section theme-fly" id="fly-ai">
          <div className="section-decor decor-fly" aria-hidden="true">
            <svg viewBox="0 0 240 160" fill="none" stroke="currentColor">
              <path d="M10 150 Q120 10 230 120" strokeWidth="0.8" strokeDasharray="4 6" />
              <path d="M10 120 Q110 30 230 90" strokeWidth="0.8" strokeDasharray="4 6" />
              <circle cx="10" cy="150" r="3" fill="currentColor" stroke="none" />
              <circle cx="230" cy="120" r="3" fill="currentColor" stroke="none" />
              <circle cx="10" cy="120" r="3" fill="currentColor" stroke="none" />
              <circle cx="230" cy="90" r="3" fill="currentColor" stroke="none" />
            </svg>
          </div>
          <div className="container">
            <img src="/assets/logos/FlyAI-Logo-Latest.png" alt="FLY AI" className="section-logo reveal" />
            <h2 className="section-title reveal">FLY&nbsp;AI: Havacılık tedarik zinciriniz için akıllı RFQ yönetimi</h2>
            <div className="panel lead-card reveal">
              <p className="section-subtitle">
                FLY&nbsp;AI, client → supplier → satış zincirinizi şeffaflaştırarak RFQ süreçlerini dakikalar içinde tamamlamanıza yardımcı olur.
                Export AI’nın stratejik ihracat otomasyonunu tamamlayan operasyonel bir kanat gibi çalışır.
              </p>
            </div>
            <div className="section-visual reveal">
              <img src="/assets/illustrations/flyai-visual.png" alt="FLY AI havacılık tedarik zinciri ve RFQ paneli" loading="lazy" />
            </div>

            <div className="card-grid reveal-stagger" style={{ marginTop: 18 }}>
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

            <div className="highlight-card reveal" style={{ marginTop: 32 }}>
              <h4>FLY&nbsp;AI’yi neden tercih etmelisiniz?</h4>
              <ul>
                <li>Teklif hazırlama süresini %60’a kadar kısaltır.</li>
                <li>Yıllık kişi başı 250+ saat manuel veri girişinden tasarruf sağlar.</li>
                <li>ERP/MES entegrasyonları ve denetim izleriyle süreçlerinizi güvence altına alır.</li>
                <li>7/24 uzman destek ekibi ve operasyonel SLA taahhütleri sunar.</li>
              </ul>
            </div>

            <div className="section-cta reveal" style={{ marginTop: 32 }}>
              <a className="btn btn-secondary" href="mailto:hello@example.com">FLY&nbsp;AI için demo iste</a>
              <a className="btn btn-link" href="#export-ai">Export AI özelliklerini keşfet →</a>
            </div>
          </div>
        </section>

        {/* İçgörüler */}
        <section className="section" id="insights">
          <div className="container">
            <h2 className="section-title reveal">İstatistikler & İçgörüler</h2>
            <div className="panel lead-card reveal">
              <p className="section-subtitle">
                Export AI ve FLY&nbsp;AI, operasyonel verileri tek yerde toplar; karar vericilere gerçek zamanlı içgörüler sunar.
              </p>
            </div>
            <div className="tags reveal-stagger">
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
            <div className="cta reveal">
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
              <img src="/assets/logos/aiport_logo.png" alt="AI PORT Logo" className="brand-logo" />
              {/* <span>AI&nbsp;PORT</span> */}
            </div>
            <div>© {new Date().getFullYear()} AI&nbsp;PORT Yazılım. Tüm hakları saklıdır.</div>
          </div>
        </div>
      </footer>
    </>
  );
}


