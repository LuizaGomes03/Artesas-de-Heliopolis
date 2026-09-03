import 'package:flutter/material.dart';

void main() => runApp(const HeliopolisGlobalApp());

// ─── Tokens ────────────────────────────────────────────────────────────────

class HColors {
  static const background = Color(0xFFF5EDD8);
  static const foreground = Color(0xFF2C1810);
  static const card = Color(0xFFFBF5E8);
  static const primary = Color(0xFFC4622D);
  static const secondary = Color(0xFF7A3B1E);
  static const muted = Color(0xFFE8DEC5);
  static const mutedFg = Color(0xFF6B4C38);
  static const accent = Color(0xFFE8A048);
  static const border = Color(0xFFC9B99A);
  static const cream = Color(0xFFF5EDD8);
  static const dark1 = Color(0xFF1a0e08);
  static const dark2 = Color(0xFF3D2415);
}

TextStyle fraunces({
  double size = 16,
  FontWeight weight = FontWeight.w600,
  Color color = HColors.foreground,
  FontStyle style = FontStyle.normal,
  double? height,
  double letterSpacing = -0.3,
}) =>
    TextStyle(
      fontFamily: 'Fraunces',
      fontSize: size,
      fontWeight: weight,
      color: color,
      fontStyle: style,
      height: height,
      letterSpacing: letterSpacing,
    );

TextStyle nunito({
  double size = 14,
  FontWeight weight = FontWeight.w400,
  Color color = HColors.foreground,
  double? height,
  double letterSpacing = 0,
}) =>
    TextStyle(
      fontFamily: 'Nunito',
      fontSize: size,
      fontWeight: weight,
      color: color,
      height: height,
      letterSpacing: letterSpacing,
    );

// ─── Data ──────────────────────────────────────────────────────────────────

class Product {
  final int id;
  final String name;
  final String artisan;
  final String price;
  final String priceUSD;
  final String category;
  final String imageUrl;
  final List<String> tags;

  const Product({
    required this.id,
    required this.name,
    required this.artisan,
    required this.price,
    required this.priceUSD,
    required this.category,
    required this.imageUrl,
    required this.tags,
  });
}

const products = [
  Product(
    id: 1,
    name: 'Bolsa de Palha Trançada',
    artisan: 'Maria das Graças',
    price: 'R\$ 85',
    priceUSD: 'USD 16',
    category: 'Acessórios',
    imageUrl: 'https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=400&h=400&fit=crop',
    tags: ['Palha', 'Trançado', 'Sustentável'],
  ),
  Product(
    id: 2,
    name: 'Conjunto de Bijuterias em Miçangas',
    artisan: 'Rosângela Silva',
    price: 'R\$ 120',
    priceUSD: 'USD 23',
    category: 'Joias',
    imageUrl: 'https://images.unsplash.com/photo-1581475319737-4ae69b8926c7?w=400&h=400&fit=crop',
    tags: ['Miçangas', 'Bijuteria', 'Colorido'],
  ),
  Product(
    id: 3,
    name: 'Tapete de Crochê',
    artisan: 'Aparecida Oliveira',
    price: 'R\$ 210',
    priceUSD: 'USD 40',
    category: 'Casa',
    imageUrl: 'https://images.unsplash.com/photo-1552710307-537199cd41c0?w=400&h=400&fit=crop',
    tags: ['Crochê', 'Decoração', 'Fibra'],
  ),
  Product(
    id: 4,
    name: 'Boneca de Pano Afrobrasileira',
    artisan: 'Fatima Conceição',
    price: 'R\$ 95',
    priceUSD: 'USD 18',
    category: 'Brinquedos',
    imageUrl: 'https://images.unsplash.com/photo-1722957533029-6b62a3826d05?w=400&h=400&fit=crop',
    tags: ['Pano', 'Cultura Afro', 'Brinquedo'],
  ),
  Product(
    id: 5,
    name: 'Vaso de Barro Pintado',
    artisan: 'Nilza Santos',
    price: 'R\$ 160',
    priceUSD: 'USD 30',
    category: 'Casa',
    imageUrl: 'https://images.unsplash.com/photo-1781617783311-243520abc3fc?w=400&h=400&fit=crop',
    tags: ['Barro', 'Pintura', 'Decoração'],
  ),
  Product(
    id: 6,
    name: 'Xale Bordado à Mão',
    artisan: 'Benedita Lima',
    price: 'R\$ 290',
    priceUSD: 'USD 55',
    category: 'Vestuário',
    imageUrl: 'https://images.unsplash.com/photo-1508589452764-4e017240add7?w=400&h=400&fit=crop',
    tags: ['Bordado', 'Tecido', 'Moda'],
  ),
];

const exportSteps = [
  (num: '01', icon: '📦', title: 'Cadastre seu Produto', desc: 'Adicione fotos, descrições em português e inglês, materiais e preço. Nossa IA ajuda na tradução automática.'),
  (num: '02', icon: '📄', title: 'Documentação Facilitada', desc: 'Geramos a nota fiscal de exportação, classificação NCM, certificado de origem artesanal e declaração de conteúdo.'),
  (num: '03', icon: '🌍', title: 'Conecte-se a Compradores', desc: 'Seu produto aparece para importadores em mais de 40 países. Você recebe pedidos diretamente no app.'),
  (num: '04', icon: '✈️', title: 'Envie com Segurança', desc: 'Parceria com Correios e transportadoras para envio internacional com rastreamento em tempo real.'),
  (num: '05', icon: '💰', title: 'Receba em Reais', desc: 'Pagamentos internacionais convertidos automaticamente para sua conta bancária. Sem burocracia cambial.'),
];

const markets = [
  (country: '🇵🇹 Portugal', interest: 'Artesanato, Têxteis', demand: 'Alta'),
  (country: '🇩🇪 Alemanha', interest: 'Produtos Sustentáveis, Casa', demand: 'Alta'),
  (country: '🇺🇸 Estados Unidos', interest: 'Joias, Moda Étnica', demand: 'Muito Alta'),
  (country: '🇯🇵 Japão', interest: 'Cerâmica, Têxteis', demand: 'Média'),
  (country: '🇫🇷 França', interest: 'Moda, Acessórios', demand: 'Alta'),
  (country: '🇬🇧 Reino Unido', interest: 'Arte, Decoração', demand: 'Alta'),
];

const testimonials = [
  (
    initials: 'MG',
    name: 'Maria das Graças Ferreira',
    role: 'Artesã de trançados há 22 anos',
    text:
        '"Antes eu vendia só aqui perto. Agora minhas bolsas chegam em Portugal e na Alemanha. No primeiro mês, minha renda triplicou."',
    color: HColors.primary,
  ),
  (
    initials: 'RS',
    name: 'Rosângela Aparecida Silva',
    role: 'Criadora de bijuterias afro',
    text:
        '"A parte da documentação me assustava muito. Mas o sistema gera tudo automático. Em três cliques meu produto está disponível pro mundo."',
    color: HColors.secondary,
  ),
  (
    initials: 'BL',
    name: 'Benedita Lima dos Santos',
    role: 'Bordadeira e professora comunitária',
    text:
        '"Uma cliente do Japão disse que meu bordado era arte. A gente aqui sabe que é arte, mas ouvir isso de tão longe... mudou tudo pra mim."',
    color: HColors.accent,
  ),
];

const categories = ['Todos', 'Acessórios', 'Joias', 'Casa', 'Vestuário', 'Brinquedos'];

// ─── App ───────────────────────────────────────────────────────────────────

class HeliopolisGlobalApp extends StatelessWidget {
  const HeliopolisGlobalApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Heliópolis Global',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: HColors.background,
        colorScheme: ColorScheme.fromSeed(
          seedColor: HColors.primary,
          background: HColors.background,
        ),
        fontFamily: 'Nunito',
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String _activeCategory = 'Todos';
  final _scrollController = ScrollController();
  final _formKey = GlobalKey<FormState>();
  bool _submitted = false;

  final _nameCtrl = TextEditingController();
  final _whatsCtrl = TextEditingController();
  final _emailCtrl = TextEditingController();
  final _prodCtrl = TextEditingController();

  @override
  void dispose() {
    _scrollController.dispose();
    _nameCtrl.dispose();
    _whatsCtrl.dispose();
    _emailCtrl.dispose();
    _prodCtrl.dispose();
    super.dispose();
  }

  List<Product> get _filtered => _activeCategory == 'Todos'
      ? products
      : products.where((p) => p.category == _activeCategory).toList();

  void _submit() {
    if (_formKey.currentState!.validate()) {
      setState(() => _submitted = true);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: HColors.background,
      body: SingleChildScrollView(
        controller: _scrollController,
        child: Column(
          children: [
            _NavBar(),
            _HeroSection(),
            _AnnouncementBanner(),
            _HowItWorksSection(),
            _ProductsSection(
              activeCategory: _activeCategory,
              filtered: _filtered,
              onCategory: (c) => setState(() => _activeCategory = c),
            ),
            _ExportGuideSection(),
            _MarketsSection(),
            _TestimonialsSection(),
            _SignupSection(
              formKey: _formKey,
              submitted: _submitted,
              nameCtrl: _nameCtrl,
              whatsCtrl: _whatsCtrl,
              emailCtrl: _emailCtrl,
              prodCtrl: _prodCtrl,
              onSubmit: _submit,
            ),
            _Footer(),
          ],
        ),
      ),
    );
  }
}

// ─── Nav ───────────────────────────────────────────────────────────────────

class _NavBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: HColors.foreground,
      padding: const EdgeInsets.symmetric(horizontal: 24),
      height: 64,
      child: Row(
        children: [
          // Logo
          Container(
            width: 36,
            height: 36,
            decoration: BoxDecoration(color: HColors.primary, borderRadius: BorderRadius.circular(4)),
            child: const Center(child: Text('✦', style: TextStyle(color: HColors.cream, fontSize: 18))),
          ),
          const SizedBox(width: 12),
          RichText(
            text: TextSpan(children: [
              TextSpan(text: 'Heliópolis', style: fraunces(size: 18, color: HColors.cream)),
              TextSpan(text: ' Global', style: fraunces(size: 18, color: HColors.accent, weight: FontWeight.w700)),
            ]),
          ),
          const Spacer(),
          // CTA
          _PrimaryButton(
            label: 'Cadastre-se Grátis',
            onTap: () {},
            small: true,
          ),
        ],
      ),
    );
  }
}

// ─── Hero ──────────────────────────────────────────────────────────────────

class _HeroSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      final wide = constraints.maxWidth > 800;
      return Container(
        constraints: const BoxConstraints(minHeight: 520),
        color: HColors.foreground,
        child: wide
            ? Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Expanded(flex: 1, child: _HeroText()),
                Expanded(flex: 1, child: _HeroImage()),
              ])
            : _HeroText(),
      );
    });
  }
}

class _HeroText extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [HColors.foreground, Color(0xFF3D2415), Color(0xFF5A3520)],
        ),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 48, vertical: 72),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
            decoration: BoxDecoration(
              color: HColors.accent.withOpacity(0.15),
              border: Border.all(color: HColors.accent.withOpacity(0.4)),
              borderRadius: BorderRadius.circular(99),
            ),
            child: Text(
              '✦ Comunidade de Heliópolis, SP',
              style: nunito(size: 12, color: HColors.accent, weight: FontWeight.w700, letterSpacing: 0.5),
            ),
          ),
          const SizedBox(height: 20),
          RichText(
            text: TextSpan(children: [
              TextSpan(text: 'O artesanato\n', style: fraunces(size: 44, color: HColors.cream, weight: FontWeight.w700, height: 1.05)),
              TextSpan(text: 'de Heliópolis\n', style: fraunces(size: 44, color: HColors.accent, weight: FontWeight.w700, style: FontStyle.italic, height: 1.05)),
              TextSpan(text: 'para o mundo.', style: fraunces(size: 44, color: HColors.cream, weight: FontWeight.w700, height: 1.05)),
            ]),
          ),
          const SizedBox(height: 20),
          Text(
            'Uma plataforma feita com e para as mulheres artesãs da comunidade. Exporte seus produtos, alcance compradores internacionais e aumente sua renda — sem burocracia.',
            style: nunito(size: 16, color: HColors.cream.withOpacity(0.7), height: 1.65),
          ),
          const SizedBox(height: 36),
          Wrap(spacing: 16, runSpacing: 12, children: [
            _PrimaryButton(label: 'Comece a Exportar →', onTap: () {}),
            _OutlineButton(label: 'Como Funciona', onTap: () {}),
          ]),
          const SizedBox(height: 48),
          Row(
            children: [
              _Stat(value: '380+', label: 'Artesãs Cadastradas'),
              const SizedBox(width: 32),
              _Stat(value: '40+', label: 'Países Alcançados'),
              const SizedBox(width: 32),
              _Stat(value: 'R\$2,4M', label: 'Renda Gerada'),
            ],
          ),
        ],
      ),
    );
  }
}

class _HeroImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        Image.network(
          'https://images.unsplash.com/photo-1562869929-bda0650edb1f?w=800&h=900&fit=crop',
          fit: BoxFit.cover,
          color: HColors.dark1.withOpacity(0.3),
          colorBlendMode: BlendMode.darken,
        ),
        Positioned(
          bottom: 32,
          right: 32,
          child: Container(
            width: 240,
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: HColors.cream.withOpacity(0.95),
              borderRadius: BorderRadius.circular(10),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(children: [
                  _Avatar(initials: 'MG', color: HColors.primary),
                  const SizedBox(width: 10),
                  Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text('Maria das Graças', style: nunito(size: 13, weight: FontWeight.w700)),
                    Text('Bolsas trançadas • SP → DE', style: nunito(size: 11, color: HColors.mutedFg)),
                  ]),
                ]),
                const SizedBox(height: 12),
                RichText(
                  text: TextSpan(children: [
                    TextSpan(text: '"Minha renda ', style: nunito(size: 12, height: 1.5)),
                    TextSpan(text: 'triplicou', style: nunito(size: 12, weight: FontWeight.w700, height: 1.5)),
                    TextSpan(text: ' no primeiro mês de exportação."', style: nunito(size: 12, height: 1.5)),
                  ]),
                ),
                const SizedBox(height: 10),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: HColors.muted,
                    borderRadius: BorderRadius.circular(99),
                    border: Border.all(color: HColors.border),
                  ),
                  child: Text('✓ Pedido confirmado', style: nunito(size: 11, color: HColors.mutedFg)),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class _Stat extends StatelessWidget {
  final String value;
  final String label;
  const _Stat({required this.value, required this.label});

  @override
  Widget build(BuildContext context) {
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(value, style: fraunces(size: 26, color: HColors.accent, weight: FontWeight.w700)),
      const SizedBox(height: 2),
      Text(label, style: nunito(size: 11, color: HColors.cream.withOpacity(0.5), weight: FontWeight.w500)),
    ]);
  }
}

// ─── Banner ────────────────────────────────────────────────────────────────

class _AnnouncementBanner extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: HColors.primary,
      padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 24),
      child: Center(
        child: Text(
          '✦ Plataforma 100% gratuita para artesãs de Heliópolis  ·  Parceria com Sebrae SP e APEX-Brasil  ·  Suporte em português',
          style: nunito(size: 13, color: HColors.cream, weight: FontWeight.w500),
          textAlign: TextAlign.center,
        ),
      ),
    );
  }
}

// ─── How It Works ──────────────────────────────────────────────────────────

class _HowItWorksSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: HColors.muted,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
      child: Column(children: [
        _SectionLabel('Simples e sem burocracia'),
        const SizedBox(height: 12),
        Text('Como funciona a exportação', style: fraunces(size: 34, weight: FontWeight.w700), textAlign: TextAlign.center),
        const SizedBox(height: 14),
        Text(
          'Da oficina à vitrine internacional, em cinco passos diretos ao ponto.',
          style: nunito(size: 16, color: HColors.mutedFg, height: 1.6),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 48),
        Wrap(
          spacing: 16,
          runSpacing: 16,
          alignment: WrapAlignment.center,
          children: exportSteps
              .map((s) => _StepCard(num: s.num, icon: s.icon, title: s.title, desc: s.desc))
              .toList(),
        ),
      ]),
    );
  }
}

class _StepCard extends StatefulWidget {
  final String num;
  final String icon;
  final String title;
  final String desc;
  const _StepCard({required this.num, required this.icon, required this.title, required this.desc});

  @override
  State<_StepCard> createState() => _StepCardState();
}

class _StepCardState extends State<_StepCard> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        width: 240,
        transform: Matrix4.translationValues(0, _hovered ? -4 : 0, 0),
        decoration: BoxDecoration(
          color: HColors.card,
          border: Border.all(color: HColors.border, width: 1.5),
          borderRadius: BorderRadius.circular(10),
          boxShadow: _hovered
              ? [BoxShadow(color: HColors.foreground.withOpacity(0.1), blurRadius: 24, offset: const Offset(0, 8))]
              : [],
        ),
        padding: const EdgeInsets.all(28),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(widget.icon, style: const TextStyle(fontSize: 48)),
          const SizedBox(height: 16),
          Text('PASSO ${widget.num}', style: nunito(size: 12, color: HColors.primary, weight: FontWeight.w700, letterSpacing: 1)),
          const SizedBox(height: 6),
          Text(widget.title, style: fraunces(size: 18, weight: FontWeight.w600)),
          const SizedBox(height: 10),
          Text(widget.desc, style: nunito(size: 13.5, color: HColors.mutedFg, height: 1.65)),
        ]),
      ),
    );
  }
}

// ─── Products ──────────────────────────────────────────────────────────────

class _ProductsSection extends StatelessWidget {
  final String activeCategory;
  final List<Product> filtered;
  final ValueChanged<String> onCategory;

  const _ProductsSection({
    required this.activeCategory,
    required this.filtered,
    required this.onCategory,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: HColors.background,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
      child: Column(children: [
        // Header row
        Wrap(
          alignment: WrapAlignment.spaceBetween,
          crossAxisAlignment: WrapCrossAlignment.end,
          spacing: 24,
          runSpacing: 16,
          children: [
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              _SectionLabel('Catálogo de exportação'),
              const SizedBox(height: 10),
              RichText(
                text: TextSpan(children: [
                  TextSpan(text: 'Feito com mãos,\n', style: fraunces(size: 32, weight: FontWeight.w700)),
                  TextSpan(text: 'vendido ao mundo', style: fraunces(size: 32, weight: FontWeight.w700, style: FontStyle.italic)),
                ]),
              ),
            ]),
            // Category pills
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: categories
                  .map((c) => _CategoryPill(label: c, active: c == activeCategory, onTap: () => onCategory(c)))
                  .toList(),
            ),
          ],
        ),
        const SizedBox(height: 40),
        // Product grid
        Wrap(
          spacing: 20,
          runSpacing: 20,
          alignment: WrapAlignment.center,
          children: filtered.map((p) => _ProductCard(product: p)).toList(),
        ),
      ]),
    );
  }
}

class _CategoryPill extends StatelessWidget {
  final String label;
  final bool active;
  final VoidCallback onTap;
  const _CategoryPill({required this.label, required this.active, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          color: active ? HColors.primary : HColors.muted,
          border: Border.all(color: active ? HColors.primary : HColors.border, width: 1.5),
          borderRadius: BorderRadius.circular(99),
        ),
        child: Text(
          label,
          style: nunito(size: 13, color: active ? HColors.cream : HColors.mutedFg, weight: FontWeight.w600),
        ),
      ),
    );
  }
}

class _ProductCard extends StatefulWidget {
  final Product product;
  const _ProductCard({required this.product});

  @override
  State<_ProductCard> createState() => _ProductCardState();
}

class _ProductCardState extends State<_ProductCard> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    final p = widget.product;
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        width: 280,
        transform: Matrix4.translationValues(0, _hovered ? -4 : 0, 0),
        decoration: BoxDecoration(
          color: HColors.card,
          border: Border.all(color: HColors.border, width: 1.5),
          borderRadius: BorderRadius.circular(10),
          boxShadow: _hovered
              ? [BoxShadow(color: HColors.foreground.withOpacity(0.1), blurRadius: 32, offset: const Offset(0, 10))]
              : [],
        ),
        clipBehavior: Clip.hardEdge,
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SizedBox(
            height: 200,
            width: double.infinity,
            child: Image.network(p.imageUrl, fit: BoxFit.cover),
          ),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(p.category, style: nunito(size: 11, color: HColors.primary, weight: FontWeight.w700, letterSpacing: 0.8)),
                  const SizedBox(height: 4),
                  Text(p.name, style: fraunces(size: 16, weight: FontWeight.w600)),
                ])),
                Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
                  Text(p.price, style: fraunces(size: 18, color: HColors.primary, weight: FontWeight.w700)),
                  Text(p.priceUSD, style: nunito(size: 11, color: HColors.mutedFg)),
                ]),
              ]),
              const SizedBox(height: 6),
              Text('por ${p.artisan}', style: nunito(size: 12, color: HColors.mutedFg)),
              const SizedBox(height: 14),
              Wrap(spacing: 6, runSpacing: 6, children: p.tags
                  .map((t) => Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 3),
                        decoration: BoxDecoration(
                          color: HColors.muted,
                          border: Border.all(color: HColors.border),
                          borderRadius: BorderRadius.circular(99),
                        ),
                        child: Text(t, style: nunito(size: 11, color: HColors.mutedFg)),
                      ))
                  .toList()),
              const SizedBox(height: 14),
              _PrimaryButton(label: 'Cadastrar para Exportação', onTap: () {}, fullWidth: true, dark: true),
            ]),
          ),
        ]),
      ),
    );
  }
}

// ─── Export Guide ──────────────────────────────────────────────────────────

class _ExportGuideSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final features = [
      (icon: '🌐', title: 'Tradução automática', desc: 'Descrições em inglês, espanhol, alemão e japonês geradas automaticamente.'),
      (icon: '📋', title: 'NCM e documentos', desc: 'Classificação fiscal e documentos de exportação gerados em segundos.'),
      (icon: '🚚', title: 'Logística integrada', desc: 'Parceria com Correios e DHL para envio com rastreamento em tempo real.'),
      (icon: '💳', title: 'Pagamento garantido', desc: 'Receba em reais direto na conta. Câmbio automático, sem taxas escondidas.'),
    ];

    return Container(
      color: HColors.foreground,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
      child: LayoutBuilder(builder: (context, constraints) {
        final wide = constraints.maxWidth > 800;
        if (wide) {
          return Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
            Expanded(child: _ExportGuideText(features: features)),
            const SizedBox(width: 72),
            Expanded(child: _ExportGuideImage()),
          ]);
        }
        return Column(children: [
          _ExportGuideText(features: features),
          const SizedBox(height: 40),
          _ExportGuideImage(),
        ]);
      }),
    );
  }
}

class _ExportGuideText extends StatelessWidget {
  final List<({String icon, String title, String desc})> features;
  const _ExportGuideText({required this.features});

  @override
  Widget build(BuildContext context) {
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text('GUIA COMPLETO', style: nunito(size: 12, color: HColors.accent, weight: FontWeight.w700, letterSpacing: 1.5)),
      const SizedBox(height: 12),
      RichText(
        text: TextSpan(children: [
          TextSpan(text: 'Exportar é mais\n', style: fraunces(size: 34, color: HColors.cream, weight: FontWeight.w700, height: 1.1)),
          TextSpan(text: 'simples do que parece', style: fraunces(size: 34, color: HColors.accent, weight: FontWeight.w700, style: FontStyle.italic, height: 1.1)),
        ]),
      ),
      const SizedBox(height: 20),
      Text(
        'Cuidamos de toda a parte burocrática. Você foca no que sabe fazer melhor: criar.',
        style: nunito(size: 15, color: HColors.cream.withOpacity(0.65), height: 1.7),
      ),
      const SizedBox(height: 36),
      ...features.map((f) => Padding(
            padding: const EdgeInsets.only(bottom: 24),
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(f.icon, style: const TextStyle(fontSize: 28)),
              const SizedBox(width: 16),
              Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(f.title, style: nunito(size: 15, color: HColors.cream, weight: FontWeight.w600)),
                const SizedBox(height: 4),
                Text(f.desc, style: nunito(size: 13.5, color: HColors.cream.withOpacity(0.55), height: 1.6)),
              ])),
            ]),
          )),
    ]);
  }
}

class _ExportGuideImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(12),
          child: Image.network(
            'https://images.unsplash.com/photo-1699286029931-6315161bb3a7?w=600&h=680&fit=crop',
            height: 480,
            width: double.infinity,
            fit: BoxFit.cover,
          ),
        ),
        Positioned(
          bottom: -20,
          left: -20,
          child: Container(
            padding: const EdgeInsets.all(24),
            decoration: BoxDecoration(
              color: HColors.accent,
              borderRadius: BorderRadius.circular(10),
            ),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('97%', style: fraunces(size: 36, color: HColors.foreground, weight: FontWeight.w700)),
              const SizedBox(height: 4),
              Text('dos pedidos entregues\nsem nenhum problema', style: nunito(size: 12, color: HColors.foreground, weight: FontWeight.w600, height: 1.4)),
            ]),
          ),
        ),
      ],
    );
  }
}

// ─── Markets ───────────────────────────────────────────────────────────────

class _MarketsSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: HColors.background,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
      child: Column(children: [
        _SectionLabel('Oportunidades reais'),
        const SizedBox(height: 12),
        Text(
          'Mercados que procuram\no que você produz',
          style: fraunces(size: 34, weight: FontWeight.w700),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 48),
        Wrap(
          spacing: 16,
          runSpacing: 16,
          alignment: WrapAlignment.center,
          children: markets.map((m) => _MarketCard(country: m.country, interest: m.interest, demand: m.demand)).toList(),
        ),
      ]),
    );
  }
}

class _MarketCard extends StatefulWidget {
  final String country;
  final String interest;
  final String demand;
  const _MarketCard({required this.country, required this.interest, required this.demand});

  @override
  State<_MarketCard> createState() => _MarketCardState();
}

class _MarketCardState extends State<_MarketCard> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    final isHigh = widget.demand == 'Muito Alta';
    final dotColor = isHigh ? HColors.primary : HColors.accent;

    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        width: 240,
        transform: Matrix4.translationValues(0, _hovered ? -3 : 0, 0),
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          color: HColors.card,
          border: Border.all(color: _hovered ? HColors.primary : HColors.border, width: 1.5),
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(widget.country, style: fraunces(size: 20, weight: FontWeight.w600)),
          const SizedBox(height: 10),
          RichText(
            text: TextSpan(children: [
              TextSpan(text: 'Interesse: ', style: nunito(size: 13, color: HColors.mutedFg)),
              TextSpan(text: widget.interest, style: nunito(size: 13, color: HColors.foreground, weight: FontWeight.w600)),
            ]),
          ),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
            decoration: BoxDecoration(
              color: dotColor.withOpacity(0.12),
              borderRadius: BorderRadius.circular(99),
            ),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Container(width: 6, height: 6, decoration: BoxDecoration(color: dotColor, shape: BoxShape.circle)),
              const SizedBox(width: 6),
              Text('Demanda ${widget.demand}', style: nunito(size: 12, color: dotColor, weight: FontWeight.w600)),
            ]),
          ),
        ]),
      ),
    );
  }
}

// ─── Testimonials ──────────────────────────────────────────────────────────

class _TestimonialsSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: HColors.muted,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
      child: Column(children: [
        _SectionLabel('Quem já exportou'),
        const SizedBox(height: 12),
        RichText(
          textAlign: TextAlign.center,
          text: TextSpan(children: [
            TextSpan(text: 'Histórias de quem\n', style: fraunces(size: 34, weight: FontWeight.w700)),
            TextSpan(text: 'transformou sua vida', style: fraunces(size: 34, weight: FontWeight.w700, style: FontStyle.italic)),
          ]),
        ),
        const SizedBox(height: 48),
        Wrap(
          spacing: 24,
          runSpacing: 24,
          alignment: WrapAlignment.center,
          children: testimonials
              .map((t) => _TestimonialCard(initials: t.initials, name: t.name, role: t.role, text: t.text, color: t.color))
              .toList(),
        ),
      ]),
    );
  }
}

class _TestimonialCard extends StatelessWidget {
  final String initials;
  final String name;
  final String role;
  final String text;
  final Color color;
  const _TestimonialCard({required this.initials, required this.name, required this.role, required this.text, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      padding: const EdgeInsets.all(32),
      decoration: BoxDecoration(
        color: HColors.card,
        border: Border.all(color: HColors.border, width: 1.5),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('"', style: fraunces(size: 64, color: HColors.primary, weight: FontWeight.w700, height: 0.8)),
        const SizedBox(height: 8),
        Text(text, style: nunito(size: 15, height: 1.7)),
        const SizedBox(height: 24),
        Container(height: 1, color: HColors.border),
        const SizedBox(height: 20),
        Row(children: [
          _Avatar(initials: initials, color: color),
          const SizedBox(width: 14),
          Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(name, style: nunito(size: 14, weight: FontWeight.w700)),
            const SizedBox(height: 3),
            Text(role, style: nunito(size: 12, color: HColors.mutedFg)),
          ])),
        ]),
      ]),
    );
  }
}

// ─── Signup ────────────────────────────────────────────────────────────────

class _SignupSection extends StatelessWidget {
  final GlobalKey<FormState> formKey;
  final bool submitted;
  final TextEditingController nameCtrl;
  final TextEditingController whatsCtrl;
  final TextEditingController emailCtrl;
  final TextEditingController prodCtrl;
  final VoidCallback onSubmit;

  const _SignupSection({
    required this.formKey,
    required this.submitted,
    required this.nameCtrl,
    required this.whatsCtrl,
    required this.emailCtrl,
    required this.prodCtrl,
    required this.onSubmit,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: HColors.foreground,
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 80),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 520),
          child: Column(children: [
            Text('CADASTRO GRATUITO', style: nunito(size: 12, color: HColors.accent, weight: FontWeight.w700, letterSpacing: 1.5)),
            const SizedBox(height: 12),
            RichText(
              textAlign: TextAlign.center,
              text: TextSpan(children: [
                TextSpan(text: 'Pronta para levar seu\n', style: fraunces(size: 32, color: HColors.cream, weight: FontWeight.w700)),
                TextSpan(text: 'trabalho para o mundo?', style: fraunces(size: 32, color: HColors.accent, weight: FontWeight.w700, style: FontStyle.italic)),
              ]),
            ),
            const SizedBox(height: 16),
            Text(
              'Cadastre-se e nossa equipe entra em contato em até 48 horas para iniciar seu processo de exportação.',
              style: nunito(size: 15, color: HColors.cream.withOpacity(0.6), height: 1.7),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 40),
            if (submitted) _SuccessCard() else _SignupForm(formKey: formKey, nameCtrl: nameCtrl, whatsCtrl: whatsCtrl, emailCtrl: emailCtrl, prodCtrl: prodCtrl, onSubmit: onSubmit),
          ]),
        ),
      ),
    );
  }
}

class _SuccessCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(40),
      decoration: BoxDecoration(
        color: HColors.accent.withOpacity(0.15),
        border: Border.all(color: HColors.accent.withOpacity(0.4)),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(children: [
        const Text('🎉', style: TextStyle(fontSize: 48)),
        const SizedBox(height: 16),
        Text('Cadastro recebido!', style: fraunces(size: 24, color: HColors.cream, weight: FontWeight.w700)),
        const SizedBox(height: 10),
        Text(
          'Nossa equipe vai entrar em contato pelo WhatsApp em até 48 horas. Obrigada por fazer parte da Heliópolis Global! ✦',
          style: nunito(size: 14, color: HColors.cream.withOpacity(0.65), height: 1.6),
          textAlign: TextAlign.center,
        ),
      ]),
    );
  }
}

class _SignupForm extends StatelessWidget {
  final GlobalKey<FormState> formKey;
  final TextEditingController nameCtrl;
  final TextEditingController whatsCtrl;
  final TextEditingController emailCtrl;
  final TextEditingController prodCtrl;
  final VoidCallback onSubmit;

  const _SignupForm({
    required this.formKey,
    required this.nameCtrl,
    required this.whatsCtrl,
    required this.emailCtrl,
    required this.prodCtrl,
    required this.onSubmit,
  });

  @override
  Widget build(BuildContext context) {
    return Form(
      key: formKey,
      child: Column(children: [
        _FormField(label: 'Seu nome completo', hint: 'Maria das Graças Ferreira', ctrl: nameCtrl, type: TextInputType.name),
        const SizedBox(height: 14),
        _FormField(label: 'WhatsApp', hint: '(11) 99999-9999', ctrl: whatsCtrl, type: TextInputType.phone),
        const SizedBox(height: 14),
        _FormField(label: 'E-mail', hint: 'maria@email.com', ctrl: emailCtrl, type: TextInputType.emailAddress),
        const SizedBox(height: 14),
        _FormField(label: 'Tipo de produto que você faz', hint: 'Ex: bolsas trançadas, bijuterias, cerâmica...', ctrl: prodCtrl),
        const SizedBox(height: 24),
        SizedBox(
          width: double.infinity,
          child: _PrimaryButton(label: 'Quero Exportar Meus Produtos →', onTap: onSubmit, fullWidth: true),
        ),
        const SizedBox(height: 12),
        Text(
          'Gratuito para artesãs de Heliópolis. Sem compromisso. Suporte em português.',
          style: nunito(size: 12, color: HColors.cream.withOpacity(0.35)),
          textAlign: TextAlign.center,
        ),
      ]),
    );
  }
}

class _FormField extends StatelessWidget {
  final String label;
  final String hint;
  final TextEditingController ctrl;
  final TextInputType? type;

  const _FormField({required this.label, required this.hint, required this.ctrl, this.type});

  @override
  Widget build(BuildContext context) {
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(label, style: nunito(size: 13, color: HColors.cream.withOpacity(0.7), weight: FontWeight.w600)),
      const SizedBox(height: 6),
      TextFormField(
        controller: ctrl,
        keyboardType: type,
        style: nunito(size: 15, color: HColors.cream),
        validator: (v) => (v == null || v.isEmpty) ? 'Campo obrigatório' : null,
        decoration: InputDecoration(
          hintText: hint,
          hintStyle: nunito(size: 15, color: HColors.cream.withOpacity(0.3)),
          contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          filled: true,
          fillColor: HColors.cream.withOpacity(0.08),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide(color: HColors.cream.withOpacity(0.2), width: 1.5),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: HColors.accent, width: 1.5),
          ),
          errorBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: HColors.primary, width: 1.5),
          ),
          focusedErrorBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: HColors.primary, width: 1.5),
          ),
        ),
      ),
    ]);
  }
}

// ─── Footer ────────────────────────────────────────────────────────────────

class _Footer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: HColors.dark1,
      padding: const EdgeInsets.fromLTRB(24, 48, 24, 32),
      child: Column(children: [
        Wrap(
          spacing: 40,
          runSpacing: 32,
          children: [
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              RichText(
                text: TextSpan(children: [
                  TextSpan(text: 'Heliópolis', style: fraunces(size: 20, color: HColors.cream)),
                  TextSpan(text: 'Global', style: fraunces(size: 20, color: HColors.accent)),
                ]),
              ),
              const SizedBox(height: 12),
              SizedBox(
                width: 220,
                child: Text(
                  'Conectando o talento artesanal de Heliópolis com o mercado mundial.',
                  style: nunito(size: 13, color: HColors.cream.withOpacity(0.45), height: 1.7),
                ),
              ),
            ]),
            ...['Plataforma', 'Suporte', 'Comunidade'].map((col) => _FooterColumn(title: col)),
          ],
        ),
        const SizedBox(height: 40),
        Container(height: 1, color: HColors.cream.withOpacity(0.08)),
        const SizedBox(height: 24),
        Text(
          '© 2026 Heliópolis Global · Parceria com Sebrae SP e APEX-Brasil · Heliópolis, São Paulo, Brasil',
          style: nunito(size: 12, color: HColors.cream.withOpacity(0.3)),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 8),
        Text(
          'Feito com orgulho para as mulheres que constroem o futuro com as próprias mãos. ✦',
          style: nunito(size: 11, color: HColors.cream.withOpacity(0.18)),
          textAlign: TextAlign.center,
        ),
      ]),
    );
  }
}

class _FooterColumn extends StatelessWidget {
  final String title;
  const _FooterColumn({required this.title});

  static const _links = {
    'Plataforma': ['Como Funciona', 'Catálogo', 'Guia de Exportação', 'Mercados'],
    'Suporte': ['Central de Ajuda', 'WhatsApp', 'Documentação', 'Parceiros'],
    'Comunidade': ['Sobre Heliópolis', 'Histórias', 'Eventos', 'Blog'],
  };

  @override
  Widget build(BuildContext context) {
    final links = _links[title] ?? [];
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(title.toUpperCase(), style: nunito(size: 11, color: HColors.cream.withOpacity(0.5), weight: FontWeight.w700, letterSpacing: 1.2)),
      const SizedBox(height: 14),
      ...links.map((l) => Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: Text(l, style: nunito(size: 13, color: HColors.cream.withOpacity(0.35))),
          )),
    ]);
  }
}

// ─── Shared widgets ────────────────────────────────────────────────────────

class _SectionLabel extends StatelessWidget {
  final String text;
  const _SectionLabel(this.text);

  @override
  Widget build(BuildContext context) {
    return Text(
      text.toUpperCase(),
      style: nunito(size: 12, color: HColors.primary, weight: FontWeight.w700, letterSpacing: 1.5),
    );
  }
}

class _Avatar extends StatelessWidget {
  final String initials;
  final Color color;
  const _Avatar({required this.initials, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 44,
      height: 44,
      decoration: BoxDecoration(color: color, shape: BoxShape.circle),
      child: Center(
        child: Text(initials, style: fraunces(size: 15, color: HColors.cream, weight: FontWeight.w700)),
      ),
    );
  }
}

class _PrimaryButton extends StatefulWidget {
  final String label;
  final VoidCallback onTap;
  final bool small;
  final bool fullWidth;
  final bool dark;

  const _PrimaryButton({
    required this.label,
    required this.onTap,
    this.small = false,
    this.fullWidth = false,
    this.dark = false,
  });

  @override
  State<_PrimaryButton> createState() => _PrimaryButtonState();
}

class _PrimaryButtonState extends State<_PrimaryButton> {
  bool _hovered = false;

  @override
  Widget build(BuildContext context) {
    final bg = widget.dark ? HColors.foreground : HColors.primary;
    return MouseRegion(
      onEnter: (_) => setState(() => _hovered = true),
      onExit: (_) => setState(() => _hovered = false),
      child: GestureDetector(
        onTap: widget.onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 150),
          transform: Matrix4.translationValues(0, _hovered ? -2 : 0, 0),
          width: widget.fullWidth ? double.infinity : null,
          padding: EdgeInsets.symmetric(
            horizontal: widget.small ? 20 : 32,
            vertical: widget.small ? 8 : 16,
          ),
          decoration: BoxDecoration(
            color: _hovered ? bg.withOpacity(0.88) : bg,
            borderRadius: BorderRadius.circular(6),
            boxShadow: _hovered
                ? [BoxShadow(color: HColors.primary.withOpacity(0.35), blurRadius: 16, offset: const Offset(0, 4))]
                : [],
          ),
          child: Center(
            child: Text(
              widget.label,
              style: nunito(
                size: widget.small ? 14 : 16,
                color: HColors.cream,
                weight: FontWeight.w700,
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _OutlineButton extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  const _OutlineButton({required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
        decoration: BoxDecoration(
          border: Border.all(color: HColors.cream.withOpacity(0.3), width: 1.5),
          borderRadius: BorderRadius.circular(6),
        ),
        child: Text(label, style: nunito(size: 15, color: HColors.cream, weight: FontWeight.w500)),
      ),
    );
  }
}
