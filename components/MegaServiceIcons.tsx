import type { ReactNode } from 'react';

/** Compact illustrative icons for AI Services mega menu — original, Brand-blue palette */
export type MegaIconId =
  | 'product'
  | 'sprint'
  | 'llm'
  | 'export'
  | 'fly'
  | 'mcp'
  | 'agent'
  | 'workflow'
  | 'qa'
  | 'email'
  | 'dedicated'
  | 'augment'
  | 'create';

function Frame({ children, bg }: { children: ReactNode; bg: string }) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden className="mega-icon-svg">
      <rect width="40" height="40" rx="10" fill={bg} />
      {children}
    </svg>
  );
}

const icons: Record<MegaIconId, () => ReactNode> = {
  product: () => (
    <Frame bg="#E8F4FF">
      <rect x="9" y="11" width="16" height="20" rx="2" fill="#fff" stroke="#1565C0" strokeWidth="1.4" />
      <path d="M12 16h10M12 20h8M12 24h10" stroke="#1E88E5" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="14" r="7" fill="#4FC3F7" />
      <path d="M28 10.5v7M24.5 14h7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </Frame>
  ),
  sprint: () => (
    <Frame bg="#E0F2FE">
      <circle cx="20" cy="20" r="11" fill="#fff" stroke="#0284C7" strokeWidth="1.4" />
      <path d="M20 12v8l5 3" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29 11l3-1-1 3 3 1-3 1 1 3-3-1-1 3-1-3-3 1 1-3-3-1 3-1z" fill="#F5C518" />
    </Frame>
  ),
  llm: () => (
    <Frame bg="#EEF2FF">
      <circle cx="12" cy="14" r="4" fill="#6366F1" />
      <circle cx="28" cy="14" r="4" fill="#38BDF8" />
      <circle cx="20" cy="28" r="4" fill="#1E88E5" />
      <path d="M15.5 16.5L18 25M24.5 16.5L22 25M16 14h8" stroke="#94A3B8" strokeWidth="1.5" />
      <circle cx="20" cy="14" r="2.2" fill="#F5C518" />
    </Frame>
  ),
  export: () => (
    <Frame bg="#ECFDF5">
      <circle cx="20" cy="20" r="11" fill="#fff" stroke="#0D9488" strokeWidth="1.3" />
      <ellipse cx="20" cy="20" rx="5" ry="11" fill="none" stroke="#14B8A6" strokeWidth="1.2" />
      <path d="M9 20h22M20 9c3 3.5 3 14.5 0 22M20 9c-3 3.5-3 14.5 0 22" fill="none" stroke="#0F766E" strokeWidth="1.1" />
      <path d="M26 10l5 1-2 4" fill="#F5C518" stroke="#D97706" strokeWidth="0.6" />
    </Frame>
  ),
  fly: () => (
    <Frame bg="#EFF6FF">
      <path
        d="M8 24l12-4 12 4-12 8z"
        fill="#BFDBFE"
        stroke="#1D4ED8"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M20 8l2.5 10H20L17.5 18z" fill="#1E88E5" />
      <path d="M12 18l8-2 8 2" stroke="#1565C0" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="30" cy="12" r="3.5" fill="#F5C518" />
    </Frame>
  ),
  mcp: () => (
    <Frame bg="#F0FDFA">
      <rect x="7" y="15" width="10" height="10" rx="2" fill="#14B8A6" />
      <rect x="23" y="15" width="10" height="10" rx="2" fill="#0EA5E9" />
      <path d="M17 20h6" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
      <circle cx="17" cy="20" r="1.6" fill="#F5C518" />
      <circle cx="23" cy="20" r="1.6" fill="#F5C518" />
      <path d="M10 18v4M12.5 18v4M27.5 18v4M30 18v4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </Frame>
  ),
  agent: () => (
    <Frame bg="#F5F3FF">
      <rect x="13" y="10" width="14" height="12" rx="3" fill="#7C3AED" />
      <circle cx="17.5" cy="15" r="1.6" fill="#F5C518" />
      <circle cx="22.5" cy="15" r="1.6" fill="#F5C518" />
      <path d="M16 19h8" stroke="#E9D5FF" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M20 22v4M16 28h8" stroke="#6366F1" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="28" r="2.2" fill="#38BDF8" />
      <circle cx="28" cy="28" r="2.2" fill="#38BDF8" />
    </Frame>
  ),
  workflow: () => (
    <Frame bg="#FFF7ED">
      <rect x="8" y="10" width="9" height="7" rx="1.5" fill="#FB923C" />
      <rect x="23" y="16" width="9" height="7" rx="1.5" fill="#F5C518" />
      <rect x="8" y="24" width="9" height="7" rx="1.5" fill="#1E88E5" />
      <path
        d="M17 13.5h4.5V19.5H23M17 27.5h4.5V19.5"
        fill="none"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  qa: () => (
    <Frame bg="#FEF2F2">
      <rect x="10" y="9" width="16" height="22" rx="2" fill="#fff" stroke="#DC2626" strokeWidth="1.3" />
      <path d="M14 16l3 3 6-7" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 26h8M14 29h6" stroke="#FCA5A5" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="29" cy="12" r="5" fill="#F5C518" />
      <path d="M29 9.5v5M26.5 12h5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </Frame>
  ),
  email: () => (
    <Frame bg="#EFF6FF">
      <rect x="7" y="12" width="26" height="17" rx="2.5" fill="#fff" stroke="#1565C0" strokeWidth="1.4" />
      <path d="M8 14l12 9 12-9" fill="none" stroke="#1E88E5" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="30" cy="12" r="6" fill="#4FC3F7" />
      <path
        d="M28 12h4M30 10v4M27.5 10.5l5 3M27.5 13.5l5-3"
        stroke="#fff"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </Frame>
  ),
  dedicated: () => (
    <Frame bg="#F1F5F9">
      <circle cx="14" cy="15" r="4" fill="#1E88E5" />
      <circle cx="26" cy="15" r="4" fill="#4FC3F7" />
      <circle cx="20" cy="18" r="4.5" fill="#1565C0" />
      <path d="M8 30c1.5-5 5-7 12-7s10.5 2 12 7" fill="#CBD5E1" />
    </Frame>
  ),
  augment: () => (
    <Frame bg="#ECFEFF">
      <circle cx="16" cy="16" r="5" fill="#0891B2" />
      <path d="M8 30c1-6 4.5-8 8-8s7 2 8 8" fill="#A5F3FC" />
      <circle cx="28" cy="14" r="7" fill="#F5C518" />
      <path d="M28 10.5v7M24.5 14h7" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
    </Frame>
  ),
  create: () => (
    <Frame bg="#FFFBEB">
      <path d="M18 8l2 10h-4z" fill="#F59E0B" />
      <rect x="14" y="18" width="12" height="10" rx="1.5" fill="#1E88E5" />
      <path d="M14 20h12M20 18v10" stroke="#BFDBFE" strokeWidth="1.2" />
      <circle cx="28" cy="12" r="4" fill="#4FC3F7" />
      <path d="M28 10v4M26 12h4" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </Frame>
  ),
};

export function MegaIcon({ id }: { id: MegaIconId }) {
  const Comp = icons[id];
  return Comp ? <>{Comp()}</> : null;
}
