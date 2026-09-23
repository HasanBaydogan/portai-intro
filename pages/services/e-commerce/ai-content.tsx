import Link from 'next/link';
import ServiceShell from '@/components/ServiceShell';
import { MegaIcon, type MegaIconId } from '@/components/MegaServiceIcons';
import { useLanguage } from '@/lib/LanguageContext';

export default function AiContentPage() {
  const { t } = useLanguage();
  const p = t.aiContentPage;

  return (
    <ServiceShell
      currentKey="e-commerce"
      headTitle={p.headTitle}
      label={p.label}
      parent={{ label: p.parentLabel, href: '/services/e-commerce' }}
      title={p.heroTitle}
      lead={p.heroLead}
      cta={p.heroCta}
      secondary={{ label: p.heroSecondary, href: '/services/e-commerce#packages' }}
      ctaTitle={p.ctaTitle}
      ctaText={p.ctaText}
      ctaBtn={p.ctaBtn}
    >
      <section className="section" id="what">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">{p.whatTitle}</h2>
            <p className="section-subtitle">{p.whatLead}</p>
          </div>

          <div className="service-hub-grid reveal-stagger">
            {p.what.map((item) => (
              <article className="service-hub-card" key={item.title}>
                <span className="service-hub-icon" aria-hidden>
                  <MegaIcon id={item.icon as MegaIconId} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">{p.howTitle}</h2>
            <p className="section-subtitle">{p.howLead}</p>
          </div>

          <div className="comp-list reveal-stagger">
            {p.how.map((step, i) => (
              <article className="comp-item" key={step.title}>
                <div className="comp-num">{i + 1}</div>
                <div className="comp-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">{p.pricingLabel}</p>
            <h2 className="section-title">{p.pricingTitle}</h2>
            <p className="section-subtitle">{p.pricingLead}</p>
          </div>

          <div className="why-box reveal">
            <h4>
              {p.setupTitle} — {p.setupPrice}
            </h4>
            <p className="pkg-required-text">{p.setupText}</p>
          </div>

          <div className="section-head section-head--tight reveal">
            <h3 className="section-title section-title--sm">{p.packagesTitle}</h3>
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

          <p className="pkg-note reveal">{p.packagesNote}</p>
          <p className="pkg-note reveal">{p.priceNote}</p>
        </div>
      </section>

      <section className="section" id="license">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">{p.licenseTitle}</h2>
            <p className="section-subtitle">{p.licenseLead}</p>
          </div>
          <ul className="trust-list reveal">
            {p.licenses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="requirements">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">{p.reqTitle}</h2>
          </div>
          <div className="why-box reveal">
            <ul>
              {p.reqItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="why-box reveal">
            <h4>{p.qualityTitle}</h4>
            <p className="pkg-required-text">{p.qualityText}</p>
          </div>
        </div>
      </section>
    </ServiceShell>
  );
}
