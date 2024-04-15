'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "323f02fe20c6384738c191e586be337e",
".git/config": "2114c04a03680421fe615c6e5d2080c5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1a3f69d5c141ca4a77911dfb8f88f46d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "84e5d27fc263b1b7608fc455384f6bf4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4b5aa18e75bd37a27b17b175cd85b8d1",
".git/logs/refs/heads/master": "4b5aa18e75bd37a27b17b175cd85b8d1",
".git/logs/refs/remotes/origin/HEAD": "ab47796c6f04fd7eee9a68ebc7f137fd",
".git/logs/refs/remotes/origin/master": "7033920e82c435254411745fd9f17cb0",
".git/objects/02/bb256d2095c23e4771dedacef1c66f446a9067": "afc8008ab679c402e8bb7bbcabdf9910",
".git/objects/0c/826b9602be96aae3cf85d222d6c0965abe9ce6": "c0a3c95ca6c950a2c117ad2f1c69c72c",
".git/objects/12/52f5df2f473e1f953e461ba1766bd5da6fa379": "744f538332154ea93f7a6cd8166a9481",
".git/objects/14/b1d5f2986680eefa5f6917d9d7e8d6e6d5fbc4": "c5964dda9d9db787871a8ba4723b9748",
".git/objects/33/3cb94086f7249cc649e5b84d5d68b505693784": "76299db04ca9a57d145ecbdfbe22c191",
".git/objects/60/4fb695e27a8fe6002e989b03c061183191ba17": "708496f26cde2eb6941263bf78401711",
".git/objects/76/76d5a03975894deb2ebd94f4306bf826b5f27e": "06ec9081e916a552676d49ad4372d509",
".git/objects/83/e69bd06a629727498fda30733c15eceffc25da": "0bc7a1ba505f1fae1fb86fcda093ccc2",
".git/objects/99/9f54f2a30e7f63b7c48351706221cb679c5844": "6f82cb8678c22c780468e01bfe79465f",
".git/objects/a7/82dde6e07fdb9ce318afbaa522069b9f6e0197": "f5354e2a5ce8bd94a3347f6cfaf97a0e",
".git/objects/b3/a2f7bdd81402ccd88f8c9abf97ce74578a4f11": "84cba4543023fd18a8a4c54a1875b0d0",
".git/objects/bd/9e2006ba2a4965cde3897b150a56d943ec2678": "e15b00f1f593daa180073a4648175644",
".git/objects/bf/d7928c77dcf096164dd8f0d2924c8e5c9dfcc6": "737ae21c72f1fe86aca538d16ee4c40c",
".git/objects/cd/a46523500a34757208b3bdd9d28f073b69627c": "dbdd5e565e9ffce6737e7e878a5f1929",
".git/objects/d5/28f8c1dd63a95b316e90d68d739eb32d2ccce5": "b6477b6d56d03d20afa3fd406c98bafb",
".git/objects/f2/925f9f03c8a54cb963bc0e87f6c10f573c5c4a": "8c1ebb45ce21fa9729655f526a7e93e7",
".git/objects/f3/9febd8df4d12485e26c6fb5b5243f091d2c845": "9647d868289be39083f21c0a43395117",
".git/objects/f4/5fa24780eac6622d5c2fa33b16ae132e7b9edc": "9de23c3b2d5ff1cf2d619550511f87c4",
".git/objects/f4/f600a1004aad3a1ad8b2126699ed1c9f36560f": "4b61282df44d43ef3bbf3951163099aa",
".git/objects/f7/9416a7e8c1b4195912bdecb724a7a82433ccea": "d591cda66ad6bc44b3ebb145909fd215",
".git/objects/pack/pack-70397b6985e456d102e6e481fcf0c3f87026138b.idx": "9f7364665a2216215dfb1bdb9e9c4e73",
".git/objects/pack/pack-70397b6985e456d102e6e481fcf0c3f87026138b.pack": "5442b8507d0223202f866b11df8e5331",
".git/objects/pack/pack-70397b6985e456d102e6e481fcf0c3f87026138b.rev": "ff3df99a27133bb1539df22da40cebd8",
".git/packed-refs": "0dc1aa0a36c15b94564da9690a530d0c",
".git/refs/heads/master": "6b8f9df80a534e7ead6868e87b7edaa8",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "6b8f9df80a534e7ead6868e87b7edaa8",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9cb1089176e0fc6f784b4b1637f0220a",
"assets/NOTICES": "0a8d05c8b1869580511ed2082285c3f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5edc726c34e8b1269a5d5fa931bc56a2",
"/": "5edc726c34e8b1269a5d5fa931bc56a2",
"main.dart.js": "bd393ab9c88e3bfaecdafaf0ef6073a4",
"manifest.json": "1f8892bff6ff47d8f107b55c19cd3f5c",
"README.md": "9f5e9c4878367d6b4b65387c4da20bbe",
"version.json": "3b6baeb1222a7051681038253ec923ba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
