export type Lang = "pt" | "en" | "es";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English",   flag: "🇺🇸" },
  { code: "es", label: "Español",   flag: "🇪🇸" },
];

export const T = {
  // ── nav ──────────────────────────────────────────────────────────────────
  nav: {
    howItWorks:  { pt: "Como Funciona",  en: "How It Works",   es: "Cómo Funciona"   },
    products:    { pt: "Produtos",       en: "Products",       es: "Productos"        },
    export:      { pt: "Exportar",       en: "Export",         es: "Exportar"         },
    markets:     { pt: "Mercados",       en: "Markets",        es: "Mercados"         },
    testimonials:{ pt: "Depoimentos",    en: "Testimonials",   es: "Testimonios"      },
    cta:         { pt: "Criar uma conta", en: "Create an account", es: "Crear una cuenta" },
    home:        { pt: "Início",          en: "Home",          es: "Inicio" },
    about:       { pt: "Quem Somos",      en: "About Us",      es: "Quiénes Somos" },
  },

  // ── banner ───────────────────────────────────────────────────────────────
  banner: {
    text: {
      pt: "✦ Plataforma 100% gratuita para artesãs de Heliópolis · Parceria com Sebrae SP e APEX-Brasil · Suporte em português",
      en: "✦ 100% free platform for Heliópolis artisans · Partnership with Sebrae SP & APEX-Brasil · Portuguese support",
      es: "✦ Plataforma 100% gratuita para artesanas de Heliópolis · Asociación con Sebrae SP y APEX-Brasil · Soporte en portugués",
    },
  },

  // ── hero ─────────────────────────────────────────────────────────────────
  hero: {
    badge:    { pt: "✦ Comunidade de Heliópolis, SP", en: "✦ Heliópolis Community, SP", es: "✦ Comunidad de Heliópolis, SP" },
    line1:    { pt: "O artesanato",   en: "The craftsmanship",  es: "La artesanía"         },
    line2:    { pt: "de Heliópolis",  en: "of Heliópolis",      es: "de Heliópolis"        },
    line3:    { pt: "para o mundo.",  en: "for the world.",     es: "para el mundo."       },
    sub:      {
      pt: "Uma plataforma feita para conectar você ao artesanato de Heliópolis. Descubra produtos únicos feitos à mão por mulheres artesãs da comunidade, conheça suas histórias e encontre peças com identidade, criatividade e propósito.",
      en: "A platform made to connect you with the crafts of Heliópolis. Discover unique handmade products created by women artisans from the community, learn their stories and find pieces with identity, creativity and purpose.",
      es: "Una plataforma creada para conectarte con la artesanía de Heliópolis. Descubre productos únicos hechos a mano por mujeres artesanas de la comunidad, conoce sus historias y encuentra piezas con identidad, creatividad y propósito.",
    },
    ctaViewProducts: { pt: "Ver produtos", en: "View products", es: "Ver productos" },

    home: {
      aboutEyebrow: { pt: "Quem Somos", en: "About Us", es: "Quiénes Somos" },
      aboutTitle1: { pt: "Mulheres, histórias e oportunidades", en: "Women, stories and opportunities", es: "Mujeres, historias y oportunidades" },
      aboutTitle2: { pt: "que começam em Heliópolis.", en: "that begin in Heliópolis.", es: "que comienzan en Heliópolis." },
      aboutText1: {
        pt: "Conheça as mulheres que transformam técnicas, memórias e materiais em peças únicas. Cada criação nasce de uma trajetória, de saberes compartilhados e do desejo de construir novas possibilidades por meio do próprio trabalho.",
        en: "Meet the women who turn techniques, memories and materials into unique pieces. Each creation grows from a personal journey, shared knowledge and the desire to build new possibilities through their work.",
        es: "Conoce a las mujeres que transforman técnicas, memorias y materiales en piezas únicas. Cada creación nace de una trayectoria, saberes compartidos y el deseo de construir nuevas posibilidades a través de su trabajo.",
      },
      aboutText2: {
        pt: "O projeto foi desenvolvido para aproximar essas histórias de pessoas que valorizam o feito à mão. A plataforma reúne catálogo, conteúdo e orientação em um só lugar, ajudando as artesãs a apresentar seu trabalho com autonomia e alcançar novos públicos.",
        en: "The project was developed to bring these stories closer to people who value handmade work. The platform brings together a catalogue, content and guidance in one place, helping artisans present their work independently and reach new audiences.",
        es: "El proyecto fue desarrollado para acercar estas historias a personas que valoran lo hecho a mano. La plataforma reúne catálogo, contenido y orientación en un solo lugar, ayudando a las artesanas a presentar su trabajo con autonomía y llegar a nuevos públicos.",
      },
      curiosities: [
        {
          title: { pt: "VALORIZAR", en: "VALUE", es: "VALORAR" },
          text: { pt: "Dar visibilidade a quem cria", en: "Give visibility to those who create", es: "Dar visibilidad a quienes crean" },
        },
        {
          title: { pt: "CONECTAR", en: "CONNECT", es: "CONECTAR" },
          text: { pt: "Aproximar pessoas e histórias", en: "Bring people and stories closer", es: "Acercar personas e historias" },
        },
        {
          title: { pt: "TRANSFORMAR", en: "TRANSFORM", es: "TRANSFORMAR" },
          text: { pt: "Abrir espaço para novas oportunidades", en: "Make room for new opportunities", es: "Abrir espacio para nuevas oportunidades" },
        },
      ],
      guideHomeTitle1: { pt: "Compre artesanato", en: "Shop handmade pieces", es: "Compra artesanía" },
      guideHomeTitle2: { pt: "de Heliópolis", en: "from Heliópolis", es: "de Heliópolis" },
      guideHomeSub: {
        pt: "Encontre produtos feitos pelas mulheres artesãs de Heliópolis e compre diretamente pela nossa plataforma. Conheça as peças, escolha o que combina com você e leve a cultura da comunidade para qualquer lugar do mundo.",
        en: "Find products made by the women artisans of Heliópolis and buy directly through our platform. Discover each piece, choose what suits you and take the community's culture anywhere in the world.",
        es: "Encuentra productos hechos por las mujeres artesanas de Heliópolis y compra directamente en nuestra plataforma. Conoce las piezas, elige la que combina contigo y lleva la cultura de la comunidad a cualquier lugar del mundo.",
      },
      guideHomeFeatures: [
        {
          icon: "01",
          title: { pt: "Vitrine para seus produtos", en: "A showcase for your products", es: "Una vitrina para tus productos" },
          desc: { pt: "Cadastre suas peças, preços e histórias em um só lugar para apresentar seu trabalho de forma profissional.", en: "Register your pieces, prices and stories in one place to present your work professionally.", es: "Registra tus piezas, precios e historias en un solo lugar para presentar tu trabajo de forma profesional." },
        },
        {
          icon: "02",
          title: { pt: "Mais visibilidade", en: "More visibility", es: "Más visibilidad" },
          desc: { pt: "Dê mais alcance ao seu trabalho e facilite que novos clientes conheçam as artesãs e seus produtos.", en: "Reach more people and make it easier for new customers to discover artisans and their products.", es: "Llega a más personas y facilita que nuevos clientes conozcan a las artesanas y sus productos." },
        },
        {
          icon: "03",
          title: { pt: "Apoio para vender para fora", en: "Support to sell abroad", es: "Apoyo para vender al extranjero" },
          desc: { pt: "Tenha informações e orientações para preparar seus produtos para oportunidades de venda no mercado internacional.", en: "Get information and guidance to prepare your products for international sales opportunities.", es: "Obtén información y orientación para preparar tus productos para oportunidades de venta internacional." },
        },
        {
          icon: "04",
          title: { pt: "Novas oportunidades de renda", en: "New income opportunities", es: "Nuevas oportunidades de ingresos" },
          desc: { pt: "Transforme a visibilidade das suas peças em novas oportunidades de venda, fortalecendo o trabalho das artesãs.", en: "Turn visibility for your pieces into new sales opportunities and strengthen artisans' work.", es: "Convierte la visibilidad de tus piezas en nuevas oportunidades de venta y fortalece el trabajo artesanal." },
        },
      ],
      guideHomeStat: {
        pt: "Artesanato local conectado a compradores internacionais",
        en: "Local craft connected to international buyers",
        es: "Artesanía local conectada con compradores internacionales",
      },
      productsMore: { pt: "Ver mais", en: "See more", es: "Ver más" },
      signupTitle1: { pt: "Pronta para levar", en: "Ready to bring", es: "¿Lista para llevar" },
      signupTitle2: { pt: "sua arte brasileira para casa?", en: "your Brazilian art home?", es: "tu arte brasileño a casa?" },
      signupSub: { pt: "Cadastre-se e venha explorar nossas peças.", en: "Sign up and explore our pieces.", es: "Regístrate y explora nuestras piezas." },
      signupButton: { pt: "Cadastrar", en: "Sign up", es: "Registrarse" },
      community: { pt: "✦ Comunidade de Heliópolis, SP", en: "✦ Heliópolis Community, SP", es: "✦ Comunidad de Heliópolis, SP" },
    },
    ctaPrimary:   { pt: "Comece a Exportar →",  en: "Start Exporting →",     es: "Empieza a Exportar →"   },
    ctaSecondary: { pt: "Como Funciona",         en: "How It Works",          es: "Cómo Funciona"          },
    stat1label:   { pt: "Artesãs Cadastradas",   en: "Registered Artisans",   es: "Artesanas Registradas"  },
    stat2label:   { pt: "Países Alcançados",      en: "Countries Reached",     es: "Países Alcanzados"      },
    stat3label:   { pt: "Renda Gerada",           en: "Income Generated",      es: "Ingresos Generados"     },
    cardRole:     { pt: "Bolsas trançadas • SP → DE", en: "Woven bags • SP → DE", es: "Bolsas tejidas • SP → DE" },
    cardQuote:    {
      pt: "Minha renda triplicou no primeiro mês de exportação.",
      en: "My income tripled in the first month of exporting.",
      es: "Mis ingresos se triplicaron en el primer mes de exportación.",
    },
    cardBadge:    { pt: "✓ Pedido confirmado", en: "✓ Order confirmed", es: "✓ Pedido confirmado" },
  },

  // ── how it works ─────────────────────────────────────────────────────────
  how: {
    label: { pt: "Simples e sem burocracia", en: "Simple and hassle-free", es: "Simple y sin burocracia" },
    title: { pt: "Como funciona a exportação", en: "How the export process works", es: "Cómo funciona la exportación" },
    sub:   {
      pt: "Da oficina à vitrine internacional, em cinco passos diretos ao ponto.",
      en: "From your workshop to the global showcase, in five straightforward steps.",
      es: "Del taller al escaparate internacional, en cinco pasos directos.",
    },
    stepLabel: { pt: "PASSO", en: "STEP", es: "PASO" },
    steps: [
      {
        icon: "📦",
        title: { pt: "Cadastre seu Produto",       en: "Register your Product",      es: "Registra tu Producto"      },
        desc:  { pt: "Adicione fotos, descrições em português e inglês, materiais e preço. Nossa IA ajuda na tradução automática.", en: "Add photos, descriptions in Portuguese and English, materials and price. Our AI helps with automatic translation.", es: "Agrega fotos, descripciones en portugués e inglés, materiales y precio. Nuestra IA ayuda con la traducción automática." },
      },
      {
        icon: "📄",
        title: { pt: "Documentação Facilitada",    en: "Simplified Documentation",   es: "Documentación Facilitada"  },
        desc:  { pt: "Geramos a nota fiscal de exportação, NCM, certificado de origem artesanal e declaração de conteúdo.", en: "We generate the export invoice, NCM classification, artisan origin certificate and content declaration.", es: "Generamos la factura de exportación, NCM, certificado de origen artesanal y declaración de contenido." },
      },
      {
        icon: "🌍",
        title: { pt: "Conecte-se a Compradores",   en: "Connect with Buyers",        es: "Conéctate con Compradores" },
        desc:  { pt: "Seu produto aparece para importadores em mais de 40 países. Você recebe pedidos direto no app.", en: "Your product is shown to importers in over 40 countries. You receive orders directly in the app.", es: "Tu producto aparece ante importadores en más de 40 países. Recibes pedidos directamente en la app." },
      },
      {
        icon: "✈️",
        title: { pt: "Envie com Segurança",        en: "Ship with Confidence",       es: "Envía con Seguridad"       },
        desc:  { pt: "Parceria com Correios e transportadoras para envio internacional com rastreamento em tempo real.", en: "Partnership with postal services and carriers for international shipping with real-time tracking.", es: "Alianza con correos y transportistas para envíos internacionales con seguimiento en tiempo real." },
      },
      {
        icon: "💰",
        title: { pt: "Receba em Reais",            en: "Get Paid in Reais",          es: "Cobra en Reales"           },
        desc:  { pt: "Pagamentos internacionais convertidos automaticamente para sua conta. Sem burocracia cambial.", en: "International payments automatically converted to your account. No exchange bureaucracy.", es: "Pagos internacionales convertidos automáticamente a tu cuenta. Sin burocracia cambiaria." },
      },
    ],
  },

  // ── products ─────────────────────────────────────────────────────────────
  products: {
    label:      { pt: "Catálogo de exportação",     en: "Export catalogue",        es: "Catálogo de exportación"    },
    title1:     { pt: "Feito com mãos,",             en: "Made with hands,",        es: "Hecho con manos,"           },
    title2:     { pt: "vendido ao mundo",            en: "sold to the world",       es: "vendido al mundo"           },
    categories: {
      all:       { pt: "Todos",       en: "All",        es: "Todos"       },
      acessorios:{ pt: "Acessórios",  en: "Accessories",es: "Accesorios"  },
      joias:     { pt: "Joias",       en: "Jewelry",    es: "Joyería"     },
      casa:      { pt: "Casa",        en: "Home",       es: "Hogar"       },
      vestuario: { pt: "Vestuário",   en: "Apparel",    es: "Ropa"        },
      brinquedos:{ pt: "Brinquedos",  en: "Toys",       es: "Juguetes"    },
    },
    by:         { pt: "por",          en: "by",          es: "por"          },
    cardCta:    { pt: "Cadastrar para Exportação", en: "Register to Export", es: "Registrar para Exportar" },
    productNames: {
      1: { pt: "Bolsa de Palha Trançada",             en: "Woven Straw Bag",             es: "Bolsa de Paja Tejida"           },
      2: { pt: "Conjunto de Bijuterias em Miçangas",  en: "Bead Jewelry Set",            es: "Conjunto de Bisutería de Cuentas"},
      3: { pt: "Tapete de Crochê",                    en: "Crochet Rug",                 es: "Alfombra de Crochet"            },
      4: { pt: "Boneca de Pano Afrobrasileira",       en: "Afro-Brazilian Cloth Doll",   es: "Muñeca de Tela Afrobrasileña"   },
      5: { pt: "Vaso de Barro Pintado",               en: "Hand-Painted Clay Vase",      es: "Jarrón de Barro Pintado"        },
      6: { pt: "Xale Bordado à Mão",                  en: "Hand-Embroidered Shawl",      es: "Chal Bordado a Mano"            },
    },
    categoryNames: {
      "Acessórios": { pt: "Acessórios",  en: "Accessories", es: "Accesorios" },
      "Joias":      { pt: "Joias",       en: "Jewelry",     es: "Joyería"    },
      "Casa":       { pt: "Casa",        en: "Home",        es: "Hogar"      },
      "Brinquedos": { pt: "Brinquedos",  en: "Toys",        es: "Juguetes"   },
      "Vestuário":  { pt: "Vestuário",   en: "Apparel",     es: "Ropa"       },
    },
  },

  // ── export guide ─────────────────────────────────────────────────────────
  guide: {
    label:  { pt: "Guia Completo",             en: "Full Guide",               es: "Guía Completa"           },
    title1: { pt: "Exportar é mais",           en: "Exporting is easier",      es: "Exportar es más"         },
    title2: { pt: "simples do que parece",     en: "than you think",           es: "sencillo de lo que parece"},
    sub:    {
      pt: "Cuidamos de toda a parte burocrática. Você foca no que sabe fazer melhor: criar.",
      en: "We handle all the bureaucratic side. You focus on what you do best: creating.",
      es: "Nos encargamos de toda la parte burocrática. Tú te enfocas en lo que mejor sabes hacer: crear.",
    },
    features: [
      {
        icon: "🌐",
        title: { pt: "Tradução automática",    en: "Automatic translation",   es: "Traducción automática"   },
        desc:  { pt: "Descrições do produto em inglês, espanhol, alemão e japonês geradas automaticamente.", en: "Product descriptions in English, Spanish, German and Japanese generated automatically.", es: "Descripciones del producto en inglés, español, alemán y japonés generadas automáticamente." },
      },
      {
        icon: "📋",
        title: { pt: "NCM e documentos",       en: "NCM & documents",         es: "NCM y documentos"        },
        desc:  { pt: "Classificação fiscal e todos os documentos de exportação gerados em segundos.", en: "Tax classification and all export documents generated in seconds.", es: "Clasificación fiscal y todos los documentos de exportación generados en segundos." },
      },
      {
        icon: "🚚",
        title: { pt: "Logística integrada",    en: "Integrated logistics",    es: "Logística integrada"     },
        desc:  { pt: "Parceria com Correios e DHL para envio internacional com rastreamento em tempo real.", en: "Partnership with postal services and DHL for international shipping with real-time tracking.", es: "Alianza con correos y DHL para envíos internacionales con seguimiento en tiempo real." },
      },
      {
        icon: "💳",
        title: { pt: "Pagamento garantido",    en: "Guaranteed payment",      es: "Pago garantizado"        },
        desc:  { pt: "Receba em reais direto na conta. Câmbio automático, sem taxas escondidas.", en: "Receive in reais directly to your account. Automatic exchange, no hidden fees.", es: "Recibe en reales directamente en tu cuenta. Cambio automático, sin comisiones ocultas." },
      },
    ],
    stat: { pt: "dos pedidos entregues\nsem nenhum problema", en: "of orders delivered\nwithout any issues", es: "de los pedidos entregados\nsin ningún problema" },
  },

  // ── markets ──────────────────────────────────────────────────────────────
  markets: {
    label:    { pt: "Oportunidades reais",           en: "Real opportunities",         es: "Oportunidades reales"         },
    title:    { pt: "Mercados que procuram\no que você produz", en: "Markets looking for\nwhat you make", es: "Mercados que buscan\nlo que tú produces" },
    interest: { pt: "Interesse:",                    en: "Interest:",                  es: "Interés:"                     },
    demand:   { pt: "Demanda",                       en: "Demand",                     es: "Demanda"                      },
  },

  // ── testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    label:  { pt: "Quem já exportou",             en: "Who already exported",      es: "Quiénes ya exportaron"       },
    title1: { pt: "Histórias de quem",             en: "Stories of those who",      es: "Historias de quienes"        },
    title2: { pt: "transformou sua vida",          en: "transformed their lives",   es: "transformaron su vida"       },
    items: [
      {
        initials: "MG", name: "Maria das Graças Ferreira", role: { pt: "Artesã de trançados há 22 anos", en: "Woven-craft artisan for 22 years", es: "Artesana de tejidos hace 22 años" },
        text: {
          pt: "Antes eu vendia só aqui perto. Agora minhas bolsas chegam em Portugal e na Alemanha. No primeiro mês, minha renda triplicou. Foi a Heliópolis mostrando pro mundo o que a gente sabe fazer.",
          en: "I used to sell only nearby. Now my bags reach Portugal and Germany. In the first month, my income tripled. It was Heliópolis showing the world what we know how to do.",
          es: "Antes vendía solo aquí cerca. Ahora mis bolsas llegan a Portugal y Alemania. En el primer mes, mis ingresos se triplicaron. Fue Heliópolis mostrando al mundo lo que sabemos hacer.",
        },
      },
      {
        initials: "RS", name: "Rosângela Aparecida Silva", role: { pt: "Criadora de bijuterias afro", en: "Afro jewelry designer", es: "Creadora de bisutería afro" },
        text: {
          pt: "A documentação me assustava muito. Mas o sistema gera tudo automático. Em três cliques meu produto está disponível para o mundo. Não preciso saber inglês nem nada.",
          en: "The paperwork scared me a lot. But the system generates everything automatically. In three clicks my product is available to the world. I don't need to know English or anything.",
          es: "La documentación me asustaba mucho. Pero el sistema genera todo automáticamente. En tres clics mi producto está disponible para el mundo. No necesito saber inglés ni nada.",
        },
      },
      {
        initials: "BL", name: "Benedita Lima dos Santos", role: { pt: "Bordadeira e professora comunitária", en: "Embroiderer and community teacher", es: "Bordadora y profesora comunitaria" },
        text: {
          pt: "Uma cliente do Japão disse que meu bordado era arte. A gente aqui sabe que é arte, mas ouvir isso de tão longe... mudou tudo pra mim.",
          en: "A customer from Japan said my embroidery was art. We here know it's art, but hearing that from so far away... it changed everything for me.",
          es: "Una clienta de Japón dijo que mi bordado era arte. Nosotros aquí sabemos que es arte, pero escucharlo de tan lejos... cambió todo para mí.",
        },
      },
    ],
  },

  // ── signup ────────────────────────────────────────────────────────────────
  signup: {
    label:  { pt: "Cadastro gratuito",      en: "Free registration",        es: "Registro gratuito"       },
    title1: { pt: "Pronta para levar seu",  en: "Ready to take your",       es: "¿Lista para llevar tu" },
    title2: { pt: "trabalho para o mundo?", en: "craft to the world?",      es: "trabajo al mundo?"       },
    sub:    {
      pt: "Cadastre-se e nossa equipe entra em contato em até 48 horas para iniciar seu processo de exportação.",
      en: "Sign up and our team will contact you within 48 hours to start your export process.",
      es: "Regístrate y nuestro equipo se pondrá en contacto contigo en menos de 48 horas para iniciar tu proceso de exportación.",
    },
    account: {
      label: { pt: "Criar uma conta", en: "Create an account", es: "Crear una cuenta" },
      title: { pt: "Crie sua conta", en: "Create your account", es: "Crea tu cuenta" },
      sub: { pt: "Cadastre-se para acompanhar seus pedidos, favoritos e novidades da arte brasileira.", en: "Sign up to follow your orders, favorites and Brazilian art news.", es: "Regístrate para seguir tus pedidos, favoritos y novedades del arte brasileño." },
      name: { pt: "Seu nome completo", en: "Your full name", es: "Tu nombre completo" },
      email: { pt: "E-mail", en: "Email", es: "Correo electrónico" },
      password: { pt: "Senha", en: "Password", es: "Contraseña" },
      submit: { pt: "Criar conta", en: "Create account", es: "Crear cuenta" },
      success: { pt: "Conta criada com sucesso!", en: "Account created successfully!", es: "¡Cuenta creada con éxito!" },
    },
    fields: {
      name:    { label: { pt: "Seu nome completo",            en: "Your full name",              es: "Tu nombre completo"           }, placeholder: { pt: "Maria das Graças Ferreira", en: "Maria das Graças Ferreira", es: "Maria das Graças Ferreira" } },
      whats:   { label: { pt: "WhatsApp",                     en: "WhatsApp",                    es: "WhatsApp"                     }, placeholder: { pt: "(11) 99999-9999",          en: "(11) 99999-9999",          es: "(11) 99999-9999"           } },
      email:   { label: { pt: "E-mail",                       en: "Email",                       es: "Correo electrónico"            }, placeholder: { pt: "maria@email.com",          en: "maria@email.com",          es: "maria@email.com"           } },
      product: { label: { pt: "Tipo de produto que você faz", en: "Type of product you make",    es: "Tipo de producto que haces"    }, placeholder: { pt: "Ex: bolsas trançadas, bijuterias...", en: "E.g.: woven bags, jewelry...", es: "Ej.: bolsas tejidas, bisutería..." } },
      instagram: { label: { pt: "Instagram (opcional)", en: "Instagram (optional)", es: "Instagram (opcional)" }, placeholder: { pt: "@seu perfil", en: "@your profile", es: "@tu perfil" } },
      address: { label: { pt: "Endereço em Heliópolis", en: "Address in Heliópolis", es: "Dirección en Heliópolis" }, placeholder: { pt: "Rua, número e complemento", en: "Street, number and details", es: "Calle, número y complemento" } },
      residence: { label: { pt: "Comprovante de residência", en: "Proof of address", es: "Comprobante de domicilio" }, placeholder: { pt: "Envie uma imagem ou PDF", en: "Upload an image or PDF", es: "Envía una imagen o PDF" } },
      artImages: { label: { pt: "Fotos das suas artes", en: "Photos of your pieces", es: "Fotos de tus piezas" }, placeholder: { pt: "Selecione uma ou mais imagens", en: "Select one or more images", es: "Selecciona una o más imágenes" } },
    },
    submit:   { pt: "Quero Exportar Meus Produtos →", en: "I Want to Export My Products →", es: "Quiero Exportar Mis Productos →" },
    fine:     { pt: "Programa exclusivo para mulheres artesãs que moram em Heliópolis.", en: "Program exclusively for women artisans who live in Heliópolis.", es: "Programa exclusivo para mujeres artesanas que viven en Heliópolis." },
    successTitle: { pt: "Cadastro recebido!",  en: "Registration received!", es: "¡Registro recibido!"   },
    successText:  {
      pt: "Recebemos sua inscrição! Nossa equipe entrará em contato em até 48 horas pelo canal informado — e-mail, WhatsApp ou Instagram — para dar continuidade ao processo. Obrigada por compartilhar a arte brasileira das Artesãs de Heliópolis! ✦",
      en: "We received your application! Our team will contact you within 48 hours through your chosen channel — email, WhatsApp or Instagram — to continue the process. Thank you for sharing Brazilian art from Heliópolis! ✦",
      es: "¡Recibimos tu inscripción! Nuestro equipo se pondrá en contacto contigo en menos de 48 horas por el canal informado — correo, WhatsApp o Instagram — para continuar el proceso. ¡Gracias por compartir el arte brasileño de Heliópolis! ✦",
    },
  },

  // ── footer ───────────────────────────────────────────────────────────────

  // ── new menu pages ───────────────────────────────────────────────────────
  aboutPage: {
    eyebrow: { pt: "QUEM SOMOS", en: "ABOUT US", es: "QUIÉNES SOMOS" },
    title: {
      pt: "Mulheres que criam, transformam e inspiram.",
      en: "Women who create, transform and inspire.",
      es: "Mujeres que crean, transforman e inspiran.",
    },
    intro: {
      pt: "Em Heliópolis, muitas mulheres encontram no artesanato uma forma de expressar sua criatividade, preservar conhecimentos e gerar renda para suas famílias. O projeto nasceu para reconhecer essas trajetórias e criar uma ponte entre as artesãs e novos públicos.",
      en: "In Heliópolis, many women find in craft a way to express their creativity, preserve knowledge and generate income for their families. This project was born to recognize their journeys and build a bridge between artisans and new audiences.",
      es: "En Heliópolis, muchas mujeres encuentran en la artesanía una forma de expresar su creatividad, preservar conocimientos y generar ingresos para sus familias. El proyecto nació para reconocer sus trayectorias y crear un puente entre las artesanas y nuevos públicos.",
    },
    eligibility: {
      pt: "O programa é exclusivo para mulheres artesãs que moram em Heliópolis.",
      en: "The program is exclusively for women artisans who live in Heliópolis.",
      es: "El programa es exclusivo para mujeres artesanas que viven en Heliópolis.",
    },
    story: {
      pt: "Mais do que produtos, elas compartilham histórias de coragem, aprendizado e transformação. O trabalho é feito com técnicas que passam de geração em geração e também com muita invenção: cada bolsa, bordado, acessório ou objeto para a casa carrega a identidade de quem criou.",
      en: "More than products, they share stories of courage, learning and transformation. Their work combines techniques passed down through generations with imagination: every bag, embroidery, accessory or home object carries the identity of its maker.",
      es: "Más que productos, comparten historias de valentía, aprendizaje y transformación. Su trabajo combina técnicas transmitidas de generación en generación con mucha creatividad: cada bolso, bordado, accesorio u objeto para el hogar lleva la identidad de quien lo creó.",
    },
    development: {
      pt: "A plataforma foi construída a partir desse propósito: ouvir, organizar e ampliar o que já existe na comunidade. Criamos uma vitrine digital acessível, com espaço para apresentar produtos, contar histórias e oferecer orientações para que cada artesã possa se conectar com compradores no Brasil e no exterior.",
      en: "The platform was built around this purpose: to listen, organize and expand what already exists in the community. We created an accessible digital showcase where artisans can present products, tell their stories and receive guidance to connect with buyers in Brazil and abroad.",
      es: "La plataforma se construyó a partir de este propósito: escuchar, organizar y ampliar lo que ya existe en la comunidad. Creamos una vitrina digital accesible para presentar productos, contar historias y ofrecer orientación para que cada artesana pueda conectarse con compradores en Brasil y en el exterior.",
    },
    how: {
      pt: "COMO FUNCIONA O PROGRAMA",
      en: "HOW THE PROGRAM WORKS",
      es: "CÓMO FUNCIONA EL PROGRAMA",
    },
    howTitle: {
      pt: "Um caminho simples para transformar talento em oportunidade.",
      en: "A simple path from talent to opportunity.",
      es: "Un camino sencillo para transformar talento en oportunidad.",
    },
    imageAlt: {
      pt: "Mulheres trabalhando juntas",
      en: "Women working together",
      es: "Mujeres trabajando juntas",
    },
    steps: [
      {
        number: "01",
        title: { pt: "Cadastro", en: "Registration", es: "Registro" },
        description: {
          pt: "A artesã apresenta seu trabalho, seus produtos e sua história.",
          en: "The artisan presents her work, products and story.",
          es: "La artesana presenta su trabajo, sus productos y su historia.",
        },
      },
      {
        number: "02",
        title: { pt: "Vitrine", en: "Showcase", es: "Vitrina" },
        description: {
          pt: "Os produtos ganham espaço em uma vitrine digital organizada e acessível.",
          en: "Products gain space in an organized and accessible digital showcase.",
          es: "Los productos ganan espacio en una vitrina digital organizada y accesible.",
        },
      },
      {
        number: "03",
        title: { pt: "Orientação", en: "Guidance", es: "Orientación" },
        description: {
          pt: "A plataforma oferece conteúdos para ajudar na apresentação e comercialização das peças.",
          en: "The platform offers content to help present and sell the pieces.",
          es: "La plataforma ofrece contenidos para ayudar a presentar y comercializar las piezas.",
        },
      },
      {
        number: "04",
        title: { pt: "Novas oportunidades", en: "New opportunities", es: "Nuevas oportunidades" },
        description: {
          pt: "O objetivo é aproximar as artesãs de novos públicos e mercados.",
          en: "The goal is to connect artisans with new audiences and markets.",
          es: "El objetivo es acercar a las artesanas a nuevos públicos y mercados.",
        },
      },
    ],
    button: { pt: "Quero participar", en: "I want to participate", es: "Quiero participar" },
    joinPrompt: {
      pt: "É uma mulher artesã de Heliópolis? Clique abaixo para conhecer o programa e fazer sua inscrição.",
      en: "Are you a woman artisan from Heliópolis? Click below to learn about the program and apply.",
      es: "¿Eres una mujer artesana de Heliópolis? Haz clic abajo para conocer el programa e inscribirte.",
    },
  },

  productsPage: {
    eyebrow: { pt: "PRODUTOS", en: "PRODUCTS", es: "PRODUCTOS" },
    title: {
      pt: "Artesanato feito à mão, com identidade.",
      en: "Handmade products, with identity.",
      es: "Artesanía hecha a mano, con identidad.",
    },
    intro: {
      pt: "Conheça as criações das artesãs de Heliópolis e descubra peças que carregam técnica, criatividade e história.",
      en: "Discover creations by Heliópolis artisans and pieces that carry technique, creativity and story.",
      es: "Conoce las creaciones de las artesanas de Heliópolis y descubre piezas llenas de técnica, creatividad e historia.",
    },
    action: { pt: "Conhecer peça", en: "View piece", es: "Ver pieza" },
  },

  footer: {
    tagline:  { pt: "Conectando o talento artesanal de Heliópolis com o mercado mundial.", en: "Connecting Heliópolis artisan talent with the global market.", es: "Conectando el talento artesanal de Heliópolis con el mercado mundial." },
    col1:     { pt: "Plataforma",   en: "Platform",   es: "Plataforma"  },
    col2:     { pt: "Suporte",      en: "Support",    es: "Soporte"     },
    col3:     { pt: "Comunidade",   en: "Community",  es: "Comunidad"   },
    col1links:{ pt: ["Como Funciona","Catálogo","Guia de Exportação","Mercados"],    en: ["How It Works","Catalogue","Export Guide","Markets"],              es: ["Cómo Funciona","Catálogo","Guía de Exportación","Mercados"]         },
    col2links:{ pt: ["Central de Ajuda","WhatsApp","Documentação","Parceiros"],     en: ["Help Center","WhatsApp","Documentation","Partners"],              es: ["Centro de Ayuda","WhatsApp","Documentación","Socios"]               },
    col3links:{ pt: ["Sobre Heliópolis","Histórias de Sucesso","Eventos","Blog"],   en: ["About Heliópolis","Success Stories","Events","Blog"],              es: ["Sobre Heliópolis","Historias de Éxito","Eventos","Blog"]            },
    copy:     {
      pt: "© 2026 Artesãs de Heliópolis Global · Parceria com Sebrae SP e APEX-Brasil · Heliópolis, São Paulo, Brasil",
      en: "© 2026 Artesãs de Heliópolis Global · Partnership with Sebrae SP & APEX-Brasil · Heliópolis, São Paulo, Brazil",
      es: "© 2026 Artesãs de Heliópolis Global · Asociación con Sebrae SP y APEX-Brasil · Heliópolis, São Paulo, Brasil",
    },
    pride:    {
      pt: "Feito com orgulho para as mulheres que constroem o futuro com as próprias mãos. ✦",
      en: "Made with pride for the women building the future with their own hands. ✦",
      es: "Hecho con orgullo para las mujeres que construyen el futuro con sus propias manos. ✦",
    },
  },
} as const;

/** Shorthand: pick the string for the current language */
export function t<T extends Record<Lang, string>>(entry: T, lang: Lang): string {
  return entry[lang];
}
