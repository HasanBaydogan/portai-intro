// Full bilingual content dictionary for the landing page.
// `tr` is the source of truth; `en` must mirror its exact shape.

const tr = {
  headTitle: 'Modern Web Tabanlı Yazılım Ürünleri | Şirketinizin Teknoloji Ortağı',
  aria: {
    menuToggle: 'Menüyü aç/kapat',
    langSelect: 'Dil seç',
  },
  nav: {
    products: 'Ürünler',
    exportAI: 'Export AI',
    flyAI: 'FLY\u00A0AI',
    insights: 'İçgörüler',
    contact: 'İletişim',
  },
  hero: {
    badge: 'AI\u00A0PORT Suite',
    titlePre: 'İki farklı ',
    titleHighlight: 'yapay zekâ platformu',
    titlePost: ', tek çatı altında.',
    descHtml:
      'AI\u00A0PORT; birbirinden bağımsız iki sektöre özel çözüm sunar: ihracatını büyütmek isteyen üreticiler için <strong>Export AI</strong> ve havacılık tedarik zincirini hızlandıran <strong>FLY\u00A0AI</strong>. Her ürün kendi alanında uçtan uca otomasyon sağlar.',
    exportCard: {
      visualAlt: 'Export AI küresel ihracat zekâsı görseli',
      tag: 'İhracat zekâsı',
      title: 'Yapay zekâ destekli ihracat motoru',
      desc:
        'Dünya haritası üzerinde pazar potansiyellerini renklendirir, şirketinize özel Export Fit Score ile en kârlı ülkeleri saniyeler içinde sıralar; nitelikli müşteri listeleri ve çok dilli mailing akışlarını tek platformda birleştirir.',
      stats: [
        { label: 'Export Fit Score', value: '92/100' },
        { label: 'Analiz edilen ülke', value: '190+' },
        { label: 'HS Code veritabanı', value: '5.000+' },
        { label: 'Potansiyel ithalatçı havuzu', value: '1M+' },
      ],
      cta: 'Export AI’ı keşfedin',
    },
    flyCard: {
      visualAlt: 'FLY AI havacılık tedarik zinciri görseli',
      tag: 'Havacılık tedariki',
      title: 'Havacılık tedarik zinciri için akıllı RFQ yönetimi',
      desc:
        'client → supplier → satış zincirinizi şeffaflaştırır; karmaşık BOM’ları sadeleştirir, çoklu tedarikçi karşılaştırması ve marjin optimizasyonuyla RFQ süreçlerini dakikalar içinde tamamlamanızı sağlar.',
      stats: [
        { label: 'Teklif hazırlama süresi', value: '%60↓' },
        { label: 'Yıllık zaman tasarrufu', value: '250+ saat' },
        { label: 'Onaylı supplier ağı', value: '12.000+' },
        { label: 'Kapsanan ülke', value: '42' },
      ],
      cta: 'FLY\u00A0AI’yı keşfedin',
    },
  },
  products: {
    title: 'Ürün Ailesi',
    subtitle:
      'AI\u00A0PORT Suite, üretim ve havacılık sektörlerindeki kritik operasyonları iki çekirdek ürünle uçtan uca dijitalleştirir.',
    items: [
      {
        desc:
          'İhracat yapmak isteyen üretici firmalar için dünya haritası, Export Fit Score, HS Code analizi ve otomatik mailing’i bir araya getiren ihracat zekâsı platformu.',
        linkLabel: 'Export AI Detayları →',
      },
      {
        desc:
          'Havacılık parça ticareti için RFQ otomasyonu, supplier eşlemesi ve marjin optimizasyonuyla satış ekiplerinizi hızlandıran platform.',
        linkLabel: 'Fly AI Detayları →',
      },
    ],
  },
  exportSection: {
    title: 'Export AI: İhracat zekâsı ve otomasyonu tek platformda',
    lead:
      'Export AI; ihracat yapmak isteyen veya mevcut ihracatını büyütmek isteyen üretici firmalara uçtan uca ihracat zekâsı sunan B2B SaaS platformudur. Dünya çapındaki verileri analiz ederek ürününüz için en kârlı olabilecek ülkeleri saniyeler içinde öne çıkarır, yeni pazar keşfetme sürenizi ortalama %50’ye kadar kısaltır.',
    visualAlt: 'Export AI dünya haritası ve pazar zekâsı paneli',
    mapHeading: 'Dünya haritası ile yaşayan pazar keşfi',
    mapText:
      'Ana arayüzümüzde yer alan dünya haritasında ülkeler ihracat potansiyeline göre renk kodlarıyla gösterilir: yüksek potansiyelli ülkeler koyu renkle vurgulanırken, gelişmekte olan pazarlar farklı tonlarda işaretlenir. Her ülkenin kartına tıkladığınızda sektörel talep, ortalama satın alma gücü, ithalat hacmi, nüfus ve şehirleşme oranı; hatta e-ticaret penetrasyonu gibi demografik içgörüler ayrıntılı şekilde açılır.',
    mapBullets: [
      'Export AI, dünya genelindeki verileri analiz ederek ürününüz için en kârlı olabilecek ülkeleri saniyeler içinde öne çıkarır.',
      'Yeni pazar keşfetme sürenizi ortalama %50’ye kadar kısaltır; aynı ekiple daha fazla ülkeye ve doğru firmaya ulaşmanızı sağlar.',
    ],
    panelTitle: 'Global görünürlük paneli',
    panelItems: [
      'Renk kodlu pazar ısı haritası',
      'Ülke bazlı sektör talebi ve ithalat hacmi',
      'Şirketinize özel Export Fit Score dağılımı',
      'HS Code trendleri ve ortalama birim fiyatlar',
    ],
    stats: [
      { label: 'İhracat hacmi artışı', value: '%30↑', detail: '12 ay içinde %20–30’a kadar artış sağlayan kullanıcılarımız var.' },
      { label: 'Araştırma süresi', value: '%60↓', detail: 'Satış ekipleriniz liste hazırlamaya daha az zaman harcar.' },
      { label: 'Nitelikli firma erişimi', value: '%40↑', detail: 'Export motoru ile daha fazla nitelikli firma.' },
      { label: 'İlk temas dönüşümü', value: '%25↑', detail: 'Otomatik, çok dilli mailing ile doğru mesajı gönderin.' },
    ],
    features: [
      {
        title: 'Şirketinize özel AI skorlaması',
        desc:
          'Ürün gamı, fiyat seviyesi, müşteri profili, kapasite, sertifikalar ve teslim sürelerini analiz eden Export Fit Score; her ülke ve müşteri için ayrı ayrı hesaplanır.',
        bullets: [
          '“Hangi ülkeye, hangi ürünle girmelisiniz?” sorusuna anında yanıt.',
          'Satış ekipleriniz gerçekten dönüşme ihtimali yüksek firmalara odaklanır; kapanan teklif oranınız %20–30’a kadar artar.',
        ],
      },
      {
        title: 'Export motoru ve potansiyel müşteri listeleri',
        desc:
          'HS Code, sektör, ülke, ciro, çalışan sayısı ve geçmiş ithalat verilerine göre küresel ithalatçı ve distribütörleri tarar, şirketinize uygunluğa göre sıralar.',
        bullets: [
          'Export AI kullanan firmalar, geleneksel yöntemlere göre %40’a kadar daha fazla nitelikli firmaya ulaşıyor.',
          'Ortalama %35 daha fazla ülke ve firma ile temas kuruluyor.',
        ],
      },
      {
        title: 'Geniş HS Code veritabanı & akıllı arama',
        desc:
          'Ürününüzü yazdığınız anda doğru HS kodlarını önerir; bu kodlar üzerinden ihracat yapan ülkeleri, yıllara göre ithalat trendlerini ve ortalama birim fiyatları sunar.',
        bullets: [
          'Yanlış HS kodu riski ortadan kalkar, gümrük süreçlerinde gereksiz gecikmelerin önüne geçersiniz.',
          'İthalat hacmi, fiyat ve talep grafikleriyle doğru fiyatlama yaparsınız.',
        ],
      },
      {
        title: 'Ülke ve firma bazlı kıyaslama',
        desc:
          'Aynı HS kodu veya sektördeki ülkeleri ve potansiyel müşteri firmalarını karşılaştırmalı olarak gösterir.',
        bullets: [
          '“X ülkesinde sipariş hacmi yüksek ama ödeme süresi uzun” gibi içgörülerle riskleri önceden hesaplayın.',
          'Karar verme sürenizi kısaltan, veri destekli pazar önceliklendirmesi yapın.',
        ],
      },
    ],
    process: [
      { n: '01', t: 'Veri toplama', d: 'Şirketinizin ürün gamı, fiyat seviyesi, kapasite, sertifikalar ve teslim süreleri Export AI’a tanımlanır.' },
      { n: '02', t: 'Pazar keşfi', d: 'AI destekli dünya haritası, ürününüz için en kârlı olabilecek ülkeleri ve sektör talebini saniyeler içinde öne çıkarır.' },
      { n: '03', t: 'Potansiyel müşteri listesi', d: 'HS Code ve sektörel kriterlere göre global ithalatçı ve distribütörler filtrelenir, Export Fit Score ile sıralanır.' },
      { n: '04', t: 'Akıllı aksiyon', d: 'Çok dilli mailing şablonları, CRM entegrasyonları ve takip otomasyonlarıyla ilk temas dönüşümlerinizi %25’e kadar artırın.' },
    ],
    overview: [
      {
        title: 'Öne çıkan özellikler',
        items: [
          'AI tabanlı Export Fit Score ile ülke ve firma bazlı önceliklendirme.',
          'HS Code veritabanı, trend analizleri ve ortalama birim fiyat raporları.',
          'Otomatik ve akıllı mailing: şirket bilgilerine ve ülke kültürüne uygun çok dilli taslaklar.',
          'Yanıt takibi, hatırlatma mailleri ve CRM entegrasyonları tek panelde.',
          'Dashboard ve raporlama ile pipeline, teklif ve sevkiyat süreçlerinin uçtan uca yönetimi.',
        ],
      },
      {
        title: 'Neden Export AI?',
        items: [
          'Pazar keşfi, ülke/müşteri analizi, HS Code verileri, potansiyel müşteri listeleri ve AI skorlaması tek platformda.',
          'Otomatik mailing, dashboard ve raporlama ile ihracat sürecinizin tüm adımları entegre çalışır.',
          'Export AI ile ihracat hacmini 12 ay içinde %20–30’a kadar artıran kullanıcılarımız bulunuyor.',
          'Satış ekiplerinizin araştırma ve liste hazırlama için harcadığı zamanı %60’a kadar azaltıyoruz.',
          'Aynı ekiple, daha fazla ülkeye ve daha doğru firmalara ulaşmanızı sağlıyoruz.',
        ],
      },
    ],
    faqHeading: 'Sık sorulan sorular',
    faqs: [
      {
        q: 'Export AI hangi verileri kullanıyor?',
        a: 'Küresel ticaret istatistikleri, gümrük kayıtları, HS Code raporları, sektörel talep verileri ve doğrulanmış ithalatçı listelerini birleştiriyoruz. Şirketinize özel eğitimli modellerimizle bu verileri sürekli güncelliyoruz.',
      },
      {
        q: 'Export Fit Score nasıl hesaplanıyor?',
        a: 'Ürün gamınız, fiyat seviyesi, sertifikalarınız, teslim süreleriniz ve mevcut müşteri profiliniz; hedef ülke talep verileriyle birlikte skorlanır. Her ülke ve potansiyel müşteri için ayrı puanlama yapılır.',
      },
      {
        q: 'Otomatik mailing nasıl çalışır?',
        a: 'Export AI, her hedef firmanın şirket bilgisi ve ülke kültürüne göre çok dilli taslaklar önerir, gönderim zamanlamasını optimize eder, yanıtları takip eder ve CRM’inize otomatik işler.',
      },
    ],
    trustTitle: 'Güven & destek',
    trustItems: [
      'Veri güvenliği bizim için öncelikli; şirket verileriniz üçüncü taraflarla paylaşılmaz.',
      'ISO 27001 uyumlu altyapı ve şifreli saklama politikalarıyla verilerinizi koruyoruz.',
      'Onboarding ve eğitim süreçlerinde uzman destek ekibimiz yanınızda.',
      'Özel kullanım senaryoları için danışmanlık ve entegrasyon hizmetleri sunuyoruz.',
    ],
    ctaTitle: 'Ürününüzü dünyaya açmak için Export AI’ı hemen deneyin',
    ctaText:
      '14 gün ücretsiz deneyin, kişiselleştirilmiş Export Fit Score raporunuzu alın ve yeni pazarlara haftalar yerine günler içinde giriş yapın.',
    ctaBtn: 'Ücretsiz demo talep edin',
  },
  flySection: {
    title: 'FLY\u00A0AI: Havacılık tedarik zinciriniz için akıllı RFQ yönetimi',
    lead:
      'FLY\u00A0AI, client → supplier → satış zincirinizi şeffaflaştırarak RFQ süreçlerini dakikalar içinde tamamlamanıza yardımcı olur. Export AI’nın stratejik ihracat otomasyonunu tamamlayan operasyonel bir kanat gibi çalışır.',
    visualAlt: 'FLY AI havacılık tedarik zinciri ve RFQ paneli',
    cards: [
      {
        title: 'RFQ otomasyonu',
        desc:
          'Karmaşık BOM’ları sadeleştirir, alternatif parça önerileri sunar ve çoklu tedarikçi karşılaştırmasını tek ekran üzerinden yönetir.',
      },
      {
        title: 'Marjin optimizasyonu',
        desc:
          'Dinamik fiyat simülasyonları ve marjin motoru sayesinde teklif başına kârlılık kontrol altında kalır.',
      },
      {
        title: '42 ülkede 12.000+ supplier',
        desc:
          'Ön onaylı tedarikçi ağıyla riskleri azaltır, tedarik gecikmelerine karşı proaktif aksiyon almanızı sağlar.',
      },
    ],
    whyTitle: 'FLY\u00A0AI’yi neden tercih etmelisiniz?',
    whyItems: [
      'Teklif hazırlama süresini %60’a kadar kısaltır.',
      'Yıllık kişi başı 250+ saat manuel veri girişinden tasarruf sağlar.',
      'ERP/MES entegrasyonları ve denetim izleriyle süreçlerinizi güvence altına alır.',
      '7/24 uzman destek ekibi ve operasyonel SLA taahhütleri sunar.',
    ],
    ctaBtn: 'FLY\u00A0AI için demo iste',
    ctaLink: 'Export AI özelliklerini keşfet →',
  },
  insights: {
    title: 'İstatistikler & İçgörüler',
    subtitle:
      'Export AI ve FLY\u00A0AI, operasyonel verileri tek yerde toplar; karar vericilere gerçek zamanlı içgörüler sunar.',
    tags: [
      'Export Fit Score',
      'Pazar Potansiyeli Isı Haritası',
      'HS Code Trendleri',
      'AI Skor Kartları',
      'RFQ Performansı',
      'Otomatik Mailing Logları',
    ],
  },
  contact: {
    title: 'Export AI ile ihracatınızı büyütün',
    text:
      'Ücretsiz demo planlayın, Export Fit Score raporunuzu alın ve hangi pazarlara hangi ürünlerle girmeniz gerektiğini birlikte keşfedelim.',
    btn: 'Export AI demo planla',
  },
  footer: {
    rights: 'AI\u00A0PORT Yazılım. Tüm hakları saklıdır.',
  },
};

const en: typeof tr = {
  headTitle: 'Modern Web-Based Software Products | Your Company’s Technology Partner',
  aria: {
    menuToggle: 'Open/close menu',
    langSelect: 'Select language',
  },
  nav: {
    products: 'Products',
    exportAI: 'Export AI',
    flyAI: 'FLY\u00A0AI',
    insights: 'Insights',
    contact: 'Contact',
  },
  hero: {
    badge: 'AI\u00A0PORT Suite',
    titlePre: 'Two distinct ',
    titleHighlight: 'AI platforms',
    titlePost: ', under one roof.',
    descHtml:
      'AI\u00A0PORT offers two independent, industry-specific solutions: <strong>Export AI</strong> for manufacturers aiming to grow their exports, and <strong>FLY\u00A0AI</strong> for accelerating the aviation supply chain. Each product delivers end-to-end automation within its own domain.',
    exportCard: {
      visualAlt: 'Export AI global export intelligence illustration',
      tag: 'Export intelligence',
      title: 'AI-powered export engine',
      desc:
        'Color-codes market potential on a world map and ranks the most profitable countries in seconds with a company-specific Export Fit Score; it unifies qualified lead lists and multilingual mailing flows on a single platform.',
      stats: [
        { label: 'Export Fit Score', value: '92/100' },
        { label: 'Countries analyzed', value: '190+' },
        { label: 'HS Code database', value: '5,000+' },
        { label: 'Potential importer pool', value: '1M+' },
      ],
      cta: 'Discover Export AI',
    },
    flyCard: {
      visualAlt: 'FLY AI aviation supply chain illustration',
      tag: 'Aviation sourcing',
      title: 'Smart RFQ management for the aviation supply chain',
      desc:
        'Brings transparency to your client → supplier → sales chain; simplifies complex BOMs and lets you complete RFQ processes in minutes with multi-supplier comparison and margin optimization.',
      stats: [
        { label: 'Quote preparation time', value: '60%↓' },
        { label: 'Annual time saved', value: '250+ hrs' },
        { label: 'Approved supplier network', value: '12,000+' },
        { label: 'Countries covered', value: '42' },
      ],
      cta: 'Discover FLY\u00A0AI',
    },
  },
  products: {
    title: 'Product Family',
    subtitle:
      'AI\u00A0PORT Suite digitalizes critical operations across the manufacturing and aviation sectors end to end with two core products.',
    items: [
      {
        desc:
          'An export-intelligence platform that brings together a world map, Export Fit Score, HS Code analysis and automated mailing for manufacturers looking to export.',
        linkLabel: 'Export AI details →',
      },
      {
        desc:
          'A platform that accelerates your sales teams with RFQ automation, supplier matching and margin optimization for aviation parts trading.',
        linkLabel: 'FLY AI details →',
      },
    ],
  },
  exportSection: {
    title: 'Export AI: Export intelligence and automation on one platform',
    lead:
      'Export AI is a B2B SaaS platform that delivers end-to-end export intelligence to manufacturers who want to start or grow their exports. By analyzing data from around the world, it surfaces the most profitable countries for your product in seconds and cuts your new-market discovery time by up to 50% on average.',
    visualAlt: 'Export AI world map and market intelligence panel',
    mapHeading: 'Living market discovery with a world map',
    mapText:
      'On the world map at the heart of our interface, countries are color-coded by export potential: high-potential countries are highlighted in darker tones, while emerging markets are marked in different shades. When you click a country’s card, demographic insights such as sector demand, average purchasing power, import volume, population and urbanization rate — even e-commerce penetration — open up in detail.',
    mapBullets: [
      'Export AI analyzes data worldwide to surface the most profitable countries for your product in seconds.',
      'It cuts your new-market discovery time by up to 50% on average, helping you reach more countries and the right companies with the same team.',
    ],
    panelTitle: 'Global visibility panel',
    panelItems: [
      'Color-coded market heatmap',
      'Country-level sector demand and import volume',
      'Company-specific Export Fit Score distribution',
      'HS Code trends and average unit prices',
    ],
    stats: [
      { label: 'Export volume growth', value: '30%↑', detail: 'Some of our users achieve up to 20–30% growth within 12 months.' },
      { label: 'Research time', value: '60%↓', detail: 'Your sales teams spend less time building lists.' },
      { label: 'Qualified company reach', value: '40%↑', detail: 'More qualified companies with the export engine.' },
      { label: 'First-contact conversion', value: '25%↑', detail: 'Send the right message with automated, multilingual mailing.' },
    ],
    features: [
      {
        title: 'AI scoring tailored to your company',
        desc:
          'The Export Fit Score analyzes your product range, price level, customer profile, capacity, certifications and delivery times, and is calculated separately for every country and customer.',
        bullets: [
          'An instant answer to “Which country should you enter, and with which product?”',
          'Your sales teams focus on companies that are genuinely likely to convert; your closed-deal rate rises by up to 20–30%.',
        ],
      },
      {
        title: 'Export engine and prospect lists',
        desc:
          'It scans global importers and distributors by HS Code, sector, country, revenue, headcount and past import data, then ranks them by fit with your company.',
        bullets: [
          'Companies using Export AI reach up to 40% more qualified companies than with traditional methods.',
          'On average, contact is established with 35% more countries and companies.',
        ],
      },
      {
        title: 'Extensive HS Code database & smart search',
        desc:
          'As soon as you type your product, it suggests the right HS codes; through these codes it presents exporting countries, year-by-year import trends and average unit prices.',
        bullets: [
          'The risk of a wrong HS code disappears, and you avoid unnecessary delays in customs processes.',
          'You price accurately with import-volume, price and demand charts.',
        ],
      },
      {
        title: 'Country and company benchmarking',
        desc:
          'It shows countries and prospective customer companies in the same HS code or sector side by side.',
        bullets: [
          'Anticipate risks with insights like “Order volume is high in country X, but payment terms are long.”',
          'Make data-driven market prioritization that shortens your decision time.',
        ],
      },
    ],
    process: [
      { n: '01', t: 'Data collection', d: 'Your company’s product range, price level, capacity, certifications and delivery times are defined in Export AI.' },
      { n: '02', t: 'Market discovery', d: 'The AI-powered world map surfaces the most profitable countries and sector demand for your product in seconds.' },
      { n: '03', t: 'Prospect list', d: 'Global importers and distributors are filtered by HS Code and sector criteria, then ranked by Export Fit Score.' },
      { n: '04', t: 'Smart action', d: 'Boost your first-contact conversions by up to 25% with multilingual mailing templates, CRM integrations and follow-up automation.' },
    ],
    overview: [
      {
        title: 'Key features',
        items: [
          'Country- and company-level prioritization with the AI-based Export Fit Score.',
          'HS Code database, trend analyses and average unit-price reports.',
          'Automated, smart mailing: multilingual drafts tailored to company details and country culture.',
          'Reply tracking, reminder emails and CRM integrations in a single panel.',
          'End-to-end management of pipeline, quote and shipment processes with dashboards and reporting.',
        ],
      },
      {
        title: 'Why Export AI?',
        items: [
          'Market discovery, country/customer analysis, HS Code data, prospect lists and AI scoring on a single platform.',
          'With automated mailing, dashboards and reporting, every step of your export process works in an integrated way.',
          'Some of our users grow their export volume by up to 20–30% within 12 months with Export AI.',
          'We reduce the time your sales teams spend on research and list building by up to 60%.',
          'We help you reach more countries and the right companies with the same team.',
        ],
      },
    ],
    faqHeading: 'Frequently asked questions',
    faqs: [
      {
        q: 'What data does Export AI use?',
        a: 'We combine global trade statistics, customs records, HS Code reports, sector demand data and verified importer lists. We continuously update this data with models trained specifically for your company.',
      },
      {
        q: 'How is the Export Fit Score calculated?',
        a: 'Your product range, price level, certifications, delivery times and current customer profile are scored together with target-country demand data. A separate score is produced for every country and prospect.',
      },
      {
        q: 'How does automated mailing work?',
        a: 'Export AI suggests multilingual drafts based on each target company’s profile and country culture, optimizes send timing, tracks replies and logs them automatically into your CRM.',
      },
    ],
    trustTitle: 'Trust & support',
    trustItems: [
      'Data security is our priority; your company data is never shared with third parties.',
      'We protect your data with ISO 27001-compliant infrastructure and encrypted storage policies.',
      'Our expert support team is with you throughout onboarding and training.',
      'We offer consulting and integration services for custom use cases.',
    ],
    ctaTitle: 'Try Export AI now to take your product to the world',
    ctaText:
      'Start a 14-day free trial, get your personalized Export Fit Score report, and enter new markets in days instead of weeks.',
    ctaBtn: 'Request a free demo',
  },
  flySection: {
    title: 'FLY\u00A0AI: Smart RFQ management for your aviation supply chain',
    lead:
      'FLY\u00A0AI brings transparency to your client → supplier → sales chain, helping you complete RFQ processes in minutes. It works like an operational wing that complements Export AI’s strategic export automation.',
    visualAlt: 'FLY AI aviation supply chain and RFQ panel',
    cards: [
      {
        title: 'RFQ automation',
        desc:
          'Simplifies complex BOMs, suggests alternative parts and manages multi-supplier comparison from a single screen.',
      },
      {
        title: 'Margin optimization',
        desc:
          'Thanks to dynamic price simulations and a margin engine, profitability per quote stays under control.',
      },
      {
        title: '12,000+ suppliers in 42 countries',
        desc:
          'Reduces risk with a pre-approved supplier network and lets you take proactive action against supply delays.',
      },
    ],
    whyTitle: 'Why choose FLY\u00A0AI?',
    whyItems: [
      'Cuts quote preparation time by up to 60%.',
      'Saves 250+ hours of manual data entry per person each year.',
      'Secures your processes with ERP/MES integrations and audit trails.',
      'Offers a 24/7 expert support team and operational SLA commitments.',
    ],
    ctaBtn: 'Request a FLY\u00A0AI demo',
    ctaLink: 'Explore Export AI features →',
  },
  insights: {
    title: 'Statistics & Insights',
    subtitle:
      'Export AI and FLY\u00A0AI gather operational data in one place and deliver real-time insights to decision-makers.',
    tags: [
      'Export Fit Score',
      'Market Potential Heatmap',
      'HS Code Trends',
      'AI Scorecards',
      'RFQ Performance',
      'Automated Mailing Logs',
    ],
  },
  contact: {
    title: 'Grow your exports with Export AI',
    text:
      'Schedule a free demo, get your Export Fit Score report, and let’s discover together which products to take to which markets.',
    btn: 'Schedule an Export AI demo',
  },
  footer: {
    rights: 'AI\u00A0PORT Software. All rights reserved.',
  },
};

export const content = { tr, en };
export type Lang = keyof typeof content;
