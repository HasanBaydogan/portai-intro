import Head from 'next/head';
import Layout from '@/components/Layout';
import { ContactForm } from '@/components/SiteForms';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t.contactPage.headTitle}</title>
      </Head>
      <Layout>
        <section className="page-hero">
          <div className="container">
            <p className="section-label">{t.nav.contact}</p>
            <h1 className="page-hero-title">{t.contactPage.title}</h1>
            <p className="page-hero-lead">{t.contactPage.lead}</p>
          </div>
        </section>
        <section className="section">
          <div className="container form-page-wrap">
            <ContactForm labels={t.contact} />
          </div>
        </section>
      </Layout>
    </>
  );
}
