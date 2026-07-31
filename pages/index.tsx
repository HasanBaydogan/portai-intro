import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { ContactForm } from '@/components/SiteForms';
import { useLanguage } from '@/lib/LanguageContext';
import { partnerLogos } from '@/lib/partnerLogos';

export default function Home() {
  const { language, t } = useLanguage();
  const [openAdvantage, setOpenAdvantage] = useState<number | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroProgress, setHeroProgress] = useState(0);

  useEffect(() => {
    setHeroSlide(0);
    setHeroProgress(0);
  }, [language]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const slides = t.hero.slides;
    if (!slides.length) return;

    if (reduce) {
      setHeroProgress(100);
      return;
    }

    const duration = 5500;
    const started = performance.now();
    let raf = 0;
    let cancelled = false;

    const tick = (now: number) => {
      if (cancelled) return;
      const p = Math.min(1, (now - started) / duration);
      setHeroProgress(p * 100);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setHeroSlide((prev) => (prev + 1) % slides.length);
        setHeroProgress(0);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [heroSlide, language, t.hero.slides]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

    if (reduce) return;

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
      .querySelectorAll<HTMLElement>('.stat-value')
      .forEach((el) => countObserver.observe(el));

    return () => countObserver.disconnect();
  }, [language]);

  const processIcons = [
    <svg key="mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>,
    <svg key="cloud" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 10h16v8H4z" />
      <path d="M4 14h16" />
      <path d="M7 10V8a2 2 0 012-2h6a2 2 0 012 2v2" />
      <path d="M16 18a3 3 0 100-6 3.2 3.2 0 00-.4 0" />
    </svg>,
    <svg key="doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
      <circle cx="17" cy="17" r="3.2" />
      <path d="M15.8 17l.8.8 1.6-1.6" />
    </svg>,
    <svg key="bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 10a6 6 0 0112 0c0 5 2 6 2 6H4s2-1 2-6" />
      <path d="M10 20a2 2 0 004 0" />
    </svg>,
  ];

  return (
    <>
      <Head>
        <title>{t.headTitle}</title>
      </Head>

      <Layout>
        {/* Hero — dynamic carousel + dictionary */}
        <section className="hero">
          <div className="hero-stage">
            <div className="container hero-stage-inner">
              <div className="hero-quote-mark" aria-hidden>
                “
              </div>
              <div className="hero-slides">
                {t.hero.slides.map((slide, i) => (
                  <div
                    key={`${slide.name}-${i}`}
                    className={`hero-slide ${i === heroSlide ? 'active' : ''}`}
                    aria-hidden={i !== heroSlide}
                  >
                    <h1 className="hero-quote">
                      {slide.quotePre}
                      <span className="hero-quote-box">{slide.quoteHighlight}</span>
                      {slide.quotePost}
                    </h1>
                    <div className="hero-slide-meta">
                      <div>
                        <p className="hero-slide-name">{slide.name}</p>
                        <p className="hero-slide-role">{slide.role}</p>
                      </div>
                      <a className="btn btn-brutal" href={slide.href}>
                        {slide.cta}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hero-progress" role="tablist" aria-label="Hero slides">
                {t.hero.slides.map((slide, i) => (
                  <button
                    key={slide.name + i}
                    type="button"
                    className={`hero-progress-item ${i === heroSlide ? 'active' : ''} ${
                      i < heroSlide ? 'done' : ''
                    }`}
                    role="tab"
                    aria-selected={i === heroSlide}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => {
                      setHeroSlide(i);
                      setHeroProgress(0);
                    }}
                  >
                    <span
                      className="hero-progress-fill"
                      style={
                        i === heroSlide
                          ? { width: `${heroProgress}%` }
                          : i < heroSlide
                            ? { width: '100%' }
                            : { width: '0%' }
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="logo-marquee" aria-label={t.hero.partnersMarquee.aria}>
            <p className="logo-marquee-label">{t.hero.partnersMarquee.label}</p>
            <div className="logo-marquee-viewport">
              <div className="logo-marquee-track">
                {[0, 1].map((copy) => (
                  <ul
                    key={copy}
                    className="logo-marquee-list"
                    aria-hidden={copy === 1}
                  >
                    {partnerLogos.map((logo) => (
                      <li key={`${copy}-${logo.name}`} className="logo-marquee-item">
                        <a
                          href={logo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={logo.name}
                        >
                          {logo.src ? (
                            <img src={logo.src} alt={logo.name} />
                          ) : (
                            <span className="logo-marquee-word">{logo.name}</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-dict">
            <div className="container hero-dict-inner">
              <div className="hero-dict-head">
                <p className="hero-kicker">AI PORT</p>
                <p className="hero-phonetic">/ˌeɪ.aɪ pɔːrt/ · noun</p>
              </div>
              <h2 className="hero-title">
                {t.hero.titlePre}
                <span className="grad-text">{t.hero.titleHighlight}</span>
                {t.hero.titlePost}
              </h2>
              <p
                className="hero-desc"
                dangerouslySetInnerHTML={{ __html: t.hero.descHtml }}
              />
              <div className="hero-cta">
                <a className="btn btn-primary" href="#products">
                  {t.nav.products}
                </a>
                <a className="btn btn-secondary" href="/contact">
                  {t.nav.contact}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products — Our Work style */}
        <section id="products" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="section-label">{t.nav.products}</p>
              <h2 className="section-title">{t.products.title}</h2>
              <p className="section-subtitle">{t.products.subtitle}</p>
            </div>

            <div className="work-grid reveal-stagger">
              {t.products.items.map((item) => (
                <article className="work-card" key={item.href}>
                  <div className="work-card-media">
                    <img src={item.image} alt={item.imageAlt} loading="lazy" />
                  </div>
                  <div className="work-card-body">
                    <img src={item.logo} alt={item.logoAlt} className="work-card-logo" />
                    <span className="work-card-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a className="link" href={item.href}>
                      {item.linkLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive advantages — Boldare pattern */}
        <section id="advantages" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="section-title">{t.advantages.title}</h2>
              <p className="section-subtitle">{t.advantages.lead}</p>
            </div>
            <div className="comp-list reveal-stagger">
              {t.advantages.items.map((item, i) => {
                const isOpen = openAdvantage === i;
                return (
                  <article className={`comp-item ${isOpen ? 'open' : ''}`} key={item.title}>
                    <div className="comp-num">{i + 1}</div>
                    <div className="comp-body">
                      <h3>{item.title}</h3>
                      <p>{isOpen ? item.full : item.teaser}</p>
                      <button
                        type="button"
                        className="comp-more"
                        onClick={() => setOpenAdvantage(isOpen ? null : i)}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? t.advantages.readLess : t.advantages.readMore}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Export AI */}
        <section id="export-ai" className="section">
          <div className="container">
            <div className="section-head reveal">
              <img
                src="/assets/logos/ExportAI_Logo-Latest.png"
                alt="Export AI"
                className="section-logo"
              />
              <div className="section-label-row">
                <p className="section-label">Export AI</p>
                <p className="section-phonetic">{t.exportSection.phonetic}</p>
              </div>
              <h2 className="section-title">{t.exportSection.title}</h2>
              <p className="section-subtitle">{t.exportSection.lead}</p>
            </div>

            <div className="split reveal">
              <div className="split-media">
                <img
                  src="/assets/illustrations/export-ai-visual.png"
                  alt={t.exportSection.visualAlt}
                  loading="lazy"
                />
              </div>
              <div className="split-copy">
                <h3>{t.exportSection.mapHeading}</h3>
                <p>{t.exportSection.mapText}</p>
                <ul>
                  {t.exportSection.mapBullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="panel-box reveal">
              <h4>{t.exportSection.panelTitle}</h4>
              <ul>
                {t.exportSection.panelItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="stats-strip reveal-stagger">
              {t.exportSection.stats.map((stat, i) => (
                <div className="stat-cell" key={i}>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                  <p className="stat-detail">{stat.detail}</p>
                </div>
              ))}
            </div>

            <div className="advantage-list reveal-stagger">
              {t.exportSection.features.map((feature, i) => (
                <article className="advantage-item" key={i}>
                  <div className="advantage-num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                    <ul>
                      {feature.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="process-row reveal-stagger">
              {t.exportSection.process.map((step) => (
                <div className="process-step" key={step.n}>
                  <div className="n">{step.n}</div>
                  <h4>{step.t}</h4>
                  <p>{step.d}</p>
                </div>
              ))}
            </div>

            <div className="overview-grid reveal-stagger">
              {t.exportSection.overview.map((block, i) => (
                <div className="overview-card" key={i}>
                  <h4>{block.title}</h4>
                  <ul>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop: 48 }}>
              <h3 className="section-title" style={{ fontSize: 28 }}>
                {t.exportSection.faqHeading}
              </h3>
              <div className="faq-grid">
                {t.exportSection.faqs.map((faq, i) => (
                  <div className="faq-item" key={i}>
                    <h4>{faq.q}</h4>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-box reveal">
              <h4>{t.exportSection.trustTitle}</h4>
              <ul className="trust-list">
                {t.exportSection.trustItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="section-cta reveal">
              <div>
                <h3 className="section-title" style={{ fontSize: 28, marginBottom: 8 }}>
                  {t.exportSection.ctaTitle}
                </h3>
                <p className="section-subtitle">{t.exportSection.ctaText}</p>
              </div>
            </div>
            <div className="section-cta reveal">
              <a className="btn btn-primary" href="/contact">
                {t.exportSection.ctaBtn}
              </a>
              <a
                className="btn btn-secondary"
                href="https://test.aiport.tr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.exportCard.cta}
              </a>
            </div>
          </div>
        </section>

        {/* FLY AI */}
        <section id="fly-ai" className="section">
          <div className="container">
            <div className="section-head reveal">
              <img
                src="/assets/logos/FlyAI-Logo-Latest.png"
                alt="FLY AI"
                className="section-logo"
              />
              <div className="section-label-row">
                <p className="section-label">FLY AI</p>
                <p className="section-phonetic">{t.flySection.phonetic}</p>
              </div>
              <h2 className="section-title">{t.flySection.title}</h2>
              <p className="section-subtitle">{t.flySection.lead}</p>
            </div>

            <div className="split reveal">
              <div className="split-media">
                <img
                  src="/assets/illustrations/flyai-visual.png"
                  alt={t.flySection.visualAlt}
                  loading="lazy"
                />
              </div>
              <div className="split-copy">
                <div className="stats-strip stats-strip--compact" style={{ marginTop: 0 }}>
                  {t.hero.flyCard.stats.map((stat, i) => (
                    <div className="stat-cell" key={i}>
                      <p className="stat-value">{stat.value}</p>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-grid reveal-stagger">
              {t.flySection.cards.map((card, i) => (
                <article className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              ))}
            </div>

            <div className="why-box reveal">
              <h4>{t.flySection.whyTitle}</h4>
              <ul>
                {t.flySection.whyItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="section-cta reveal">
              <a className="btn btn-primary" href="/contact">
                {t.flySection.ctaBtn}
              </a>
              <a
                className="btn btn-secondary"
                href="https://test.flyai.tr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.flyCard.cta}
              </a>
              <a className="btn btn-link" href="#export-ai">
                {t.flySection.ctaLink}
              </a>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="section">
          <div className="container">
            <div className="partners-brand reveal">
              <img
                src="/assets/logos/ERP-aero-logo-black.svg"
                alt={t.partners.logoAlt}
                className="partners-logo"
              />
              <span className="partners-badge">{t.partners.badge}</span>
            </div>
            <div className="section-head reveal">
              <h2 className="section-title">{t.partners.title}</h2>
              <p className="section-subtitle">{t.partners.lead}</p>
            </div>

            <div className="partners-hero reveal">
              <img
                src="/assets/illustrations/erp-aero/hero-ai-email.jpg"
                alt={t.partners.visualAlt}
                loading="lazy"
              />
            </div>

            <div className="partners-product reveal">
              <div>
                <h3 className="partners-product-title">{t.partners.productTitle}</h3>
                <p className="section-subtitle">{t.partners.productLead}</p>
              </div>
              <div className="partners-product-visual">
                <img
                  src="/assets/illustrations/erp-aero/product-overview.jpg"
                  alt={t.partners.productVisualAlt}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="card-grid reveal-stagger">
              {t.partners.features.map((feature, i) => (
                <article className="card" key={i} style={{ padding: 0, overflow: 'hidden' }}>
                  <div className="feature-media" style={{ margin: 0 }}>
                    <img src={feature.image} alt={feature.imageAlt} loading="lazy" />
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="partners-process reveal">
              <h3 className="section-title" style={{ fontSize: 28 }}>
                {t.partners.processTitle}
              </h3>
              <div
                className="partners-process-visual"
                role="img"
                aria-label={t.partners.processAlt}
              >
                {t.partners.processSteps.map((step, idx) => (
                  <div className="partners-process-step" key={idx}>
                    <div className="partners-process-icon" aria-hidden>
                      {processIcons[idx]}
                    </div>
                    <div className="partners-process-copy">
                      <strong>{step.title}</strong>
                      <span>{step.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-cta reveal">
              <a className="btn btn-primary" href="/contact">
                {t.partners.ctaBtn}
              </a>
              <a
                className="btn btn-link"
                href="https://erp.aero/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.partners.ctaExternal}
              </a>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section id="insights" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="section-label">{t.nav.insights}</p>
              <h2 className="section-title">{t.insights.title}</h2>
              <p className="section-subtitle">{t.insights.subtitle}</p>
            </div>
            <div className="tags reveal-stagger">
              {t.insights.tags.map((tag) => (
                <span className="tag" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="section-title">{t.contact.formTitle}</h2>
              <p className="section-subtitle">{t.contact.formLead}</p>
            </div>
            <div className="form-page-wrap reveal">
              <ContactForm labels={t.contact} defaultSubject="Demo / İletişim" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
