'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "93be8e1f09fa97fffd9399038c758b73",
"/": "93be8e1f09fa97fffd9399038c758b73",
"main.dart.js": "a4af12f6d9e345cbcc653abf30104b7a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1f4009d2bf821c6eefe23e53b14a8104",
"assets/LICENSE": "cee089461373722980e00a87d02a18da",
"assets/ironman.png": "05e79f0f269794aaa84c04a140b68d67",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "bba6de124be1c7617d70d89641b3b25f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/Merriweather-Regular.ttf": "f96a44b40f99ae4b63f275f1142f7c98",
"assets/fonts/HelveticaNeue/HelveticaNeue%20Thin.ttf": "78c28465643a20597ce65eee037a7675",
"assets/fonts/HelveticaNeue/HelveticaNeueIt.ttf": "33baa0a123d13fcda4e6cad9c93ed2ef",
"assets/fonts/HelveticaNeue/HelveticaNeueHv.ttf": "c1e969c8f421f5f755e1e68d21d93b78",
"assets/fonts/HelveticaNeue/HelveticaNeue%20Medium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"assets/fonts/HelveticaNeue/helveticaneue.png": "b4a23804594d12278cc845414aaa5b82",
"assets/fonts/HelveticaNeue/HelveticaNeueMed.ttf": "9f25b1f8c62ddd2ad699a89aaaf11a59",
"assets/fonts/HelveticaNeue/www.freefontsdownload.net.url": "520ff1f46679547637578bbb6393bb2d",
"assets/fonts/HelveticaNeue/HelveticaNeueLt.ttf": "bb5671edae4b3cecbd3c98159511f2ea",
"assets/fonts/HelveticaNeue/HelveticaNeue%20Light.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/fonts/HelveticaNeue/HelveticaNeue-Regular.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/fonts/HelveticaNeue/HelveticaNeue%20BlackCond.ttf": "4ff686ee78ff095848014f4283f67a41",
"assets/fonts/HelveticaNeue/freefontsdownload.txt": "5e4b49bf8e4349d2d9c15dbb43cdcc91",
"assets/fonts/HelveticaNeue/HelveticaNeue-Bold.ttf": "b8edca3e45f1f16bc6e20464bd8f2fff",
"assets/fonts/HelveticaNeue/Helvetica%20Neu%20Bold.ttf": "7f281199258d96e249a7fce4101006b9",
"assets/fonts/LibreFranklin-Regular.ttf": "30ee60852dd36a04ac070c7b94cd25be",
"assets/fonts/AbrilFatface-Regular.ttf": "8c6847c75ae35d0ca5fd3798d4567443",
"assets/fonts/Raleway-Regular.ttf": "580d0778ad254335be45bf58bb449f43",
"assets/fonts/GoogleSans-Regular.ttf": "51134713ade7b1f137e06ce395d39d40",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/GalleryIcons.ttf": "7d45e7df60cb4a98b595018c74614367",
"assets/fonts/Arvo/Arvo-Regular.ttf": "f21cad8342165ba561eb977611423d07",
"assets/fonts/Arvo/Arvo-Bold.ttf": "993d70d20d1221ea3a717f0183a94641",
"assets/fonts/Arvo/Arvo-BoldItalic.ttf": "23b189b99dca22f2b023e789c06e019f",
"assets/fonts/Arvo/OFL.txt": "4bed12d067bd78f2b74701a0013bef71",
"assets/fonts/Arvo/Arvo-Italic.ttf": "e74f8e75ef58a494a507d888590bd847"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
