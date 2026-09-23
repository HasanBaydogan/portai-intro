import type { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from './Layout';
import { MegaIcon, type MegaIconId } from './MegaServiceIcons';
import { useLanguage } from '../lib/LanguageContext';

type ServiceShellProps = {
  /** `key` of the service line this page belongs to — excluded from the cross-links. */
  currentKey: string;
  headTitle: string;
  label: string;
  /** Extra breadcrumb step between "Hizmetler" and `label`, for sub-pages. */
  parent?: { label: string; href: string };
  title: string;
  lead: string;
  cta: string;
  secondary?: { label: string; href: string };
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  children: ReactNode;
};

/** Shared frame for the service detail pages: hero, content, cross-links, closing CTA. */
export default function ServiceShell({
  currentKey,
  headTitle,
  label,
  parent,
  title,
  lead,
  cta,
  secondary,
  ctaTitle,
  ctaText,
  ctaBtn,
  children,
}: ServiceShellProps) {
  const { t } = useLanguage();
  const others = t.servicesPage.cards.filter((card) => card.key !== currentKey);

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Layout>
        <section className="page-hero">
          <div className="container">
            <p className="section-label reveal">
              <Link href="/services" className="service-breadcrumb">
                {t.nav.services}
              </Link>
              <span aria-hidden> / </span>
              {parent && (
                <>
                  <Link href={parent.href} className="service-breadcrumb">
                    {parent.label}
                  </Link>
                  <span aria-hidden> / </span>
                </>
              )}
              {label}
            </p>
            <h1 className="page-hero-title reveal">{title}</h1>
            <p className="page-hero-lead reveal">{lead}</p>
            <div className="hero-cta reveal">
              <Link className="btn btn-primary" href="/contact">
                {cta}
              </Link>
              {secondary && (
                <Link className="btn btn-secondary" href={secondary.href}>
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </section>

        {children}

        <section className="section service-crosslinks-section">
          <div className="container">
            <h2 className="section-title reveal">{t.servicesPage.moreTitle}</h2>
            <div className="service-crosslinks reveal-stagger">
              {others.map((card) => (
                <Link className="service-crosslink" href={card.href} key={card.key}>
                  <span className="mega-icon mega-icon--side" aria-hidden>
                    <MegaIcon id={card.icon as MegaIconId} />
                  </span>
                  <span className="service-crosslink-body">
                    <span className="service-crosslink-title">
                      {card.label}
                      {!card.ready && (
                        <span className="service-soon-badge">{t.servicesPage.soonBadge}</span>
                      )}
                    </span>
                    <span className="service-crosslink-desc">{card.title}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <div className="cta-row reveal">
              <div>
                <h2 className="section-title">{ctaTitle}</h2>
                <p className="section-subtitle">{ctaText}</p>
              </div>
              <Link className="btn btn-primary" href="/contact">
                {ctaBtn}
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
