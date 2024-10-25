'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "18720175eaba355ebc63dc549734d54a",
"assets/AssetManifest.bin.json": "8be469652941f1bd07c2f2250fb7b1b5",
"assets/AssetManifest.json": "77db6070c7de20b3acca3662f9469309",
"assets/assets/boarding/directios.svg": "900c63447c4b942fa404f92d90183de4",
"assets/assets/boarding/explorer.svg": "cb1fb03112b87cd042d429c5713898c1",
"assets/assets/boarding/map.svg": "7d4df02d2b0ce03d9e7646862bed4c9d",
"assets/assets/hotel1.jpg": "ddb02a3f539ff2b96419d0b253fac4e6",
"assets/assets/hotle2.jpg": "460f0e47d0f8d0e7fae4764133f36ceb",
"assets/assets/icons/cafe.svg": "c2c55d27e34730452ef66fd0865dba4b",
"assets/assets/icons/eye-closed.svg": "9a912acde0ca14d2b6b153f48386f90b",
"assets/assets/icons/eye.svg": "1717fb7acf9150104bce58f8cc03d13e",
"assets/assets/icons/favorite.svg": "b448ad073caba6a02faf74981249a49c",
"assets/assets/icons/favoriteDark.svg": "1ae650691b4400fd9b4dc2eb7bed90a2",
"assets/assets/icons/favorite_fill.svg": "a71b321c40d5064611947a35117ecbc3",
"assets/assets/icons/google.svg": "0f057df43b716e9fcae578bdbd943515",
"assets/assets/icons/greyLocation.svg": "02090ec32a8b94efbc95bd1e093fdeeb",
"assets/assets/icons/heart2.svg": "97db65ec8a4ce86933bce8daa48ef7fc",
"assets/assets/icons/hotel.svg": "f12181e9e2a1a9d4b6bf04d139c01985",
"assets/assets/icons/icon_heart1.svg": "1ca4161c248c6ff660ade1ded306acff",
"assets/assets/icons/icon_home1.svg": "e626c4ccad91ba4f666058d8b5ccb706",
"assets/assets/icons/icon_user1.svg": "1ba045ab01933fb4bf833ef2cb82551c",
"assets/assets/icons/location.svg": "238250460a9ed812a9d978d5d9f100da",
"assets/assets/icons/lock2.svg": "2f57802120701b0da376c45d69c0459e",
"assets/assets/icons/Logout.svg": "7eba26e1ba18e01ca8b23699256decce",
"assets/assets/icons/mail2.svg": "c93ef93d1dbdcbe2c4c4875ae71e40f4",
"assets/assets/icons/map1.svg": "3a8e6ea60b18720808904c9f66a5b2ea",
"assets/assets/icons/marker.svg": "238250460a9ed812a9d978d5d9f100da",
"assets/assets/icons/menu.svg": "d524f837151d1bc820d95641542ccf4f",
"assets/assets/icons/ratingDark.svg": "c03de0a3eb24144be45d7e6699e8647f",
"assets/assets/icons/Restaurant.svg": "89d3e41003c142540028e3609f765317",
"assets/assets/icons/restraunt.svg": "5d4de699e990b48ad0ccc69f0c711de5",
"assets/assets/icons/search.svg": "8be0af4a5cb00f93bad6f63d78b6282c",
"assets/assets/icons/settings.svg": "626c2f04623d62e72c793460c786ce9d",
"assets/assets/icons/user.svg": "13b030c5edff2fafd2eebff82d1d3707",
"assets/assets/initProfilePic/person.png": "7d6a74b6b7c87e8fd01238ae10aca489",
"assets/assets/logo.png": "874cccc8b3f569d0ee3e726db189a828",
"assets/assets/logo2.png": "ef2669bacbc058b0767a210a4fee1610",
"assets/assets/logo3.png": "54f68411f24490314129b2fa707576eb",
"assets/assets/place1.jpg": "bcd434414da91678ec98f9b7aba40d17",
"assets/assets/place2.jpg": "c1b958dab96cef9bd47a3ac6415c7165",
"assets/assets/res1.jpg": "91a7a2c43d47e7f5d5d82a7922e6effa",
"assets/assets/res2.jpg": "7b2974f71bfccdf7f944fce7d37cb7d1",
"assets/FontManifest.json": "d58a040842ced04ac4dc6ac578dd54c9",
"assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/fonts/MaterialIcons-Regular.otf": "b3afd8b43f3db73155d5b7a94015ec52",
"assets/fonts/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/fonts/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/NOTICES": "010ebb56cd6c9d4a1eaab5287c8188d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b1073eb573cecf8ae19fc816942ed2d1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c943f2ffee5a01849f9551980987800d",
"/": "c943f2ffee5a01849f9551980987800d",
"main.dart.js": "19011568e1472b1239a9bc26197ba368",
"manifest.json": "d0a42fc3488ceb33700224546b0cc566",
"version.json": "9834cb448a290732f698f6771f12ce45"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
