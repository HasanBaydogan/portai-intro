import Head from 'next/head';
import Layout from '@/components/Layout';
import { CareerForm } from '@/components/SiteForms';
import { useLanguage } from '@/lib/LanguageContext';

export default function CareersPage() {
  const { t } = useLanguage();
  const c = t.careersPage;

  return (
    <>
      <Head>
        <title>{c.headTitle}</title>
      </Head>
      <Layout>
        <section className="page-hero">
          <div className="container">
            <p className="section-label">{c.title}</p>
            <h1 className="page-hero-title">{c.title}</h1>
            <p className="page-hero-lead">{c.lead}</p>
          </div>
        </section>
        <section className="section">
          <div className="container form-page-wrap">
            <CareerForm
              labels={{
                name: c.name,
                email: c.email,
                phone: c.phone,
                company: '',
                subject: c.role,
                message: c.note,
                role: c.role,
                note: c.note,
                cv: c.cv,
                cvHint: c.cvHint,
                submit: c.submit,
                sending: c.sending,
                success: c.success,
                error: c.error,
              }}
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
