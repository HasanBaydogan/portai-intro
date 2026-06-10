import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { content, type Lang } from '../lib/i18n';

export default function Home() {
  const [language, setLanguage] = useState<Lang>('tr');
  const [isLangOpen, setLangOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const t = content[language];

  const languages: { code: Lang; label: string; flag: string }[] = [
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
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

  // Keep the document language in sync for a11y / SEO
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
      const sepMatch = numStr.match(/[.,]/);
      const sep = sepMatch ? sepMatch[0] : '';
      const target = parseInt(numStr.replace(/[.,]/g, ''), 10);
      if (!Number.isFinite(target)) return;
      const idx = match.index ?? 0;
      const prefix = raw.slice(0, idx);
      const suffix = raw.slice(idx + numStr.length);
      const fmt = (v: number) =>
        sep ? String(v).replace(/\B(?=(\d{3})+(?!\d))/g, sep) : String(v);
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
        <title>{t.headTitle}</title>
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
              aria-label={t.aria.menuToggle}
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
            <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
              <div className="nav-links" onClick={() => setMenuOpen(false)}>
                <a className="nav-link" href="#products">{t.nav.products}</a>
                <a className="nav-link" href="#export-ai">{t.nav.exportAI}</a>
                <a className="nav-link" href="#fly-ai">{t.nav.flyAI}</a>
                <a className="nav-link" href="#insights">{t.nav.insights}</a>
                <a className="nav-link" href="#contact">{t.nav.contact}</a>
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
                  <ul className="language-menu" role="listbox" aria-label={t.aria.langSelect}>
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
              <span className="badge">{t.hero.badge}</span>
              <h1 className="hero-title">
                {t.hero.titlePre}
                <span className="grad-text">{t.hero.titleHighlight}</span>
                {t.hero.titlePost}
              </h1>
              <p className="hero-desc" dangerouslySetInnerHTML={{ __html: t.hero.descHtml }} />
            </div>

            <div className="hero-products reveal-stagger">
              {/* Export AI */}
              <article className="hero-product tilt theme-export">
                <div className="hero-product-visual">
                  <img src="/assets/illustrations/export-ai-visual.png" alt={t.hero.exportCard.visualAlt} loading="lazy" />
                </div>
                <div className="hero-product-head">
                  <img src="/assets/logos/ExportAI_Logo-Latest.png" alt="Export AI" className="hero-product-logo" />
                  <span className="hero-product-tag">{t.hero.exportCard.tag}</span>
                </div>
                <h2 className="hero-product-title">{t.hero.exportCard.title}</h2>
                <p className="hero-product-desc">{t.hero.exportCard.desc}</p>
                <div className="hero-card-grid">
                  {t.hero.exportCard.stats.map((stat, idx) => (
                    <div className="stat" key={idx}>
                      <div className="label">{stat.label}</div>
                      <div className="value">{stat.value}</div>
                    </div>
                  ))}
                </div>
                <div className="hero-actions">
                  <a href="https://test.aiport.tr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t.hero.exportCard.cta}</a>
                </div>
              </article>

              {/* FLY AI */}
              <article className="hero-product tilt theme-fly">
                <div className="hero-product-visual">
                  <img src="/assets/illustrations/flyai-visual.png" alt={t.hero.flyCard.visualAlt} loading="lazy" />
                </div>
                <div className="hero-product-head">
                  <img src="/assets/logos/FlyAI-Logo-Latest.png" alt="FLY AI" className="hero-product-logo" />
                  <span className="hero-product-tag">{t.hero.flyCard.tag}</span>
                </div>
                <h2 className="hero-product-title">{t.hero.flyCard.title}</h2>
                <p className="hero-product-desc">{t.hero.flyCard.desc}</p>
                <div className="hero-card-grid">
                  {t.hero.flyCard.stats.map((stat, idx) => (
                    <div className="stat" key={idx}>
                      <div className="label">{stat.label}</div>
                      <div className="value">{stat.value}</div>
                    </div>
                  ))}
                </div>
                <div className="hero-actions">
                  <a href="https://test.flyai.tr/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">{t.hero.flyCard.cta}</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section">
          <div className="container">
            <h2 className="section-title reveal">{t.products.title}</h2>
            <div className="panel lead-card reveal">
              <p className="section-subtitle">{t.products.subtitle}</p>
            </div>

            <div className="card-grid reveal-stagger" style={{ marginTop: 18 }}>
              {[
                { logo: '/assets/logos/ExportAI_Logo-Latest.png', title: 'Export AI', theme: 'theme-export', href: '#export-ai' },
                { logo: '/assets/logos/FlyAI-Logo-Latest.png', title: 'FLY AI', theme: 'theme-fly', href: '#fly-ai' },
              ].map((item, idx) => (
                <article className={`card card--product ${item.theme}`} key={idx}>
                  <img src={item.logo} alt={item.title} className="card-logo" />
                  <p>{t.products.items[idx].desc}</p>
                  <a className="link" href={item.href}>{t.products.items[idx].linkLabel}</a>
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
            <h2 className="section-title reveal">{t.exportSection.title}</h2>
            <div className="panel lead-card reveal">
              <p className="section-subtitle">{t.exportSection.lead}</p>
            </div>
            <div className="section-visual reveal">
              <img src="/assets/illustrations/export-ai-visual.png" alt={t.exportSection.visualAlt} loading="lazy" />
            </div>
            <div className="section-header reveal-stagger">
              <div className="panel">
                <h3 className="section-subheading">{t.exportSection.mapHeading}</h3>
                <p className="section-text">{t.exportSection.mapText}</p>
                <ul className="bullet-list">
                  {t.exportSection.mapBullets.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <aside className="highlight-card">
                <h4>{t.exportSection.panelTitle}</h4>
                <ul>
                  {t.exportSection.panelItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>

            <div className="stat-grid reveal-stagger">
              {t.exportSection.stats.map((stat, idx) => (
                <div className="stat-card" key={idx}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-detail">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div className="feature-grid bento reveal-stagger">
              {t.exportSection.features.map((feature, idx) => (
                <article className="card feature-card" key={idx}>
                  <div className="icon" aria-hidden>✱</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <ul>
                    {feature.bullets.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="process timeline reveal-stagger">
              {t.exportSection.process.map((step) => (
                <div key={step.n} className="step">
                  <div className="num">{step.n}</div>
                  <h4>{step.t}</h4>
                  <p>{step.d}</p>
                </div>
              ))}
            </div>

            <div className="export-ai-overview reveal-stagger">
              {t.exportSection.overview.map((card, idx) => (
                <div className="highlight-card" key={idx}>
                  <h4>{card.title}</h4>
                  <ul>
                    {card.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="faq-grid reveal-stagger">
              <div className="faq-stack">
                <h3 className="section-subheading">{t.exportSection.faqHeading}</h3>
                {t.exportSection.faqs.map((faq, idx) => (
                  <div className="faq-item" key={idx}>
                    <h4>{faq.q}</h4>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="highlight-card">
                <h4>{t.exportSection.trustTitle}</h4>
                <ul>
                  {t.exportSection.trustItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="cta reveal" style={{ marginTop: 48 }}>
              <div className="cta-row">
                <div>
                  <h3>{t.exportSection.ctaTitle}</h3>
                  <p>{t.exportSection.ctaText}</p>
                </div>
                <a className="btn btn-primary" href="mailto:hello@example.com">{t.exportSection.ctaBtn}</a>
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
            <h2 className="section-title reveal">{t.flySection.title}</h2>
            <div className="panel lead-card reveal">
              <p className="section-subtitle">{t.flySection.lead}</p>
            </div>
            <div className="section-visual reveal">
              <img src="/assets/illustrations/flyai-visual.png" alt={t.flySection.visualAlt} loading="lazy" />
            </div>

            <div className="card-grid reveal-stagger" style={{ marginTop: 18 }}>
              {t.flySection.cards.map((item, idx) => (
                <article className="card" key={idx}>
                  <div className="icon" aria-hidden>⚙</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>

            <div className="highlight-card reveal" style={{ marginTop: 32 }}>
              <h4>{t.flySection.whyTitle}</h4>
              <ul>
                {t.flySection.whyItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="section-cta reveal" style={{ marginTop: 32 }}>
              <a className="btn btn-secondary" href="mailto:hello@example.com">{t.flySection.ctaBtn}</a>
              <a className="btn btn-link" href="#export-ai">{t.flySection.ctaLink}</a>
            </div>
          </div>
        </section>

        {/* İçgörüler */}
        <section className="section" id="insights">
          <div className="container">
            <h2 className="section-title reveal">{t.insights.title}</h2>
            <div className="panel lead-card reveal">
              <p className="section-subtitle">{t.insights.subtitle}</p>
            </div>
            <div className="tags reveal-stagger">
              {t.insights.tags.map((tag) => (
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
                  <h3>{t.contact.title}</h3>
                  <p>{t.contact.text}</p>
                </div>
                <a className="btn btn-primary" href="mailto:hello@example.com">{t.contact.btn}</a>
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
            <div>© {new Date().getFullYear()} {t.footer.rights}</div>
          </div>
        </div>
      </footer>
    </>
  );
}


