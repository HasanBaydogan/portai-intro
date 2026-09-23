import RouteRedirect from '@/components/RouteRedirect';
import { useLanguage } from '@/lib/LanguageContext';

/** Retired route — the page now lives at /services/digital-product. */
export default function DigitalProductRedirect() {
  const { t } = useLanguage();
  return <RouteRedirect to="/services/digital-product" label={t.nav.digitalProduct} />;
}
