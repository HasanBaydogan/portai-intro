import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage } from '../lib/LanguageContext';
import type { Lang } from '../lib/i18n';
import { MegaIcon, type MegaIconId } from './MegaServiceIcons';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const [isLangOpen, setLangOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isBannerOpen, setBannerOpen] = useState(true);
  const [isMegaOpen, setMegaOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const megaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const languages: { code: Lang; label: string; flag: string }[] = [
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];
  const activeLang = languages.find((l) => l.code === language) ?? languages[0];

  const openMega = () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    setMegaOpen(true);
  };
  const scheduleCloseMega = () => {
    if (megaCloseTimer.current) clearTimeout(megaCloseTimer.current);
    megaCloseTimer.current = setTimeout(() => setMegaOpen(false), 160);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealEls = Array.from(document.querySelectorAll('.reveal, .reveal-stagger'));

    if (reduce || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, [language, router.asPath]);

  const homeHash = (hash: string) => `/${hash}`;
  const closeMenus = () => {
    setMenuOpen(false);
    setMegaOpen(false);
  };

  return (
    <main>
      {isBannerOpen && (
        <div className="top-banner">
          <div className="top-banner-inner">
            <p className="top-banner-text">{t.topBanner.text}</p>
            <Link className="top-banner-cta" href="/#products" onClick={closeMenus}>
              {t.topBanner.cta}
            </Link>
          </div>
          <button
            type="button"
            className="top-banner-close"
            onClick={() => setBannerOpen(false)}
            aria-label={t.aria.closeBanner}
          >
            ×
          </button>
        </div>
      )}

      <header className={`site-header ${isMegaOpen ? 'mega-open' : ''}`}>
        <div className="container nav">
          <Link href="/" className="brand" aria-label="AI PORT" onClick={closeMenus}>
            <img src="/assets/logos/aiport_logo.png" alt="AI PORT" className="brand-logo" />
          </Link>
          <button
            type="button"
            className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={t.aria.menuToggle}
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-right ${isMenuOpen ? 'open' : ''}`}>
            <div className="nav-links">
              <div
                className={`nav-item has-mega ${isMegaOpen ? 'open' : ''}`}
                onMouseEnter={openMega}
                onMouseLeave={scheduleCloseMega}
              >
                <Link
                  className={`nav-link ${router.pathname.startsWith('/services') ? 'active' : ''}`}
                  href="/services"
                  aria-expanded={isMegaOpen}
                  aria-haspopup="true"
                  onClick={(e) => {
                    if (window.matchMedia('(max-width: 768px)').matches) {
                      e.preventDefault();
                      setMegaOpen((prev) => !prev);
                      return;
                    }
                    closeMenus();
                  }}
                >
                  {t.nav.services}
                </Link>
                <div
                  className={`mega-menu ${isMegaOpen ? 'open' : ''}`}
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleCloseMega}
                >
                  <div className="mega-menu-inner">
                    <p className="mega-label">{t.megaServices.linesLabel}</p>
                    <div className="mega-cols">
                      {t.megaServices.lines.map((line) => (
                        <div className="mega-col" key={line.key}>
                          <Link href={line.href} className="mega-col-head" onClick={closeMenus}>
                            <span className="mega-icon" aria-hidden>
                              <MegaIcon id={line.icon as MegaIconId} />
                            </span>
                            <span className="mega-col-title">{line.label}</span>
                          </Link>
                          <div className="mega-sub-links">
                            {line.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="mega-sub-link"
                                onClick={closeMenus}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mega-foot">
                      <Link
                        href={t.megaServices.highlightHref}
                        className="mega-highlight"
                        onClick={closeMenus}
                      >
                        <span className="mega-highlight-label">
                          {t.megaServices.highlightLabel}
                        </span>
                        <span className="mega-highlight-title">
                          {t.megaServices.highlightTitle}
                        </span>
                      </Link>
                      <Link
                        href={t.megaServices.allHref}
                        className="mega-all-link"
                        onClick={closeMenus}
                      >
                        {t.megaServices.allCta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link className="nav-link" href={homeHash('#products')} onClick={closeMenus}>
                {t.nav.products}
              </Link>
              <Link className="nav-link" href={homeHash('#partners')} onClick={closeMenus}>
                {t.nav.partners}
              </Link>
              <Link className="nav-link" href="/contact" onClick={closeMenus}>
                {t.nav.contact}
              </Link>
            </div>
            <div className="language-switcher" ref={langRef}>
              <button
                type="button"
                className="language-toggle"
                onClick={() => setLangOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
              >
                <span aria-hidden>{activeLang.flag}</span>
                <span>{activeLang.label}</span>
              </button>
              {isLangOpen && (
                <ul className="language-menu" role="listbox" aria-label={t.aria.langSelect}>
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={lang.code === language}
                        className={`language-option ${lang.code === language ? 'active' : ''}`}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                      >
                        <span aria-hidden>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-top-grid">
            <Link href="/careers" className="footer-panel footer-panel--career" onClick={closeMenus}>
              <img
                src="/assets/illustrations/export-ai-visual.png"
                alt=""
                className="footer-panel-img"
                loading="lazy"
              />
              <div className="footer-panel-content">
                <h3 className="footer-panel-title">{t.footer.joinTitle}</h3>
                <span className="footer-panel-cta">{t.footer.joinCta}</span>
              </div>
            </Link>

            <Link href="/contact" className="footer-panel footer-panel--contact" onClick={closeMenus}>
              <img
                src="/assets/illustrations/flyai-visual.png"
                alt=""
                className="footer-panel-img"
                loading="lazy"
              />
              <div className="footer-panel-content">
                <h3 className="footer-panel-title">{t.footer.contactTitle}</h3>
                <span className="footer-panel-cta">{t.footer.contactCta}</span>
              </div>
            </Link>

            <div className="footer-panel footer-panel--brand">
              <Link href="/" className="footer-brand" onClick={closeMenus}>
                <img src="/assets/logos/aiport_logo.png" alt="AI PORT" className="footer-logo" />
              </Link>
              <p className="footer-tagline">{t.footer.tagline}</p>
              <div className="footer-social" aria-label={t.footer.socialLabel}>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.14 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.5h4.6V23H.2V8.5zM8.34 8.5h4.4v1.98h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 7V23h-4.6v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4.56V8.5z"
                    />
                  </svg>
                </a>
                <a href="mailto:info@aiport.tr" aria-label="Email">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <Link href="/#products" className="footer-panel footer-panel--explore" onClick={closeMenus}>
              <img
                src="/assets/illustrations/erp-aero/product-overview.jpg"
                alt=""
                className="footer-panel-img"
                loading="lazy"
              />
              <div className="footer-panel-content">
                <h3 className="footer-panel-title">{t.footer.exploreTitle}</h3>
                <span className="footer-panel-cta">{t.footer.exploreCta}</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="footer-bottom-wrap">
          <div className="container footer-bottom-inner">
            <nav className="footer-nav" aria-label="Footer">
              <div className="footer-nav-col">
                <h4>{t.footer.colServices}</h4>
                <Link href="/services" onClick={closeMenus}>
                  {t.nav.services}
                </Link>
                {t.megaServices.lines.map((line) => (
                  <Link href={line.href} key={line.key} onClick={closeMenus}>
                    {line.label}
                  </Link>
                ))}
                <Link href="/#partners" onClick={closeMenus}>
                  {t.nav.partners}
                </Link>
              </div>
              <div className="footer-nav-col">
                <h4>{t.footer.colProducts}</h4>
                <Link href="/#export-ai" onClick={closeMenus}>
                  {t.nav.exportAI}
                </Link>
                <Link href="/#fly-ai" onClick={closeMenus}>
                  {t.nav.flyAI}
                </Link>
                <a href="https://erp.aero/" target="_blank" rel="noopener noreferrer">
                  ERP.aero
                </a>
              </div>
              <div className="footer-nav-col">
                <h4>{t.footer.colCompany}</h4>
                <Link href="/contact" onClick={closeMenus}>
                  {t.nav.contact}
                </Link>
                <Link href="/#advantages" onClick={closeMenus}>
                  {t.advantages.title}
                </Link>
                <a href="#">{t.footer.privacy}</a>
              </div>
              <div className="footer-nav-col footer-nav-col--place">
                <h4>{t.footer.locationsTitle}</h4>
                <p className="footer-place-name">{t.footer.locationName}</p>
                {t.footer.locationLines.map((line) => (
                  <p key={line} className="footer-place-line">
                    {line.includes('@') ? (
                      <a href={`mailto:${line}`}>{line}</a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            </nav>
            <div className="footer-copy">{t.footer.rights}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
