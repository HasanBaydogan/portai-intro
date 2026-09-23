import ServiceShell from '@/components/ServiceShell';
import { useLanguage } from '@/lib/LanguageContext';

export default function DigitalProductPage() {
  const { t } = useLanguage();
  const p = t.digitalProductPage;

  return (
    <ServiceShell
      currentKey="digital-product"
      headTitle={p.headTitle}
      label={t.nav.digitalProduct}
      title={p.heroTitle}
      lead={p.heroLead}
      cta={p.heroCta}
      secondary={{ label: t.nav.services, href: '/services' }}
      ctaTitle={p.ctaTitle}
      ctaText={p.ctaText}
      ctaBtn={p.ctaBtn}
    >
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

      <section className="section" id="stages">
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

      <section className="section" id="process">
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
    </ServiceShell>
  );
}
