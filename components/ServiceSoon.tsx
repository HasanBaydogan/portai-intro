import Link from 'next/link';

type ServiceSoonProps = {
  soonLabel: string;
  soonTitle: string;
  soonText: string;
  soonCta: string;
  scopeTitle: string;
  scope: readonly string[];
};

/** Placeholder body for service lines whose detailed content is still being written. */
export default function ServiceSoon({
  soonLabel,
  soonTitle,
  soonText,
  soonCta,
  scopeTitle,
  scope,
}: ServiceSoonProps) {
  return (
    <>
      <section className="section">
        <div className="container">
          <article className="service-soon reveal">
            <span className="work-card-tag">{soonLabel}</span>
            <h2>{soonTitle}</h2>
            <p>{soonText}</p>
            <Link className="link" href="/contact">
              {soonCta}
            </Link>
          </article>
        </div>
      </section>

      <section className="section" id="scope">
        <div className="container">
          <div className="section-head reveal">
            <h2 className="section-title">{scopeTitle}</h2>
          </div>
          <div className="comp-list reveal-stagger">
            {scope.map((item, i) => (
              <article className="comp-item" key={item}>
                <div className="comp-num">{i + 1}</div>
                <div className="comp-body">
                  <h3>{item}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
