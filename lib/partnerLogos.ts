export type PartnerLogo = {
  name: string;
  href: string;
  src?: string;
};

/** Order: ERP.aero → Volza → ImportYeti → AWS → complementary ecosystem brands */
export const partnerLogos: PartnerLogo[] = [
  {
    name: 'ERP.aero',
    href: 'https://erp.aero/',
    src: '/assets/logos/ERP-aero-logo-white.svg',
  },
  {
    name: 'Volza',
    href: 'https://www.volza.com/',
    src: '/assets/logos/partners/volza.svg',
  },
  {
    name: 'ImportYeti',
    href: 'https://www.importyeti.com/',
    src: '/assets/logos/partners/importyeti.png',
  },
  {
    name: 'AWS',
    href: 'https://aws.amazon.com/',
    src: '/assets/logos/partners/aws.svg',
  },
  {
    name: 'ImportGenius',
    href: 'https://www.importgenius.com/',
    src: '/assets/logos/partners/importgenius.svg',
  },
  {
    name: 'ILS',
    href: 'https://www.ilsmart.com/',
    src: '/assets/logos/partners/ils.svg',
  },
  {
    name: 'PartsBase',
    href: 'https://www.partsbase.com/',
    src: '/assets/logos/partners/partsbase.svg',
  },
  {
    name: 'Google Cloud',
    href: 'https://cloud.google.com/',
    src: '/assets/logos/partners/googlecloud.svg',
  },
  {
    name: 'Microsoft Azure',
    href: 'https://azure.microsoft.com/',
    src: '/assets/logos/partners/microsoftazure.svg',
  },
  {
    name: 'OpenAI',
    href: 'https://openai.com/',
    src: '/assets/logos/partners/openai.svg',
  },
];
