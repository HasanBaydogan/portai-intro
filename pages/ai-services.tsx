import RouteRedirect from '@/components/RouteRedirect';
import { useLanguage } from '@/lib/LanguageContext';

/** Retired route — the page now lives at /services/ai. */
export default function AiServicesRedirect() {
  const { t } = useLanguage();
  return <RouteRedirect to="/services/ai" label={t.nav.aiServices} />;
}
