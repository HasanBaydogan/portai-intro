import { useRouter } from 'next/router';
import tr from '../locales/tr.json';
import en from '../locales/en.json';
import ru from '../locales/ru.json';

const resources: Record<string, any> = { tr, en, ru };

export function useT() {
  const { locale } = useRouter();
  const lang = locale || 'tr';
  return (key: string) => resources[lang]?.[key] || resources['tr'][key] || key;
}
