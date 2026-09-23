// Full bilingual content dictionary for the landing page.
// `tr` is the source of truth; `en` must mirror its exact shape.

const tr = {
  headTitle: 'Modern Web Tabanlı Yazılım Ürünleri | Şirketinizin Teknoloji Ortağı',
  aria: {
    menuToggle: 'Menüyü aç/kapat',
    langSelect: 'Dil seç',
    closeBanner: 'Duyuruyu kapat',
  },
  topBanner: {
    text: 'Export AI · FLY AI · ERP.aero — ürünlerimizi keşfedin',
    cta: 'KEŞFET',
  },
  nav: {
    products: 'Ürünler',
    exportAI: 'Export AI',
    flyAI: 'FLY\u00A0AI',
    partners: 'Ortaklık',
    insights: 'İçgörüler',
    contact: 'İletişim',
    services: 'Hizmetler',
    aiServices: 'AI Servisleri',
    digitalProduct: 'Dijital Ürün',
    home: 'Ana Sayfa',
  },
  megaServices: {
    linesLabel: 'Hizmet hatlarımız:',
    allCta: 'Tüm hizmetleri görün',
    allHref: '/services',
    highlightLabel: 'Yüksek talep',
    highlightTitle: 'ELIA & AI e-posta asistanı — ERP.aero yapay zekâ özellikleri',
    highlightHref: '/#partners',
    lines: [
      {
        key: 'ai',
        label: 'AI Servisleri',
        href: '/services/ai',
        icon: 'product',
        items: [
          { label: 'AI fırsat sprinti', href: '/services/ai#paths' },
          { label: 'AI ürün geliştirme', href: '/services/ai#paths' },
          { label: 'AI platform ölçekleme', href: '/services/ai#paths' },
          { label: 'LLM entegrasyonu & API', href: '/services/ai#faq' },
          { label: 'Ajan tabanlı AI & MCP geliştirme', href: '/services/ai#faq' },
          { label: 'Süreç otomasyonu & AI destekli test', href: '/services/ai#faq' },
        ],
      },
      {
        key: 'digital-product',
        label: 'Dijital Ürün',
        href: '/services/digital-product',
        icon: 'create',
        items: [
          { label: 'Ürün prototipleme', href: '/services/digital-product#stages' },
          { label: 'MVP geliştirme', href: '/services/digital-product#stages' },
          { label: 'Ürün-pazar uyumu', href: '/services/digital-product#stages' },
          { label: 'Ürün ölçekleme', href: '/services/digital-product#stages' },
          { label: 'Özel ekipler & ekip güçlendirme', href: '/services/digital-product#process' },
          { label: 'Ürün atölyeleri', href: '/services/digital-product#process' },
        ],
      },
      {
        key: 'e-commerce',
        label: 'E-Ticaret',
        href: '/services/e-commerce',
        icon: 'ecommerce',
        items: [
          { label: 'E-ticaret paketleri', href: '/services/e-commerce#packages' },
          { label: 'Pazaryeri & ödeme entegrasyonları', href: '/services/e-commerce#packages' },
          { label: 'AI ürün görseli & içerik üretimi', href: '/services/e-commerce/ai-content' },
          { label: 'Varyantlı katalog girişi', href: '/services/e-commerce/ai-content#what' },
          { label: 'Referans projeler', href: '/services/e-commerce#references' },
        ],
      },
      {
        key: 'hardware',
        label: 'Donanım',
        href: '/services/hardware',
        icon: 'hardware',
        items: [
          { label: 'Donanım tedarik & kurulum', href: '/services/hardware#scope' },
          { label: 'Sunucu & altyapı çözümleri', href: '/services/hardware#scope' },
          { label: 'Ağ ve sistem entegrasyonu', href: '/services/hardware#scope' },
          { label: 'IoT & gömülü sistemler', href: '/services/hardware#scope' },
          { label: 'Teknik destek & bakım', href: '/services/hardware#scope' },
        ],
      },
    ],
  },
  advantages: {
    title: 'Rekabet avantajlarımız',
    lead:
      'Rakamlarla tartışmak zor: müşterilerimizin %80’i yeni dijital ürün ihtiyaçlarında yeniden bize geliyor. İşte nedeni:',
    readMore: 'Devamını oku',
    readLess: 'Daha az göster',
    items: [
      {
        title: 'Ekibimiz sizin ekibiniz',
        teaser:
          'Yüksek performanslı ekiplerimiz uzaktan asistan değil; uzmanlıkları tamamlayan, hedef odaklı bireylerden oluşur ve birlikte...',
        full:
          'Yüksek performanslı ekiplerimiz uzaktan asistan değil; uzmanlıkları tamamlayan, hedef odaklı bireylerden oluşur ve birlikte işbirliği yapar, yenilik üretir ve Export AI ile FLY AI ürünlerini sizin iş hedeflerinize göre şekillendirir.',
      },
      {
        title: 'Her yerde iş odaklı düşünce',
        teaser:
          'AI PORT’ta geliştirici yalnızca kodu değil ürünü düşünür; tasarımcı güzel çözümü değil kullanıcıyı; kalite ekibi ise...',
        full:
          'AI PORT’ta geliştirici yalnızca kodu değil ürünü düşünür; tasarımcı güzel çözümü değil kullanıcıyı; kalite ekibi ise yatırım getirisini ve operasyonel güvenilirliği merkeze alır. Her rol, iş sonucuna bağlanır.',
      },
      {
        title: 'Tüm müşteriler için aynı standartlar',
        teaser:
          'Hizmet standartlarımız; büyüklüğünden veya sözleşme tutarından bağımsız olarak her müşterinin bekleyebileceği hizmet seviyesini...',
        full:
          'Hizmet standartlarımız; büyüklüğünden veya sözleşme tutarından bağımsız olarak her müşterinin bekleyebileceği hizmet seviyesini netleştirir. Aynı kalite, aynı şeffaflık ve aynı teslim disiplinini her projede uygularız.',
      },
      {
        title: 'Yapay zekâ destekli geliştirme ekipleri',
        teaser:
          'İnsan uzmanlığını yapay zekâ araçlarıyla birleştirerek ürün geliştirme sürecimizi güçlendiriyoruz. Böylece teslimatı hızlandırır...',
        full:
          'İnsan uzmanlığını yapay zekâ araçlarıyla birleştirerek ürün geliştirme sürecimizi güçlendiriyoruz. Böylece teslimatı hızlandırır, kod kalitesini yükseltir ve maliyeti düşürürken güvenlik ile regülasyon beklentilerini de koruruz.',
      },
      {
        title: 'İlk görüşmeden itibaren bağlıyız',
        teaser:
          'Başkaları geliştirici satmaya odaklanırken biz ihtiyaçlarınızı anlamaya odaklanırız. Bu yüzden ilk görüşmede fikrinizi...',
        full:
          'Başkaları geliştirici satmaya odaklanırken biz ihtiyaçlarınızı anlamaya odaklanırız. Bu yüzden ilk görüşmede fikrinizi ürün ve alan uzmanlarıyla konuşabilir; Export AI, FLY AI veya ERP.aero yol haritasını netleştirebilirsiniz.',
      },
      {
        title: 'Ortaklıklara inanıyoruz',
        teaser:
          'Müşteri ilişkilerimizin çoğu yıllarca sürer; çünkü müşterilerimizle birlikte büyümeyi ve değişmeyi biliriz. Değişimin...',
        full:
          'Müşteri ilişkilerimizin çoğu yıllarca sürer; çünkü müşterilerimizle birlikte büyümeyi ve değişmeyi biliriz. Değişimin ilerleme için gerekli olduğunu anlarız; ERP.aero yerel ortak rolümüz de bu uzun vadeli ortaklık anlayışının bir parçasıdır.',
      },
    ],
  },
  hero: {
    titlePre: 'İki farklı ',
    titleHighlight: 'yapay zekâ platformu',
    titlePost: ', tek çatı altında.',
    descHtml:
      'AI\u00A0PORT; birbirinden bağımsız iki sektöre özel çözüm sunar: ihracatını büyütmek isteyen üreticiler için <strong>Export AI</strong> ve havacılık tedarik zincirini hızlandıran <strong>Fly\u00A0AI</strong>. Her ürün kendi alanında uçtan uca otomasyon sağlar.',
    partnersMarquee: {
      label: 'Ortaklar & veri sağlayıcıları',
      aria: 'Ortak ve veri sağlayıcı logoları',
    },
    slides: [
      {
        quotePre: 'Pazar keşfini haftalardan günlere indirdik çünkü gerçek bir ',
        quoteHighlight: 'ortak',
        quotePost: ' gibi düşünen bir ekiple çalışıyoruz.',
        name: 'AI Port Ekibi',
        role: 'İhracat Müdürü, üretici firma',
        cta: 'Export AI’ı keşfedin',
        href: '#export-ai',
      },
      {
        quotePre: 'RFQ süreçlerimiz artık dakikalar sürüyor. AI PORT havacılık tedarik zincirini ',
        quoteHighlight: 'gerçekten',
        quotePost: ' anlıyor.',
        name: 'AI Port Ekibi',
        role: 'Satış Direktörü, havacılık parçaları',
        cta: 'FLY AI’yı görün',
        href: '#fly-ai',
      },
      {
        quotePre: 'ERP.aero ile yerel ortak olarak yanımızdalar; AI e-posta asistanı ',
        quoteHighlight: 'manuel işi',
        quotePost: ' ortadan kaldırdı.',
        name: 'AI Port Ekibi',
        role: 'Operasyon Lideri, MRO',
        cta: 'Ortaklığı inceleyin',
        href: '#partners',
      },
      {
        quotePre: 'Tek çatı altında iki sektör, tek dil: veriye dayalı karar ve ',
        quoteHighlight: 'hız',
        quotePost: '.',
        name: 'AI Port Ekibi',
        role: 'Ürün & teslimat',
        cta: 'Ürün ailesini görün',
        href: '#products',
      },
    ],
    exportCard: {
      visualAlt: 'Export AI küresel ihracat zekâsı görseli',
      tag: 'İhracat zekâsı',
      title: 'Yapay zekâ destekli ihracat motoru',
      desc:
        'Dünya haritası üzerinde pazar potansiyellerini renklendirir, şirketinize özel Export Fit Score ile en kârlı ülkeleri saniyeler içinde sıralar; nitelikli müşteri listeleri ve çok dilli e-posta akışlarını tek platformda birleştirir.',
      stats: [
        { label: 'Export Fit Score', value: '92/100' },
        { label: 'Analiz edilen ülke', value: '200+' },
        { label: 'HS Code veritabanı', value: '5.000+' },
        { label: 'Pazar keşif süresi', value: '%90' },
      ],
      cta: 'Export AI’ı keşfedin',
    },
    flyCard: {
      visualAlt: 'FLY AI havacılık tedarik zinciri görseli',
      tag: 'Havacılık tedariki',
      title: 'Havacılık tedarik zinciri için akıllı RFQ yönetimi',
      desc:
        'Müşteri → tedarikçi → satış zincirinizi şeffaflaştırır; karmaşık ürün ağaçlarını sadeleştirir, çoklu tedarikçi karşılaştırması ve marj optimizasyonuyla RFQ süreçlerini dakikalar içinde tamamlamanızı sağlar.',
      stats: [
        { label: 'Teklif hazırlama süresi', value: '%60↓' },
        { label: 'Yıllık zaman tasarrufu', value: '250+ saat' },
        { label: 'Onaylı tedarikçi ağı', value: '12.000+' },
        { label: 'Kapsanan ülke', value: '42' },
      ],
      cta: 'FLY\u00A0AI’yı keşfedin',
    },
  },
  products: {
    title: 'Ürün Ailesi',
    subtitle:
      'AI\u00A0PORT; üretim ve havacılık sektörlerindeki kritik operasyonları Export AI, FLY\u00A0AI ve ERP.aero ile uçtan uca dijitalleştirir.',
    items: [
      {
        tag: 'İhracat zekâsı',
        title: 'Yapay zekâ destekli ihracat motoru',
        desc:
          'İhracat yapmak isteyen üretici firmalar için dünya haritası, Export Fit Score, HS Code analizi ve otomatik e-postayı bir araya getiren ihracat zekâsı platformu.',
        linkLabel: 'Export AI detayları →',
        href: '#export-ai',
        logo: '/assets/logos/ExportAI_Logo-Latest.png',
        logoAlt: 'Export AI',
        image: '/assets/illustrations/export-ai-visual.png',
        imageAlt: 'Export AI küresel ihracat zekâsı görseli',
      },
      {
        tag: 'Havacılık tedariki',
        title: 'Havacılık tedarik zinciri için akıllı RFQ yönetimi',
        desc:
          'Havacılık parça ticareti için RFQ otomasyonu, tedarikçi eşlemesi ve marj optimizasyonuyla satış ekiplerinizi hızlandıran platform.',
        linkLabel: 'FLY AI detayları →',
        href: '#fly-ai',
        logo: '/assets/logos/FlyAI-Logo-Latest.png',
        logoAlt: 'FLY AI',
        image: '/assets/illustrations/flyai-visual.png',
        imageAlt: 'FLY AI havacılık tedarik zinciri görseli',
      },
      {
        tag: 'Yerel ortak',
        title: 'Havacılık için bulut ERP',
        desc:
          'ERP.aero; havacılık parça tedarikçileri, bakım-onarım kuruluşları ve distribütörler için tasarlanmış bulut tabanlı kurumsal kaynak ve müşteri yönetim sistemidir. AI\u00A0PORT yerel ortak olarak yanınızda.',
        linkLabel: 'ERP.aero detayları →',
        href: '#partners',
        logo: '/assets/logos/ERP-aero-logo-black.svg',
        logoAlt: 'ERP.aero',
        image: '/assets/illustrations/erp-aero/product-overview.jpg',
        imageAlt: 'ERP.aero ile entegre havacılık operasyon ortamı',
      },
    ],
  },
  exportSection: {
    title: 'Export AI: İhracat zekâsı ve otomasyonu tek platformda',
    phonetic: '/ˈɛk.spɔːrt ˌeɪ.aɪ/ · noun',
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
      { label: 'İlk temas dönüşümü', value: '%25↑', detail: 'Otomatik, çok dilli e-posta ile doğru mesajı gönderin.' },
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
      { n: '03', t: 'Potansiyel müşteri listesi', d: 'HS Code ve sektörel kriterlere göre küresel ithalatçı ve distribütörler filtrelenir, Export Fit Score ile sıralanır.' },
      { n: '04', t: 'Akıllı aksiyon', d: 'Çok dilli e-posta şablonları, CRM entegrasyonları ve takip otomasyonlarıyla ilk temas dönüşümlerinizi %25’e kadar artırın.' },
    ],
    overview: [
      {
        title: 'Öne çıkan özellikler',
        items: [
          'AI tabanlı Export Fit Score ile ülke ve firma bazlı önceliklendirme.',
          'HS Code veritabanı, trend analizleri ve ortalama birim fiyat raporları.',
          'Otomatik ve akıllı e-posta: şirket bilgilerine ve ülke kültürüne uygun çok dilli taslaklar.',
          'Yanıt takibi, hatırlatma mailleri ve CRM entegrasyonları tek panelde.',
          'Gösterge paneli ve raporlama ile satış hunisi, teklif ve sevkiyat süreçlerinin uçtan uca yönetimi.',
        ],
      },
      {
        title: 'Neden Export AI?',
        items: [
          'Pazar keşfi, ülke/müşteri analizi, HS Code verileri, potansiyel müşteri listeleri ve AI skorlaması tek platformda.',
          'Otomatik e-posta, gösterge paneli ve raporlama ile ihracat sürecinizin tüm adımları entegre çalışır.',
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
        q: 'Otomatik e-posta nasıl çalışır?',
        a: 'Export AI, her hedef firmanın şirket bilgisi ve ülke kültürüne göre çok dilli taslaklar önerir, gönderim zamanlamasını optimize eder, yanıtları takip eder ve CRM’inize otomatik işler.',
      },
    ],
    trustTitle: 'Güven & destek',
    trustItems: [
      'Veri güvenliği bizim için öncelikli; şirket verileriniz üçüncü taraflarla paylaşılmaz.',
      'ISO 27001 uyumlu altyapı ve şifreli saklama politikalarıyla verilerinizi koruyoruz.',
      'Kurulum ve eğitim süreçlerinde uzman destek ekibimiz yanınızda.',
      'Özel kullanım senaryoları için danışmanlık ve entegrasyon hizmetleri sunuyoruz.',
    ],
    ctaTitle: 'Ürününüzü dünyaya açmak için Export AI’ı hemen deneyin',
    ctaText:
      '14 gün ücretsiz deneyin, kişiselleştirilmiş Export Fit Score raporunuzu alın ve yeni pazarlara haftalar yerine günler içinde giriş yapın.',
    ctaBtn: 'Ücretsiz demo talep edin',
  },
  flySection: {
    title: 'FLY\u00A0AI: Havacılık tedarik zinciriniz için akıllı RFQ yönetimi',
    phonetic: '/flaɪ ˌeɪ.aɪ/ · noun',
    lead:
      'FLY\u00A0AI, müşteri → tedarikçi → satış zincirinizi şeffaflaştırarak RFQ süreçlerini dakikalar içinde tamamlamanıza yardımcı olur. Export AI’nın stratejik ihracat otomasyonunu tamamlayan operasyonel bir kanat gibi çalışır.',
    visualAlt: 'FLY AI havacılık tedarik zinciri ve RFQ paneli',
    cards: [
      {
        title: 'RFQ otomasyonu',
        desc:
          'Karmaşık ürün ağaçlarını sadeleştirir, alternatif parça önerileri sunar ve çoklu tedarikçi karşılaştırmasını tek ekran üzerinden yönetir.',
      },
      {
        title: 'Marj optimizasyonu',
        desc:
          'Dinamik fiyat simülasyonları ve marj motoru sayesinde teklif başına kârlılık kontrol altında kalır.',
      },
      {
        title: '42 ülkede 12.000+ tedarikçi',
        desc:
          'Ön onaylı tedarikçi ağıyla riskleri azaltır, tedarik gecikmelerine karşı proaktif aksiyon almanızı sağlar.',
      },
    ],
    whyTitle: 'FLY\u00A0AI’yi neden tercih etmelisiniz?',
    whyItems: [
      'Teklif hazırlama süresini %60’a kadar kısaltır.',
      'Yıllık kişi başı 250+ saat manuel veri girişinden tasarruf sağlar.',
      'ERP.aero ortaklığıyla havacılık ERP entegrasyonu ve denetim izleriyle süreçlerinizi güvence altına alır.',
      '7/24 uzman destek ekibi ve operasyonel hizmet seviyesi taahhütleri sunar.',
    ],
    ctaBtn: 'FLY\u00A0AI için demo iste',
    ctaLink: 'Export AI özelliklerini keşfet →',
  },
  partners: {
    title: 'ERP.aero Ortaklığı',
    lead:
      'AI\u00A0PORT, havacılık tedarikçileri için bulut tabanlı ERP.aero platformunun yerel ortağı olarak çalışır. Yerel pazarda ürün tanıtımı, danışmanlık ve teknik destekle yanınızdayız.',
    logoAlt: 'ERP.aero logosu',
    badge: 'Yerel ortak',
    visualAlt: 'ERP.aero AI e-posta asistanı ve havacılık bağlantısı',
    productTitle: 'ERP.aero ve yapay zekâ yetenekleri',
    productLead:
      'ERP.aero; havacılık parça tedarikçileri, bakım-onarım kuruluşları ve distribütörler için tasarlanmış bulut tabanlı kurumsal kaynak ve müşteri yönetim sistemidir. Yapay zekâ destekli e-posta asistanı ile RFQ yaşam döngüsünü otomatikleştirir.',
    productVisualAlt: 'ERP.aero ile entegre havacılık operasyon ortamı',
    features: [
      {
        title: 'Müşteri RFQ e-posta ayrıştırma',
        desc:
          'Gelen müşteri RFQ e-postalarını (metin veya Excel ekleri) otomatik ayrıştırır ve ERP alanlarına işler; yapay zekâ ile oluşturulmuş kayıt olarak işaretler.',
        image: '/assets/illustrations/erp-aero/feature-rfq-email.jpg',
        imageAlt: 'Uçak kanadı üzerinde e-posta ağı görseli',
      },
      {
        title: 'Tedarikçi teklif e-posta ayrıştırma',
        desc:
          'Tedarikçi fiyat yanıtlarını fiyat, izlenebilirlik ve sertifikalarla birlikte otomatik doldurur; ilgili açık RFQ’ları olan tüm satış temsilcilerini bilgilendirir.',
        image: '/assets/illustrations/erp-aero/feature-vendor-quote.jpg',
        imageAlt: 'Parça doğrulama ve teklif verisi görseli',
      },
      {
        title: 'ELIA — Kişisel yapay zekâ asistanı',
        desc:
          'Yalnızca sizin ERP veriniz üzerinde çalışan özel asistan; fiyat stratejisi, teslim süresi ve bağlamsal içgörüler sunar. Web araması yapmaz.',
        image: '/assets/illustrations/erp-aero/feature-elia.jpg',
        imageAlt: 'Uçuş analitiği paneli ve ELIA asistanı',
      },
    ],
    processTitle: 'Otomatik RFQ akışı',
    processAlt: 'E-postadan ayrıştırmaya ve bildirime kadar süreç akışı',
    processSteps: [
      { title: 'E-posta', desc: 'Müşteri veya tedarikçi mesajı alınır' },
      { title: 'Bulut işleme', desc: 'Yapay zekâ içeriği ayrıştırır' },
      { title: 'Kayıt oluşturma', desc: 'ERP alanları otomatik doldurulur' },
      { title: 'Bildirim', desc: 'İlgili ekip anında haberdar edilir' },
    ],
    ctaBtn: 'ERP.aero Ürünleri Hakkında İletişim',
    ctaExternal: 'ERP.aero’yu ziyaret et →',
  },
  insights: {
    title: 'İstatistikler & İçgörüler',
    subtitle:
      'Export AI ve FLY\u00A0AI, operasyonel verileri tek yerde toplar; karar vericilere gerçek zamanlı içgörüler sunar.',
    tags: [
      'Export Fit Score',
      'Pazar potansiyeli ısı haritası',
      'HS Code trendleri',
      'Yapay zekâ skor kartları',
      'RFQ performansı',
      'Otomatik e-posta kayıtları',
    ],
  },
  contact: {
    title: 'Export AI ile ihracatınızı büyütün',
    text:
      'Ücretsiz demo planlayın, Export Fit Score raporunuzu alın ve hangi pazarlara hangi ürünlerle girmeniz gerektiğini birlikte keşfedelim.',
    btn: 'Export AI demo planla',
    formTitle: 'Bize yazın',
    formLead: 'Demo, ortaklık veya ürün sorularınız için formu doldurun — ekibimiz size dönüş yapsın.',
    name: 'Ad soyad',
    email: 'E-posta',
    phone: 'Telefon',
    company: 'Şirket',
    subject: 'Konu',
    message: 'Mesajınız',
    submit: 'Gönder',
    sending: 'Gönderiliyor…',
    success: 'Mesajınız alındı. Teşekkürler!',
    error: 'Gönderilemedi. Lütfen tekrar deneyin.',
  },
  careersPage: {
    headTitle: 'Kariyer | AI PORT',
    title: 'Ekibimize katılın',
    lead: 'AI PORT’ta ürün, mühendislik ve müşteri başarısı için birlikte çalışacak arkadaşlar arıyoruz. CV’nizi PDF olarak gönderin.',
    name: 'Ad soyad',
    email: 'E-posta',
    phone: 'Telefon',
    role: 'Pozisyon / ilgi alanı',
    note: 'Kısa not',
    cv: 'CV (PDF)',
    cvHint: 'Yalnızca PDF, en fazla 5 MB',
    submit: 'Başvuruyu gönder',
    sending: 'Gönderiliyor…',
    success: 'Başvurunuz alındı. Teşekkürler!',
    error: 'Başvuru gönderilemedi. Lütfen tekrar deneyin.',
  },
  contactPage: {
    headTitle: 'İletişim | AI PORT',
    title: 'İletişime geçin',
    lead: 'Demo talebi, ortaklık veya genel sorularınız için formu doldurun.',
  },
  footer: {
    joinTitle: 'Ekibimize katılın',
    joinCta: 'Kariyer →',
    contactTitle: 'İletişime geçin',
    contactCta: 'Bize yazın →',
    tagline: 'Modern web tabanlı yazılım ürünleri & teknoloji ortağı',
    exploreTitle: 'Ürünleri keşfedin',
    exploreCta: 'Ürün ailesi →',
    colServices: 'Hizmetler',
    colProducts: 'Ürünler',
    colCompany: 'Şirket',
    privacy: 'Gizlilik',
    locationsTitle: 'İletişim',
    locationName: 'Türkiye',
    locationLines: ['info@aiport.tr', 'Export AI · FLY AI · ERP.aero'],
    socialLabel: 'Sosyal',
    rights: '© AI\u00A0PORT Yazılım. Tüm hakları saklıdır.',
  },
  aiServicesPage: {
    headTitle: 'AI Servisleri | AI PORT',
    heroTitle: 'Ürününüzün ihtiyaç duyduğu yapay zekâ özellikleri. İnşa edildi, test edildi, canlıda.',
    heroLead:
      'İlk özellik fikrinden üretimdeki çalışan yazılıma kadar; strateji, tasarım ve mühendislik aynı ekiple ilerler. Danışmanların geliştiricilere devrettiği süreç yok — kullanıcıların gerçekten benimsediği çalışan yazılım.',
    heroCta: 'Ne inşa ettiğinizi anlatın',
    heroSecondary: 'Ürünleri inceleyin',
    pathsTitle: 'Ürününüze yapay zekâyı getirmenin üç yolu',
    pathsLead:
      'Bulunduğunuz aşamaya göre başlayın — fikri doğrulayın, özelliği yayınlayın veya çalışanı ölçeklendirin.',
    paths: [
      {
        stage: 'DEĞERLENDİR',
        title: 'AI fırsat sprinti',
        desc:
          'Bir haftada yapay zekâ fikrinizin inşa edilmeye değer olup olmadığını ve ne gerektirdiğini öğrenirsiniz. Teknik uygulanabilirlik kontrolü yapar, mevcut ürününüzle entegrasyon noktalarını haritalar ve paydaşlarınızın harekete geçebileceği bir yatırım getirisi tahminiyle çalışan bir kavram kanıtı teslim ederiz. Slayt destesi yok. İkinci bir keşfe dönüşen keşif yok. Çalışan kavram kanıtı ve karar için hazır çıktı.',
        meta: '1 hafta → uygulanabilirlik + entegrasyon haritası | 2 hafta → tam kavram kanıtı',
        getsTitle: 'Ne alırsınız:',
        gets: [
          'Teknik uygulanabilirlik değerlendirmesi',
          'Kavram kanıtı',
          'Entegrasyon haritası',
          'Yatırım getirisi tahmini',
        ],
        cta: 'Sprint ile başlayın →',
      },
      {
        stage: 'İNŞA ET',
        title: 'AI ürün geliştirme',
        desc:
          'LLM entegrasyonu, RAG sistemleri, AI ajanları veya sıfırdan MVP — briften üretime. Strateji, UX ve mühendislik tek ekipte.',
        meta: 'Kapsamlı özellik: 4–8 hafta | AI MVP: 3–6 ay',
        getsTitle: 'Ne alırsınız:',
        gets: [
          'Kapsamlı özellik veya MVP — üretimde çalışan yazılım',
          'LLM entegrasyonu / özel model yaklaşımı',
          'Yapay zekâ özellikleri için UX',
          'Kalite güvence ve üretime hazırlık',
          'Devretme dokümantasyonu',
        ],
        cta: 'Ne inşa ettiğinizi anlatın →',
      },
      {
        stage: 'ÖLÇEKLE',
        title: 'AI platform geliştirme',
        desc:
          'Özelliğiniz üretimde çalışıyor. Şimdi daha fazla kullanıcı, veri ve senaryoyu — kırılmadan, sapmadan veya ekibinizin yönetemeyeceği bir bakıma dönüşmeden — kaldırması gerekiyor. Yayınladığınızın etrafına altyapı, izleme ve yönetişim katmanı kurarız.',
        meta: '4–12+ ay | aşamalı sabit fiyat / sürekli destek',
        getsTitle: 'Ne alırsınız:',
        gets: [
          'Ölçeklenebilir AI altyapısı',
          'Model izleme ve değerlendirme',
          'Çok modellı orkestrasyon',
          'Uyumluluk ve denetim izleri',
          'Sürekli geliştirme desteği',
        ],
        cta: 'Ölçek ihtiyacınızı konuşalım →',
      },
    ],
    ecomTitle: 'E-ticaret kataloğunuz için AI destekli ürün içeriği',
    ecomText:
      'Ürün görseli, SEO uyumlu metin ve varyantlı katalog girişi üreten ayrı bir hizmet hattımız var. Ham ürün fotoğraflarınızdan yayına hazır ürün sayfaları çıkarıyoruz.',
    ecomCta: 'AI ürün içeriği hizmetini inceleyin',
    faqTitle: 'İletişime geçmeden önce — cevaplamaya değer sorular',
    faqs: [
      {
        q: 'Fikirden çalışan bir AI özelliğine ne kadar sürer?',
        a: 'Kapsama bağlıdır; çoğu müşteri bir hafta içinde çalışan bir kavram kanıtına ulaşır — AI fırsat sprinti tam olarak bunun için. Üretimde tam bir özellik tipik olarak 4–12 hafta sürer. Taahhüt öncesi bunu net şekilde kapsamlarız.',
      },
      {
        q: 'Yapay zekâ eklemek için platformumuzu yeniden mi yazmamız gerekir?',
        a: 'Neredeyse hiç. Çoğu dil modeli entegrasyonu mevcut mimarinin üzerine oturur — API’lerinize, veritabanlarınıza ve iş akışlarınıza bağlanır. İlk haftada entegrasyon noktalarını haritalarız; başlamadan önce neyin gerektiğini bilirsiniz.',
      },
      {
        q: 'Üretim için AI çıktısının güvenilirliğini nasıl sağlıyorsunuz?',
        a: 'Değerlendirme ve testi teslim sürecinin içine gömeriz. Kullanım senaryonuz için “iyi çıktı”yı tanımlar, gerçek veriyle test eder ve yayın sonrası sapmayı izleyen izleme kurarız.',
      },
      {
        q: 'Yayın sonrası beklenen performans çıkmazsa ne olur?',
        a: 'Teslim edip kaybolmayız. Her inşa, ekibinizin harekete geçebileceği devretme dokümantasyonu içerir; sürekli destek için aylık destek seçenekleri sunarız.',
      },
      {
        q: 'Veri gizliliği ve uyumluluğu nasıl ele alıyorsunuz?',
        a: 'Veri yerleşimi, denetim izleri ve erişim kontrollerini mimariye baştan yerleştiririz — yasal inceleme sonrasına bırakmayız. Düzenlemeye tabi sektörlerde bunu kod yazılmadan önce kapsam aşamasında ele alırız.',
      },
      {
        q: 'Sprint ile doğrudan inşa arasındaki fark nedir?',
        a: 'Sprint, çoğu ekibin spesifikasyon değil fikirle geldiği için vardır. Çalışan kavram kanıtı, entegrasyon haritası ve yatırım getirisi tahminiyle inşayı risksizleştirir. Doğrulanmış bir kavramınız varsa doğrudan inşa kapsamı açabiliriz.',
      },
    ],
    ctaTitle: 'Ne inşa ettiğinizi anlatın. Gerisini biz alırız.',
    ctaText: 'Nerede olduğunuzu söyleyin — bir sonraki adımı birlikte netleştirelim.',
    ctaBtn: 'İletişime geçin',
  },
  digitalProductPage: {
    headTitle: 'Dijital Ürün | AI PORT',
    heroTitle: 'Uçtan uca dijital ürün geliştirme',
    heroLead:
      'AI\u00A0PORT; Export AI, FLY\u00A0AI ve ERP.aero ekosisteminde fikrinizi prototipten MVP’ye, ürün-pazar uyumundan ölçeklemeye kadar taşır. Strateji, tasarım ve yazılım aynı ekiple ilerler.',
    heroCta: 'Ürününüzü anlatın',
    problemLabel: 'Problem',
    problemTitle: 'Kullanıcıların istediği ürünü nasıl inşa eder, bütçeyi boşa harcamazsınız?',
    problemText:
      'Dijital ürünlerin önemli bir kısmı ürün-pazar uyumu eksikliği nedeniyle başarısız olur. Ürününüz sadık kullanıcılar bulmalı ve müşteri ihtiyaçlarıyla birlikte büyümeli.',
    solutionLabel: 'Çözüm',
    solutionTitle:
      'AI PORT’ta yalın ürün yaklaşımı ve çevik teslimatla ihracat ve havacılık odaklı değer üreten dijital ürünler geliştiririz.',
    solutionText:
      'Amacımız web ürününüzü mümkün olduğunca hızlı pazara çıkarmak, gerçek kullanıcılarla test etmek, yinelemek, işiniz için doğru ürün-pazar uyumunu bulmak ve ölçeklenebilir bir sürüme geçmektir.',
    stagesTitle: 'Ürün döngüsünün her aşaması',
    stages: [
      {
        title: 'Ürün prototipleme',
        desc: 'Prototip, temel varsayımları minimum maliyet ve eforla doğrulamanızı sağlar.',
        teamTitle: 'Prototipleme ekibi',
        teamDesc:
          'Konseptinizi ve iş hedeflerinizi analiz eder, ürünü ideasyonlar, prototip tasarlar/geliştirir ve MVP’ye hazırlık için erken geri bildirim toplar.',
      },
      {
        title: 'MVP geliştirme',
        desc: 'MVP, gerçek kullanıcılarla test etmek ve sonraki iyileştirmeler için geri bildirim almak üzere erken sunulan ilk ürün sürümüdür.',
        teamTitle: 'MVP ekibi',
        teamDesc:
          'İlk sürüm için çekirdek özellikleri seçmenize yardımcı olur; Export AI, FLY\u00A0AI veya ERP.aero entegrasyonlarıyla uyumlu yazılımı tasarlar ve geliştirir.',
      },
      {
        title: 'Ürün-pazar uyumu',
        desc: 'Bu aşamada ürünü döngüler halinde test eder, analiz eder ve yineleyerek pazara mükemmel uyumu ararsınız.',
        teamTitle: 'Ürün-pazar uyumu ekibi',
        teamDesc:
          'Testleri tasarlar, sonuçları analiz eder ve sonraki iterasyonlar için çıkarımlar üretir; yeni özellikleri kullanıcılarla birlikte doğrular.',
      },
      {
        title: 'Ürün ölçekleme',
        desc: 'Hipotez doğrulandıktan ve uyum bulunduktan sonra kullanıcılarla birlikte büyüyebilecek güvenli, ölçeklenebilir sistem zamanıdır.',
        teamTitle: 'Ölçekleme ekibi',
        teamDesc:
          'Yeniden yapılandırma planı çıkarır; ölçeklenebilir ve güvenli sistemi inşa eder; şirketinizde sürdürülebilir büyüme süreçlerini kurmanıza yardımcı olur.',
      },
    ],
    processTitle: 'İş birliği süreci',
    processLead:
      'Yalın ürün yaklaşımını bilmeniz gerekmez. AI\u00A0PORT sizi stratejiden ideasyona, yürütmeye, testlere ve sonraki iterasyonlara kadar yönlendirir.',
    process: [
      {
        title: 'Yalın ürün zihniyeti',
        desc: 'Ekiplerimiz yalın ürün yaklaşımıyla çalışır; Export AI ve FLY\u00A0AI dahil tüm ürünlerimiz bu felsefeyle ilerler.',
      },
      {
        title: 'İletişim ve ilk teklif',
        desc: 'İhtiyaçlarınızı dinler, ürün fikriniz hakkında mümkün olduğunca bilgi isteriz. 3–5 iş günü içinde ön yaklaşım ve çözüm önerisini içeren teklifi alırsınız.',
      },
      {
        title: 'Ürün atölyeleri',
        desc: 'Ürün vizyonunuzu, stratejinizi ve taktikleri netleştirmek için atölyeler düzenleriz: iş modeli tuvali, ürün tuvali, kullanıcı hikâyesi haritalama, etki haritalama ve olay fırtınası.',
      },
      {
        title: 'Nihai teklif ve yayın planı',
        desc: 'Atölyeler sonucunda ürünü yalın yaklaşımla teslim etmek için en iyi yolu öneririz. Çevik çerçevede kapsam ihtiyaçlarınıza göre esnek kalır.',
      },
    ],
    ctaTitle: 'Ürününüzü anlatın',
    ctaText: 'Export AI, FLY AI veya ERP.aero yolculuğunuzun neresinde olduğunuzu konuşalım.',
    ctaBtn: 'İletişime geçin',
  },
  servicesPage: {
    headTitle: 'Hizmetler | AI PORT',
    heroTitle: 'Dört hizmet hattı, tek teknoloji ortağı.',
    heroLead:
      'Yapay zekâdan dijital ürüne, e-ticaretten donanıma kadar AI\u00A0PORT ekipleri stratejiden canlı sisteme aynı disiplinle çalışır. İhtiyacınıza en yakın hattan başlayın; gerektiğinde hatlar tek sözleşme altında birleşir.',
    heroCta: 'İhtiyacınızı anlatın',
    heroSecondary: 'Ürünleri inceleyin',
    cardsLabel: 'Hizmet hatları',
    cardsTitle: 'Nerede yardımcı oluyoruz?',
    cardsLead:
      'Her hat kendi ekibi, süreci ve teslim modeliyle ilerler. Aşağıdan hattın detay sayfasına geçebilirsiniz.',
    cardCta: 'Detayları görün',
    soonBadge: 'Yakında',
    moreTitle: 'Diğer hizmetler',
    cards: [
      {
        key: 'ai',
        icon: 'product',
        label: 'AI Servisleri',
        title: 'Ürününüze yapay zekâ getirin',
        desc:
          'Fırsat sprintinden üretimde çalışan yapay zekâ özelliğine: LLM entegrasyonu, ajan tabanlı uygulama ve platform ölçekleme.',
        bullets: [
          'AI fırsat sprinti',
          'LLM entegrasyonu & API',
          'Ajan tabanlı AI & MCP',
          'AI platform ölçekleme',
        ],
        href: '/services/ai',
        ready: true,
      },
      {
        key: 'digital-product',
        icon: 'create',
        label: 'Dijital Ürün',
        title: 'Uçtan uca dijital ürün geliştirme',
        desc:
          'Prototipten MVP’ye, ürün-pazar uyumundan ölçeklemeye; strateji, tasarım ve yazılım aynı ekiple ilerler.',
        bullets: [
          'Ürün prototipleme',
          'MVP geliştirme',
          'Ürün-pazar uyumu',
          'Özel ekipler & ekip güçlendirme',
        ],
        href: '/services/digital-product',
        ready: true,
      },
      {
        key: 'e-commerce',
        icon: 'ecommerce',
        label: 'E-Ticaret',
        title: 'E-ticaret altyapısı ve entegrasyonlar',
        desc:
          'Mağaza altyapısı, pazaryeri ve ödeme entegrasyonları, katalog otomasyonu ve dönüşüm optimizasyonu.',
        bullets: [
          'E-ticaret altyapısı',
          'Pazaryeri entegrasyonları',
          'Ödeme & lojistik entegrasyonu',
          'Katalog otomasyonu',
        ],
        href: '/services/e-commerce',
        ready: true,
      },
      {
        key: 'hardware',
        icon: 'hardware',
        label: 'Donanım',
        title: 'Donanım, altyapı ve sistem entegrasyonu',
        desc:
          'Donanım tedarikinden sunucu ve ağ altyapısına, IoT ve gömülü sistemlerden sürekli teknik desteğe.',
        bullets: [
          'Donanım tedarik & kurulum',
          'Sunucu & altyapı çözümleri',
          'Ağ ve sistem entegrasyonu',
          'IoT & gömülü sistemler',
        ],
        href: '/services/hardware',
        ready: false,
      },
    ],
    ctaTitle: 'Hangi hattan başlayacağınızdan emin değil misiniz?',
    ctaText: 'Kısa bir görüşmede ihtiyacınızı doğru ekibe yönlendirelim.',
    ctaBtn: 'İletişime geçin',
  },
  eCommercePage: {
    headTitle: 'E-Ticaret | AI PORT',
    heroTitle: 'Satışa hazır e-ticaret altyapısı — kurulum, entegrasyon ve içerik tek elden',
    heroLead:
      'Tanıtım sitesinden pazaryeri entegrasyonlu profesyonel mağazaya kadar üç kurulum paketi. Ödeme, kargo, stok ve katalog tarafı kurulmuş şekilde teslim edilir; ürün görselleri ve metinleri de bizde olsun isterseniz AI destekli içerik hattı devreye girer.',
    heroCta: 'Teklif alın',
    heroSecondary: 'Paketleri inceleyin',
    packagesLabel: 'Paketler',
    packagesTitle: 'İhtiyacınıza göre üç kurulum paketi',
    packagesLead:
      'Üçü de mobil uyumlu ve SEO altyapılı teslim edilir. Aradaki fark satış, entegrasyon ve kapasite derinliğidir.',
    packages: [
      {
        key: 'showcase',
        name: 'TANITIM SİTESİ',
        price: '10.000 ₺’den başlayan',
        term: '3 gün · KDV hariç',
        desc:
          'Online satış olmadan markayı ve ürün gruplarını anlatan kurumsal katalog sitesi.',
        gets: [
          'Markayı ve ürün gruplarını özetleyen kurumsal katalog yapısı',
          'Google aramalarında öncelikli indeksleme (SEO) altyapısı',
          'WhatsApp, Instagram, Harita ve teklif alma entegrasyonu',
          'Mobil uyumlu sektörel tasarım',
        ],
        cta: 'Teklif alın',
        featured: false,
        featuredLabel: '',
      },
      {
        key: 'starter',
        name: 'E-TİCARET GİRİŞ SEVİYESİ',
        price: '50.000 ₺’den başlayan',
        term: '10 gün · KDV hariç',
        desc:
          'Online satışa başlamak için gereken ödeme, kargo ve katalog kurgusunun tamamı.',
        gets: [
          'E-ticaret altyapısına uygun web tasarımı',
          'Sanal POS (iyzico / PayTR) ve Havale / EFT entegrasyonu',
          '100 adede kadar basit varyasyonlu (renk / ölçü) ürün ve kategori kurgusu',
          'Anlaşmalı kargo tanımlaması',
          'Sanal POS komisyonu %3,99’dan başlar — sağlayıcı koşullarına tabidir',
        ],
        cta: 'Teklif alın',
        featured: false,
        featuredLabel: '',
      },
      {
        key: 'pro',
        name: 'E-TİCARET PROFESYONEL',
        price: '90.000 ₺’den başlayan',
        term: '20 gün · KDV hariç',
        desc:
          'Pazaryeri, e-fatura ve stok entegrasyonlarıyla büyümeye hazır tam sürüm.',
        gets: [
          'Pazaryeri (Trendyol, Hepsiburada vb.) entegrasyon altyapısı',
          'Otomatik e-fatura, kargo / lojistik entegrasyonu ve gelişmiş stok yönetimi',
          'Dönüşüm optimizasyonu, sepet terk hatırlatmaları, kampanya ve kupon modülleri',
          '500 ürüne kadar kapasite ve detaylı ürün özelleştirme',
          '75.000 ₺’ye kadar %0 sanal POS komisyonu — sağlayıcı koşullarına tabidir',
        ],
        cta: 'Teklif alın',
        featured: true,
        featuredLabel: 'En çok tercih edilen',
      },
    ],
    requiredLabel: 'Tüm paketlere ek — zorunlu',
    requiredTitle: 'Garanti ve yıllık teknik hizmetler',
    requiredPrice: '10.000 ₺ + KDV / yıl',
    requiredText:
      'Teslimattan sonraki ilk 30 gün boyunca oluşabilecek yazılımsal ve teknik hataların giderilmesi ücretsizdir. Sonrasında sistemin güvenliği ve ayakta kalması için yıllık teknik hizmet kalemi zorunludur; canlıya geçişten itibaren yıllık peşin faturalandırılır. Bu kalem yazılım değişikliklerini ve yeni fonksiyonları içermez.',
    requiredItems: [
      'Sistem güvenliği ve altyapı güncellemeleri',
      'Yıllık teknik destek; SSL, domain, sunucu ve altyapı sistemlerinin yenilenmesi',
    ],
    aiLabel: 'Opsiyonel eklenti',
    aiTitle: 'Ürün görselleri ve içerikleri de bizde olsun',
    aiText:
      'Ham ürün fotoğraflarınızdan stüdyo kalitesinde görsel seti, SEO uyumlu ürün metni ve varyantlı katalog girişi üretiyoruz. Böylece 50–100 ürünlük veri girişini kendiniz yapmak zorunda kalmazsınız.',
    aiBullets: [
      'Ürün başına 8–10 stüdyo kalitesinde görsel',
      'SEO uyumlu başlık, ürün açıklaması ve meta metni',
      'Renk, kapak, ölçü ve doku kombinasyonlarına ait varyant görselleri',
      'Ürünlerin varyant seçenekleriyle birlikte katalog girişi',
    ],
    aiCta: 'AI içerik hizmetini inceleyin',
    reqTitle: 'Sizden beklediklerimiz',
    reqLead: 'Kurulumun zamanında ilerlemesi için şunlara ihtiyacımız var:',
    reqItems: [
      '50–100 ürünün görsel, fiyat, açıklama ve varyasyon verisi',
      'Varsa alan adı (domain) ve erişim bilgileri',
      'Marka logosu ve kurumsal renkler',
      'Sanal POS başvurusu için firma bilgileri',
      'Kargo anlaşması için tahmini gönderi hacmi',
      'İçerik onayı verecek tek bir yetkili',
    ],
    outScopeTitle: 'Bu paketlere dahil olmayanlar',
    outScopeItems: [
      'ERP / muhasebe entegrasyonu — ayrıca fiyatlandırılır',
      'Mobil uygulama (iOS / Android)',
      'Alan adı bedeli — yoksa ek ücret olarak eklenir',
      'Teklifte yer almayan modül ve entegrasyon talepleri',
    ],
    refsLabel: 'Referanslar',
    refsTitle: 'Yayında olan e-ticaret projelerimiz',
    refsLead: 'İkisi de bu sayfadaki paketlerle kurulmuş, canlı ve satış yapan mağazalar.',
    refs: [
      {
        key: 'dekorumpanel',
        sector: 'Dekoratif yapı malzemeleri',
        name: 'Dekorum Panel',
        desc:
          'Sekiz ürün grubu ve yetmiş beşin üzerinde ürünle kurulan katalog; sepet, filtreleme ve sıralama, sipariş takibi ile mesafeli satış ve iade süreçleri yayında.',
        href: 'https://dekorumpanel.tr/',
        image: '/assets/references/dekorumpanel.jpg',
        imageAlt: 'Dekorum Panel e-ticaret sitesinin ana sayfası',
        cta: 'Siteyi ziyaret edin',
      },
      {
        key: 'vitarobanyo',
        sector: 'Banyo mobilyası & seramik',
        name: 'Vitaro Banyo',
        desc:
          'Kapak rengi, ayna ve taş evye eksenlerinin çaprazlandığı çok varyantlı ürün yapısı; koleksiyon sayfaları, kampanya kurgusu ve müşteri yorumlarıyla birlikte kuruldu.',
        href: 'https://vitarobanyo.com/',
        image: '/assets/references/vitarobanyo.jpg',
        imageAlt: 'Vitaro Banyo e-ticaret sitesinin ana sayfası',
        cta: 'Siteyi ziyaret edin',
      },
    ],
    priceNote:
      'Fiyatlar KDV hariçtir ve başlangıç fiyatlarıdır. Nihai tutar kapsama göre teklif formunda belirlenir; teklifler düzenlendiği tarihten itibaren 30 gün geçerlidir. Paket bedelleri %50 başlangıç, %50 teslim esasına göre tahsil edilir.',
    ctaTitle: 'E-ticaret tarafında ne yapmak istiyorsunuz?',
    ctaText: 'Kısa bir görüşmede kapsamı birlikte netleştirelim.',
    ctaBtn: 'İletişime geçin',
  },
  aiContentPage: {
    headTitle: 'AI Destekli Ürün Görseli ve İçerik | AI PORT',
    parentLabel: 'E-Ticaret',
    label: 'AI Ürün İçeriği',
    heroTitle: 'Ham fotoğraftan yayına hazır ürün sayfasına',
    heroLead:
      'Telefonla çekilmiş ham ürün fotoğraflarınızdan stüdyo kalitesinde görsel seti, SEO uyumlu ürün metni ve varyantlı katalog girişi üretiyoruz. Çıktıların tamamı yayına alınmadan önce operatör kontrolünden geçer.',
    heroCta: 'Teklif alın',
    heroSecondary: 'E-ticaret paketleri',
    whatTitle: 'Ne teslim ediyoruz?',
    whatLead: 'Dört çıktı tek akışta üretilir ve doğrudan e-ticaret panelinize girilir.',
    what: [
      {
        icon: 'product',
        title: 'Stüdyo kalitesinde görsel seti',
        desc:
          'Ürün başına 8–10 görsel. Arka plan, ışık, gölge ve perspektif marka görsel dilinize göre standartlaştırılır.',
      },
      {
        icon: 'export',
        title: 'SEO uyumlu ürün metni',
        desc:
          'Marka diline uygun başlık, ürün açıklaması ve meta açıklama; arama motorlarında bulunur olacak şekilde yazılır.',
      },
      {
        icon: 'workflow',
        title: 'Varyant kombinasyon görselleri',
        desc:
          'Renk, kapak, doku ve ölçü eksenlerinin kombinasyonları ayrı ayrı üretilir; sitede ilgili varyant seçildiğinde otomatik değişecek şekilde eşleştirilir.',
      },
      {
        icon: 'qa',
        title: 'Varyantlı katalog girişi',
        desc:
          'Kategori ağacı, varyant eksenleri ve ürün özellik alanları tanımlanır; ürünler tüm seçenekleriyle birlikte panele girilir.',
      },
    ],
    howTitle: 'Nasıl çalışır: ürün ailesi mantığı',
    howLead:
      'Görsel dil bir ürün ailesi için bir kez kurulur; aynı ailedeki sonraki ürünler bu kurulum üzerinden çok daha hızlı üretilir.',
    how: [
      {
        title: 'Marka görsel kimliği kurulumu',
        desc:
          'Arka plan, ışık, gölge, perspektif ve renk sıcaklığı standartları belirlenir; metin tonu, katalog şeması ve varyant eksenleri tanımlanır. İki örnek ürün uçtan uca üretilip onayınıza sunulur.',
      },
      {
        title: 'Ürün ailesi kurulumu',
        desc:
          'Ailenin ilk ürününde görsel dil o ürün tipine uyarlanır. “Ürün ailesi”, aynı görsel dil ve üretim şablonuyla işlenebilen ürün grubudur; aile tanımı üretim öncesinde karşılıklı mutabakatla belirlenir.',
      },
      {
        title: 'Seri üretim',
        desc:
          'Aynı ailedeki sonraki ürünler kurulan şablon üzerinden üretilir. Aile kurulumu ham görsellerin tesliminden itibaren 3 iş günü, sonraki ürünler 1 iş günü içinde onaya sunulur.',
      },
      {
        title: 'Operatör kontrolü ve yayın',
        desc:
          'Teslim edilen her görsel ve metin yayına alınmadan önce operatör kontrolünden geçer; ürün bilgisiyle çelişen içerik yayınlanmaz. Her ürün için 2 tur revizyon ücretsizdir.',
      },
    ],
    pricingLabel: 'Fiyatlandırma',
    pricingTitle: 'Kurulum bir kez, üretim ürün başına',
    pricingLead:
      'Aylık içerik paketlerinden biri seçildiğinde marka görsel kimliği kurulumu ücretsizdir.',
    setupTitle: 'Marka görsel kimliği kurulumu — tek seferlik',
    setupPrice: '9.000 ₺’den başlayan · 5 iş günü',
    setupText:
      'Görsel dil, metin tonu ve katalog şeması bu aşamada kurulur; iki örnek ürün uçtan uca üretilir. Yıllık içerik paketlerinde bu kalem ücretsizdir. Ürün ve varyant birim fiyatları ile lisans oranları teklif formunda paylaşılır.',
    packagesTitle: 'Aylık içerik paketleri',
    packagesLead: 'Kataloğunu düzenli büyüten mağazalar için 12 aylık abonelik seçenekleri.',
    packages: [
      {
        key: 'start',
        name: 'BAŞLANGIÇ',
        price: '12.000 ₺ / ay',
        term: '20 ürün / ay · 12 ay',
        desc: 'Kataloğunu düzenli ve ölçülü büyüten mağazalar için.',
        gets: [
          'Aylık 20 ürün içerik üretimi ve katalog girişi',
          'Marka görsel kimliği kurulumu ücretsiz',
        ],
        cta: 'Teklif alın',
        featured: false,
        featuredLabel: '',
      },
      {
        key: 'growth',
        name: 'BÜYÜME',
        price: '27.000 ₺ / ay',
        term: '50 ürün / ay · 12 ay',
        desc: 'Sezonluk koleksiyon çıkaran markalar için.',
        gets: [
          'Aylık 50 ürün içerik üretimi ve katalog girişi',
          'Marka görsel kimliği kurulumu ücretsiz',
        ],
        cta: 'Teklif alın',
        featured: true,
        featuredLabel: 'En çok tercih edilen',
      },
      {
        key: 'enterprise',
        name: 'KURUMSAL',
        price: '48.000 ₺ / ay',
        term: '100 ürün / ay · 12 ay',
        desc: 'Geniş kataloğunu tek seferde taşıyan operasyonlar için.',
        gets: [
          'Aylık 100 ürün içerik üretimi ve katalog girişi',
          'Marka görsel kimliği kurulumu ücretsiz',
        ],
        cta: 'Teklif alın',
        featured: false,
        featuredLabel: '',
      },
    ],
    packagesNote:
      'Kullanılmayan ürün hakkı bir sonraki aya devredilmez; paket üstü ürünler birim fiyatlardan faturalandırılır. Varyant kombinasyon görselleri paketlere dahil değildir, kademeli tarifeye göre ayrıca faturalandırılır.',
    licenseTitle: 'Kullanım lisansı',
    licenseLead:
      'Web lisansı fiyata dahildir. Diğer mecralar için lisans seçenekleri ve oranları teklif formunda paylaşılır.',
    licenses: [
      'Web lisansı — kendi e-ticaret sitenizde ve organik sosyal medyada süresiz kullanım (dahil)',
      'Pazaryeri lisansı — Trendyol, Hepsiburada, Amazon, N11 ve benzeri listelemelerde kullanım',
      'Tam ticari lisans — ücretli dijital reklam, basılı katalog, afiş ve fuar materyalleri',
      'Kategori münhasırlığı — görsel dilinizin aynı kategorideki başka bir firma için kullanılmaması',
      'Devir (buyout) — prompt seti, referans dosyaları ve kaynak çıktıların tüm haklarıyla devri',
    ],
    reqTitle: 'Sizden beklediklerimiz',
    reqItems: [
      'Her ürün için en az 3 farklı açıdan, net ve yeterli ışıkta çekilmiş ham fotoğraf — telefon kamerası yeterlidir',
      'Ürün adı, ölçü, malzeme, renk ve varyant seçeneklerini içeren güncel liste — mevcut Excel şablonu yeterlidir',
      'Teknik özellikler ve öne çıkarılmak istenen satış argümanları',
      'Yüzey (mat / parlak), doku ve malzeme bilgisinin yazılı teyidi',
      'Marka logosu, kurumsal renkler ve varsa mevcut görsel kılavuzu',
      'İçerik onayı verecek tek bir yetkili ve en geç 3 iş günü içinde onay',
      'Katalog girişi için e-ticaret paneline yönetici erişimi',
    ],
    qualityTitle: 'Doğruluk ve teslim şartları',
    qualityText:
      'Üretilen görseller ürünün gerçek malzeme ve yüzey özelliklerini yansıtacak şekilde hazırlanır, ancak birebir fotoğraf niteliği taşımaz. Üretim, tarafınızca iletilen ham görsel ve bilgilerin doğruluğu esasına dayanır; ürün bilgisiyle çelişen içerik yayınlanmaz. Her ürün için 2 tur revizyon ücretsizdir, sonraki revizyonlar ayrıca faturalandırılır.',
    priceNote:
      'Fiyatlar KDV hariçtir ve başlangıç fiyatlarıdır. Ürün ve varyant birim fiyatları, lisans oranları ve size özel maliyet senaryosu teklif formunda paylaşılır; teklifler düzenlendiği tarihten itibaren 30 gün geçerlidir.',
    ctaTitle: 'Kaç ürününüz var?',
    ctaText: 'Ürün ve varyant sayınızı iletin, size özel maliyet senaryosunu çıkaralım.',
    ctaBtn: 'İletişime geçin',
  },
  hardwarePage: {
    headTitle: 'Donanım | AI PORT',
    heroTitle: 'Donanım, altyapı ve sistem entegrasyonu',
    heroLead:
      'Donanım tedarikinden sunucu ve ağ altyapısına, IoT ve gömülü sistemlerden sürekli teknik desteğe kadar donanım hattımızın detaylı içeriği hazırlanıyor.',
    heroCta: 'İhtiyacınızı anlatın',
    heroSecondary: 'Tüm hizmetler',
    soonLabel: 'Hazırlanıyor',
    soonTitle: 'Detaylı içerik yakında yayında',
    soonText:
      'Bu hizmet hattının kapsamı, süreci ve referansları üzerinde çalışıyoruz. Bu arada ihtiyacınızı iletirseniz ekibimiz doğrudan dönüş yapar.',
    scopeTitle: 'Kapsam başlıkları',
    scope: [
      'Donanım tedarik & kurulum',
      'Sunucu & altyapı çözümleri',
      'Ağ ve sistem entegrasyonu',
      'IoT & gömülü sistemler',
      'Teknik destek & bakım',
    ],
    ctaTitle: 'Donanım tarafında ne planlıyorsunuz?',
    ctaText: 'Kısa bir görüşmede kapsamı birlikte netleştirelim.',
    ctaBtn: 'İletişime geçin',
  },
};

const en: typeof tr = {
  headTitle: 'Modern Web-Based Software Products | Your Company’s Technology Partner',
  aria: {
    menuToggle: 'Open/close menu',
    langSelect: 'Select language',
    closeBanner: 'Close announcement',
  },
  topBanner: {
    text: 'Export AI · FLY AI · ERP.aero — discover our products',
    cta: 'DISCOVER',
  },
  nav: {
    products: 'Products',
    exportAI: 'Export AI',
    flyAI: 'FLY\u00A0AI',
    partners: 'Partners',
    insights: 'Insights',
    contact: 'Contact',
    services: 'Services',
    aiServices: 'AI Services',
    digitalProduct: 'Digital Product',
    home: 'Home',
  },
  megaServices: {
    linesLabel: 'Our service lines:',
    allCta: 'See all services',
    allHref: '/services',
    highlightLabel: 'High-demand service',
    highlightTitle: 'ELIA & AI Email Assistant — ERP.aero AI capabilities',
    highlightHref: '/#partners',
    lines: [
      {
        key: 'ai',
        label: 'AI Services',
        href: '/services/ai',
        icon: 'product',
        items: [
          { label: 'AI opportunity sprint', href: '/services/ai#paths' },
          { label: 'AI product development', href: '/services/ai#paths' },
          { label: 'AI platform scaling', href: '/services/ai#paths' },
          { label: 'LLM integration & API', href: '/services/ai#faq' },
          { label: 'Agentic AI & MCP development', href: '/services/ai#faq' },
          { label: 'Workflow automation & AI-powered QA', href: '/services/ai#faq' },
        ],
      },
      {
        key: 'digital-product',
        label: 'Digital Product',
        href: '/services/digital-product',
        icon: 'create',
        items: [
          { label: 'Product prototyping', href: '/services/digital-product#stages' },
          { label: 'MVP development', href: '/services/digital-product#stages' },
          { label: 'Product-market fit', href: '/services/digital-product#stages' },
          { label: 'Product scaling', href: '/services/digital-product#stages' },
          { label: 'Dedicated teams & team augmentation', href: '/services/digital-product#process' },
          { label: 'Product workshops', href: '/services/digital-product#process' },
        ],
      },
      {
        key: 'e-commerce',
        label: 'E-Commerce',
        href: '/services/e-commerce',
        icon: 'ecommerce',
        items: [
          { label: 'E-commerce packages', href: '/services/e-commerce#packages' },
          { label: 'Marketplace & payment integrations', href: '/services/e-commerce#packages' },
          { label: 'AI product imagery & content', href: '/services/e-commerce/ai-content' },
          { label: 'Variant-aware catalog entry', href: '/services/e-commerce/ai-content#what' },
          { label: 'Reference projects', href: '/services/e-commerce#references' },
        ],
      },
      {
        key: 'hardware',
        label: 'Hardware',
        href: '/services/hardware',
        icon: 'hardware',
        items: [
          { label: 'Hardware sourcing & setup', href: '/services/hardware#scope' },
          { label: 'Server & infrastructure solutions', href: '/services/hardware#scope' },
          { label: 'Network and system integration', href: '/services/hardware#scope' },
          { label: 'IoT & embedded systems', href: '/services/hardware#scope' },
          { label: 'Technical support & maintenance', href: '/services/hardware#scope' },
        ],
      },
    ],
  },
  advantages: {
    title: 'Our competitive advantages',
    lead:
      'It’s hard to argue with facts: 80% of our customers return to us for help with new digital products. Here’s why:',
    readMore: 'Read more',
    readLess: 'Show less',
    items: [
      {
        title: 'Our team is yours',
        teaser:
          'Our high-performance teams are not remote assistants. They are a group of goal-focused individuals with specialized expertise and complementary skills who collaborate, innovate and...',
        full:
          'Our high-performance teams are not remote assistants. They are a group of goal-focused individuals with specialized expertise and complementary skills who collaborate, innovate and shape Export AI and FLY AI around your business goals.',
      },
      {
        title: 'Business mindset everywhere',
        teaser:
          'At AI PORT, the developer thinks about the product and not just the code; the designer considers the users, not the beautiful solution; and the QA engineer focuses on the return on...',
        full:
          'At AI PORT, the developer thinks about the product and not just the code; the designer considers the users, not the beautiful solution; and the QA engineer focuses on the return on investment and operational reliability. Every role is tied to business outcomes.',
      },
      {
        title: 'The same service standards for all clients',
        teaser:
          'Service standards are rules that show the level of service every client can expect from us, no matter how big they are or how much their contract is worth. Our service standards ar...',
        full:
          'Service standards are rules that show the level of service every client can expect from us, no matter how big they are or how much their contract is worth. Our service standards ensure the same quality, transparency and delivery discipline on every engagement.',
      },
      {
        title: 'AI-enhanced development teams',
        teaser:
          'We combine human expertise with AI tools to enhance our product-building process. By leveraging AI, we accelerate delivery, improve code quality, and reduce costs, while ensuring s...',
        full:
          'We combine human expertise with AI tools to enhance our product-building process. By leveraging AI, we accelerate delivery, improve code quality, and reduce costs, while ensuring security and compliance expectations stay intact.',
      },
      {
        title: 'Committed from the first call',
        teaser:
          'While others focus on selling their developers, we focus on understanding your needs. That’s why during our first call, you will be able to discuss your idea with our developer and...',
        full:
          'While others focus on selling their developers, we focus on understanding your needs. That’s why during our first call, you will be able to discuss your idea with our product and domain experts — and clarify your Export AI, FLY AI or ERP.aero roadmap.',
      },
      {
        title: 'We believe in partnerships',
        teaser:
          'Most of our client partnerships last for years because we know how to grow and change with our clients. We understand the necessity of change as a key progress factor and we happil...',
        full:
          'Most of our client partnerships last for years because we know how to grow and change with our clients. We understand the necessity of change as a key progress factor — and our ERP.aero Local Partner role is part of that long-term partnership mindset.',
      },
    ],
  },
  hero: {
    titlePre: 'Two distinct ',
    titleHighlight: 'AI platforms',
    titlePost: ', under one roof.',
    descHtml:
      'AI\u00A0PORT offers two independent, industry-specific solutions: <strong>Export AI</strong> for manufacturers aiming to grow their exports, and <strong>Fly\u00A0AI</strong> for accelerating the aviation supply chain. Each product delivers end-to-end automation within its own domain.',
    partnersMarquee: {
      label: 'Partners & data providers',
      aria: 'Partner and data provider logos',
    },
    slides: [
      {
        quotePre: 'We cut market discovery from weeks to days because we finally have a ',
        quoteHighlight: 'partner',
        quotePost: ' who understands the challenge.',
        name: 'AI Port Team',
        role: 'Export Manager, manufacturer',
        cta: 'Discover Export AI',
        href: '#export-ai',
      },
      {
        quotePre: 'Our RFQ cycle now takes minutes. AI PORT truly understands the aviation ',
        quoteHighlight: 'supply chain',
        quotePost: '.',
        name: 'AI Port Team',
        role: 'Sales Director, aviation parts',
        cta: 'See FLY AI',
        href: '#fly-ai',
      },
      {
        quotePre: 'As Local Partner for ERP.aero they stay with us — the AI email assistant removed ',
        quoteHighlight: 'manual work',
        quotePost: '.',
        name: 'AI Port Team',
        role: 'Operations Lead, MRO',
        cta: 'Explore the partnership',
        href: '#partners',
      },
      {
        quotePre: 'Two sectors under one roof, one language: data-driven decisions and ',
        quoteHighlight: 'speed',
        quotePost: '.',
        name: 'AI Port Team',
        role: 'Product & delivery',
        cta: 'View product family',
        href: '#products',
      },
    ],
    exportCard: {
      visualAlt: 'Export AI global export intelligence illustration',
      tag: 'Export intelligence',
      title: 'AI-powered export engine',
      desc:
        'Color-codes market potential on a world map and ranks the most profitable countries in seconds with a company-specific Export Fit Score; it unifies qualified lead lists and multilingual mailing flows on a single platform.',
      stats: [
        { label: 'Export Fit Score', value: '92/100' },
        { label: 'Countries analyzed', value: '200+' },
        { label: 'HS Code database', value: '5,000+' },
        { label: 'Market discovery time', value: '90%' },
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
      'AI\u00A0PORT digitalizes critical operations across manufacturing and aviation with Export AI, FLY\u00A0AI and ERP.aero.',
    items: [
      {
        tag: 'Export intelligence',
        title: 'AI-powered export engine',
        desc:
          'An export-intelligence platform that brings together a world map, Export Fit Score, HS Code analysis and automated mailing for manufacturers looking to export.',
        linkLabel: 'Export AI details →',
        href: '#export-ai',
        logo: '/assets/logos/ExportAI_Logo-Latest.png',
        logoAlt: 'Export AI',
        image: '/assets/illustrations/export-ai-visual.png',
        imageAlt: 'Export AI global export intelligence illustration',
      },
      {
        tag: 'Aviation sourcing',
        title: 'Smart RFQ management for the aviation supply chain',
        desc:
          'A platform that accelerates your sales teams with RFQ automation, supplier matching and margin optimization for aviation parts trading.',
        linkLabel: 'FLY AI details →',
        href: '#fly-ai',
        logo: '/assets/logos/FlyAI-Logo-Latest.png',
        logoAlt: 'FLY AI',
        image: '/assets/illustrations/flyai-visual.png',
        imageAlt: 'FLY AI aviation supply chain illustration',
      },
      {
        tag: 'Local Partner',
        title: 'Cloud ERP for aerospace',
        desc:
          'ERP.aero is a cloud ERP/CRM purpose-built for aircraft parts suppliers, MROs and distributors. AI\u00A0PORT stands with you as Local Partner.',
        linkLabel: 'ERP.aero details →',
        href: '#partners',
        logo: '/assets/logos/ERP-aero-logo-black.svg',
        logoAlt: 'ERP.aero',
        image: '/assets/illustrations/erp-aero/product-overview.jpg',
        imageAlt: 'Integrated aviation operations environment with ERP.aero',
      },
    ],
  },
  exportSection: {
    title: 'Export AI: Export intelligence and automation on one platform',
    phonetic: '/ˈɛk.spɔːrt ˌeɪ.aɪ/ · noun',
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
          'The Export Fit Score analyzes your product range, price level, client profile, capacity, certifications and delivery times, and is calculated separately for every country and client.',
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
          'It shows countries and prospective client companies in the same HS code or sector side by side.',
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
          'Market discovery, country/client analysis, HS Code data, prospect lists and AI scoring on a single platform.',
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
        a: 'Your product range, price level, certifications, delivery times and current client profile are scored together with target-country demand data. A separate score is produced for every country and prospect.',
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
    phonetic: '/flaɪ ˌeɪ.aɪ/ · noun',
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
      'Secures your processes with aviation ERP integration via our ERP.aero partnership and audit trails.',
      'Offers a 24/7 expert support team and operational SLA commitments.',
    ],
    ctaBtn: 'Request a FLY\u00A0AI demo',
    ctaLink: 'Explore Export AI features →',
  },
  partners: {
    title: 'ERP.aero Partnership',
    lead:
      'AI\u00A0PORT works as a Local Partner for ERP.aero — the cloud ERP built for aerospace suppliers. We support local markets with product guidance, consulting and technical assistance.',
    logoAlt: 'ERP.aero logo',
    badge: 'Local Partner',
    visualAlt: 'ERP.aero AI email assistant and aviation connectivity',
    productTitle: 'ERP.aero and AI capabilities',
    productLead:
      'ERP.aero is a cloud ERP/CRM purpose-built for aircraft parts suppliers, MROs and distributors. Its AI Email Assistant automates the full RFQ lifecycle.',
    productVisualAlt: 'Integrated aviation operations environment with ERP.aero',
    features: [
      {
        title: 'Customer RFQ email parsing',
        desc:
          'Automatically extracts incoming customer RFQs from email (plain text or Excel attachments) into the right ERP fields, flagged as AI-generated.',
        image: '/assets/illustrations/erp-aero/feature-rfq-email.jpg',
        imageAlt: 'Aircraft wing with email network overlay',
      },
      {
        title: 'Vendor quotation email parsing',
        desc:
          'Parses vendor replies with pricing, traceability and certificates into the correct fields, and notifies every salesperson with a matching open RFQ.',
        image: '/assets/illustrations/erp-aero/feature-vendor-quote.jpg',
        imageAlt: 'Part verification and quotation data visual',
      },
      {
        title: 'ELIA — Personal AI assistant',
        desc:
          'A private assistant that analyzes only your ERP data — not the web — for pricing strategy, lead times and contextual guidance.',
        image: '/assets/illustrations/erp-aero/feature-elia.jpg',
        imageAlt: 'Flight analytics panel and ELIA assistant',
      },
    ],
    processTitle: 'Automated RFQ flow',
    processAlt: 'Process flow from email to parsing and notification',
    processSteps: [
      { title: 'Email', desc: 'Customer or vendor message is received' },
      { title: 'Cloud processing', desc: 'AI parses the content' },
      { title: 'Record creation', desc: 'ERP fields are filled automatically' },
      { title: 'Notification', desc: 'The right team is alerted instantly' },
    ],
    ctaBtn: 'Contact Us About ERP.aero Products',
    ctaExternal: 'Visit ERP.aero →',
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
    formTitle: 'Write to us',
    formLead: 'Fill in the form for demos, partnerships or product questions — our team will get back to you.',
    name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    subject: 'Subject',
    message: 'Your message',
    submit: 'Send',
    sending: 'Sending…',
    success: 'Message received. Thank you!',
    error: 'Could not send. Please try again.',
  },
  careersPage: {
    headTitle: 'Careers | AI PORT',
    title: 'Join our team',
    lead: 'We’re looking for people to build products, engineering and customer success with us at AI PORT. Send your CV as PDF.',
    name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    role: 'Role / interest',
    note: 'Short note',
    cv: 'CV (PDF)',
    cvHint: 'PDF only, max 5 MB',
    submit: 'Submit application',
    sending: 'Sending…',
    success: 'Application received. Thank you!',
    error: 'Could not submit. Please try again.',
  },
  contactPage: {
    headTitle: 'Contact | AI PORT',
    title: 'Get in touch',
    lead: 'Fill in the form for demo requests, partnerships or general questions.',
  },
  footer: {
    joinTitle: 'Join our team',
    joinCta: 'Careers →',
    contactTitle: 'Get in touch',
    contactCta: 'Contact us →',
    tagline: 'Modern web-based software products & technology partner',
    exploreTitle: 'Explore products',
    exploreCta: 'Product family →',
    colServices: 'Services',
    colProducts: 'Products',
    colCompany: 'Company',
    privacy: 'Privacy',
    locationsTitle: 'Contact',
    locationName: 'Türkiye',
    locationLines: ['info@aiport.tr', 'Export AI · FLY AI · ERP.aero'],
    socialLabel: 'Social',
    rights: '© AI\u00A0PORT Software. All rights reserved.',
  },
  aiServicesPage: {
    headTitle: 'AI Services | AI PORT',
    heroTitle: 'The AI features your product needs. Built, tested, live.',
    heroLead:
      'From first feature idea to working software in production — one team handles strategy, design and engineering together. No consultants handing off to developers. Just working software your users actually adopt.',
    heroCta: 'Tell us what you’re building',
    heroSecondary: 'Explore products',
    pathsTitle: 'Three ways to get AI into your product',
    pathsLead:
      'Start where it makes sense for your stage — validate the idea, ship the feature, or scale what’s already working.',
    paths: [
      {
        stage: 'ASSESS',
        title: 'AI opportunity sprint',
        desc:
          'In one week, you’ll know whether your AI idea is worth building — and what it will take to build it. We run a technical feasibility check, map the integration points with your existing product, and deliver a working proof of concept with an ROI estimate your stakeholders can act on. No slide decks. No discovery that turns into a second discovery. A working POC and a decision-ready output.',
        meta: '1 week → feasibility + integration map | 2 weeks → full POC',
        getsTitle: 'What you get:',
        gets: [
          'Technical feasibility assessment',
          'Proof of concept',
          'Integration map',
          'ROI estimate',
        ],
        cta: 'Start with a Sprint →',
      },
      {
        stage: 'BUILD',
        title: 'AI product development',
        desc:
          'We design, build and ship AI features directly into your product — LLM integration, RAG systems, AI agents, or a full MVP from brief to production. Strategy, UX and engineering in one team.',
        meta: 'Scoped AI feature: 4–8 weeks | AI MVP from scratch: 3–6 months',
        getsTitle: 'What you get:',
        gets: [
          'Scoped feature or MVP — working software in production',
          'LLM integration / custom model approach',
          'UX for AI features',
          'QA & production readiness',
          'Handoff documentation',
        ],
        cta: 'Tell us what you’re building →',
      },
      {
        stage: 'SCALE',
        title: 'AI Platform Development',
        desc:
          'Your AI feature works in production. Now it needs to handle more users, more data and more use cases — without breaking, drifting, or becoming a maintenance burden your team can’t manage. We build the infrastructure, monitoring and governance layer around what you’ve already shipped.',
        meta: '4–12+ months | milestone-based fixed price / retainer',
        getsTitle: 'What you get:',
        gets: [
          'Scalable AI infrastructure',
          'Model monitoring & evaluation',
          'Multi-model orchestration',
          'Compliance & audit trails',
          'Ongoing development retainer',
        ],
        cta: 'Ask what your AI platform needs to scale →',
      },
    ],
    ecomTitle: 'AI-powered product content for your e-commerce catalog',
    ecomText:
      'We run a separate service line that produces product imagery, SEO-ready copy and variant-aware catalog entries — turning your raw product photos into pages ready to publish.',
    ecomCta: 'Explore the AI product content service',
    faqTitle: 'Before you get in touch — the questions worth answering first',
    faqs: [
      {
        q: 'How long does it take to go from idea to a working AI feature?',
        a: 'It depends on the scope, but most clients have a working proof of concept within one week — that’s what the AI Opportunity Sprint is for. A full feature in production typically takes 4–12 weeks. We scope this precisely before any commitment.',
      },
      {
        q: 'Do we need to rebuild our platform to add AI?',
        a: 'Almost never. Most LLM integrations work on top of existing architecture — connecting to your APIs, databases and workflows without a full rebuild. We map the integration points in the first week so you know exactly what’s involved before we start.',
      },
      {
        q: 'How do you make sure the AI output is reliable enough for production?',
        a: 'We build evaluation and testing into the delivery process — not as an afterthought. That means defining what “good output” looks like for your use case, testing against real data, and setting up monitoring so you know when something drifts after launch.',
      },
      {
        q: 'What happens if the AI feature doesn’t perform as expected after launch?',
        a: 'We don’t hand off and disappear. Every build includes handoff documentation your team can act on, and we offer ongoing retainers for teams that want continued support.',
      },
      {
        q: 'How do you handle data privacy and compliance?',
        a: 'We build compliance into the architecture — data residency, audit trails, access controls — not as a retrofit after a legal review flags the gap. For regulated industries we address this in scoping, before a line of code is written.',
      },
      {
        q: 'What’s the difference between starting with an AI Opportunity Sprint and going straight to a build?',
        a: 'The Sprint exists because most teams arrive with an idea, not a spec. It de-risks the build: you get a working POC, an integration map and an ROI estimate before committing to a full engagement. If you already have a validated concept, we can scope a build directly.',
      },
    ],
    ctaTitle: 'Tell us what you’re building. We’ll take it from there.',
    ctaText: 'Tell us where you are — we’ll help you work out the next step.',
    ctaBtn: 'Get in touch',
  },
  digitalProductPage: {
    headTitle: 'Digital Product | AI PORT',
    heroTitle: 'Full-cycle digital product development',
    heroLead:
      'AI\u00A0PORT takes your idea from prototype to MVP, product-market fit and scaling — across Export AI, FLY\u00A0AI and the ERP.aero ecosystem. Strategy, design and engineering move as one team.',
    heroCta: 'Tell us about your product',
    problemLabel: 'Problem',
    problemTitle: 'How do you build a product users want without wasting budget?',
    problemText:
      'A large share of digital products fail due to a lack of product-market fit. Your product needs loyal users and must grow with customer needs.',
    solutionLabel: 'Solution',
    solutionTitle:
      'At AI PORT we use a lean product approach and agile delivery to ship digital products that create value in export and aviation.',
    solutionText:
      'We aim to take your web product to market as quickly as possible, test with real users, iterate, find the right product-market fit and then build a scalable version.',
    stagesTitle: 'Every stage of the product cycle',
    stages: [
      {
        title: 'Product prototyping',
        desc: 'A prototype lets you validate core assumptions with minimum cost and effort.',
        teamTitle: 'Prototyping team',
        teamDesc:
          'We analyze your concept and business goals, help you ideate, design and develop prototypes, and gather early feedback to prepare for an MVP.',
      },
      {
        title: 'Minimum Viable Product (MVP)',
        desc: 'An MVP is the first version of your product, shown early to customers so you can test with real users and collect feedback for improvements or pivots.',
        teamTitle: 'MVP team',
        teamDesc:
          'We help you choose core features for the first version, then design and develop software aligned with Export AI, FLY\u00A0AI or ERP.aero integrations.',
      },
      {
        title: 'Product-market fit',
        desc: 'At this stage you test, analyze and iterate in cycles to achieve a strong fit for the market.',
        teamTitle: 'Product-market fit team',
        teamDesc:
          'We design and run product tests, analyze results and turn insights into the next iterations — building and validating new features with users.',
      },
      {
        title: 'Product scaling',
        desc: 'After validating the hypothesis and finding fit, it is time to scale a secure system that can grow with your users.',
        teamTitle: 'Scaling team',
        teamDesc:
          'We plan refactoring, build a scalable and secure system, and help you set up processes so the business and product can grow sustainably.',
      },
    ],
    processTitle: 'Collaboration process',
    processLead:
      'You don’t need to know lean product methods to work with us. AI\u00A0PORT guides you from strategy and ideation through execution, tests and further iterations.',
    process: [
      {
        title: 'Lean product mindset',
        desc: 'Our teams live the lean product approach. All our products — including Export AI and FLY\u00A0AI — are delivered with this philosophy.',
      },
      {
        title: 'Contact and first proposal',
        desc: 'We discuss your business needs and ask you to share as much as possible about your idea. Within 3–5 working days you receive a proposal with a preliminary approach and solution.',
      },
      {
        title: 'Product workshops',
        desc: 'We meet the product team in workshops to clarify vision, strategy and tactics — e.g. Business Canvas, Product Canvas, User Story Mapping, Impact Mapping, Event Storming.',
      },
      {
        title: 'Final proposal and release plan',
        desc: 'After workshops we advise on the best lean delivery path. We work in scrum, so scope stays flexible and follows your needs throughout development.',
      },
    ],
    ctaTitle: 'Tell us about your product',
    ctaText: 'Let’s talk about where you are on Export AI, FLY AI or ERP.aero.',
    ctaBtn: 'Get in touch',
  },
  servicesPage: {
    headTitle: 'Services | AI PORT',
    heroTitle: 'Four service lines, one technology partner.',
    heroLead:
      'From AI to digital product, from e-commerce to hardware, AI\u00A0PORT teams work with the same discipline from strategy to live system. Start with the line closest to your need — they combine under one contract when the work calls for it.',
    heroCta: 'Tell us what you need',
    heroSecondary: 'Explore products',
    cardsLabel: 'Service lines',
    cardsTitle: 'Where we help',
    cardsLead:
      'Each line runs with its own team, process and delivery model. Open a line below for the details.',
    cardCta: 'See details',
    soonBadge: 'Coming soon',
    moreTitle: 'Other services',
    cards: [
      {
        key: 'ai',
        icon: 'product',
        label: 'AI Services',
        title: 'Bring AI into your product',
        desc:
          'From an opportunity sprint to an AI feature running in production: LLM integration, agentic implementation and platform scaling.',
        bullets: [
          'AI opportunity sprint',
          'LLM integration & API',
          'Agentic AI & MCP',
          'AI platform scaling',
        ],
        href: '/services/ai',
        ready: true,
      },
      {
        key: 'digital-product',
        icon: 'create',
        label: 'Digital Product',
        title: 'End-to-end digital product development',
        desc:
          'From prototype to MVP, from product-market fit to scaling — strategy, design and engineering in one team.',
        bullets: [
          'Product prototyping',
          'MVP development',
          'Product-market fit',
          'Dedicated teams & augmentation',
        ],
        href: '/services/digital-product',
        ready: true,
      },
      {
        key: 'e-commerce',
        icon: 'ecommerce',
        label: 'E-Commerce',
        title: 'E-commerce platforms and integrations',
        desc:
          'Store infrastructure, marketplace and payment integrations, catalog automation and conversion optimisation.',
        bullets: [
          'E-commerce platform build',
          'Marketplace integrations',
          'Payment & logistics integration',
          'Catalog automation',
        ],
        href: '/services/e-commerce',
        ready: true,
      },
      {
        key: 'hardware',
        icon: 'hardware',
        label: 'Hardware',
        title: 'Hardware, infrastructure and system integration',
        desc:
          'From hardware sourcing to server and network infrastructure, from IoT and embedded systems to ongoing support.',
        bullets: [
          'Hardware sourcing & setup',
          'Server & infrastructure solutions',
          'Network and system integration',
          'IoT & embedded systems',
        ],
        href: '/services/hardware',
        ready: false,
      },
    ],
    ctaTitle: 'Not sure which line to start with?',
    ctaText: 'One short call and we’ll route your need to the right team.',
    ctaBtn: 'Get in touch',
  },
  eCommercePage: {
    headTitle: 'E-Commerce | AI PORT',
    heroTitle: 'E-commerce built to sell — setup, integrations and content from one team',
    heroLead:
      'Three setup packages, from a brochure site to a marketplace-integrated professional store. Payments, shipping, stock and catalog come configured; if you want the product imagery and copy handled too, our AI content line takes over.',
    heroCta: 'Request a quote',
    heroSecondary: 'See the packages',
    packagesLabel: 'Packages',
    packagesTitle: 'Three setup packages to match where you are',
    packagesLead:
      'All three ship mobile-ready with SEO foundations. What differs is selling capability, integration depth and capacity.',
    packages: [
      {
        key: 'showcase',
        name: 'BROCHURE SITE',
        price: 'from 10.000 ₺',
        term: '3 days · excl. VAT',
        desc:
          'A corporate catalog site that presents the brand and product groups, without online selling.',
        gets: [
          'Corporate catalog structure covering the brand and product groups',
          'SEO foundations for priority indexing in Google search',
          'WhatsApp, Instagram, Maps and quote-request integration',
          'Mobile-ready sector-specific design',
        ],
        cta: 'Request a quote',
        featured: false,
        featuredLabel: '',
      },
      {
        key: 'starter',
        name: 'E-COMMERCE STARTER',
        price: 'from 50.000 ₺',
        term: '10 days · excl. VAT',
        desc:
          'Everything needed to start selling online: payments, shipping and catalog structure.',
        gets: [
          'Web design built on an e-commerce foundation',
          'Virtual POS (iyzico / PayTR) and bank transfer / EFT integration',
          'Up to 100 products with simple variations (colour / size) and category structure',
          'Contracted shipping setup',
          'Virtual POS commission starts at 3.99% — subject to provider terms',
        ],
        cta: 'Request a quote',
        featured: false,
        featuredLabel: '',
      },
      {
        key: 'pro',
        name: 'E-COMMERCE PROFESSIONAL',
        price: 'from 90.000 ₺',
        term: '20 days · excl. VAT',
        desc:
          'The full build, with marketplace, e-invoice and stock integrations ready to scale.',
        gets: [
          'Marketplace (Trendyol, Hepsiburada etc.) integration layer',
          'Automated e-invoicing, shipping / logistics integration and advanced stock management',
          'Conversion optimisation, abandoned-cart reminders, campaign and coupon modules',
          'Capacity for up to 500 products with detailed product customisation',
          '0% virtual POS commission up to 75.000 ₺ — subject to provider terms',
        ],
        cta: 'Request a quote',
        featured: true,
        featuredLabel: 'Most chosen',
      },
    ],
    requiredLabel: 'Added to every package — mandatory',
    requiredTitle: 'Warranty and annual technical services',
    requiredPrice: '10.000 ₺ + VAT / year',
    requiredText:
      'For the first 30 days after delivery, fixing software and technical faults is free of charge. After that, the annual technical service line is mandatory to keep the system secure and running; it is invoiced annually in advance from go-live. It does not cover software changes or new functionality.',
    requiredItems: [
      'System security and infrastructure updates',
      'Annual technical support; renewal of SSL, domain, server and infrastructure systems',
    ],
    aiLabel: 'Optional add-on',
    aiTitle: 'Let us handle the product imagery and copy too',
    aiText:
      'We turn your raw product photos into studio-quality image sets, SEO-ready product copy and variant-aware catalog entries — so you don’t have to enter 50–100 products yourself.',
    aiBullets: [
      '8–10 studio-quality images per product',
      'SEO-ready title, product description and meta copy',
      'Variant imagery for colour, door, size and texture combinations',
      'Catalog entry with every variant option in place',
    ],
    aiCta: 'Explore the AI content service',
    reqTitle: 'What we need from you',
    reqLead: 'To keep the build on schedule we’ll need:',
    reqItems: [
      'Image, price, description and variation data for 50–100 products',
      'Your domain and access details, if you already have one',
      'Brand logo and corporate colours',
      'Company details for the virtual POS application',
      'Estimated shipment volume for the shipping agreement',
      'A single approver for content sign-off',
    ],
    outScopeTitle: 'Not included in these packages',
    outScopeItems: [
      'ERP / accounting integration — priced separately',
      'Mobile app (iOS / Android)',
      'Domain cost — added as an extra if you don’t have one',
      'Modules and integrations not listed in the proposal',
    ],
    refsLabel: 'References',
    refsTitle: 'E-commerce projects we have live',
    refsLead: 'Both were built with the packages on this page and are live and selling today.',
    refs: [
      {
        key: 'dekorumpanel',
        sector: 'Decorative building materials',
        name: 'Dekorum Panel',
        desc:
          'A catalog of eight product groups and over seventy-five products; cart, filtering and sorting, order tracking, plus distance-selling and returns flows all live.',
        href: 'https://dekorumpanel.tr/',
        image: '/assets/references/dekorumpanel.jpg',
        imageAlt: 'Home page of the Dekorum Panel e-commerce site',
        cta: 'Visit the site',
      },
      {
        key: 'vitarobanyo',
        sector: 'Bathroom furniture & ceramics',
        name: 'Vitaro Banyo',
        desc:
          'A heavily variant-driven catalog crossing door colour, mirror and stone basin axes; delivered together with collection pages, campaign mechanics and customer reviews.',
        href: 'https://vitarobanyo.com/',
        image: '/assets/references/vitarobanyo.jpg',
        imageAlt: 'Home page of the Vitaro Banyo e-commerce site',
        cta: 'Visit the site',
      },
    ],
    priceNote:
      'Prices exclude VAT and are starting prices. The final figure is set in the proposal form according to scope; proposals are valid for 30 days from the date of issue. Package fees are collected 50% up front and 50% on delivery.',
    ctaTitle: 'What do you want to build on the e-commerce side?',
    ctaText: 'Let’s clarify the scope together in a short call.',
    ctaBtn: 'Get in touch',
  },
  aiContentPage: {
    headTitle: 'AI Product Imagery and Content | AI PORT',
    parentLabel: 'E-Commerce',
    label: 'AI Product Content',
    heroTitle: 'From a raw photo to a product page ready to publish',
    heroLead:
      'We turn raw product photos taken on a phone into studio-quality image sets, SEO-ready product copy and variant-aware catalog entries. Every output passes an operator review before it goes live.',
    heroCta: 'Request a quote',
    heroSecondary: 'E-commerce packages',
    whatTitle: 'What we deliver',
    whatLead: 'Four outputs produced in one flow and entered straight into your store admin.',
    what: [
      {
        icon: 'product',
        title: 'Studio-quality image set',
        desc:
          '8–10 images per product. Background, lighting, shadow and perspective are standardised to your brand’s visual language.',
      },
      {
        icon: 'export',
        title: 'SEO-ready product copy',
        desc:
          'Title, product description and meta description written in your brand’s voice and built to be found in search.',
      },
      {
        icon: 'workflow',
        title: 'Variant combination imagery',
        desc:
          'Every combination across colour, door, texture and size axes is produced separately and mapped so the image switches automatically when a variant is selected.',
      },
      {
        icon: 'qa',
        title: 'Variant-aware catalog entry',
        desc:
          'Category tree, variant axes and product attribute fields are defined, then products are entered with all of their options.',
      },
    ],
    howTitle: 'How it works: the product family model',
    howLead:
      'The visual language is set up once per product family; every later product in that family is produced far faster on top of that setup.',
    how: [
      {
        title: 'Brand visual identity setup',
        desc:
          'Background, lighting, shadow, perspective and colour temperature standards are set; copy tone, catalog schema and variant axes are defined. Two sample products are produced end to end for your approval.',
      },
      {
        title: 'Product family setup',
        desc:
          'On the family’s first product the visual language is adapted to that product type. A “product family” is a group that can be processed with the same visual language and production template; the definition is agreed before production starts.',
      },
      {
        title: 'Series production',
        desc:
          'Later products in the same family are produced from the established template. Family setup is submitted for approval within 3 working days of receiving the raw images, subsequent products within 1 working day.',
      },
      {
        title: 'Operator review and publishing',
        desc:
          'Every delivered image and text passes an operator review before publishing; content that contradicts the product data is not published. Two rounds of revision per product are free.',
      },
    ],
    pricingLabel: 'Pricing',
    pricingTitle: 'Setup once, production per product',
    pricingLead:
      'Choose one of the monthly content packages and the brand visual identity setup is included at no cost.',
    setupTitle: 'Brand visual identity setup — one-off',
    setupPrice: 'from 9.000 ₺ · 5 working days',
    setupText:
      'The visual language, copy tone and catalog schema are established at this stage, and two sample products are produced end to end. The item is free on annual content packages. Per-product and per-variant unit prices and licence rates are shared in the proposal form.',
    packagesTitle: 'Monthly content packages',
    packagesLead: 'Twelve-month subscription options for stores growing their catalog steadily.',
    packages: [
      {
        key: 'start',
        name: 'STARTER',
        price: '12.000 ₺ / month',
        term: '20 products / month · 12 months',
        desc: 'For stores growing their catalog at a steady pace.',
        gets: [
          'Content production and catalog entry for 20 products a month',
          'Brand visual identity setup included free',
        ],
        cta: 'Request a quote',
        featured: false,
        featuredLabel: '',
      },
      {
        key: 'growth',
        name: 'GROWTH',
        price: '27.000 ₺ / month',
        term: '50 products / month · 12 months',
        desc: 'For brands releasing seasonal collections.',
        gets: [
          'Content production and catalog entry for 50 products a month',
          'Brand visual identity setup included free',
        ],
        cta: 'Request a quote',
        featured: true,
        featuredLabel: 'Most chosen',
      },
      {
        key: 'enterprise',
        name: 'ENTERPRISE',
        price: '48.000 ₺ / month',
        term: '100 products / month · 12 months',
        desc: 'For operations migrating a large catalog in one go.',
        gets: [
          'Content production and catalog entry for 100 products a month',
          'Brand visual identity setup included free',
        ],
        cta: 'Request a quote',
        featured: false,
        featuredLabel: '',
      },
    ],
    packagesNote:
      'Unused product allowance does not roll over to the next month; products beyond the package are invoiced at unit prices. Variant combination imagery is not included in the packages and is invoiced separately on the tiered rate.',
    licenseTitle: 'Usage licence',
    licenseLead:
      'The web licence is included in the price. Other channels and their rates are covered in the proposal form.',
    licenses: [
      'Web licence — unlimited use on your own e-commerce site and organic social media (included)',
      'Marketplace licence — use in Trendyol, Hepsiburada, Amazon, N11 and similar listings',
      'Full commercial licence — paid digital advertising, printed catalogs, posters and trade-fair material',
      'Category exclusivity — your visual language is not used for another company in the same category',
      'Buyout — transfer of the prompt set, reference files and source outputs with all rights',
    ],
    reqTitle: 'What we need from you',
    reqItems: [
      'Raw photos of each product from at least 3 angles, sharp and well lit — a phone camera is enough',
      'A current list with product name, size, material, colour and variant options — your existing Excel sheet is fine',
      'Technical specifications and the selling points you want emphasised',
      'Written confirmation of surface (matte / gloss), texture and material',
      'Brand logo, corporate colours and any existing visual guidelines',
      'A single content approver, with approvals returned within 3 working days',
      'Admin access to the store panel for catalog entry',
    ],
    qualityTitle: 'Accuracy and delivery terms',
    qualityText:
      'Generated images are prepared to reflect the product’s real material and surface characteristics, but they are not literal photographs. Production rests on the accuracy of the raw images and information you provide; content that contradicts the product data is not published. Two rounds of revision per product are free, further revisions are invoiced separately.',
    priceNote:
      'Prices exclude VAT and are starting prices. Per-product and per-variant unit prices, licence rates and a cost scenario for your catalog are shared in the proposal form; proposals are valid for 30 days from the date of issue.',
    ctaTitle: 'How many products do you have?',
    ctaText: 'Send us your product and variant counts and we’ll build the cost scenario for you.',
    ctaBtn: 'Get in touch',
  },
  hardwarePage: {
    headTitle: 'Hardware | AI PORT',
    heroTitle: 'Hardware, infrastructure and system integration',
    heroLead:
      'From hardware sourcing to server and network infrastructure, from IoT and embedded systems to ongoing technical support — the detailed content for this line is in preparation.',
    heroCta: 'Tell us what you need',
    heroSecondary: 'All services',
    soonLabel: 'In preparation',
    soonTitle: 'Detailed content coming soon',
    soonText:
      'We’re working on the scope, process and references for this service line. In the meantime, send us your requirement and our team will get back to you directly.',
    scopeTitle: 'Scope headlines',
    scope: [
      'Hardware sourcing & setup',
      'Server & infrastructure solutions',
      'Network and system integration',
      'IoT & embedded systems',
      'Technical support & maintenance',
    ],
    ctaTitle: 'What are you planning on the hardware side?',
    ctaText: 'Let’s clarify the scope together in a short call.',
    ctaBtn: 'Get in touch',
  },
};

export const content = { tr, en };
export type Lang = keyof typeof content;
