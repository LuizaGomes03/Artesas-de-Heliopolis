import 'package:flutter_test/flutter_test.dart';
import 'package:artesas_de_heliopolis/app/artesania_app.dart';

void main() {
  testWidgets('Home das Artesãs de Heliópolis inicia', (WidgetTester tester) async {
    await tester.pumpWidget(const ArtesaniaApp());

    expect(find.text('O feito à mão\nque faz a diferença.'), findsOneWidget);
    expect(find.text('VITRINE DE HISTÓRIAS'), findsOneWidget);
    expect(find.text('Comprar aqui é apoiar um futuro mais justo.'), findsOneWidget);
  });
}
