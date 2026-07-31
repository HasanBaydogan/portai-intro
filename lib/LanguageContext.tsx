import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { content, type Lang } from './i18n';

type LanguageContextValue = {
  language: Lang;
  setLanguage: (lang: Lang) => void;
  t: (typeof content)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Lang>('tr');

  useEffect(() => {
    const saved = window.localStorage.getItem('aiport-lang');
    if (saved === 'tr' || saved === 'en') setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('aiport-lang', language);
  }, [language]);

  const setLanguage = useCallback((lang: Lang) => {
    setLanguageState(lang);
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, t: content[language] }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
