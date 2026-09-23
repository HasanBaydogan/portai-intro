import Link from 'next/link';
import ServiceShell from '@/components/ServiceShell';
import { useLanguage } from '@/lib/LanguageContext';

export default function AiServicesPage() {
  const { t } = useLanguage();
  const p = t.aiServicesPage;

  return (
    <ServiceShell
      currentKey="ai"
      headTitle={p.headTitle}
      label={t.nav.aiServices}
      title={p.heroTitle}
      lead={p.heroLead}
      cta={p.heroCta}
      secondary={{ label: p.heroSecondary, href: '/#products' }}
      ctaTitle={p.ctaTitle}
      ctaText={p.ctaText}
      ctaBtn={p.ctaBtn}
    >
      <section className="section" id="paths">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">{p.pathsTitle}</h2>
            <p className="section-subtitle">{p.pathsLead}</p>
          </div>

          <div className="service-paths reveal-stagger">
            {p.paths.map((path) => (
              <article className="service-path" key={path.stage}>
                <span className="service-path-stage">{path.stage}</span>
                <h3>{path.title}</h3>
                <p>{path.desc}</p>
                <p className="service-path-meta">{path.meta}</p>
                <h4>{path.getsTitle}</h4>
                <ul>
                  {path.gets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="link" href="/contact">
                  {path.cta}
                </Link>
              </article>
            ))}
          </div>

          <div className="why-box reveal">
            <h4>{p.ecomTitle}</h4>
            <p className="pkg-required-text">{p.ecomText}</p>
            <Link className="link" href="/services/e-commerce/ai-content">
              {p.ecomCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <h2 className="section-title reveal">{p.faqTitle}</h2>
          <div className="faq-grid reveal-stagger">
            {p.faqs.map((faq) => (
              <div className="faq-item" key={faq.q}>
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceShell>
  );
}
