import { useState, useRef, useEffect } from "react";
import logo from "@/import/logo-mulheres-artesas-heliopolis.png";
import { type Lang, LANGS, T, t } from "@/i18n";

// ─── palette ─────────────────────────────────────────────────────────────────
const C = {
  // Paleta clara e artesanal inspirada na logo.
  bg: "#F7F0E3", // creme principal
  card: "#FFF9EF", // creme claro para cards
  muted: "#EFE3D0", // bege suave para seções
  fg: "#3A2925", // marrom para textos
  fgDim: "rgba(58,41,37,0.68)",
  fgFaint: "rgba(58,41,37,0.42)",
  primary: "#238F89", // verde/teal
  accent: "#C65A3A", // terracota
  purple: "#7A3F69", // vinho/roxo
  yellow: "#D5A62A", // mostarda
  pink: "#D47768", // coral
  blue: "#477E91", // azul artesanal
  border: "#D8C5AC", // bege mais escuro
};

// ─── data ─────────────────────────────────────────────────────────────────────
const PRODUCTS = [
  { id: 1 as const, artisan: "Maria das Graças", price: "R$ 85", priceUSD: "USD 16", category: "Acessórios", image: "https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=400&h=400&fit=crop&auto=format", tags: { pt: ["Palha", "Trançado", "Sustentável"], en: ["Straw", "Woven", "Sustainable"], es: ["Paja", "Tejido", "Sostenible"] } },
  { id: 2 as const, artisan: "Rosângela Silva", price: "R$ 120", priceUSD: "USD 23", category: "Joias", image: "https://images.unsplash.com/photo-1581475319737-4ae69b8926c7?w=400&h=400&fit=crop&auto=format", tags: { pt: ["Miçangas", "Bijuteria", "Colorido"], en: ["Beads", "Jewelry", "Colorful"], es: ["Cuentas", "Bisutería", "Colorido"] } },
  { id: 3 as const, artisan: "Aparecida Oliveira", price: "R$ 210", priceUSD: "USD 40", category: "Casa", image: "https://images.unsplash.com/photo-1552710307-537199cd41c0?w=400&h=400&fit=crop&auto=format", tags: { pt: ["Crochê", "Decoração", "Fibra"], en: ["Crochet", "Decor", "Fiber"], es: ["Crochet", "Decoración", "Fibra"] } },
  { id: 4 as const, artisan: "Fatima Conceição", price: "R$ 95", priceUSD: "USD 18", category: "Brinquedos", image: "https://images.unsplash.com/photo-1722957533029-6b62a3826d05?w=400&h=400&fit=crop&auto=format", tags: { pt: ["Pano", "Cultura Afro", "Brinquedo"], en: ["Fabric", "Afro Culture", "Toy"], es: ["Tela", "Cultura Afro", "Juguete"] } },
  { id: 5 as const, artisan: "Nilza Santos", price: "R$ 160", priceUSD: "USD 30", category: "Casa", image: "https://images.unsplash.com/photo-1781617783311-243520abc3fc?w=400&h=400&fit=crop&auto=format", tags: { pt: ["Barro", "Pintura", "Decoração"], en: ["Clay", "Painting", "Decor"], es: ["Barro", "Pintura", "Decoración"] } },
  { id: 6 as const, artisan: "Benedita Lima", price: "R$ 290", priceUSD: "USD 55", category: "Vestuário", image: "https://images.unsplash.com/photo-1508589452764-4e017240add7?w=400&h=400&fit=crop&auto=format", tags: { pt: ["Bordado", "Tecido", "Moda"], en: ["Embroidery", "Fabric", "Fashion"], es: ["Bordado", "Tela", "Moda"] } },
];

// ─── currency helpers ─────────────────────────────────────────────────────────
// Product prices are shown according to the selected language.
// PT = BRL, EN = USD, ES = EUR. The non-BRL values are intentionally kept
// as product-display values so the storefront does not change prices randomly.
const PRICE_MAP = {
  1: { brl: 85, usd: 16, eur: 14 },
  2: { brl: 120, usd: 23, eur: 21 },
  3: { brl: 210, usd: 40, eur: 37 },
  4: { brl: 95, usd: 18, eur: 17 },
  5: { brl: 160, usd: 30, eur: 28 },
  6: { brl: 290, usd: 55, eur: 51 },
} as const;

function formatProductPrice(id: keyof typeof PRICE_MAP, lang: Lang) {
  const values = PRICE_MAP[id];
  if (lang === "en") return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(values.usd);
  if (lang === "es") return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(values.eur);
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(values.brl);
}

function CurrencyLabel({ lang }: { lang: Lang }) {
  if (lang === "en") return <span>USD</span>;
  if (lang === "es") return <span>EUR</span>;
  return <span>BRL</span>;
}

// ─── lang switcher component ──────────────────────────────────────────────────
function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find(l => l.code === lang)!;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          width: 64, height: 40,
          background: open ? C.card : "transparent",
          border: `1.5px solid ${C.border}`,
          borderRadius: 6, padding: "6px 8px", boxSizing: "border-box", cursor: "pointer",
          color: C.fg, fontSize: 13, fontWeight: 600,
          transition: "border-color 0.18s, background 0.18s",
          fontFamily: "var(--font-nunito)",
        }}
        aria-label="Select language"
      >
        <span style={{ letterSpacing: "0.04em" }}>
          {lang === "pt" ? "BR PT" : lang === "en" ? "EN" : "ES"}
        </span>
        <span style={{ fontSize: 10, opacity: 0.5, marginLeft: 2, transform: open ? "rotate(180deg)" : "", display: "inline-block", transition: "transform 0.18s" }}>▼</span>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", right: 0,
          background: C.card, border: `1.5px solid ${C.border}`,
          borderRadius: 8, overflow: "hidden", minWidth: 148,
          boxShadow: "0 12px 40px rgba(58,41,37,0.18)",
          zIndex: 200,
        }}>
          {LANGS.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                width: "100%", padding: "11px 16px", background: "none",
                border: "none", cursor: "pointer", color: l.code === lang ? C.primary : C.fg,
                fontSize: 14, fontWeight: l.code === lang ? 700 : 400,
                transition: "background 0.15s",
                fontFamily: "var(--font-nunito)",
                borderLeft: l.code === lang ? `3px solid ${C.primary}` : "3px solid transparent",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = C.muted}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "none"}
            >
              <span style={{ fontSize: 18 }}>{l.flag}</span>
              <span>{l.label}</span>
              {l.code === lang && <span style={{ marginLeft: "auto", color: C.primary, fontSize: 12 }}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


// ─── utility header buttons ───────────────────────────────────────────────────
function IconButton({
  ariaLabel,
  children,
  onClick,
  active = false,
}: {
  ariaLabel: string;
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        padding: 0,
        background: active ? C.card : "transparent",
        border: `1.5px solid ${C.border}`,
        borderRadius: 6,
        color: active ? C.primary : C.fg,
        cursor: "pointer",
        transition: "border-color 0.18s, background 0.18s, color 0.18s, transform 0.18s",
        fontFamily: "var(--font-nunito)",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = C.primary;
        e.currentTarget.style.borderColor = C.primary;
        e.currentTarget.style.background = C.card;
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = active ? C.primary : C.fg;
        e.currentTarget.style.borderColor = C.border;
        e.currentTarget.style.background = active ? C.card : "transparent";
        e.currentTarget.style.transform = "";
      }}
    >
      {children}
    </button>
  );
}

function CartButton({ lang, count }: { lang: Lang; count: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);
  const title = lang === "en" ? "Shopping cart" : lang === "es" ? "Carrito" : "Carrinho";
  const empty = lang === "en" ? "Your cart is empty" : lang === "es" ? "Tu carrito está vacío" : "Seu carrinho está vazio";
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <IconButton ariaLabel={title} onClick={() => setOpen(v => !v)} active={open}>
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 5h2l2 11h10l3-8H7" />
          <circle cx="10" cy="20" r="1.2" />
          <circle cx="18" cy="20" r="1.2" />
        </svg>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.accent, transform: "translateY(-7px)" }}>{count}</span>
      </IconButton>
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, width: 230, background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "16px", boxShadow: "0 12px 40px rgba(58,41,37,0.18)", zIndex: 200 }}>
          <strong style={{ display: "block", fontSize: 14 }}>{title}</strong>
          <span style={{ display: "block", color: C.fgDim, fontSize: 13, marginTop: 4 }}>{count === 0 ? empty : `${count} ${lang === "en" ? "item(s) added" : lang === "es" ? "artículo(s) añadido(s)" : "item(ns) adicionado(s)"}`}</span>
        </div>
      )}
    </div>
  );
}

type ChatMessage = {
  id: number;
  author: "user" | "assistant";
  text: string;
  translations?: Partial<Record<Lang, string>>;
};

const CHAT_FALLBACKS: Record<string, Record<Lang, string>> = {
  "como posso ajudar": { pt: "Como posso ajudar?", en: "How can I help?", es: "¿Cómo puedo ayudar?" },
  "quero comprar": { pt: "Quero comprar", en: "I want to buy", es: "Quiero comprar" },
  "quero cadastrar": { pt: "Quero cadastrar meu produto", en: "I want to register my product", es: "Quiero registrar mi producto" },
  "pedido atrasado": { pt: "Pedido atrasado", en: "Delayed order", es: "Pedido atrasado" },
  "problemas com meu pedido": { pt: "Problemas com meu pedido", en: "Problems with my order", es: "Problemas con mi pedido" },
  feedback: { pt: "Feedback", en: "Feedback", es: "Comentarios" },
};

function localChatTranslation(text: string, target: Lang) {
  const match = CHAT_FALLBACKS[text.trim().toLowerCase()];
  return match?.[target] ?? text;
}

async function translateChatMessage(text: string, source: Lang, target: Lang) {
  if (source === target) return text;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Translation service returned ${response.status}`);
    const data = await response.json() as { responseData?: { translatedText?: string } };
    const translated = data.responseData?.translatedText?.trim();
    return translated || localChatTranslation(text, target);
  } catch (error) {
    console.warn("Chat translation service unavailable; using local fallback.", error);
    return localChatTranslation(text, target);
  }
}

function detectChatLanguage(text: string, preferred: Lang): Lang {
  const normalized = text.toLowerCase();
  if (/[¿¡]|(\b(el|la|los|las|una|quiero|ayuda|comentarios|conmigo)\b)/.test(normalized)) return "es";
  if (/\b(the|order|delayed|problem|feedback|help|my)\b/.test(normalized)) return "en";
  if (/[ãõçáéíóú]|(\b(meu|minha|atrasado|ajuda|problema|feedback)\b)/.test(normalized)) return "pt";
  return preferred;
}

function CustomerSupport({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const labels = {
    title: "Chat",
    subtitle: lang === "en" ? "How can I help you?" : lang === "es" ? "¿En qué puedo ayudarte?" : "Em que posso te ajudar?",
    placeholder: lang === "en" ? "Write your message..." : lang === "es" ? "Escribe tu mensaje..." : "Escreva sua mensagem...",
    send: lang === "en" ? "Send" : lang === "es" ? "Enviar" : "Enviar",
    translating: lang === "en" ? "Translating..." : lang === "es" ? "Traduciendo..." : "Traduzindo...",
    welcome: lang === "en" ? "Hello! I can help with products, registration and exporting. Your message is translated into all three languages." : lang === "es" ? "¡Hola! Puedo ayudar con productos, registro y exportación. Tu mensaje se traduce a los tres idiomas." : "Olá! Posso ajudar com produtos, cadastro e exportação. Sua mensagem é traduzida para os três idiomas.",
    topics: lang === "en" ? "Choose a topic or write your message" : lang === "es" ? "Elige un tema o escribe tu mensaje" : "Escolha um assunto ou escreva sua mensagem",
  };
  const languageNames: Record<Lang, string> = { pt: "Português", en: "English", es: "Español" };
  const topics = [
    { key: "pedido atrasado", label: lang === "en" ? "Delayed order" : lang === "es" ? "Pedido atrasado" : "Pedido atrasado" },
    { key: "problemas com meu pedido", label: lang === "en" ? "Problems with my order" : lang === "es" ? "Problemas con mi pedido" : "Problemas com meu pedido" },
    { key: "feedback", label: lang === "en" ? "Feedback" : lang === "es" ? "Comentarios" : "Feedback" },
    { key: "quero comprar", label: lang === "en" ? "Buying a product" : lang === "es" ? "Comprar un producto" : "Comprar uma peça" },
  ];

  async function sendMessage(messageText = input) {
    const text = messageText.trim();
    if (!text || sending) return;
    setInput("");
    setSending(true);
    const id = Date.now();
    const sourceLang = detectChatLanguage(text, lang);
    const targetLanguages = LANGS.map(item => item.code);
    const translations = Object.fromEntries(await Promise.all(targetLanguages.map(async target => [target, await translateChatMessage(text, sourceLang, target)]))) as Partial<Record<Lang, string>>;
    setMessages(current => [...current, { id, author: "user", text, translations }]);
    const reply = lang === "en" ? "I am here to help. Tell me whether you want to buy a piece, register a product or learn about exporting." : lang === "es" ? "Estoy aquí para ayudar. Cuéntame si quieres comprar una pieza, registrar un producto o saber sobre exportación." : "Estou aqui para ajudar. Diga se quer comprar uma peça, cadastrar um produto ou saber mais sobre exportação.";
    setMessages(current => [...current, { id: id + 1, author: "assistant", text: reply }]);
    setSending(false);
  }

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: 22,
        bottom: 22,
        zIndex: 300
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-label={labels.title}
        style={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          border: `2px solid ${C.primary}`,
          background: C.primary,
          color: "#FFF9EF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 6px 22px rgba(35,143,137,0.28)",
          transition: "transform 0.18s, box-shadow 0.18s"
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 9px 28px rgba(35,143,137,0.35)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "0 6px 22px rgba(35,143,137,0.28)";
        }}
      >
        <svg aria-hidden="true" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 2v-4.1A7.5 7.5 0 1 1 20 11.5Z" />
          <path d="M8 11.5h.01M12 11.5h.01M16 11.5h.01" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 66,
            width: "min(360px, calc(100vw - 32px))",
            background: C.card,
            border: `1.5px solid ${C.border}`,
            borderRadius: 12,
            padding: 0,
            boxShadow: "0 12px 40px rgba(58,41,37,0.18)"
          }}
        >
          <div style={{ padding: "16px 18px 12px", borderBottom: `1px solid ${C.border}` }}>
            <strong style={{ display: "block", fontSize: 16, color: C.fg }}>{labels.title}</strong>
            <span style={{ display: "block", color: C.fgDim, fontSize: 12.5, marginTop: 4, lineHeight: 1.45 }}>{labels.subtitle}</span>
          </div>
          <div style={{ maxHeight: 280, overflowY: "auto", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.length === 0 && <div style={{ color: C.fgDim, fontSize: 13, lineHeight: 1.5 }}>{labels.welcome}</div>}
            {messages.length === 0 && (
              <div>
                <div style={{ color: C.fgDim, fontSize: 11.5, marginBottom: 7 }}>{labels.topics}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {topics.map(topic => (
                    <button key={topic.key} type="button" onClick={() => void sendMessage(topic.label)} style={{ border: `1px solid ${C.primary}`, borderRadius: 20, background: "transparent", color: C.primary, padding: "6px 9px", fontSize: 11.5, cursor: "pointer", fontFamily: "var(--font-nunito)" }}>
                      {topic.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map(message => (
              <div key={message.id} style={{ alignSelf: message.author === "user" ? "flex-end" : "flex-start", maxWidth: "92%", background: message.author === "user" ? `${C.primary}18` : C.muted, borderRadius: 9, padding: "9px 10px", fontSize: 12.5, lineHeight: 1.45 }}>
                <div style={{ fontWeight: 700, marginBottom: 3 }}>{message.author === "user" ? message.text : message.text}</div>
                {message.translations && <div style={{ color: C.fgDim, fontSize: 11, borderTop: `1px solid ${C.border}`, paddingTop: 5, marginTop: 5 }}>
                  {LANGS.map(item => <div key={item.code}><strong>{languageNames[item.code]}:</strong> {message.translations?.[item.code]}</div>)}
                </div>}
              </div>
            ))}
            {sending && <div style={{ color: C.fgDim, fontSize: 12 }}>{labels.translating}</div>}
          </div>
          <div style={{ padding: "10px 14px 14px", borderTop: `1px solid ${C.border}` }}>
            <div style={{ display: "flex", gap: 7 }}>
              <input value={input} onChange={event => setInput(event.target.value)} onKeyDown={event => { if (event.key === "Enter") void sendMessage(); }} placeholder={labels.placeholder} style={{ minWidth: 0, flex: 1, padding: "10px", border: `1px solid ${C.border}`, borderRadius: 6, background: C.bg, color: C.fg, outline: "none", fontFamily: "var(--font-nunito)" }} />
              <button type="button" onClick={() => void sendMessage()} disabled={sending || !input.trim()} style={{ border: "none", borderRadius: 6, padding: "0 13px", background: sending || !input.trim() ? C.border : C.primary, color: C.bg, fontWeight: 700, cursor: sending || !input.trim() ? "default" : "pointer" }}>{labels.send}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── user menu ────────────────────────────────────────────────────────────────
type AccountRole = "buyer" | "artisan";

function UserMenu({ lang, signedIn, role, onLogin, onCreateAccount, onArtisanSignup, onOpenAccount }: { lang: Lang; signedIn: boolean; role: AccountRole | null; onLogin: () => void; onCreateAccount: () => void; onArtisanSignup: () => void; onOpenAccount: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const close = () => setOpen(false);

  const itemStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: "11px 16px",
    background: "none",
    border: "none",
    color: C.fgDim,
    fontSize: 13.5,
    fontWeight: 500,
    textAlign: "left",
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "var(--font-nunito)",
    transition: "background 0.15s, color 0.15s",
    boxSizing: "border-box",
  };

  const headingStyle = {
    padding: "10px 16px 5px",
    color: C.fgFaint,
    fontSize: 10.5,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-label={lang === "pt" ? "Abrir menu da conta" : lang === "en" ? "Open account menu" : "Abrir menú de cuenta"}
        aria-expanded={open}
        style={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: `1.5px solid ${C.border}`,
          borderRadius: 6,
          color: signedIn ? C.primary : C.fg,
          cursor: "pointer",
          transition: "border-color 0.18s, background 0.18s",
          fontFamily: "var(--font-nunito)",
        }}
      >
        <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c.7-3.5 3.2-5.5 7-5.5s6.3 2 7 5.5" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          right: 0,
          width: 230,
          background: C.card,
          border: `1.5px solid ${C.border}`,
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "0 12px 40px rgba(58,41,37,0.18)",
          zIndex: 200,
        }}>
          <div style={headingStyle}>{signedIn ? (role === "artisan" ? (lang === "pt" ? "Conta da artesã" : lang === "en" ? "Artisan account" : "Cuenta de artesana") : (lang === "pt" ? "Conta de comprador" : lang === "en" ? "Buyer account" : "Cuenta de comprador")) : (lang === "pt" ? "Minha conta" : lang === "en" ? "My account" : "Mi cuenta")}</div>
          {signedIn && <button type="button" onClick={() => { close(); onOpenAccount(); }} style={itemStyle}>{role === "artisan" ? (lang === "pt" ? "Painel da artesã" : lang === "en" ? "Artisan dashboard" : "Panel de artesana") : (lang === "pt" ? "Minha conta" : lang === "en" ? "My account" : "Mi cuenta")}</button>}
          {signedIn && <div style={{ padding: "8px 16px 12px", color: C.primary, fontSize: 13, fontWeight: 700 }}>✓ {lang === "pt" ? "Inscrição enviada" : lang === "en" ? "Application sent" : "Inscripción enviada"}</div>}
          <button type="button" onClick={() => { close(); onCreateAccount(); }} style={itemStyle}
            onMouseEnter={e => { e.currentTarget.style.background = C.muted; e.currentTarget.style.color = C.fg; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = C.fgDim; }}>
            {lang === "pt" ? "Inscrever-se" : lang === "en" ? "Sign up" : "Registrarse"}
          </button>
          <button type="button" onClick={() => { close(); onLogin(); }} style={itemStyle}
            onMouseEnter={e => { e.currentTarget.style.background = C.muted; e.currentTarget.style.color = C.fg; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = C.fgDim; }}>
            {lang === "pt" ? "Entrar" : lang === "en" ? "Log in" : "Iniciar sesión"}
          </button>

          <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 4 }} />
          <div style={headingStyle}>{lang === "pt" ? "Programa exclusivo" : lang === "en" ? "Exclusive program" : "Programa exclusivo"}</div>
          <div style={{ padding: "4px 16px 9px", color: C.fgDim, fontSize: 11.5, lineHeight: 1.4 }}>{lang === "pt" ? "Programa exclusivo para mulheres artesãs que moram em Heliópolis." : lang === "en" ? "Exclusive program for women artisans who live in Heliópolis." : "Programa exclusivo para mujeres artesanas que viven en Heliópolis."}</div>
          <button type="button" onClick={() => { close(); onArtisanSignup(); }} style={itemStyle}
            onMouseEnter={e => { e.currentTarget.style.background = C.muted; e.currentTarget.style.color = C.fg; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = C.fgDim; }}>
            {lang === "pt" ? "Inscrever-se" : lang === "en" ? "Sign up" : "Registrarse"}
          </button>
          <button type="button" onClick={() => { close(); onLogin(); }} style={{ ...itemStyle, paddingBottom: 14 }}
            onMouseEnter={e => { e.currentTarget.style.background = C.muted; e.currentTarget.style.color = C.fg; }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = C.fgDim; }}>
            {lang === "pt" ? "Entrar" : lang === "en" ? "Log in" : "Iniciar sesión"}
          </button>
        </div>
      )}
    </div>
  );
}


function QuemSomosPage({ lang, onJoin }: { lang: Lang; onJoin: () => void }) {
  const content = T.aboutPage;

  return (
    <main className="new-page">
      <section style={{ padding: "82px 24px 88px", background: C.bg }}>
        <div className="about-page-hero" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>{t(content.eyebrow, lang)}</div>
            <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2.5rem, 5vw, 4.4rem)", lineHeight: 1.04, margin: "14px 0 22px", letterSpacing: "-0.03em" }}>
              {t(content.title, lang)}
            </h1>
            <p style={{ color: C.fgDim, fontSize: 16, lineHeight: 1.85, maxWidth: 600, margin: 0 }}>{t(content.intro, lang)}</p>
            <p style={{ color: C.fgDim, fontSize: 16, lineHeight: 1.85, maxWidth: 600, margin: "16px 0 0" }}>{t(content.story, lang)}</p>
            <p style={{ color: C.primary, fontSize: 14, lineHeight: 1.6, fontWeight: 700, maxWidth: 600, margin: "18px 0 0" }}>{t(content.eligibility, lang)}</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&h=800&fit=crop&auto=format"
              alt={t(content.imageAlt, lang)}
              style={{ width: "100%", height: 470, objectFit: "cover", borderRadius: 18, display: "block" }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 82px", background: C.bg }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>{lang === "en" ? "OUR PURPOSE" : lang === "es" ? "NUESTRO PROPÓSITO" : "NOSSO PROPÓSITO"}</div>
            <p style={{ color: C.fgDim, fontSize: 16, lineHeight: 1.85, margin: "14px 0 0" }}>{t(content.development, lang)}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "82px 24px 96px", background: C.muted }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>{t(content.how, lang)}</div>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.08, margin: "12px 0 42px", maxWidth: 760 }}>{t(content.howTitle, lang)}</h2>
          <div className="program-steps-grid">
            {content.steps.map(({ number, title, description }) => (
              <article key={number} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24, minHeight: 185 }}>
                <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.12em" }}>{number}</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 20, margin: "14px 0 8px" }}>{t(title, lang)}</h3>
                <p style={{ color: C.fgDim, fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>{t(description, lang)}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 42 }}>
            <p style={{ color: C.fgDim, fontSize: 14, lineHeight: 1.6, maxWidth: 600, margin: "0 auto 18px" }}>{t(content.joinPrompt, lang)}</p>
            <button type="button" onClick={onJoin} style={{ background: C.primary, color: C.bg, border: "none", borderRadius: 6, padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-nunito)" }}>
              {t(content.button, lang)}
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .program-steps-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        @media (max-width: 900px) {
          .about-page-hero { grid-template-columns: 1fr !important; gap: 36px !important; }
          .program-steps-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .program-steps-grid { grid-template-columns: 1fr; }
          .about-page-hero img { height: 340px !important; }
        }
      `}</style>
    </main>
  );
}

function ProdutosPageNova({ lang, onJoin }: { lang: Lang; onJoin: () => void }) {
  const content = T.productsPage;

  return (
    <main className="new-page">
      <section style={{ padding: "82px 24px 44px", background: C.bg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>{t(content.eyebrow, lang)}</div>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2.5rem, 5vw, 4.3rem)", lineHeight: 1.04, margin: "14px 0 18px", letterSpacing: "-0.03em" }}>{t(content.title, lang)}</h1>
          <p style={{ color: C.fgDim, fontSize: 16, lineHeight: 1.8, maxWidth: 720, margin: 0 }}>{t(content.intro, lang)}</p>
        </div>
      </section>
      <section style={{ padding: "28px 24px 96px", background: C.bg }}>
        <div className="new-products-grid" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 22 }}>
          {PRODUCTS.map(p => (
            <article key={p.id} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
              <img src={p.image} alt={t(T.products.productNames[p.id], lang)} style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }} />
              <div style={{ padding: 20 }}>
                <div style={{ color: C.primary, fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t(T.products.categoryNames[p.category as keyof typeof T.products.categoryNames], lang)}</div>
                <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 21, margin: "8px 0 5px" }}>{t(T.products.productNames[p.id], lang)}</h2>
                <p style={{ color: C.fgDim, fontSize: 12.5, margin: 0 }}>{t(T.products.by, lang)} {p.artisan}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: 18 }}>
                  <strong style={{ color: C.primary, fontFamily: "var(--font-fraunces)", fontSize: 21 }}>{formatProductPrice(p.id, lang)}</strong>
                  <button type="button" onClick={onJoin} style={{ padding: "9px 14px", borderRadius: 6, background: "transparent", border: `1.5px solid ${C.primary}`, color: C.primary, fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "var(--font-nunito)" }}>{t(content.action, lang)}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <style>{`
        @media (max-width: 900px) { .new-products-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .new-products-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  );
}

function ArtisanSignupPage({ lang, onSubmitted }: { lang: Lang; onSubmitted: () => void }) {
  const fields = [
    { key: "name", source: T.signup.fields.name, type: "text" },
    { key: "whats", source: T.signup.fields.whats, type: "tel" },
    { key: "email", source: T.signup.fields.email, type: "email" },
    { key: "instagram", source: T.signup.fields.instagram, type: "text" },
    { key: "address", source: T.signup.fields.address, type: "text" },
    { key: "product", source: T.signup.fields.product, type: "text" },
  ] as const;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});
  const copy = {
    title: lang === "en" ? "Apply to the exclusive program" : lang === "es" ? "Inscríbete en el programa exclusivo" : "Inscreva-se no programa exclusivo",
    eligibility: lang === "en" ? "This program is exclusively for women artisans who live in Heliópolis." : lang === "es" ? "Este programa es exclusivo para mujeres artesanas que viven en Heliópolis." : "Este programa é exclusivo para mulheres artesãs que moram em Heliópolis.",
    confirmation: lang === "en" ? "I confirm that I am a woman artisan living in Heliópolis." : lang === "es" ? "Confirmo que soy una mujer artesana y vivo en Heliópolis." : "Confirmo que sou uma mulher artesã e moro em Heliópolis.",
    submit: lang === "en" ? "Apply" : lang === "es" ? "Inscribirme" : "Inscrever-se",
    success: lang === "en" ? "Application sent successfully! Our team will contact you soon using the information provided." : lang === "es" ? "¡Inscripción realizada con éxito! Nuestro equipo se pondrá en contacto contigo pronto con los datos informados." : "Inscrição enviada com sucesso! Nossa equipe entrará em contato em breve pelos dados informados.",
  };
  function submit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
    onSubmitted();
  }
  return (
    <main className="new-page">
      <section style={{ minHeight: "calc(100vh - 100px)", padding: "76px 24px 96px", background: C.bg }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>{t(T.signup.fine, lang)}</div>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.05, margin: "14px 0 16px" }}>{copy.title}</h1>
          <p style={{ color: C.fgDim, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{copy.eligibility}</p>
          {submitted ? (
            <div style={{ marginTop: 28, padding: 28, borderRadius: 12, background: `${C.primary}12`, border: `1px solid ${C.primary}44`, color: C.fgDim, lineHeight: 1.7 }}>{copy.success}</div>
          ) : (
            <form onSubmit={submit} style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
              {fields.map(({ key, source, type }) => (
                <label key={key} style={{ color: C.fgDim, fontSize: 13, fontWeight: 600 }}>{t(source.label, lang)}
                  <input type={type} required={key !== "instagram"} placeholder={t(source.placeholder, lang)} value={form[key] ?? ""} onChange={event => setForm(previous => ({ ...previous, [key]: event.target.value }))} style={{ display: "block", width: "100%", marginTop: 6, padding: "13px 15px", border: `1.5px solid ${C.border}`, borderRadius: 8, background: C.muted, color: C.fg, boxSizing: "border-box", fontFamily: "var(--font-nunito)" }} />
                </label>
              ))}
              {([
                { key: "residence", source: T.signup.fields.residence, accept: "image/*,.pdf", required: true },
                { key: "artImages", source: T.signup.fields.artImages, accept: "image/*", required: true },
              ] as const).map(({ key, source, accept, required }) => (
                <label key={key} style={{ color: C.fgDim, fontSize: 13, fontWeight: 600 }}>{t(source.label, lang)}
                  <input type="file" accept={accept} required={required} multiple={key === "artImages"} style={{ display: "block", width: "100%", marginTop: 6, padding: "10px", border: `1.5px solid ${C.border}`, borderRadius: 8, background: C.muted, color: C.fg, boxSizing: "border-box", fontFamily: "var(--font-nunito)" }} />
                </label>
              ))}
              <label style={{ display: "flex", alignItems: "flex-start", gap: 9, color: C.fgDim, fontSize: 13, lineHeight: 1.45, cursor: "pointer" }}>
                <input type="checkbox" required style={{ marginTop: 3, accentColor: C.primary }} />
                <span>{copy.confirmation}</span>
              </label>
              <button type="submit" style={{ marginTop: 8, padding: 15, border: "none", borderRadius: 6, background: C.primary, color: C.bg, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-nunito)" }}>{copy.submit}</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

function AccountSignupPage({ lang, onCreated }: { lang: Lang; onCreated: () => void }) {
  const [created, setCreated] = useState(false);
  const labels = lang === "en" ? { title: "Create your account", sub: "Sign up to follow orders, favorites and Brazilian art news.", name: "Full name", email: "Email", password: "Password", submit: "Create account", success: "Account created successfully!" } : lang === "es" ? { title: "Crea tu cuenta", sub: "Regístrate para seguir pedidos, favoritos y novedades del arte brasileño.", name: "Nombre completo", email: "Correo electrónico", password: "Contraseña", submit: "Crear cuenta", success: "¡Cuenta creada con éxito!" } : { title: "Crie sua conta", sub: "Cadastre-se para acompanhar pedidos, favoritos e novidades da arte brasileira.", name: "Seu nome completo", email: "E-mail", password: "Senha", submit: "Criar conta", success: "Conta criada com sucesso!" };
  function submit(event: React.FormEvent) {
    event.preventDefault();
    setCreated(true);
    onCreated();
  }
  return (
    <main className="new-page">
      <section style={{ minHeight: "calc(100vh - 100px)", padding: "86px 24px", background: C.bg }}>
        <div style={{ maxWidth: 510, margin: "0 auto" }}>
          <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>{t(T.signup.account.label, lang)}</div>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2.4rem, 5vw, 4rem)", margin: "14px 0 16px" }}>{labels.title}</h1>
          <p style={{ color: C.fgDim, lineHeight: 1.8 }}>{labels.sub}</p>
          {created ? <div style={{ marginTop: 30, padding: 24, borderRadius: 12, background: `${C.primary}12`, border: `1px solid ${C.primary}44`, color: C.primary, fontWeight: 700 }}>✓ {labels.success}</div> : (
            <form onSubmit={submit} style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 14 }}>
              {[{ label: labels.name, type: "text" }, { label: labels.email, type: "email" }, { label: labels.password, type: "password" }].map(field => <label key={field.label} style={{ color: C.fgDim, fontSize: 13, fontWeight: 600 }}>{field.label}<input type={field.type} required style={{ display: "block", width: "100%", marginTop: 6, padding: "13px 15px", border: `1.5px solid ${C.border}`, borderRadius: 8, background: C.card, color: C.fg, boxSizing: "border-box", fontFamily: "var(--font-nunito)" }} /></label>)}
              <button type="submit" style={{ marginTop: 8, padding: 14, border: "none", borderRadius: 6, background: C.primary, color: C.bg, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>{labels.submit}</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

function LoginPage({ lang, onLogin, onCreateAccount }: { lang: Lang; onLogin: (role: AccountRole) => void; onCreateAccount: () => void }) {
  const copy = {
    eyebrow: lang === "en" ? "MY ACCOUNT" : lang === "es" ? "MI CUENTA" : "MINHA CONTA",
    title: lang === "en" ? "Welcome back." : lang === "es" ? "Bienvenida de nuevo." : "Bem-vinda de volta.",
    intro: lang === "en" ? "Access your account to manage your purchases or your artisan profile." : lang === "es" ? "Accede a tu cuenta para gestionar tus compras o tu perfil de artesana." : "Entre na sua conta para acompanhar suas compras ou gerenciar seu perfil de artesã.",
    email: lang === "en" ? "Email" : lang === "es" ? "Correo electrónico" : "E-mail",
    password: lang === "en" ? "Password" : lang === "es" ? "Contraseña" : "Senha",
    submit: lang === "en" ? "Log in" : lang === "es" ? "Iniciar sesión" : "Entrar",
    create: lang === "en" ? "I don't have an account yet" : lang === "es" ? "Todavía no tengo una cuenta" : "Ainda não tenho uma conta",
    success: lang === "en" ? "You are logged in!" : lang === "es" ? "¡Has iniciado sesión!" : "Você entrou na sua conta!",
    testAccess: lang === "en" ? "Test accounts — artisan: teste.artesa@heliopolis.com · 123456 | buyer: teste.usuario@heliopolis.com · 123456" : lang === "es" ? "Cuentas de prueba — artesana: teste.artesa@heliopolis.com · 123456 | comprador: teste.usuario@heliopolis.com · 123456" : "Contas de teste — artesã: teste.artesa@heliopolis.com · 123456 | comprador: teste.usuario@heliopolis.com · 123456",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoggedIn(true);
    const normalizedEmail = email.trim().toLowerCase();
    const role = normalizedEmail === "teste.artesa@heliopolis.com" && password === "123456" ? "artisan" : "buyer";
    onLogin(role);
  }

  return (
    <main className="new-page">
      <section style={{ minHeight: "calc(100vh - 100px)", padding: "86px 24px", background: C.bg }}>
        <div style={{ maxWidth: 510, margin: "0 auto" }}>
          <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.14em" }}>{copy.eyebrow}</div>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.04, margin: "14px 0 18px" }}>{copy.title}</h1>
          <p style={{ color: C.fgDim, fontSize: 16, lineHeight: 1.8, margin: 0 }}>{copy.intro}</p>
          {loggedIn ? (
            <div style={{ marginTop: 32, padding: 24, borderRadius: 12, background: `${C.primary}12`, border: `1px solid ${C.primary}44`, color: C.primary, fontWeight: 700 }}>✓ {copy.success}</div>
          ) : (
            <form onSubmit={submit} style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
              <label style={{ color: C.fgDim, fontSize: 13, fontWeight: 600 }}>{copy.email}
                <input type="email" required value={email} onChange={event => setEmail(event.target.value)} style={{ display: "block", width: "100%", marginTop: 6, padding: "13px 15px", border: `1.5px solid ${C.border}`, borderRadius: 8, background: C.card, color: C.fg, boxSizing: "border-box", fontFamily: "var(--font-nunito)" }} />
              </label>
              <label style={{ color: C.fgDim, fontSize: 13, fontWeight: 600 }}>{copy.password}
                <input type="password" required value={password} onChange={event => setPassword(event.target.value)} style={{ display: "block", width: "100%", marginTop: 6, padding: "13px 15px", border: `1.5px solid ${C.border}`, borderRadius: 8, background: C.card, color: C.fg, boxSizing: "border-box", fontFamily: "var(--font-nunito)" }} />
              </label>
              <button type="submit" style={{ marginTop: 8, padding: 14, border: "none", borderRadius: 6, background: C.primary, color: C.bg, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-nunito)" }}>{copy.submit}</button>
              <p style={{ color: C.fgFaint, fontSize: 12, lineHeight: 1.5, margin: "2px 0 0" }}>{copy.testAccess}</p>
              <button type="button" onClick={onCreateAccount} style={{ padding: 12, border: `1.5px solid ${C.primary}`, borderRadius: 6, background: "transparent", color: C.primary, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-nunito)" }}>{copy.create}</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

function AccountDashboard({ lang, role, onBack }: { lang: Lang; role: AccountRole; onBack: () => void }) {
  const artisan = role === "artisan";
  const copy = artisan
    ? {
        eyebrow: lang === "en" ? "ARTISAN DASHBOARD" : lang === "es" ? "PANEL DE ARTESANA" : "PAINEL DA ARTESÃ",
        title: lang === "en" ? "Turn your creations into new opportunities." : lang === "es" ? "Convierte tus creaciones en nuevas oportunidades." : "Transforme suas criações em novas oportunidades.",
        intro: lang === "en" ? "A simple space to publish your pieces, understand fees and prepare beautiful photos." : lang === "es" ? "Un espacio sencillo para publicar tus piezas, entender las tarifas y preparar buenas fotos." : "Um espaço simples para publicar suas peças, entender as taxas e preparar boas fotos.",
        cards: lang === "en" ? [["+ Add product", "Publish photos, price, materials and the story behind your piece."], ["Fees and sales", "See platform fees and what you receive from each sale."], ["Photo guide", "Use natural light, a clean background and show details of the handmade work."], ["My publications", "Review, edit or pause products already published."]] : lang === "es" ? [["+ Añadir producto", "Publica fotos, precio, materiales y la historia de tu pieza."], ["Tarifas y ventas", "Consulta las tarifas de la plataforma y lo que recibes por cada venta."], ["Guía de fotos", "Usa luz natural, un fondo limpio y muestra los detalles del trabajo artesanal."], ["Mis publicaciones", "Revisa, edita o pausa los productos ya publicados."]] : [["+ Enviar produto", "Publique fotos, preço, materiais e a história da sua peça."], ["Taxas e vendas", "Veja as taxas da plataforma e quanto você recebe em cada venda."], ["Como tirar fotos", "Use luz natural, fundo limpo e mostre os detalhes do trabalho manual."], ["Minhas publicações", "Revise, edite ou pause produtos que já foram publicados."]],
      }
    : {
        eyebrow: lang === "en" ? "BUYER ACCOUNT" : lang === "es" ? "CUENTA DE COMPRADOR" : "CONTA DE COMPRADOR",
        title: lang === "en" ? "Welcome to your space for Brazilian craft." : lang === "es" ? "Bienvenida a tu espacio de artesanía brasileña." : "Bem-vinda ao seu espaço de arte brasileira.",
        intro: lang === "en" ? "Discover products, follow orders and keep your account details in one place." : lang === "es" ? "Descubre productos, sigue pedidos y administra tus datos en un solo lugar." : "Descubra produtos, acompanhe pedidos e organize seus dados em um só lugar.",
        cards: lang === "en" ? [["My orders", "Follow delivery and see your purchase history."], ["Favorites", "Save pieces and artisans you want to visit again."], ["Payment cards", "Manage cards saved for secure checkout."], ["Profile settings", "Edit your photo, language and personal information."]] : lang === "es" ? [["Mis pedidos", "Sigue la entrega y consulta tu historial de compras."], ["Favoritos", "Guarda piezas y artesanas para volver cuando quieras."], ["Tarjetas de pago", "Gestiona las tarjetas guardadas para pagar con seguridad."], ["Configuración del perfil", "Edita tu foto, idioma e información personal."]] : [["Meus pedidos", "Acompanhe entregas e veja seu histórico de compras."], ["Favoritos", "Guarde peças e artesãs para visitar novamente."], ["Cartões para pagamento", "Gerencie os cartões salvos para comprar com segurança."], ["Configurações da conta", "Edite sua foto, idioma de origem e informações pessoais."]],
      };

  return (
    <main className="new-page">
      <section style={{ padding: "76px 24px 100px", background: C.bg, minHeight: "calc(100vh - 100px)" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <button type="button" onClick={onBack} style={{ border: "none", background: "none", color: C.primary, cursor: "pointer", padding: 0, fontWeight: 700, fontFamily: "var(--font-nunito)" }}>← {lang === "pt" ? "Voltar para a página inicial" : lang === "en" ? "Back to home" : "Volver al inicio"}</button>
          <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", marginTop: 48 }}>{copy.eyebrow}</div>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2.4rem, 5vw, 4.2rem)", lineHeight: 1.05, maxWidth: 780, margin: "14px 0 18px" }}>{copy.title}</h1>
          <p style={{ color: C.fgDim, fontSize: 16, lineHeight: 1.8, maxWidth: 670, marginBottom: 42 }}>{copy.intro}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
            {copy.cards.map(([title, description]) => (
              <article key={title} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24, minHeight: 145 }}>
                <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 22, margin: "0 0 10px" }}>{title}</h2>
                <p style={{ color: C.fgDim, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 600px) { .new-page article { min-height: auto !important; } .new-page section > div > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  );
}

// ─── app ─────────────────────────────────────────────────────────────────────
type ArtisanDashboardSection = "overview" | "orders" | "messages" | "products" | "sales" | "export" | "help";
type ArtisanProductStatus = "Publicado" | "Rascunho" | "Pausado";
type ArtisanDashboardProduct = { id: string; sourceId: number; name: string; image: string; status: ArtisanProductStatus; quantity: number; price: string; category: string };
type ArtisanUploadImage = { id: number; src: string; name: string };

function ArtisanDashboard({ lang, onBack }: { lang: Lang; onBack: () => void }) {
  const [section, setSection] = useState<ArtisanDashboardSection>("overview");
  const [products, setProducts] = useState<ArtisanDashboardProduct[]>(() => PRODUCTS.map((product, index) => ({
    id: `product-${product.id}`, sourceId: product.id, name: "", image: product.image,
    status: index === 4 ? "Rascunho" : "Publicado", quantity: [4, 2, 6, 0, 3, 8][index], price: product.price, category: product.category,
  })));
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState<string | null>(null);
  const [messageOpen, setMessageOpen] = useState<number | null>(null);
  const [toast, setToast] = useState("");
  const [formError, setFormError] = useState("");
  const [uploadImages, setUploadImages] = useState<ArtisanUploadImage[]>([]);
  const [mainImage, setMainImage] = useState(0);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState({ title: "", category: "Acessórios", price: "", quantity: "1", material: "", techniques: "", description: "", dimensions: "", productionTime: "" });
  const [exportCosts, setExportCosts] = useState({ freight: "38", taxes: "12", documentation: "8" });

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 3400);
    return () => window.clearTimeout(timer);
  }, [toast]);
  const goTo = (target: ArtisanDashboardSection) => {
    setSection(target);
    window.setTimeout(() => document.getElementById("artisan-dashboard-content")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };
  const openNewProduct = () => {
    setEditingProductId(null);
    setNewProduct({ title: "", category: "Acessórios", price: "", quantity: "1", material: "", techniques: "", description: "", dimensions: "", productionTime: "" });
    setFormError("");
    setProductModalOpen(true);
  };
  const openEditProduct = (product: ArtisanDashboardProduct) => {
    const source = PRODUCTS.find(item => item.id === product.sourceId) || PRODUCTS[0];
    setEditingProductId(product.id);
    setNewProduct(previous => ({
      ...previous,
      title: product.name || t(T.products.productNames[source.id], lang),
      category: product.category,
      price: product.price.replace(/^R\$\s*/, ""),
      quantity: String(product.quantity),
    }));
    setUploadImages([]);
    setMainImage(0);
    setFormError("");
    setProductModalOpen(true);
  };
  const closeNewProduct = () => { setProductModalOpen(false); setEditingProductId(null); setUploadImages([]); setMainImage(0); setFormError(""); };
  const updateNewProduct = (key: keyof typeof newProduct, value: string) => setNewProduct(previous => ({ ...previous, [key]: value }));
  const onUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []).slice(0, 5 - uploadImages.length);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => setUploadImages(current => current.length < 5 ? [...current, { id: Date.now() + Math.random(), src: String(reader.result), name: file.name }] : current);
      reader.readAsDataURL(file);
    });
    event.currentTarget.value = "";
  };
  const removeImage = (id: number) => {
    setUploadImages(current => current.filter(image => image.id !== id));
    setMainImage(index => Math.max(0, Math.min(index, uploadImages.length - 2)));
  };
  const moveImage = (imageIndex: number, direction: -1 | 1) => {
    const next = imageIndex + direction;
    if (next < 0 || next >= uploadImages.length) return;
    setUploadImages(current => {
      const copy = [...current];
      [copy[imageIndex], copy[next]] = [copy[next], copy[imageIndex]];
      return copy;
    });
    setMainImage(index => index === imageIndex ? next : index === next ? imageIndex : index);
  };
  const saveNewProduct = (status: ArtisanProductStatus) => {
    if (!newProduct.title.trim()) { setFormError("Dê um nome para a peça antes de salvar."); return; }
    if (editingProductId) {
      setProducts(current => current.map(product => product.id === editingProductId ? {
        ...product,
        name: newProduct.title.trim(),
        image: uploadImages[mainImage]?.src || product.image,
        status,
        quantity: Number(newProduct.quantity) || 0,
        price: newProduct.price ? `R$ ${newProduct.price}` : "R$ 0",
        category: newProduct.category,
      } : product));
      closeNewProduct();
      setNewProduct({ title: "", category: "Acessórios", price: "", quantity: "1", material: "", techniques: "", description: "", dimensions: "", productionTime: "" });
      setToast(status === "Publicado" ? "Produto atualizado e publicado!" : "Alterações salvas como rascunho.");
      return;
    }
    const fallback = PRODUCTS[products.length % PRODUCTS.length];
    setProducts(current => [{
      id: `product-${Date.now()}`, sourceId: fallback.id, name: newProduct.title.trim(),
      image: uploadImages[mainImage]?.src || fallback.image, status, quantity: Number(newProduct.quantity) || 0,
      price: newProduct.price ? `R$ ${newProduct.price}` : "R$ 0", category: newProduct.category,
    }, ...current]);
    closeNewProduct();
    setNewProduct({ title: "", category: "Acessórios", price: "", quantity: "1", material: "", techniques: "", description: "", dimensions: "", productionTime: "" });
    setToast(status === "Publicado" ? "Produto publicado com sucesso!" : "Rascunho salvo. Você pode completar depois.");
    goTo("products");
  };
  const stats = [
    { label: "Produtos ativos", value: "12", detail: "+2 este mês", color: C.primary, target: "products" as ArtisanDashboardSection, icon: "✦" },
    { label: "Pedidos", value: "4", detail: "2 aguardando envio", color: C.accent, target: "orders" as ArtisanDashboardSection, icon: "▣" },
    { label: "Vendas no mês", value: "R$ 1.240", detail: "+18% que no mês passado", color: C.purple, target: "sales" as ArtisanDashboardSection, icon: "↗" },
    { label: "Mensagens", value: "2", detail: "de compradores", color: C.yellow, target: "messages" as ArtisanDashboardSection, icon: "♡" },
  ];
  const orders = [
    { id: "#HLP-2408", product: "Cesta Trançada Sol", buyer: "Ana Clara", date: "Hoje, 10:42", value: "R$ 85", status: "Pronto para enviar", color: C.primary },
    { id: "#HLP-2397", product: "Colar Raízes", buyer: "Camila M.", date: "Ontem, 16:20", value: "R$ 120", status: "Em produção", color: C.yellow },
    { id: "#HLP-2379", product: "Boneca Abayomi", buyer: "Sofia R.", date: "12 jun, 09:10", value: "R$ 95", status: "Entregue", color: C.blue },
    { id: "#HLP-2364", product: "Kit Casa", buyer: "Marina L.", date: "10 jun, 14:05", value: "R$ 210", status: "Entregue", color: C.blue },
  ];
  const messages = [
    { id: 1, name: "Camila M.", subject: "Dúvida sobre o prazo", text: "Olá, Maria! Você consegue enviar o Colar Raízes ainda esta semana?", time: "Hoje, 09:30", unread: true },
    { id: 2, name: "Ana Clara", subject: "Pedido #HLP-2408", text: "Estou ansiosa para receber minha cesta. Obrigada pelo cuidado!", time: "Ontem, 18:12", unread: true },
    { id: 3, name: "Equipe Artesãs", subject: "Sua vitrine está linda", text: "Uma dica: fotos com luz natural recebem mais visitas.", time: "11 jun", unread: false },
  ];
  const sectionTitle: Record<ArtisanDashboardSection, string> = { overview: "Visão geral", orders: "Pedidos", messages: "Mensagens", products: "Meus produtos", sales: "Vendas", export: "Exportação", help: "Ajuda e suporte" };
  const statusStyle = (status: ArtisanProductStatus) => status === "Publicado" ? { background: `${C.primary}18`, color: C.primary } : status === "Rascunho" ? { background: `${C.yellow}25`, color: "#896D0C" } : { background: `${C.fgFaint}`, color: C.fgDim };

  const productList = (
    <div className="artisan-product-grid">
      {products.map(product => {
        const source = PRODUCTS.find(item => item.id === product.sourceId) || PRODUCTS[0];
        return <article key={product.id} className="artisan-product-card"><div style={{ position: "relative" }}><img src={product.image || source.image} alt={product.name || t(T.products.productNames[source.id], lang)} /><span style={{ ...statusStyle(product.status), position: "absolute", top: 10, left: 10, borderRadius: 99, padding: "5px 9px", fontSize: 10.5, fontWeight: 800 }}>{product.status}</span></div><div style={{ padding: 15 }}><div style={{ color: C.primary, fontSize: 10.5, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>{product.category}</div><h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 18, margin: "5px 0 4px" }}>{product.name || t(T.products.productNames[source.id], lang)}</h3><div style={{ display: "flex", justifyContent: "space-between", gap: 8, color: C.fgDim, fontSize: 12.5 }}><span>{product.price}</span><span>{product.quantity} em estoque</span></div><button type="button" onClick={() => openEditProduct(product)} style={{ marginTop: 13, width: "100%", padding: 8, border: `1px solid ${C.border}`, borderRadius: 6, background: "transparent", color: C.fgDim, cursor: "pointer", fontWeight: 700, fontFamily: "var(--font-nunito)" }}>Editar produto</button></div></article>;
      })}
    </div>
  );
  const orderRows = (items = orders) => items.map(order => <button type="button" key={order.id} onClick={() => setOrderOpen(order.id)} className="artisan-order-row"><span className="artisan-order-mark" style={{ background: `${order.color}22`, color: order.color }}>▣</span><span className="artisan-order-info"><strong>{order.product}</strong><small>{order.id} · {order.buyer} · {order.date}</small></span><span className="artisan-order-value">{order.value}</span><span className="artisan-status-pill" style={{ color: order.color, background: `${order.color}18` }}>{order.status}</span><span className="artisan-chevron">→</span></button>);
  const messageRows = (items = messages) => items.map(message => <button type="button" key={message.id} onClick={() => setMessageOpen(message.id)} className="artisan-message-row"><span className={`artisan-message-avatar ${message.unread ? "unread" : ""}`}>{message.name.split(" ").map(item => item[0]).join("").slice(0, 2)}</span><span className="artisan-order-info"><strong>{message.subject}{message.unread && <i />}</strong><small>{message.name} · {message.text}</small></span><span className="artisan-order-date">{message.time}</span><span className="artisan-chevron">→</span></button>);

  return <div className="artisan-dashboard-shell">
    <header className="artisan-dashboard-header"><button type="button" onClick={onBack} aria-label="Voltar para o site" className="artisan-brand-button"><img src={logo} alt="Artesãs de Heliópolis" className="artisan-dashboard-logo" /></button><div className="artisan-header-context"><span>Seu ateliê, seu ritmo</span><strong>Área da artesã</strong></div><div className="artisan-header-actions"><button type="button" onClick={() => goTo("help")} aria-label="Ajuda" className="artisan-header-icon">?</button><button type="button" onClick={onBack} className="artisan-site-link">Ver vitrine <span>↗</span></button><button type="button" onClick={onBack} className="artisan-avatar" aria-label="Abrir perfil de Maria das Graças">MG</button></div></header>
    <div className="artisan-dashboard-layout">
      <aside className="artisan-sidebar"><div className="artisan-sidebar-greeting"><span>Bem-vinda de volta,</span><strong>Maria!</strong><small>Vamos fazer seu trabalho<br />chegar mais longe.</small></div><nav aria-label="Navegação da área da artesã">{([["overview", "Visão geral", "⌂"], ["orders", "Pedidos", "▣"], ["messages", "Mensagens", "♡"], ["products", "Minha vitrine", "✦"], ["sales", "Vendas", "↗"], ["export", "Alcançar o mundo", "◎"]] as [ArtisanDashboardSection, string, string][]).map(([key, label, icon]) => <button type="button" key={key} onClick={() => goTo(key)} className={`artisan-side-link ${section === key ? "is-active" : ""}`}><span>{icon}</span>{label}{key === "messages" && <b>2</b>}</button>)}</nav><div className="artisan-sidebar-bottom"><button type="button" onClick={() => goTo("help")} className="artisan-side-link"><span>?</span>Ajuda e suporte</button><button type="button" onClick={onBack} className="artisan-side-link"><span>↪</span>Sair da conta</button></div></aside>
      <main id="artisan-dashboard-content" className="artisan-dashboard-content"><div className="artisan-mobile-nav">{(["overview", "orders", "messages", "products"] as ArtisanDashboardSection[]).map(key => <button type="button" key={key} onClick={() => goTo(key)} className={section === key ? "is-active" : ""}>{sectionTitle[key]}</button>)}</div>
        {section === "overview" && <><div className="artisan-welcome-row"><div><span className="artisan-eyebrow">UM BOM DIA PARA CRIAR</span><h1>Olá, Maria! <span>✦</span></h1><p>Aqui você cuida da sua vitrine, conversa com clientes e prepara suas peças para alcançar novos lugares.</p></div><button type="button" onClick={openNewProduct} className="artisan-primary-button">＋ Adicionar produto</button></div><div className="artisan-purpose-note"><span>✦</span><div><strong>Seu feito à mão pode cruzar fronteiras.</strong><p>Conte a história da sua peça. A gente ajuda com idioma, frete e os próximos passos.</p></div><button type="button" onClick={() => goTo("export")}>Conhecer o caminho →</button></div><div className="artisan-stat-grid">{stats.map(stat => <button type="button" key={stat.label} onClick={() => goTo(stat.target)} className="artisan-stat-card" style={{ "--stat-color": stat.color } as React.CSSProperties}><span className="artisan-stat-icon">{stat.icon}</span><span className="artisan-stat-label">{stat.label}</span><strong>{stat.value}</strong><small>{stat.detail}<span> →</span></small></button>)}</div><div className="artisan-overview-grid"><section className="artisan-panel artisan-shortcuts"><div className="artisan-panel-heading"><div><span className="artisan-eyebrow">COMECE POR AQUI</span><h2>Atalhos rápidos</h2></div></div><div className="artisan-shortcut-grid"><button type="button" onClick={openNewProduct}><span style={{ background: `${C.primary}20`, color: C.primary }}>＋</span><strong>Adicionar produto</strong><small>Coloque uma nova peça na vitrine</small></button><button type="button" onClick={() => goTo("orders")}><span style={{ background: `${C.accent}20`, color: C.accent }}>▣</span><strong>Ver pedidos</strong><small>2 pedidos aguardando ação</small></button><button type="button" onClick={() => goTo("export")}><span style={{ background: `${C.purple}20`, color: C.purple }}>◎</span><strong>Preparar exportação</strong><small>Avance seu catálogo internacional</small></button><button type="button" onClick={() => goTo("help")}><span style={{ background: `${C.yellow}25`, color: "#896D0C" }}>?</span><strong>Aprender e melhorar</strong><small>Dicas para vender mais</small></button></div></section><section className="artisan-panel artisan-export-mini"><div className="artisan-panel-heading"><div><span className="artisan-eyebrow">NOVO CAMINHO</span><h2>Venda para o mundo</h2></div><button type="button" onClick={() => goTo("export")}>Ver tudo →</button></div><p>Seu catálogo já está <strong>65%</strong> pronto para alcançar compradores de fora do Brasil.</p><div className="artisan-progress"><span style={{ width: "65%" }} /></div><div className="artisan-export-steps"><span className="done">✓ Fotos</span><span className="done">✓ Preços</span><span>○ Descrições</span></div></section></div><section className="artisan-panel"><div className="artisan-panel-heading"><div><span className="artisan-eyebrow">ACOMPANHE DE PERTO</span><h2>Pedidos recentes</h2></div><button type="button" onClick={() => goTo("orders")}>Ver todos →</button></div>{orderRows(orders.slice(0, 3))}</section><section className="artisan-panel"><div className="artisan-panel-heading"><div><span className="artisan-eyebrow">CAIXA DE ENTRADA</span><h2>Mensagens recentes</h2></div><button type="button" onClick={() => goTo("messages")}>Ver todas →</button></div>{messageRows(messages.slice(0, 2))}</section></>}
        {section === "orders" && <section className="artisan-section-page"><div className="artisan-page-heading"><div><span className="artisan-eyebrow">ACOMPANHE SUAS VENDAS</span><h1>Pedidos</h1><p>Veja o que precisa da sua atenção e mantenha suas clientes informadas.</p></div><span className="artisan-page-count">4 pedidos no mês</span></div><div className="artisan-panel">{orderRows()}</div></section>}
        {section === "messages" && <section className="artisan-section-page"><div className="artisan-page-heading"><div><span className="artisan-eyebrow">CONVERSE COM QUEM COMPRA</span><h1>Mensagens</h1><p>Uma resposta atenciosa também faz parte do seu trabalho artesanal.</p></div><span className="artisan-page-count">2 não lidas</span></div><div className="artisan-panel artisan-messages-list">{messageRows()}</div></section>}
        {section === "products" && <section className="artisan-section-page"><div className="artisan-page-heading"><div><span className="artisan-eyebrow">SUA VITRINE</span><h1>Meus produtos</h1><p>Cuide da apresentação das peças que carregam sua história.</p></div><button type="button" onClick={openNewProduct} className="artisan-primary-button">＋ Adicionar produto</button></div>{productList}</section>}
        {section === "sales" && <section className="artisan-section-page"><div className="artisan-page-heading"><div><span className="artisan-eyebrow">SEU RESULTADO</span><h1>Vendas</h1><p>Um olhar simples para você tomar decisões com mais confiança.</p></div><span className="artisan-page-count">Junho de 2026</span></div><div className="artisan-sales-grid"><section className="artisan-panel artisan-chart-panel"><div className="artisan-panel-heading"><div><span className="artisan-eyebrow">RECEITA</span><h2>R$ 1.240</h2></div><span className="artisan-growth">↗ 18%</span></div><div className="artisan-chart"><div className="artisan-chart-y"><span>600</span><span>400</span><span>200</span><span>0</span></div><div className="artisan-bars">{[220, 310, 180, 420, 350, 510, 390].map((height, index) => <div className="artisan-bar-column" key={index}><div className="artisan-bar" style={{ height: `${height / 2.2}px`, background: index === 5 ? C.primary : `${C.primary}55` }} title={`R$ ${height}`} /><small>{["S", "T", "Q", "Q", "S", "S", "D"][index]}</small></div>)}</div></div></section><div className="artisan-sales-summary"><div className="artisan-panel"><span className="artisan-eyebrow">PEDIDO MÉDIO</span><strong>R$ 310</strong><small>+12% este mês</small></div><div className="artisan-panel"><span className="artisan-eyebrow">PEÇA MAIS VENDIDA</span><strong>Cesta Trançada</strong><small>3 unidades vendidas</small></div></div></div></section>}
        {section === "export" && <section className="artisan-section-page"><div className="artisan-page-heading"><div><span className="artisan-eyebrow">NOVOS MERCADOS</span><h1>Exportação</h1><p>Prepare seus produtos para encontrar pessoas que valorizam o feito à mão no mundo todo.</p></div></div><div className="artisan-export-layout"><section className="artisan-panel artisan-export-progress"><div className="artisan-panel-heading"><div><span className="artisan-eyebrow">SEU PROGRESSO</span><h2>Catálogo internacional</h2></div><strong>65%</strong></div><div className="artisan-progress large"><span style={{ width: "65%" }} /></div><div className="artisan-export-card-grid"><button type="button" onClick={() => goTo("products")}><span className="done">✓</span><strong>Fotos dos produtos</strong><small>12 de 12 concluídas</small></button><button type="button" onClick={() => setToast("Preços internacionais disponíveis em breve.")}><span className="done">✓</span><strong>Preços e medidas</strong><small>Prontos para revisão</small></button><button type="button" onClick={openNewProduct}><span className="todo">2</span><strong>Descrição em inglês e espanhol</strong><small>2 produtos precisam de texto</small></button><button type="button" onClick={() => setToast("Nossa equipe vai revisar seu catálogo com você.")}><span className="todo">→</span><strong>Revisão da equipe</strong><small>Disponível após completar</small></button></div><div className="artisan-language-strip"><strong>Vitrine para o mundo</strong><span>PT</span><span>EN</span><span>ES</span><small>Você escolhe os idiomas; a equipe ajuda com a tradução.</small></div></section></div><section className="artisan-export-tools"><div className="artisan-panel artisan-cost-card"><div className="artisan-panel-heading"><div><span className="artisan-eyebrow">FAÇA UMA CONTA RÁPIDA</span><h2>Quanto custa enviar?</h2></div><span className="artisan-cost-total">R$ {Number(exportCosts.freight || 0) + Number(exportCosts.taxes || 0) + Number(exportCosts.documentation || 0)}</span></div><p>Uma estimativa para você formar o preço com tranquilidade. Os valores finais podem variar.</p><div className="artisan-cost-fields"><label>Frete <span>R$</span><input type="number" min="0" value={exportCosts.freight} onChange={event => setExportCosts(current => ({ ...current, freight: event.target.value }))} /></label><label>Taxas <span>R$</span><input type="number" min="0" value={exportCosts.taxes} onChange={event => setExportCosts(current => ({ ...current, taxes: event.target.value }))} /></label><label>Documentação <span>R$</span><input type="number" min="0" value={exportCosts.documentation} onChange={event => setExportCosts(current => ({ ...current, documentation: event.target.value }))} /></label></div></div><div className="artisan-panel artisan-journey-card"><span className="artisan-eyebrow">PASSO A PASSO</span><h2>Do ateliê até a nova casa</h2><ol><li><b>01</b><span>Escolha o destino e confirme o endereço.</span></li><li><b>02</b><span>Separe nota, declaração e medidas da embalagem.</span></li><li><b>03</b><span>A equipe calcula frete e orienta a alfândega.</span></li><li><b>04</b><span>Acompanhe o envio até a entrega.</span></li></ol><button type="button" onClick={() => setToast("Guia de alfândega enviado para suas mensagens.")} className="artisan-text-button">Quero orientação completa →</button></div></section></section>}
        {section === "help" && <section className="artisan-section-page"><div className="artisan-page-heading"><div><span className="artisan-eyebrow">ESTAMOS COM VOCÊ</span><h1>Ajuda e suporte</h1><p>Conte com a gente para cuidar da sua vitrine e fazer seu trabalho chegar mais longe.</p></div></div><div className="artisan-help-grid"><button type="button" onClick={() => setToast("Guia de fotos aberto — use luz natural e mostre os detalhes da peça.")} className="artisan-help-card"><span>▣</span><strong>Como fotografar minhas peças?</strong><small>Veja dicas simples para fotos que valorizam seu trabalho.</small><b>Ver guia →</b></button><button type="button" onClick={() => setToast("Perguntas frequentes disponíveis em breve.")} className="artisan-help-card"><span>?</span><strong>Perguntas frequentes</strong><small>Respostas para as dúvidas mais comuns das artesãs.</small><b>Consultar FAQ →</b></button></div></section>}
      </main>
    </div>
    {orderOpen && <div className="artisan-dialog-backdrop" role="presentation" onClick={() => setOrderOpen(null)}><div className="artisan-dialog artisan-small-dialog" role="dialog" aria-modal="true" onClick={event => event.stopPropagation()}><button type="button" className="artisan-dialog-close" onClick={() => setOrderOpen(null)}>×</button>{(() => { const order = orders.find(item => item.id === orderOpen)!; return <><span className="artisan-eyebrow">DETALHES DO PEDIDO</span><h2>{order.product}</h2><p><strong>{order.id}</strong> · {order.buyer}</p><div className="artisan-dialog-detail"><span>Status</span><strong style={{ color: order.color }}>{order.status}</strong></div><div className="artisan-dialog-detail"><span>Valor</span><strong>{order.value}</strong></div><button type="button" className="artisan-primary-button" onClick={() => { setOrderOpen(null); setToast("Pedido marcado para acompanhamento."); }}>Entendi</button></>; })()}</div></div>}
    {messageOpen && <div className="artisan-dialog-backdrop" role="presentation" onClick={() => setMessageOpen(null)}><div className="artisan-dialog artisan-small-dialog" role="dialog" aria-modal="true" onClick={event => event.stopPropagation()}><button type="button" className="artisan-dialog-close" onClick={() => setMessageOpen(null)}>×</button>{(() => { const message = messages.find(item => item.id === messageOpen)!; return <><span className="artisan-eyebrow">MENSAGEM DE {message.name.toUpperCase()}</span><h2>{message.subject}</h2><p style={{ lineHeight: 1.7 }}>{message.text}</p><small style={{ color: C.fgFaint }}>{message.time}</small><button type="button" className="artisan-primary-button" onClick={() => { setMessageOpen(null); setToast("Resposta pronta para você enviar pelo chat."); }}>Responder</button></>; })()}</div></div>}
    {productModalOpen && <div className="artisan-dialog-backdrop" role="presentation" onClick={closeNewProduct}><div className="artisan-dialog artisan-product-dialog" role="dialog" aria-modal="true" onClick={event => event.stopPropagation()}><div className="artisan-dialog-heading"><div><span className="artisan-eyebrow">{editingProductId ? "EDITAR PEÇA" : "NOVA PEÇA"}</span><h2>{editingProductId ? "Editar produto" : "Adicionar produto"}</h2><p>Compartilhe os detalhes que tornam seu trabalho especial.</p></div><button type="button" className="artisan-dialog-close" onClick={closeNewProduct}>×</button></div><form onSubmit={event => { event.preventDefault(); saveNewProduct("Publicado"); }}><div className="artisan-upload-area"><div><strong>Fotos do produto</strong><small>Até 5 imagens · a primeira será a principal</small></div><label className="artisan-upload-button">＋ Escolher imagens<input type="file" accept="image/*" multiple onChange={onUpload} disabled={uploadImages.length >= 5} /></label></div>{uploadImages.length > 0 && <div className="artisan-upload-previews">{uploadImages.map((image, index) => <div key={image.id} className={`artisan-upload-preview ${index === mainImage ? "is-main" : ""}`}><img src={image.src} alt={image.name} /><div><button type="button" onClick={() => setMainImage(index)}>{index === mainImage ? "★ Principal" : "☆ Principal"}</button><button type="button" onClick={() => moveImage(index, -1)} disabled={index === 0}>←</button><button type="button" onClick={() => moveImage(index, 1)} disabled={index === uploadImages.length - 1}>→</button><button type="button" onClick={() => removeImage(image.id)}>Remover</button></div></div>)}</div>}<div className="artisan-form-grid"><label>Nome do produto<input value={newProduct.title} onChange={event => updateNewProduct("title", event.target.value)} placeholder="Ex.: Cesta Trançada Sol" /></label><label>Categoria<select value={newProduct.category} onChange={event => updateNewProduct("category", event.target.value)}><option>Acessórios</option><option>Joias</option><option>Casa</option><option>Brinquedos</option><option>Vestuário</option></select></label><label>Preço (R$)<input type="number" min="0" value={newProduct.price} onChange={event => updateNewProduct("price", event.target.value)} placeholder="85" /></label><label>Quantidade disponível<input type="number" min="0" value={newProduct.quantity} onChange={event => updateNewProduct("quantity", event.target.value)} /></label><label>Materiais<input value={newProduct.material} onChange={event => updateNewProduct("material", event.target.value)} placeholder="Ex.: palha, linha de algodão" /></label><label>Técnicas usadas<input value={newProduct.techniques} onChange={event => updateNewProduct("techniques", event.target.value)} placeholder="Ex.: trançado, bordado" /></label><label>Dimensões<input value={newProduct.dimensions} onChange={event => updateNewProduct("dimensions", event.target.value)} placeholder="Ex.: 30 × 20 cm" /></label><label>Tempo de produção<input value={newProduct.productionTime} onChange={event => updateNewProduct("productionTime", event.target.value)} placeholder="Ex.: 3 dias" /></label><label className="artisan-form-full">Descrição<textarea rows={3} value={newProduct.description} onChange={event => updateNewProduct("description", event.target.value)} placeholder="Conte a história e o cuidado por trás da peça." /></label></div>{formError && <p className="artisan-form-error">{formError}</p>}<div className="artisan-dialog-actions"><button type="button" onClick={() => saveNewProduct("Rascunho")} className="artisan-outline-button">Salvar rascunho</button><button type="submit" className="artisan-primary-button">{editingProductId ? "Salvar alterações" : "Publicar produto"}</button></div></form></div></div>}
    {toast && <div className="artisan-toast" role="status">{toast}</div>}
    <style>{`
      .artisan-dashboard-shell { min-height: calc(100vh - 2px); background: ${C.bg}; color: ${C.fg}; }
      .artisan-dashboard-header { height: 76px; padding: 0 clamp(18px, 4vw, 54px); display: flex; align-items: center; gap: 26px; background: #FBF5E9; border-bottom: 1px solid ${C.border}; box-sizing: border-box; }
      .artisan-dashboard-logo { width: 190px; height: 62px; object-fit: contain; object-position: left center; display: block; }
      .artisan-header-context { border-left: 1px solid ${C.border}; padding-left: 25px; display: flex; flex-direction: column; gap: 2px; font-size: 11px; color: ${C.fgFaint}; } .artisan-header-context strong { font-size: 14px; color: ${C.fg}; }
      .artisan-header-actions { margin-left: auto; display: flex; align-items: center; gap: 12px; } .artisan-header-icon, .artisan-avatar { width: 36px; height: 36px; border: 1px solid ${C.border}; border-radius: 50%; background: transparent; color: ${C.fgDim}; cursor: pointer; font-weight: 800; } .artisan-avatar { background: ${C.primary}; color: ${C.card}; border-color: ${C.primary}; font-size: 11px; } .artisan-site-link { border: 0; background: none; color: ${C.fgDim}; font: 600 12px var(--font-nunito); cursor: pointer; }
      .artisan-dashboard-layout { display: flex; width: 100%; max-width: none; margin: 0; } .artisan-sidebar { width: 230px; flex-shrink: 0; padding: 32px 18px 24px; min-height: calc(100vh - 76px); box-sizing: border-box; background: #F2E6D5; border-right: 1px solid ${C.border}; display: flex; flex-direction: column; } .artisan-sidebar-greeting { padding: 0 14px 26px; display: flex; flex-direction: column; gap: 4px; color: ${C.fgDim}; font-size: 12px; } .artisan-sidebar-greeting strong { font: 700 25px var(--font-fraunces); color: ${C.fg}; }
      .artisan-side-link { display: flex; align-items: center; width: 100%; gap: 12px; border: 0; border-radius: 7px; padding: 12px 13px; margin: 2px 0; color: ${C.fgDim}; background: transparent; text-align: left; cursor: pointer; font: 600 13px var(--font-nunito); } .artisan-side-link span { width: 20px; color: ${C.fgFaint}; text-align: center; font-size: 16px; } .artisan-side-link b { margin-left: auto; min-width: 20px; padding: 3px 5px; border-radius: 20px; background: ${C.accent}; color: ${C.card}; text-align: center; font-size: 10px; } .artisan-side-link:hover, .artisan-side-link.is-active { background: ${C.card}; color: ${C.primary}; box-shadow: 0 3px 12px rgba(58,41,37,.05); } .artisan-side-link.is-active span { color: ${C.primary}; } .artisan-sidebar-bottom { margin-top: auto; border-top: 1px solid ${C.border}; padding-top: 15px; }
      .artisan-dashboard-content { min-width: 0; flex: 1; padding: clamp(26px, 4vw, 54px) clamp(20px, 4vw, 58px) 80px; } .artisan-mobile-nav { display: none; } .artisan-welcome-row, .artisan-page-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 32px; } .artisan-eyebrow { color: ${C.primary}; display: block; font-size: 10.5px; font-weight: 800; letter-spacing: .14em; } .artisan-welcome-row h1, .artisan-page-heading h1 { margin: 8px 0 7px; font: 700 clamp(2rem, 3.5vw, 3.25rem)/1.05 var(--font-fraunces); letter-spacing: -.025em; } .artisan-welcome-row h1 span { color: ${C.yellow}; font-size: .6em; vertical-align: top; } .artisan-welcome-row p, .artisan-page-heading p { max-width: 580px; margin: 0; color: ${C.fgDim}; font-size: 14px; line-height: 1.6; }
      .artisan-primary-button, .artisan-outline-button { display: inline-flex; align-items: center; justify-content: center; gap: 6px; border-radius: 6px; padding: 12px 17px; font: 700 13px var(--font-nunito); cursor: pointer; white-space: nowrap; } .artisan-primary-button { background: ${C.primary}; border: 1px solid ${C.primary}; color: ${C.card}; box-shadow: 0 5px 16px ${C.primary}2e; } .artisan-outline-button { background: transparent; border: 1px solid ${C.primary}; color: ${C.primary}; } .artisan-primary-button:hover, .artisan-outline-button:hover { transform: translateY(-1px); }
      .artisan-stat-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 13px; margin-bottom: 23px; } .artisan-stat-card { --stat-color: ${C.primary}; position: relative; padding: 18px; min-height: 142px; border: 1px solid ${C.border}; border-radius: 10px; background: ${C.card}; color: ${C.fg}; text-align: left; cursor: pointer; transition: .18s; } .artisan-stat-card:hover { transform: translateY(-3px); border-color: var(--stat-color); box-shadow: 0 10px 24px rgba(58,41,37,.08); } .artisan-stat-icon { display: grid; place-items: center; width: 29px; height: 29px; margin-bottom: 13px; border-radius: 7px; color: var(--stat-color); background: color-mix(in srgb, var(--stat-color) 13%, transparent); font-size: 17px; } .artisan-stat-label, .artisan-stat-card small { display: block; color: ${C.fgDim}; font-size: 12px; } .artisan-stat-card strong { display: block; margin: 4px 0 7px; color: ${C.fg}; font: 700 27px var(--font-fraunces); } .artisan-stat-card small span { color: var(--stat-color); font-weight: 800; }
      .artisan-overview-grid { display: grid; grid-template-columns: 1.35fr .95fr; gap: 18px; margin-bottom: 18px; } .artisan-panel { background: ${C.card}; border: 1px solid ${C.border}; border-radius: 10px; padding: 22px; margin-bottom: 18px; } .artisan-panel-heading { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 19px; } .artisan-panel-heading h2 { margin: 5px 0 0; font: 700 22px var(--font-fraunces); } .artisan-panel-heading button { border: 0; background: none; color: ${C.primary}; padding: 4px 0; font: 700 12px var(--font-nunito); cursor: pointer; }
      .artisan-shortcut-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; } .artisan-shortcut-grid button { display: grid; grid-template-columns: 35px 1fr; grid-template-rows: auto auto; column-gap: 10px; padding: 12px; border: 1px solid ${C.border}; border-radius: 8px; background: ${C.bg}; color: ${C.fg}; text-align: left; cursor: pointer; } .artisan-shortcut-grid button:hover { border-color: ${C.primary}; } .artisan-shortcut-grid button > span { grid-row: 1 / span 2; display: grid; place-items: center; width: 35px; height: 35px; border-radius: 7px; font-size: 20px; } .artisan-shortcut-grid strong { font-size: 12.5px; align-self: end; } .artisan-shortcut-grid small { margin-top: 3px; color: ${C.fgDim}; font-size: 10.5px; line-height: 1.3; }
      .artisan-export-mini { background: linear-gradient(135deg, ${C.card}, #F2E5D6); } .artisan-export-mini p { margin: 0 0 17px; color: ${C.fgDim}; font-size: 13px; line-height: 1.6; } .artisan-export-steps { display: flex; flex-wrap: wrap; gap: 7px 12px; margin-top: 11px; color: ${C.fgDim}; font-size: 11px; } .artisan-export-steps .done { color: ${C.primary}; } .artisan-progress { height: 8px; border-radius: 10px; overflow: hidden; background: ${C.border}; } .artisan-progress span { display: block; height: 100%; border-radius: inherit; background: ${C.primary}; } .artisan-progress.large { height: 12px; margin: 21px 0 27px; }
      .artisan-order-row, .artisan-message-row { display: flex; align-items: center; width: 100%; gap: 14px; padding: 13px 0; border: 0; border-top: 1px solid ${C.border}; background: none; color: ${C.fg}; text-align: left; cursor: pointer; } .artisan-order-row:hover, .artisan-message-row:hover { background: ${C.bg}; } .artisan-order-mark { display: grid; place-items: center; width: 34px; height: 34px; flex-shrink: 0; border-radius: 7px; } .artisan-order-info { min-width: 0; flex: 1; display: flex; flex-direction: column; gap: 3px; } .artisan-order-info strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; } .artisan-order-info small, .artisan-order-date { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: ${C.fgDim}; font-size: 11px; } .artisan-order-date { width: 105px; } .artisan-order-value { width: 70px; font-weight: 800; font-size: 12px; } .artisan-status-pill { border-radius: 99px; padding: 5px 8px; font-size: 10px; font-weight: 800; white-space: nowrap; } .artisan-chevron { color: ${C.primary}; font-size: 17px; } .artisan-message-avatar { display: grid; place-items: center; width: 34px; height: 34px; flex-shrink: 0; border-radius: 50%; background: ${C.muted}; color: ${C.fgDim}; font-size: 10px; font-weight: 800; } .artisan-message-avatar.unread { background: ${C.primary}20; color: ${C.primary}; } .artisan-message-row .artisan-order-info strong { display: flex; align-items: center; gap: 7px; } .artisan-message-row i { width: 6px; height: 6px; border-radius: 50%; background: ${C.accent}; }
      .artisan-section-page { max-width: 1060px; } .artisan-page-count { padding: 8px 11px; border-radius: 99px; background: ${C.muted}; color: ${C.fgDim}; font-size: 11px; font-weight: 700; white-space: nowrap; } .artisan-product-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; } .artisan-product-card { overflow: hidden; border: 1px solid ${C.border}; border-radius: 10px; background: ${C.card}; } .artisan-product-card img { display: block; width: 100%; height: 165px; object-fit: cover; } .artisan-product-card h3 { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .artisan-sales-grid, .artisan-export-layout { display: grid; grid-template-columns: 1.4fr .75fr; gap: 18px; } .artisan-chart-panel h2 { margin: 5px 0 0; font: 700 28px var(--font-fraunces); } .artisan-growth { padding: 5px 8px; border-radius: 99px; background: ${C.primary}18; color: ${C.primary}; font-size: 11px; font-weight: 800; } .artisan-chart { display: flex; height: 230px; gap: 17px; padding-top: 16px; } .artisan-chart-y { display: flex; flex-direction: column; justify-content: space-between; color: ${C.fgFaint}; font-size: 10px; } .artisan-bars { display: flex; align-items: flex-end; justify-content: space-around; flex: 1; border-bottom: 1px solid ${C.border}; background: repeating-linear-gradient(to bottom, transparent 0, transparent 54px, ${C.border} 55px); } .artisan-bar-column { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 8px; } .artisan-bar { width: clamp(18px, 4vw, 38px); min-height: 8px; border-radius: 5px 5px 0 0; } .artisan-bar-column small { color: ${C.fgDim}; font-size: 10px; } .artisan-sales-summary { display: flex; flex-direction: column; } .artisan-sales-summary .artisan-panel { flex: 1; } .artisan-sales-summary strong { display: block; margin: 11px 0 5px; font: 700 24px var(--font-fraunces); } .artisan-sales-summary small { color: ${C.fgDim}; font-size: 11px; }
      .artisan-export-card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; } .artisan-export-card-grid button { display: grid; grid-template-columns: 28px 1fr; grid-template-rows: auto auto; gap: 2px 9px; padding: 14px; border: 1px solid ${C.border}; border-radius: 8px; background: ${C.bg}; text-align: left; cursor: pointer; } .artisan-export-card-grid button:hover { border-color: ${C.primary}; } .artisan-export-card-grid span { grid-row: 1 / span 2; display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; font-size: 12px; font-weight: 800; } .artisan-export-card-grid .done { background: ${C.primary}18; color: ${C.primary}; } .artisan-export-card-grid .todo { background: ${C.muted}; color: ${C.fgDim}; } .artisan-export-card-grid strong { font-size: 12px; } .artisan-export-card-grid small { color: ${C.fgDim}; font-size: 10px; } .artisan-export-tip { background: ${C.purple}; color: ${C.card}; } .artisan-export-tip .artisan-tip-icon { font-size: 25px; color: #E7B9D6; } .artisan-export-tip h2 { margin: 20px 0 9px; font: 700 24px/1.1 var(--font-fraunces); } .artisan-export-tip p { color: #F1DDEB; font-size: 13px; line-height: 1.6; } .artisan-export-tip .artisan-outline-button { margin-top: 13px; border-color: #E7B9D6; color: ${C.card}; }
      .artisan-help-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; } .artisan-help-card { min-height: 205px; padding: 22px; border: 1px solid ${C.border}; border-radius: 10px; background: ${C.card}; text-align: left; cursor: pointer; } .artisan-help-card:hover { border-color: ${C.primary}; transform: translateY(-2px); } .artisan-help-card > span { display: grid; place-items: center; width: 36px; height: 36px; margin-bottom: 21px; border-radius: 8px; background: ${C.primary}18; color: ${C.primary}; font-weight: 800; font-size: 18px; } .artisan-help-card strong, .artisan-help-card small, .artisan-help-card b { display: block; } .artisan-help-card strong { font-size: 14px; } .artisan-help-card small { margin-top: 8px; color: ${C.fgDim}; font-size: 12px; line-height: 1.5; } .artisan-help-card b { margin-top: 18px; color: ${C.primary}; font-size: 11px; }
      .artisan-dialog-backdrop { position: fixed; inset: 0; z-index: 400; display: grid; place-items: center; padding: 20px; background: rgba(58,41,37,.48); } .artisan-dialog { position: relative; width: min(680px, 100%); max-height: min(850px, calc(100vh - 40px)); overflow-y: auto; padding: 28px; border-radius: 13px; background: ${C.card}; box-shadow: 0 24px 70px rgba(58,41,37,.28); box-sizing: border-box; } .artisan-small-dialog { width: min(430px, 100%); } .artisan-dialog-close { position: absolute; top: 16px; right: 18px; border: 0; background: none; color: ${C.fgDim}; font-size: 25px; line-height: 1; cursor: pointer; } .artisan-dialog h2 { margin: 8px 0; font: 700 28px var(--font-fraunces); } .artisan-dialog p { color: ${C.fgDim}; font-size: 13px; } .artisan-dialog-detail { display: flex; justify-content: space-between; gap: 15px; padding: 14px 0; border-top: 1px solid ${C.border}; color: ${C.fgDim}; font-size: 13px; } .artisan-dialog .artisan-primary-button { margin-top: 18px; } .artisan-dialog-heading { display: flex; justify-content: space-between; gap: 20px; margin-bottom: 22px; } .artisan-upload-area { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 16px; border: 1px dashed ${C.primary}99; border-radius: 8px; background: ${C.primary}08; } .artisan-upload-area strong, .artisan-upload-area small { display: block; } .artisan-upload-area strong { font-size: 13px; } .artisan-upload-area small { margin-top: 3px; color: ${C.fgDim}; font-size: 11px; } .artisan-upload-button { padding: 9px 12px; border-radius: 6px; background: ${C.primary}; color: ${C.card}; cursor: pointer; font-size: 11px; font-weight: 800; white-space: nowrap; } .artisan-upload-button input { display: none; } .artisan-upload-previews { display: flex; flex-wrap: wrap; gap: 10px; margin: 13px 0 18px; } .artisan-upload-preview { width: 105px; overflow: hidden; border: 1px solid ${C.border}; border-radius: 7px; background: ${C.bg}; } .artisan-upload-preview.is-main { border: 2px solid ${C.primary}; } .artisan-upload-preview img { width: 100%; height: 75px; display: block; object-fit: cover; } .artisan-upload-preview div { display: flex; flex-wrap: wrap; gap: 2px; padding: 4px; } .artisan-upload-preview button { border: 0; padding: 3px; background: transparent; color: ${C.fgDim}; cursor: pointer; font-size: 9px; } .artisan-upload-preview button:first-child { width: 100%; color: ${C.primary}; font-weight: 800; }
      .artisan-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; margin-top: 18px; } .artisan-form-grid label { color: ${C.fgDim}; font-size: 11px; font-weight: 800; } .artisan-form-grid input, .artisan-form-grid select, .artisan-form-grid textarea { display: block; width: 100%; margin-top: 6px; padding: 10px 11px; border: 1px solid ${C.border}; border-radius: 6px; outline: 0; box-sizing: border-box; background: ${C.bg}; color: ${C.fg}; font: 13px var(--font-nunito); resize: vertical; } .artisan-form-grid input:focus, .artisan-form-grid select:focus, .artisan-form-grid textarea:focus { border-color: ${C.primary}; } .artisan-form-full { grid-column: 1 / -1; } .artisan-form-error { color: ${C.accent} !important; font-size: 12px !important; font-weight: 700; } .artisan-dialog-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px; padding-top: 17px; border-top: 1px solid ${C.border}; } .artisan-toast { position: fixed; right: 24px; bottom: 24px; z-index: 500; max-width: min(360px, calc(100vw - 48px)); padding: 13px 16px; border-radius: 7px; background: ${C.fg}; color: ${C.card}; box-shadow: 0 10px 28px rgba(58,41,37,.22); font-size: 13px; font-weight: 700; }
      .artisan-brand-button { border: 0; padding: 0; background: transparent; cursor: pointer; }
      .artisan-dashboard-shell { background: radial-gradient(circle at 85% 0%, ${C.primary}09, transparent 29%), ${C.bg}; }
      .artisan-dashboard-header { height: 82px; padding: 0 clamp(18px, 5vw, 72px); gap: 28px; background: #FBF5E9; }
      .artisan-dashboard-logo { width: 194px; height: 68px; }
      .artisan-header-context strong { font-family: var(--font-fraunces); font-weight: 600; }
      .artisan-sidebar { width: 248px; padding: 39px 20px 26px; background: #F2E6D5; }
      .artisan-sidebar-greeting { padding-bottom: 31px; }.artisan-sidebar-greeting strong { font-size: 28px; }.artisan-sidebar-greeting small { margin-top: 7px; color: ${C.fgFaint}; font-size: 11px; line-height: 1.45; }
      .artisan-side-link { border-radius: 10px; padding: 13px 14px; margin: 3px 0; transition: .18s; }.artisan-side-link:hover, .artisan-side-link.is-active { box-shadow: 0 6px 18px rgba(58,41,37,.07); }
      .artisan-dashboard-content { padding: clamp(30px, 5vw, 62px) clamp(22px, 5vw, 72px) 90px; }
      .artisan-welcome-row h1, .artisan-page-heading h1 { font-size: clamp(2.2rem, 4vw, 3.65rem); letter-spacing: -.035em; }
      .artisan-primary-button, .artisan-outline-button { border-radius: 99px; padding: 12px 19px; transition: .18s; }.artisan-primary-button:hover, .artisan-outline-button:hover { transform: translateY(-2px); }
      .artisan-purpose-note { display: flex; align-items: center; gap: 14px; margin-bottom: 25px; padding: 16px 19px; border: 1px solid ${C.primary}38; border-radius: 15px; background: linear-gradient(100deg, ${C.primary}12, ${C.card}); }.artisan-purpose-note > span { display: grid; place-items: center; width: 38px; height: 38px; flex-shrink: 0; border-radius: 50%; background: ${C.primary}; color: ${C.card}; font-size: 18px; }.artisan-purpose-note strong { font: 700 17px var(--font-fraunces); }.artisan-purpose-note p { margin: 2px 0 0; color: ${C.fgDim}; font-size: 12px; line-height: 1.5; }.artisan-purpose-note button { margin-left: auto; border: 0; background: none; color: ${C.primary}; font: 800 11px var(--font-nunito); cursor: pointer; white-space: nowrap; }
      .artisan-stat-card, .artisan-panel, .artisan-product-card, .artisan-help-card { border-radius: 15px; }.artisan-stat-card { min-height: 145px; padding: 19px; }.artisan-stat-icon { border-radius: 50%; }.artisan-panel { padding: 23px; box-shadow: 0 7px 22px rgba(58,41,37,.035); }.artisan-shortcut-grid button, .artisan-export-card-grid button { border-radius: 11px; transition: .18s; }.artisan-shortcut-grid button:hover, .artisan-export-card-grid button:hover { transform: translateY(-2px); }
      .artisan-product-card { transition: .2s; }.artisan-product-card:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(58,41,37,.08); }
      .artisan-language-strip { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-top: 18px; padding-top: 16px; border-top: 1px solid ${C.border}; }.artisan-language-strip strong { margin-right: 4px; font: 700 13px var(--font-fraunces); }.artisan-language-strip span { display: grid; place-items: center; width: 28px; height: 22px; border-radius: 99px; background: ${C.primary}18; color: ${C.primary}; font-size: 10px; font-weight: 800; }.artisan-language-strip small { flex-basis: 100%; color: ${C.fgDim}; font-size: 11px; }
      .artisan-export-tools { display: grid; grid-template-columns: 1.1fr .9fr; gap: 18px; }.artisan-cost-card p { margin: -8px 0 18px; color: ${C.fgDim}; font-size: 12px; line-height: 1.5; }.artisan-cost-total { color: ${C.primary}; font: 700 25px var(--font-fraunces); }.artisan-cost-fields { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; }.artisan-cost-fields label { color: ${C.fgDim}; font-size: 10px; font-weight: 800; }.artisan-cost-fields label span { float: right; color: ${C.fgFaint}; }.artisan-cost-fields input { display: block; width: 100%; margin-top: 5px; padding: 9px 8px; border: 1px solid ${C.border}; border-radius: 8px; background: ${C.bg}; color: ${C.fg}; font: 13px var(--font-nunito); box-sizing: border-box; }.artisan-journey-card h2 { margin: 5px 0 15px; font: 700 22px var(--font-fraunces); }.artisan-journey-card ol { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }.artisan-journey-card li { display: flex; gap: 10px; align-items: flex-start; color: ${C.fgDim}; font-size: 11px; line-height: 1.4; }.artisan-journey-card li b { color: ${C.primary}; font-size: 10px; }.artisan-text-button { margin-top: 16px; padding: 0; border: 0; background: none; color: ${C.primary}; font: 800 11px var(--font-nunito); cursor: pointer; } .artisan-export-layout { grid-template-columns: 1fr; } @media (max-width: 1050px) { .artisan-sidebar { width: 200px; } .artisan-stat-grid { grid-template-columns: 1fr 1fr; } .artisan-overview-grid, .artisan-sales-grid { grid-template-columns: 1fr; } }
      @media (max-width: 700px) { .artisan-dashboard-header { height: 68px; gap: 10px; padding: 0 16px; } .artisan-dashboard-logo { width: 145px; height: 56px; } .artisan-header-context, .artisan-site-link { display: none; } .artisan-dashboard-layout { display: block; } .artisan-sidebar { display: none; } .artisan-dashboard-content { padding: 20px 15px 70px; } .artisan-mobile-nav { display: flex; gap: 5px; overflow-x: auto; margin: -3px 0 24px; padding-bottom: 3px; } .artisan-mobile-nav button { padding: 8px 11px; border: 1px solid ${C.border}; border-radius: 99px; background: transparent; color: ${C.fgDim}; font: 700 11px var(--font-nunito); white-space: nowrap; } .artisan-mobile-nav button.is-active { border-color: ${C.primary}; background: ${C.primary}; color: ${C.card}; } .artisan-welcome-row, .artisan-page-heading { display: block; margin-bottom: 24px; } .artisan-welcome-row .artisan-primary-button, .artisan-page-heading .artisan-primary-button { margin-top: 17px; } .artisan-welcome-row h1, .artisan-page-heading h1 { font-size: 2.3rem; } .artisan-stat-grid { gap: 9px; } .artisan-stat-card { min-height: 126px; padding: 13px; } .artisan-stat-card strong { font-size: 23px; } .artisan-stat-card small { font-size: 10px; } .artisan-panel { padding: 16px; } .artisan-overview-grid, .artisan-shortcut-grid, .artisan-product-grid, .artisan-export-card-grid, .artisan-help-grid, .artisan-form-grid, .artisan-export-tools, .artisan-cost-fields { grid-template-columns: 1fr; } .artisan-order-row, .artisan-message-row { gap: 9px; } .artisan-order-date { display: none; } .artisan-order-value { width: auto; margin-left: auto; } .artisan-status-pill { display: none; } .artisan-dialog { padding: 22px 16px; } .artisan-upload-area { align-items: flex-start; flex-direction: column; } .artisan-upload-preview { width: calc(33.333% - 7px); } .artisan-dialog-actions { flex-direction: column-reverse; } .artisan-dialog-actions button { width: 100%; } }
      @media (max-width: 700px) { .artisan-purpose-note { align-items: flex-start; flex-wrap: wrap; } .artisan-purpose-note button { flex-basis: 100%; margin: 4px 0 0 52px; text-align: left; } .artisan-export-tools { grid-template-columns: 1fr; } .artisan-cost-fields { grid-template-columns: 1fr; } }
      @media (max-width: 480px) {
        .artisan-dashboard-header { padding: 0 12px; gap: 8px; }
        .artisan-dashboard-logo { width: 128px; height: 54px; }
        .artisan-header-actions { gap: 6px; }
        .artisan-header-icon, .artisan-avatar { width: 40px; height: 40px; }
        .artisan-dashboard-content { padding: 16px 12px 64px; }
        .artisan-mobile-nav { margin-bottom: 20px; padding-right: 2px; }
        .artisan-mobile-nav button, .artisan-primary-button, .artisan-outline-button { min-height: 42px; }
        .artisan-welcome-row h1, .artisan-page-heading h1 { font-size: 2rem; }
        .artisan-welcome-row p, .artisan-page-heading p { font-size: 13px; }
        .artisan-page-heading .artisan-page-count { display: inline-flex; margin-top: 12px; }
        .artisan-panel { padding: 14px; border-radius: 12px; }
        .artisan-panel-heading h2 { font-size: 20px; }
        .artisan-stat-card { min-height: 118px; padding: 12px; }
        .artisan-stat-card strong { font-size: 21px; }
        .artisan-stat-label, .artisan-stat-card small { font-size: 10px; }
        .artisan-order-row, .artisan-message-row { gap: 7px; padding: 12px 0; }
        .artisan-order-info strong { font-size: 12px; }
        .artisan-order-info small { font-size: 10px; }
        .artisan-order-value { width: auto; font-size: 11px; }
        .artisan-chevron { font-size: 15px; }
        .artisan-dialog-backdrop { padding: 8px; place-items: end center; }
        .artisan-dialog { max-height: calc(100dvh - 16px); padding: 20px 14px 14px; border-radius: 16px 16px 10px 10px; }
        .artisan-dialog-heading { padding-right: 28px; }
        .artisan-dialog h2 { font-size: 24px; }
        .artisan-upload-area { padding: 12px; }
        .artisan-upload-button { min-height: 40px; display: inline-flex; align-items: center; }
        .artisan-upload-preview { width: calc(33.333% - 7px); min-width: 84px; }
        .artisan-upload-preview button { min-height: 28px; }
        .artisan-form-grid { gap: 11px; }
        .artisan-form-grid input, .artisan-form-grid select, .artisan-form-grid textarea { min-height: 42px; font-size: 16px; }
        .artisan-form-grid textarea { min-height: 92px; }
      }
      @media (max-width: 360px) {
        .artisan-dashboard-logo { width: 112px; }
        .artisan-header-icon { display: none; }
        .artisan-stat-grid { gap: 7px; }
        .artisan-stat-card { min-height: 112px; padding: 10px; }
        .artisan-stat-card strong { font-size: 19px; }
        .artisan-purpose-note button { margin-left: 0; }
        .artisan-upload-preview { width: calc(50% - 5px); }
      }
    `}</style>
  </div>;
}

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const [activePage, setActivePage] = useState<"home" | "about" | "products" | "login" | "artisanSignup" | "accountSignup" | "accountDashboard">("home");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", whatsapp: "", email: "", instagram: "", address: "", product: "" });
  const [submitted, setSubmitted] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [accountCreated, setAccountCreated] = useState(false);
  const [accountRole, setAccountRole] = useState<AccountRole | null>(null);

  // Reset category filter when language changes (key changes per lang)
  useEffect(() => { setActiveCategory("all"); }, [lang]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const catKeys = ["all", "acessorios", "joias", "casa", "vestuario", "brinquedos"] as const;
  type CatKey = typeof catKeys[number];
  const catMap: Record<CatKey, string> = {
    all: t(T.products.categories.all, lang),
    acessorios: t(T.products.categories.acessorios, lang),
    joias: t(T.products.categories.joias, lang),
    casa: t(T.products.categories.casa, lang),
    vestuario: t(T.products.categories.vestuario, lang),
    brinquedos: t(T.products.categories.brinquedos, lang),
  };
  const ptCategoryMap: Record<CatKey, string> = {
    all: "Todos", acessorios: "Acessórios", joias: "Joias", casa: "Casa", vestuario: "Vestuário", brinquedos: "Brinquedos",
  };

  const filtered = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === ptCategoryMap[activeCategory as CatKey]);

  const navLinks = [
    { label: t(T.nav.home, lang), href: "#" },
    { label: t(T.nav.about, lang), href: "#historia" },
    { label: t(T.nav.products, lang), href: "#produtos" },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setAccountCreated(true);
  }

  const artisanDashboard = activePage === "accountDashboard" && accountRole === "artisan";

  return (
    <div style={{ minHeight: "100%", width: "100%", maxWidth: "100%", overflowX: "hidden", background: C.bg, color: C.fg, fontFamily: "var(--font-nunito)" }}>

      {/* ── NAV ── */}
      <style>{`
        html {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        body {
          overflow-x: hidden;
          margin: 0;
        }

        .site-nav-links {
          display: flex;
          align-items: center;
          gap: 42px;
          margin-left: auto;
          margin-right: 34px;
        }

        .site-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          margin-left: 0;
        }

        .page-transition { animation: pageFadeIn 0.38s ease both; }
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .site-menu-button { display: none; }
        .site-mobile-menu { display: none; }

        @media (max-width: 1024px) {
          .site-header-inner {
            gap: 18px !important;
            padding: 0 20px !important;
          }
          .site-nav-links {
            gap: 24px !important;
          }
          .site-logo-wrap {
            width: 210px !important;
          }
          .site-logo {
            width: 205px !important;
          }
        }

        @media (max-width: 767px) {
          .site-nav-links { display: none !important; }
          .site-menu-button { display: flex !important; }
          .site-mobile-menu { display: block; }
          .site-header-inner {
            height: 76px !important;
            padding: 0 16px !important;
            gap: 10px !important;
          }
          .site-logo-wrap {
            width: 170px !important;
            height: 76px !important;
          }
          .site-logo {
            width: 165px !important;
            height: 76px !important;
          }
          .site-actions {
            margin-left: auto !important;
            gap: 6px !important;
          }

          .site-actions button {
            min-width: 40px;
            min-height: 40px;
          }
        }

        @media (max-width: 420px) {
          .site-logo-wrap {
            width: 135px !important;
          }
          .site-logo {
            width: 132px !important;
          }
          .site-actions {
            gap: 4px !important;
          }
        }
      `}</style>

      {!artisanDashboard && <nav style={{
        background: "#FBF5E9",
        borderBottom: `2px solid ${C.border}`,
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 2px 14px rgba(91,62,47,0.08)"
      }}>
        <div
          className="site-header-inner"
          style={{
            maxWidth: 1400,
            width: "100%",
            boxSizing: "border-box",
            margin: "0 auto",
            padding: "0 40px",
            height: 100,
            display: "flex",
            alignItems: "center",
            gap: 24
          }}
        >
          <button
            type="button"
            onClick={() => setActivePage("home")}
            aria-label="Página inicial"
            style={{ flexShrink: 0, background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
          >
            <div
              className="site-logo-wrap"
              style={{
                width: 280,
                height: 94,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexShrink: 0,
                overflow: "visible"
              }}
            >
              <img
                className="site-logo"
                src={logo}
                alt="Artesãs de Heliópolis"
                style={{
                  width: 275,
                  height: 94,
                  objectFit: "contain",
                  objectPosition: "left center",
                  display: "block"
                }}
              />
            </div>
          </button>

          <div
            className="site-nav-links"
            style={{
              flex: 1,
              justifyContent: "center",
              gap: 42
            }}
          >
            {navLinks.map((l, index) => (
              <button
                key={l.href}
                type="button"
                onClick={() => setActivePage(index === 0 ? "home" : index === 1 ? "about" : "products")}
                style={{
                  color: ((index === 0 && activePage === "home") || (index === 1 && activePage === "about") || (index === 2 && activePage === "products")) ? C.fg : C.fgDim,
                  background: "transparent",
                  border: "none",
                  padding: 0,
                  fontSize: 15.5,
                  fontWeight: 600,
                  letterSpacing: "0.025em",
                  fontFamily: "var(--font-nunito)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s"
                }}
                onMouseEnter={e => (e.currentTarget.style.color = C.fg)}
                onMouseLeave={e => (e.currentTarget.style.color = ((index === 0 && activePage === "home") || (index === 1 && activePage === "about") || (index === 2 && activePage === "products")) ? C.fg : C.fgDim)}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* UM ÚNICO conjunto de ações para desktop e mobile */}
          <div
            className="site-actions"
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              flexShrink: 0
            }}
          >
            <UserMenu lang={lang} signedIn={accountCreated} role={accountRole} onOpenAccount={() => setActivePage("accountDashboard")} onCreateAccount={() => setActivePage("accountSignup")} onLogin={() => setActivePage("login")} onArtisanSignup={() => setActivePage("artisanSignup")} />
            <CartButton lang={lang} count={cartCount} />
            <LangSwitcher lang={lang} setLang={setLang} />

            {/* Hamburger: escondido no desktop e visível apenas no mobile */}
            <button
              className="site-menu-button"
              type="button"
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              style={{
                marginLeft: 2,
                width: 34,
                height: 34,
                alignItems: "center",
                justifyContent: "center",
                color: C.fg,
                background: "transparent",
                border: "none",
                fontSize: 23,
                cursor: "pointer",
                padding: 4
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="site-mobile-menu"
            style={{
              background: "#FBF5E9",
              borderTop: `1px solid ${C.border}`,
              padding: "8px 24px 16px"
            }}
          >
            {navLinks.map((l, index) => (
              <button
                key={l.href}
                type="button"
                onClick={() => {
                  setActivePage(index === 0 ? "home" : index === 1 ? "about" : "products");
                  setMenuOpen(false);
                }}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px 0",
                  color: C.fgDim,
                  background: "transparent",
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: "left",
                  border: "none",
                  borderBottom: `1px solid ${C.border}`,
                  fontFamily: "var(--font-nunito)",
                  cursor: "pointer"
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>}

      <div className="page-transition">
        {activePage === "home" ? (
          <>
      {/* ── HERO ── */}
      <section
        className="site-hero"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          minHeight: "calc(100vh - 102px)",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #FFF8EC 0%, #F3E5D1 58%, #EAD6C0 100%)",
            padding: "clamp(56px, 8vw, 110px) clamp(28px, 5vw, 80px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `${C.primary}18`,
              border: `1px solid ${C.primary}55`,
              borderRadius: 99,
              padding: "6px 16px",
              width: "fit-content",
              marginBottom: 24,
            }}
          >
            <span style={{ color: C.primary, fontSize: 12, fontWeight: 700 }}>
              {t(T.hero.home.community, lang)}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2.6rem, 5vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.03,
              letterSpacing: "-0.025em",
              margin: 0,
              maxWidth: 700,
            }}
          >
            {t(T.hero.line1, lang)}{" "}
            <em style={{ color: C.primary, fontStyle: "italic" }}>
              {t(T.hero.line2, lang)}
            </em>
            <br />
            {t(T.hero.line3, lang)}
          </h1>

          <p
            style={{
              marginTop: 24,
              fontSize: "clamp(15px, 1.35vw, 17px)",
              lineHeight: 1.7,
              color: C.fgDim,
              maxWidth: 560,
              marginBottom: 0,
            }}
          >
            {t(T.hero.sub, lang)}
          </p>

          <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a
              href="#produtos"
              style={{
                background: C.primary,
                color: C.bg,
                padding: "15px 30px",
                borderRadius: 6,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: `0 4px 24px ${C.primary}45`,
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "";
              }}
            >
              {t(T.hero.ctaViewProducts, lang)}
            </a>
            <a
              href="#conta"
              onClick={event => { event.preventDefault(); setActivePage("accountSignup"); }}
              style={{
                background: "transparent",
                color: C.primary,
                padding: "15px 30px",
                borderRadius: 6,
                border: `1.5px solid ${C.primary}`,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = C.primary;
                e.currentTarget.style.color = C.bg;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = C.primary;
                e.currentTarget.style.transform = "";
              }}
            >
              {t(T.nav.cta, lang)}
            </a>
          </div>
        </div>

        <div
          className="site-hero-image"
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: "520px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=1400&h=1400&fit=crop&auto=format"
            alt="Artesanato colorido"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "520px",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              filter: "brightness(0.72) saturate(1.35)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #FFF8EC 0%, rgba(255,248,236,0.32) 18%, transparent 48%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .site-hero {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }

          .site-hero-image {
            min-height: 420px !important;
            height: 52vw !important;
            max-height: 560px !important;
          }

          .site-hero-image img {
            min-height: 420px !important;
          }
        }

        @media (max-width: 600px) {
          .site-hero > div:first-child {
            padding: 54px 24px 58px !important;
          }

          .site-hero-image {
            min-height: 330px !important;
            height: 70vw !important;
          }

          .site-hero-image img {
            min-height: 330px !important;
          }
        }
      `}</style>

      {/* ── QUEM SOMOS ── */}
      <section id="historia" style={{ background: C.muted, padding: "96px 24px" }}>
        <div className="about-grid" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)", gap: 70, alignItems: "center" }}>
          <div>
            <span style={{ color: C.primary, fontSize: 12, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase" }}>{t(T.hero.home.aboutEyebrow, lang)}</span>
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700, marginTop: 12, lineHeight: 1.08, letterSpacing: "-0.02em" }}>
              {t(T.hero.home.aboutTitle1, lang)}
              <br />
              <em style={{ color: C.primary, fontStyle: "italic" }}>{t(T.hero.home.aboutTitle2, lang)}</em>
            </h2>
          </div>
          <div>
            <p style={{ color: C.fgDim, fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              {t(T.hero.home.aboutText1, lang)}
            </p>
            <p style={{ color: C.fgDim, fontSize: 16, lineHeight: 1.8, marginTop: 18 }}>
              {t(T.hero.home.aboutText2, lang)}
            </p>
          </div>
        </div>

        <div
          className="about-curiosities"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 20,
            marginTop: 56,
            maxWidth: 1120,
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {T.hero.home.curiosities.map((item, index) => (
            <div
              key={item.title.pt}
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                padding: "22px 20px",
                minHeight: 150,
              }}
            >
              <div style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.12em" }}>{t(item.title, lang)}</div>
              <div style={{ fontWeight: 700, fontSize: 14, marginTop: 12, maxWidth: 180 }}>{t(item.text, lang)}</div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 800px) {
            .about-grid {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }
            .about-curiosities {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ── PRODUTOS ── */}
      <section id="produtos" style={{ padding: "96px 24px", background: C.bg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 40 }}>
            <div>
              <span style={{ color: C.primary, fontSize: 12, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase" }}>{t(T.products.label, lang)}</span>
              <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, marginTop: 10, letterSpacing: "-0.02em" }}>
                {t(T.products.title1, lang)}<br />
                <em style={{ fontStyle: "italic", color: C.primary }}>{t(T.products.title2, lang)}</em>
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {catKeys.map(key => (
                <button key={key} onClick={() => setActiveCategory(key)}
                  style={{ padding: "8px 18px", borderRadius: 99, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.18s", background: activeCategory === key ? C.primary : "transparent", color: activeCategory === key ? C.bg : C.fgDim, border: `1.5px solid ${activeCategory === key ? C.primary : C.border}` }}>
                  {catMap[key]}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {filtered.map(p => (
              <div key={p.id}
                style={{ background: C.card, border: `1.5px solid ${C.border}`, borderRadius: 10, width: 280, overflow: "hidden", transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "translateY(-4px)"; d.style.borderColor = C.primary; d.style.boxShadow = `0 16px 48px ${C.primary}18`; }}
                onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = ""; d.style.borderColor = C.border; d.style.boxShadow = ""; }}>
                <img src={p.image} alt={t(T.products.productNames[p.id], lang)} style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <div>
                      <span style={{ color: C.primary, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        {t(T.products.categoryNames[p.category as keyof typeof T.products.categoryNames], lang)}
                      </span>
                      <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 15.5, fontWeight: 600, marginTop: 4 }}>
                        {t(T.products.productNames[p.id], lang)}
                      </h3>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-fraunces)", fontSize: 18, fontWeight: 700, color: C.primary }}>{formatProductPrice(p.id, lang)}</div>
                      <div style={{ fontSize: 10.5, color: C.fgDim, marginTop: 2 }}><CurrencyLabel lang={lang} /></div>
                    </div>
                  </div>
                  <p style={{ fontSize: 12, color: C.fgDim, marginTop: 4 }}>{t(T.products.by, lang)} {p.artisan}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                    {p.tags[lang].map((tag: string) => (
                      <span key={tag} style={{ background: C.muted, border: `1px solid ${C.border}`, borderRadius: 20, padding: "3px 10px", fontSize: 11, color: C.fgDim }}>{tag}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setCartCount(count => count + 1)}
                    style={{ width: "100%", marginTop: 14, padding: "10px", borderRadius: 6, background: "transparent", border: `1.5px solid ${C.primary}`, color: C.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "background 0.18s, color 0.18s", fontFamily: "var(--font-nunito)" }}
                    onMouseEnter={e => { const b = e.currentTarget; b.style.background = C.primary; b.style.color = C.bg; }}
                    onMouseLeave={e => { const b = e.currentTarget; b.style.background = "transparent"; b.style.color = C.primary; }}>
                    {t(T.products.cardCta, lang)}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 38 }}>
            <button
              type="button"
              onClick={() => setActivePage("products")}
              style={{
                padding: "12px 30px",
                borderRadius: 6,
                background: "transparent",
                border: `1.5px solid ${C.primary}`,
                color: C.primary,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "var(--font-nunito)",
                transition: "background 0.18s, color 0.18s, transform 0.18s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = C.primary;
                e.currentTarget.style.color = C.bg;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = C.primary;
                e.currentTarget.style.transform = "";
              }}
            >
              {t(T.hero.home.productsMore, lang)}
            </button>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" style={{ background: C.muted, padding: "96px 24px" }}>
        <div className="guide-grid" style={{ maxWidth: 1280, width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 80, alignItems: "center", boxSizing: "border-box" }}>
          <div>
            <span style={{ color: C.primary, fontSize: 12, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase" }}>{t(T.nav.howItWorks, lang)}</span>
            <h2 className="guide-title" style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.8rem, 4.5vw, 3rem)", fontWeight: 700, marginTop: 12, lineHeight: 1.08, letterSpacing: "-0.02em", maxWidth: "100%", overflowWrap: "break-word" }}>
              {t(T.hero.home.guideHomeTitle1, lang)}<br /><em style={{ color: C.primary, fontStyle: "italic" }}>{t(T.hero.home.guideHomeTitle2, lang)}</em>
            </h2>
            <p style={{ color: C.fgDim, marginTop: 18, fontSize: 15.5, lineHeight: 1.7 }}>{t(T.hero.home.guideHomeSub, lang)}</p>
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 24 }}>
              {T.hero.home.guideHomeFeatures.map(f => (
                <div key={f.icon} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ color: C.primary, fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", minWidth: 28, paddingTop: 2, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>
                      {t(f.title, lang)}
                    </div>

                    <div style={{ color: C.fgDim, fontSize: 13.5, marginTop: 4, lineHeight: 1.6 }}>
                      {t(f.desc, lang)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1699286029931-6315161bb3a7?w=600&h=700&fit=crop&auto=format"
              alt="Artisan at work"
              style={{ borderRadius: 12, width: "100%", objectFit: "cover", height: 480, filter: "brightness(0.8) saturate(1.2)" }}
            />
            <div style={{ position: "absolute", bottom: -20, left: -20, background: C.primary, borderRadius: 10, padding: "22px 26px" }}>
              <div style={{ fontFamily: "var(--font-fraunces)", fontSize: 36, fontWeight: 700, color: C.bg }}>97%</div>
              <div style={{ fontSize: 13, color: C.bg, fontWeight: 600, marginTop: 4, lineHeight: 1.4, whiteSpace: "pre-line" }}>
                {t(T.hero.home.guideHomeStat, lang)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .guide-grid {
          width: 100%;
        }

        .guide-title {
          width: 100%;
        }

        @media (max-width: 900px) {
          .guide-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .guide-grid > div {
            min-width: 0 !important;
          }
        }

        @media (max-width: 600px) {
          #como-funciona {
            padding: 64px 20px !important;
          }

          .guide-title {
            font-size: clamp(1.8rem, 8vw, 2.35rem) !important;
            line-height: 1.08 !important;
          }

          .guide-grid {
            gap: 40px !important;
          }

          .guide-grid img {
            width: 100% !important;
            height: auto !important;
            min-height: 320px !important;
            max-height: 520px !important;
          }

          .guide-grid > div:last-child > div {
            position: absolute !important;
            left: 12px !important;
            bottom: 12px !important;
          }
        }
      `}</style>

      {/* ── CADASTRO ── */}
      <section id="cadastro" style={{ background: C.bg, padding: "96px 24px" }}>
        <div style={{ maxWidth: 540, margin: "0 auto", textAlign: "center" }}>
          <span style={{ color: C.primary, fontSize: 12, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase" }}>{t(T.signup.label, lang)}</span>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 700, marginTop: 12, letterSpacing: "-0.02em" }}>
            {t(T.signup.title1, lang)}<br /><em style={{ color: C.primary, fontStyle: "italic" }}>{t(T.signup.title2, lang)}</em>
          </h2>
          <p style={{ color: C.fgDim, marginTop: 16, fontSize: 15.5, lineHeight: 1.7 }}>{t(T.signup.sub, lang)}</p>

          {submitted ? (
            <div style={{ marginTop: 40, background: `${C.primary}12`, border: `1.5px solid ${C.primary}44`, borderRadius: 12, padding: "40px 32px" }}>
              <div style={{ fontSize: 48 }}>🎉</div>
              <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 24, fontWeight: 700, marginTop: 16 }}>{t(T.signup.successTitle, lang)}</h3>
              <p style={{ color: C.fgDim, marginTop: 10, fontSize: 15, lineHeight: 1.6 }}>{t(T.signup.successText, lang)}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
              {([
                { key: "nome", field: T.signup.fields.name, type: "text" },
                { key: "whatsapp", field: T.signup.fields.whats, type: "tel" },
                { key: "email", field: T.signup.fields.email, type: "email" },
                { key: "instagram", field: T.signup.fields.instagram, type: "text" },
                { key: "address", field: T.signup.fields.address, type: "text" },
                { key: "product", field: T.signup.fields.product, type: "text" },
              ] as const).map(({ key, field, type }) => (
                <div key={key}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: C.fgDim, display: "block", marginBottom: 6 }}>{t(field.label, lang)}</label>
                  <input
                    type={type}
                    placeholder={t(field.placeholder, lang)}
                    required
                    value={(form as any)[key]}
                    onChange={e => setForm(prev => ({ ...prev, [key]: e.target.value }))}
                    style={{ width: "100%", background: C.muted, border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "13px 15px", color: C.fg, fontSize: 15, outline: "none", boxSizing: "border-box", transition: "border-color 0.2s", fontFamily: "var(--font-nunito)" }}
                    onFocus={e => (e.target as HTMLInputElement).style.borderColor = C.primary}
                    onBlur={e => (e.target as HTMLInputElement).style.borderColor = C.border}
                  />
                </div>
              ))}
              {([
                { key: "residence", field: T.signup.fields.residence, accept: "image/*,.pdf" },
                { key: "artImages", field: T.signup.fields.artImages, accept: "image/*" },
              ] as const).map(({ key, field, accept }) => (
                <div key={key}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: C.fgDim, display: "block", marginBottom: 6 }}>{t(field.label, lang)}</label>
                  <input type="file" accept={accept} required={key === "residence"} multiple={key === "artImages"} style={{ width: "100%", background: C.muted, border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "10px", color: C.fg, fontSize: 13, boxSizing: "border-box", fontFamily: "var(--font-nunito)" }} />
                </div>
              ))}
              <button type="submit"
                style={{ marginTop: 8, padding: "15px", borderRadius: 6, background: C.primary, color: C.bg, fontSize: 16, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: `0 4px 20px ${C.primary}40`, fontFamily: "var(--font-nunito)", transition: "opacity 0.2s, transform 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.9"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; (e.currentTarget as HTMLButtonElement).style.transform = ""; }}>
                {t(T.hero.home.signupButton, lang)}
              </button>
              <p style={{ fontSize: 12, color: C.fgFaint, textAlign: "center", marginTop: 6 }}>{t(T.signup.fine, lang)}</p>
            </form>
          )}
        </div>
      </section>

          </>
        ) : activePage === "about" ? (
          <QuemSomosPage
            lang={lang}
            onJoin={() => {
              setActivePage("artisanSignup");
            }}
          />
        ) : activePage === "artisanSignup" ? (
          <ArtisanSignupPage lang={lang} onSubmitted={() => { setAccountCreated(true); setAccountRole("artisan"); }} />
        ) : activePage === "accountSignup" ? (
          <AccountSignupPage lang={lang} onCreated={() => { setAccountCreated(true); setAccountRole("buyer"); }} />
        ) : activePage === "login" ? (
          <LoginPage lang={lang} onLogin={(role) => { setAccountCreated(true); setAccountRole(role); setActivePage("accountDashboard"); }} onCreateAccount={() => {
            setActivePage("accountSignup");
          }} />
        ) : activePage === "accountDashboard" ? (
          accountRole === "artisan"
            ? <ArtisanDashboard lang={lang} onBack={() => setActivePage("home")} />
            : <AccountDashboard lang={lang} role="buyer" onBack={() => setActivePage("home")} />
        ) : (
          <ProdutosPageNova lang={lang} onJoin={() => {
            setActivePage("artisanSignup");
          }} />
        )}
      </div>

      {/* ── FOOTER ── */}
      {!artisanDashboard && <footer style={{ background: "#FBF5E9", borderTop: `1px solid ${C.border}`, padding: "52px 24px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="footer-content"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(220px, 1fr) repeat(3, minmax(150px, 1fr))",
              gap: 48,
              alignItems: "start",
              marginBottom: 48,
            }}
          >
            <div style={{ minWidth: 220 }}>
              <img src={logo} alt="Artesãs de Heliópolis" style={{ width: 180, height: 78, objectFit: "contain", objectPosition: "left center" }} />
              <p style={{ color: C.fgFaint, fontSize: 13, marginTop: 14, lineHeight: 1.7, maxWidth: 200 }}>{t(T.footer.tagline, lang)}</p>
            </div>
            {([
              { titleKey: T.footer.col1, linksKey: T.footer.col1links },
              { titleKey: T.footer.col2, linksKey: T.footer.col2links },
              { titleKey: T.footer.col3, linksKey: T.footer.col3links },
            ] as const).map((col, i) => (
              <div key={i}>
                <div style={{ color: C.fgFaint, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>{t(col.titleKey, lang)}</div>
                {(col.linksKey[lang] as readonly string[])

                  .map((l: string) => (
                    <div key={l} style={{ color: "rgba(58,41,37,0.48)", fontSize: 13.5, marginBottom: 10, cursor: "pointer", transition: "color 0.18s", lineHeight: 1.35 }}
                      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.color = C.fg}
                      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.color = "rgba(58,41,37,0.48)"}>
                      {l.trim()}
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 24, textAlign: "center" }}>
            <p style={{ color: C.fgFaint, fontSize: 12.5 }}>{t(T.footer.copy, lang)}</p>
            <p style={{ color: "rgba(58,41,37,0.30)", fontSize: 11.5, marginTop: 8 }}>{t(T.footer.pride, lang)}</p>
          </div>
        </div>
      </footer>}

      <CustomerSupport lang={lang} />
    </div>
  );
}
