import Link from 'next/link';
import ServiceShell from '@/components/ServiceShell';
import { useLanguage } from '@/lib/LanguageContext';

export default function ECommercePage() {
  const { t } = useLanguage();
  const p = t.eCommercePage;

  return (
    <ServiceShell
      currentKey="e-commerce"
      headTitle={p.headTitle}
      label={t.megaServices.lines[2].label}
      title={p.heroTitle}
      lead={p.heroLead}
      cta={p.heroCta}
      secondary={{ label: p.heroSecondary, href: '#packages' }}
      ctaTitle={p.ctaTitle}
      ctaText={p.ctaText}
      ctaBtn={p.ctaBtn}
    >
      <section className="section" id="packages">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">{p.packagesLabel}</p>
            <h2 className="section-title">{p.packagesTitle}</h2>
            <p className="section-subtitle">{p.packagesLead}</p>
          </div>

          <div className="pkg-grid reveal-stagger">
            {p.packages.map((pkg) => (
              <article
                className={`service-path pkg-card${pkg.featured ? ' pkg-card--featured' : ''}`}
                key={pkg.key}
              >
                <span className="pkg-head">
                  <span className="service-path-stage">{pkg.name}</span>
                  {pkg.featured && <span className="pkg-badge">{pkg.featuredLabel}</span>}
                </span>
                <p className="pkg-price">{pkg.price}</p>
                <p className="pkg-term">{pkg.term}</p>
                <p>{pkg.desc}</p>
                <ul>
                  {pkg.gets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="link" href="/contact">
                  {pkg.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="why-box reveal">
            <span className="work-card-tag">{p.requiredLabel}</span>
            <h4>
              {p.requiredTitle} — {p.requiredPrice}
            </h4>
            <p className="pkg-required-text">{p.requiredText}</p>
            <ul>
              {p.requiredItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="pkg-note reveal">{p.priceNote}</p>
        </div>
      </section>

      <section className="section" id="references">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">{p.refsLabel}</p>
            <h2 className="section-title">{p.refsTitle}</h2>
            <p className="section-subtitle">{p.refsLead}</p>
          </div>

          <div className="work-grid reveal-stagger">
            {p.refs.map((ref) => (
              <article className="work-card" key={ref.key}>
                <div className="work-card-media">
                  <img src={ref.image} alt={ref.imageAlt} loading="lazy" />
                </div>
                <div className="work-card-body">
                  <span className="work-card-tag">{ref.sector}</span>
                  <h3>{ref.name}</h3>
                  <p>{ref.desc}</p>
                  <a
                    className="link"
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ref.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="ai-content">
        <div className="container">
          <article className="ps-card ps-card--accent reveal">
            <span className="work-card-tag">{p.aiLabel}</span>
            <h2>{p.aiTitle}</h2>
            <p>{p.aiText}</p>
            <ul className="service-hub-bullets">
              {p.aiBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="link" href="/services/e-commerce/ai-content">
              {p.aiCta}
            </Link>
          </article>
        </div>
      </section>

      <section className="section" id="requirements">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">{p.reqTitle}</h2>
            <p className="section-subtitle">{p.reqLead}</p>
          </div>

          <ul className="trust-list reveal">
            {p.reqItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="why-box reveal">
            <h4>{p.outScopeTitle}</h4>
            <ul>
              {p.outScopeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ServiceShell>
  );
}
