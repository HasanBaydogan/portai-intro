import { useRouter } from 'next/router';


const languages = [
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const currentLang = (router.locale as string) || 'tr';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className="lang-switcher">
      <select value={currentLang} onChange={handleChange} aria-label="Dil seçici">
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.label}
          </option>
        ))}
      </select>
      <style jsx>{`
        .lang-switcher {
          display: inline-flex;
          align-items: center;
          margin-left: 12px;
        }
        select {
          background: var(--surface-glass, #222);
          color: var(--text, #fff);
          border: 1px solid var(--border, #444);
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 15px;
          outline: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
