import ServiceShell from '@/components/ServiceShell';
import ServiceSoon from '@/components/ServiceSoon';
import { useLanguage } from '@/lib/LanguageContext';

export default function HardwarePage() {
  const { t } = useLanguage();
  const p = t.hardwarePage;

  return (
    <ServiceShell
      currentKey="hardware"
      headTitle={p.headTitle}
      label={t.megaServices.lines[3].label}
      title={p.heroTitle}
      lead={p.heroLead}
      cta={p.heroCta}
      secondary={{ label: p.heroSecondary, href: '/services' }}
      ctaTitle={p.ctaTitle}
      ctaText={p.ctaText}
      ctaBtn={p.ctaBtn}
    >
      <ServiceSoon
        soonLabel={p.soonLabel}
        soonTitle={p.soonTitle}
        soonText={p.soonText}
        soonCta={p.ctaBtn}
        scopeTitle={p.scopeTitle}
        scope={p.scope}
      />
    </ServiceShell>
  );
}
