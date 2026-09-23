import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { MegaIcon, type MegaIconId } from '@/components/MegaServiceIcons';
import { useLanguage } from '@/lib/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();
  const p = t.servicesPage;

  return (
    <>
      <Head>
        <title>{p.headTitle}</title>
      </Head>
      <Layout>
        <section className="page-hero">
          <div className="container">
            <p className="section-label reveal">{t.nav.services}</p>
            <h1 className="page-hero-title reveal">{p.heroTitle}</h1>
            <p className="page-hero-lead reveal">{p.heroLead}</p>
            <div className="hero-cta reveal">
              <Link className="btn btn-primary" href="/contact">
                {p.heroCta}
              </Link>
              <Link className="btn btn-secondary" href="/#products">
                {p.heroSecondary}
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="lines">
          <div className="container">
            <div className="section-head reveal">
              <p className="section-label">{p.cardsLabel}</p>
              <h2 className="section-title">{p.cardsTitle}</h2>
              <p className="section-subtitle">{p.cardsLead}</p>
            </div>

            <div className="service-hub-grid reveal-stagger">
              {p.cards.map((card) => (
                <article className="service-hub-card" key={card.key}>
                  <span className="service-hub-icon" aria-hidden>
                    <MegaIcon id={card.icon as MegaIconId} />
                  </span>
                  <span className="service-hub-label">
                    {card.label}
                    {!card.ready && <span className="service-soon-badge">{p.soonBadge}</span>}
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <ul className="service-hub-bullets">
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <Link className="link" href={card.href}>
                    {p.cardCta}
                  </Link>
                </article>
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
              <Link className="btn btn-primary" href="/contact">
                {p.ctaBtn}
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
