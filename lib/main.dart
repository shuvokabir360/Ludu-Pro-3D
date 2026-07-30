import 'dart:io';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:webview_flutter_android/webview_flutter_android.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  
  // Enable auto-rotation across Portrait and Landscape orientations
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
    DeviceOrientation.landscapeLeft,
    DeviceOrientation.landscapeRight,
  ]);
  
  // Sticky immersive edge-to-edge full screen
  SystemChrome.setEnabledSystemUIMode(
    SystemUiMode.immersiveSticky,
    overlays: [],
  );

  runApp(const LudoPro3DApp());
}

class LudoPro3DApp extends StatelessWidget {
  const LudoPro3DApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ludo Pro 3D',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF0F172A),
        useMaterial3: true,
      ),
      home: const LudoGameScreen(),
    );
  }
}

class LudoGameScreen extends StatefulWidget {
  const LudoGameScreen({super.key});

  @override
  State<LudoGameScreen> createState() => _LudoGameScreenState();
}

class _LudoGameScreenState extends State<LudoGameScreen> {
  WebViewController? _webViewController;
  HttpServer? _localServer;
  final Map<String, Uint8List> _assetRAMCache = {};
  bool _isLoading = true;
  String? _errorMessage;

  @override
  void initState() {
    super.initState();
    if (!kIsWeb) {
      _startServerAndInitWebView();
    } else {
      _isLoading = false;
    }
  }

  @override
  void dispose() {
    _localServer?.close(force: true);
    _assetRAMCache.clear();
    super.dispose();
  }

  Future<void> _startServerAndInitWebView() async {
    try {
      // 1. High-Performance Loopback HTTP Asset Server
      _localServer = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
      final port = _localServer!.port;

      _localServer!.listen((HttpRequest request) async {
        String path = request.uri.path;
        if (path == '/' || path.isEmpty) path = '/index.html';

        try {
          final assetPath = 'assets/dist$path';
          Uint8List bytes;
          if (_assetRAMCache.containsKey(assetPath)) {
            bytes = _assetRAMCache[assetPath]!;
          } else {
            ByteData byteData;
            try {
              byteData = await rootBundle.load(assetPath);
            } catch (e) {
              request.response.statusCode = HttpStatus.notFound;
              await request.response.close();
              return;
            }
            bytes = byteData.buffer.asUint8List();
            _assetRAMCache[assetPath] = bytes;
          }

          // Set cache headers for instant RAM retrieval
          request.response.headers.add('Cache-Control', 'public, max-age=31536000, immutable');

          if (path.endsWith('.html')) {
            request.response.headers.contentType = ContentType.html;
          } else if (path.endsWith('.js')) {
            request.response.headers.contentType =
                ContentType('application', 'javascript', charset: 'utf-8');
          } else if (path.endsWith('.css')) {
            request.response.headers.contentType =
                ContentType('text', 'css', charset: 'utf-8');
          } else if (path.endsWith('.json')) {
            request.response.headers.contentType = ContentType.json;
          } else if (path.endsWith('.png')) {
            request.response.headers.contentType = ContentType('image', 'png');
          } else if (path.endsWith('.ico')) {
            request.response.headers.contentType = ContentType('image', 'x-icon');
          }

          request.response.add(bytes);
        } catch (e) {
          request.response.statusCode = HttpStatus.notFound;
        }
        await request.response.close();
      });

      // 2. Configure Hardware Accelerated Edge-to-Edge WebView
      late final PlatformWebViewControllerCreationParams params;
      if (WebViewPlatform.instance is AndroidWebViewPlatform) {
        params = AndroidWebViewControllerCreationParams();
      } else {
        params = const PlatformWebViewControllerCreationParams();
      }

      final WebViewController controller =
          WebViewController.fromPlatformCreationParams(params);

      controller
        ..setJavaScriptMode(JavaScriptMode.unrestricted)
        ..setBackgroundColor(const Color(0xFF0F172A))
        ..setNavigationDelegate(
          NavigationDelegate(
            onPageFinished: (String url) {
              if (mounted) {
                setState(() {
                  _isLoading = false;
                });
              }
            },
            onWebResourceError: (WebResourceError error) {
              debugPrint('WebView Error: ${error.description}');
            },
          ),
        )
        ..loadRequest(Uri.parse('http://127.0.0.1:$port/index.html'));

      if (controller.platform is AndroidWebViewController) {
        AndroidWebViewController.enableDebugging(false);
        (controller.platform as AndroidWebViewController)
            .setMediaPlaybackRequiresUserGesture(false);
      }

      if (mounted) {
        setState(() {
          _webViewController = controller;
        });
      }
    } catch (e) {
      debugPrint('Failed to start local asset server: $e');
      if (mounted) {
        setState(() {
          _isLoading = false;
          _errorMessage = 'Failed to load game server: $e';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0F172A),
      body: SizedBox.expand(
        child: Stack(
          children: [
            if (!kIsWeb && _webViewController != null)
              Positioned.fill(
                child: WebViewWidget(controller: _webViewController!),
              ),
            if (_isLoading)
              Positioned.fill(
                child: Container(
                  color: const Color(0xFF0F172A),
                  child: const Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        CircularProgressIndicator(
                          color: Color(0xFFFACC15),
                        ),
                        SizedBox(height: 16),
                        Text(
                          'Loading 3D Luxury Ludo Board...',
                          style: TextStyle(
                            color: Color(0xFFF8FAFC),
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            if (_errorMessage != null)
              Positioned.fill(
                child: Center(
                  child: Text(
                    _errorMessage!,
                    style: const TextStyle(color: Colors.redAccent, fontSize: 16),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
