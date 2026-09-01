import 'package:flutter/material.dart';

import 'features/home/pages/home_page.dart';

class ArtesaniaApp extends StatelessWidget {
  const ArtesaniaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Artesania Viva',
      theme: ThemeData(
        useMaterial3: true,
        scaffoldBackgroundColor: const Color(0xFFFAF7F2),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF943E1E),
          primary: const Color(0xFF943E1E),
        ),
      ),
      home: const HomePage(),
    );
  }
}
