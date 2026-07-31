import Head from 'next/head';
import Layout from '@/components/Layout';
import { useLanguage } from '@/lib/LanguageContext';

export default function DigitalProductPage() {
  const { t } = useLanguage();
  const p = t.digitalProductPage;

  return (
    <>
      <Head>
        <title>{p.headTitle}</title>
      </Head>
      <Layout>
        <section className="page-hero">
          <div className="container">
            <p className="section-label reveal">{t.nav.digitalProduct}</p>
            <h1 className="page-hero-title reveal">{p.heroTitle}</h1>
            <p className="page-hero-lead reveal">{p.heroLead}</p>
            <div className="hero-cta reveal">
              <a className="btn btn-primary" href="/contact">
                {p.heroCta}
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="problem-solution reveal-stagger">
              <article className="ps-card">
                <span className="work-card-tag">{p.problemLabel}</span>
                <h2>{p.problemTitle}</h2>
                <p>{p.problemText}</p>
              </article>
              <article className="ps-card ps-card--accent">
                <span className="work-card-tag">{p.solutionLabel}</span>
                <h2>{p.solutionTitle}</h2>
                <p>{p.solutionText}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="section-title">{p.stagesTitle}</h2>
            </div>
            <div className="stage-grid reveal-stagger">
              {p.stages.map((stage, i) => (
                <article className="stage-card" key={stage.title}>
                  <div className="comp-num">{i + 1}</div>
                  <h3>{stage.title}</h3>
                  <p>{stage.desc}</p>
                  <h4>{stage.teamTitle}</h4>
                  <p>{stage.teamDesc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <h2 className="section-title">{p.processTitle}</h2>
              <p className="section-subtitle">{p.processLead}</p>
            </div>
            <div className="comp-list reveal-stagger">
              {p.process.map((step, i) => (
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
