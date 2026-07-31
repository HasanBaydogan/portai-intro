import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LanguageProvider } from '@/lib/LanguageContext';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F7F5F2" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
