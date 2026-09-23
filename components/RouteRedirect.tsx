import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

type RouteRedirectProps = {
  to: string;
  label: string;
};

/**
 * Keeps a retired URL working after a page moved.
 * The meta refresh covers static export and no-JS clients; `router.replace`
 * handles the in-app navigation without leaving a history entry.
 */
export default function RouteRedirect({ to, label }: RouteRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return (
    <>
      <Head>
        <title>{label}</title>
        <meta name="robots" content="noindex" />
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
      </Head>
      <main className="route-redirect">
        <Link className="link" href={to}>
          {label}
        </Link>
      </main>
    </>
  );
}
