import 'package:flutter_test/flutter_test.dart';
import 'package:ludu_pro_3d/main.dart';

void main() {
  testWidgets('Ludo Pro 3D smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const LudoPro3DApp());
    expect(find.byType(LudoPro3DApp), findsOneWidget);
  });
}
