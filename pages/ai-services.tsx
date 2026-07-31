import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useLanguage } from '@/lib/LanguageContext';

export default function AiServicesPage() {
  const { t } = useLanguage();
  const p = t.aiServicesPage;

  return (
    <>
      <Head>
        <title>{p.headTitle}</title>
      </Head>
      <Layout>
        <section className="page-hero">
          <div className="container">
            <p className="section-label reveal">{t.nav.aiServices}</p>
            <h1 className="page-hero-title reveal">{p.heroTitle}</h1>
            <p className="page-hero-lead reveal">{p.heroLead}</p>
            <div className="hero-cta reveal">
              <a className="btn btn-primary" href="/contact">
                {p.heroCta}
              </a>
              <Link className="btn btn-secondary" href="/#products">
                {p.heroSecondary}
              </Link>
            </div>
          </div>
        </section>

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
                  <a className="link" href="/contact">
                    {path.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
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

        <section className="cta-band">
          <div className="container">
            <div className="cta-row reveal">
              <div>
                <h2 className="section-title">{p.ctaTitle}</h2>
                <p className="section-subtitle">{p.ctaText}</p>
              </div>
              <a className="btn btn-primary" href="/contact">
                {p.ctaBtn}
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
