'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "964b749ef67d8c9e8e1e47d4b8f77d13",
".git/config": "2114c04a03680421fe615c6e5d2080c5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "79cf0d6fb722cbab1ab949345ef2ab8d",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8d9750bada7ab1a43cffae44e40ca11d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a826a05c2bb5edc25f73ec6c5c9c1ef1",
".git/logs/refs/heads/master": "a826a05c2bb5edc25f73ec6c5c9c1ef1",
".git/logs/refs/remotes/origin/HEAD": "b42dbf7bd05449db2ebf59dc2476b109",
".git/logs/refs/remotes/origin/master": "a23e349bae91cb42396ae4b782e4b8b7",
".git/objects/01/fa5b8e597f58226e3c4e50a12b7863847270d7": "e184363adc08e1fae0bd93795572809e",
".git/objects/03/8606c09de24cd521b6759185617ed926728b1b": "a7caada8b80911dd99f83fa21b8edea8",
".git/objects/07/0e52bd9ac38293869517025e3be7863d179c32": "61b3ac172d91102f900f74fc0d668e8a",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/d7b386cd8fcf0e6bd91ea1df9fc78b5ee7251a": "3d7359e361f935078508c5c737e4c603",
".git/objects/0b/8907e12cd444a44022a66e93e0962437163c8f": "8c1246c239f2a2edcc291b8248519186",
".git/objects/0e/b1366a31dc9524d62db89743f761d3e986495c": "32a7f0b8ecc228d36a860834401b3d92",
".git/objects/10/c6e635c6e809715ea89977956dd0dfd343a3a3": "e74af0f1b4690736e1e2b93c591aa34a",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/c7fb25a3d474604c73f1d65eb37e367c78d1e1": "e32dfd9a597ab491d2ace898fa9eaf74",
".git/objects/16/e8f5aecd03cd114f3a19626f9b2ca55b35f95c": "7d8d8579600138498e07b4a535b739fd",
".git/objects/17/66287cb2d2fc0f05f18063f0dba5f3c08379b4": "fca084c2251f5dda97397e3ed78cbc92",
".git/objects/1a/212d69f8447a8a0770dfe917bb6abea71e69b0": "a6f4d48a8e4f64cbd46b2cbf240009cf",
".git/objects/1b/8d668b1cfb9b759a3909dcf4869cba5d272fe0": "7651604cd06343fa2e1132b1e2c097f3",
".git/objects/1d/b8e84bbf7464f8821cf1ab0383cd4a6efcd6c0": "da4940d86bcf7da59dea5779d5bc828d",
".git/objects/1f/e7df6f43b4de59d14a26d033473046cd6dcbf4": "c187a28e2095764b6244f97bb19e5b2b",
".git/objects/25/2e3dd545a880590b52a6b4d96aa4f18f814e44": "b48731321d0f3b218ff0e97423213024",
".git/objects/30/08447e2f6d9e6d7544d57c0ad0011125393fcc": "5d2dba81fd4937c62db44ff4d282daf2",
".git/objects/30/a93c2bef4a7fe5a957452a8bf735921621481d": "9dc21fbda11ad6a5981e5ac3df7d515a",
".git/objects/3a/484f52ae3394d5c66ba0cf7af24ddefd54daa3": "7131b26d5f97ef910498e6b250e768bd",
".git/objects/3b/83e18c9e38011d200f55c37a627c6b6f85828f": "30bdce01e70cd6154f9eed711194d533",
".git/objects/41/ae756198a43a15092ebc9831280312ae40c502": "c0e8bf6b8d9ad5a037330920f3f7ced1",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/50/bf41f24f2f2f8384cd0d6c9f2dd3d9696fcdd1": "d1dc43cb9c66efe917ede2daaf9a32f4",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/3b8a1c43973905da17440faa161111d0884b06": "87fbcf471b43ee3bb728cae06d9d492b",
".git/objects/5d/66a6f91a09922553f5ba8cc09d2acb608a521e": "4a3e3cf66bb79b3489bd72d0c0551fc9",
".git/objects/5d/848a96f8fb7ec019b22cfe05cf7b1d4055deb5": "5c5cd24322c811b20ea11a5bd9a8d145",
".git/objects/64/3ffa4820ef7641d93d4880678e7f6aa165ca99": "8368d4b1fad014d1de580fd2069bb9ab",
".git/objects/66/e7802b36a68d2a5bef8f33ec63839a2bf619ba": "8f226e32a27c623934ee3ada34582b7d",
".git/objects/6b/4d0ddc9aee9b107d1610d0ad6f441f37116cfd": "f586960c0581783eec0eac7a58df59ee",
".git/objects/6e/b3acb1e626b586da3c503c572b1d98b1242809": "dd9299a41f85ee158d4c6b9dd9373003",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/1e173df3e6cae52853cbdd92334a0b11478080": "3a82b18dd32186560369a37d2f405733",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/76/f2745d4bcb3f7da36773b04449ea9b4e38332d": "48ddc603f00f47303cfcb4083fe9d99e",
".git/objects/78/ac68409d0803e945de06d3b41ab6b644b19502": "3474df17400db27f2d5e439c42dc84f6",
".git/objects/79/206bde2702d74d81a024e3b3a52b08c92a0647": "bef5039925fc82197318cf15b9cd5420",
".git/objects/7f/7a8e172f0e130371e85bc268e4a1fb5456d1be": "2769fc301b3b08e16a4f266a258c2a94",
".git/objects/8b/b762ad17ae434ceee310705174310ea61d8e7c": "579f3711accd30fec5604d929cd8d232",
".git/objects/8d/9da55e88f9b619ac41b84a7eec6e313f8b720a": "3d83530f03cc44cf7703a65bca39f5d0",
".git/objects/92/bfd9b9bcf69328e1e7a7d60ffa89e1bb177eb7": "6b678d5043805daee5640ddbfa088101",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/c6b57e6df5a433bec291c53fa2aee8c3af1f84": "e00358fe8e1e9071ed75343db92c46ee",
".git/objects/95/05962757fbe6bbaacebf17ac61aa938adcae37": "8322e6f556d0f67f01f9016a4aaee761",
".git/objects/96/36ac91df604a8fcb7a3da71a873ff6e7705e3a": "a88cc5a561584d121a31a6f8df5d84a9",
".git/objects/99/eff1435768b66d8e835768600ec06ebfdbc8c2": "cb6ea84505d9854b091f546cd9d9c6b8",
".git/objects/9b/db6b9691dfff631a4ed850d9a0cf4f27bf0477": "f815c880e6488fc77f90b014969fad71",
".git/objects/9d/19bdef1f82d6de888da5177464a2cf261a3071": "bf13f7bc53dc884f9ce3bd6565902773",
".git/objects/a3/7397150aa2e61fd05162a882b94e4950d350ba": "60c3ed216017ffe08efc42ec10a6a340",
".git/objects/a5/60fb235f9873ae854785e02b1978b95ce20d8a": "e76e3db61e318dec5b7fce92b0898e60",
".git/objects/a6/4f1ca3fe6ec72d9aa68de63896d107db52fade": "b6a6eabd467233093c9f7b7b4a2e6bad",
".git/objects/a7/b8f68499e4b7e2c6d6bb4be0eef5f1d9907650": "d661f08f0d6dc8ec50ed6d6b6041747d",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/18af9e992ce3a2159623db10c9f87100507cf6": "99da64390a791500652abd319b4c9e9a",
".git/objects/b2/b26fad9b26ff5a4faa4a53c87471f592b1b81c": "b90b0d3f0ccc6a3534bf03b610135515",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/ddca33ccc14ebac901627ef8e6d34fe743cb3c": "08035ea3602b91403f13399003f48aac",
".git/objects/b7/fdacfdf95269e30286bccde3b343f04e7267bd": "b01bdb34c44553305fc2ddf665fe352c",
".git/objects/b9/d53dd0deebc86b9f410c62ef03fc2c0f01cbb7": "bc53579ab75c2097f5983fbd78db5668",
".git/objects/c1/21d1cf5ef02eb3cce969144f6c2584377271eb": "8abdbe7ddbeef206ddeec7b6a073bdff",
".git/objects/c2/9623ed0280f5d8b5706e28480aeeae63d43918": "b3c3cfe9a8f0dbaf096041d19f678424",
".git/objects/c4/90fa688027288a9aa6b3e61eab458ed882d580": "9ae5797e0edcaf15ac22533a5bd7cfaf",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/0e9c88f53028d0bad1c052f3694f3e3d271786": "7502a5c42e6f3f02d4c4203a755279f5",
".git/objects/c8/455b3a6146a9265833811665c010dff24cfda9": "9291391ffc89241d9769ed6880787105",
".git/objects/ca/99e59e1563f227011c9d224d6160f5add85b3a": "2718767653e5f73980400f1373a147ad",
".git/objects/ca/f93eed6f15ab3c264ecf2c1ae297029a882b35": "63a14ce1fe950cc12561cb196d12f0df",
".git/objects/d1/65db4938a59279e4099e1e3dc7e37df4e79fb7": "8e73c29285fb1277e05032818d422c9e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/2803eea16167598ecacfe98dc65e63cf35b968": "20dd6b574d59eb40091e57ece1afa85a",
".git/objects/d6/cd7e050f491f5a927070b5f70ec9e5e9c552de": "f91e50ffa30796914979f50847680753",
".git/objects/d7/053e3c58d13c9e89a210ab4c65d4ef7e046268": "d37d43bb5d8431f716976e2c3b6fede4",
".git/objects/d7/9d44d37fd059e9c21cec822d7ada13a2916b2d": "b13effa0c550c9bc96fb5da8173a2437",
".git/objects/d8/a4d61bcf58afa3d40b7d7d97fefa40b856e933": "35aa92d532ca2758f7e9fb2c4612ff32",
".git/objects/d8/e9b950afc4d0fddd9562f19d358d10e22a657d": "2cc946119347ca18e8d3b44b75a59163",
".git/objects/db/6820034bb8a4d8ad03a9a85a2b6aca342dde51": "7234ec149e8fbfad2f1869d1db9a3447",
".git/objects/dd/0217c176ffca56f6adf15f9b7df8d81cf11370": "cbc3597cd8124697d1abdd4dfae64b93",
".git/objects/dd/b53b8073e91a8b50cccab9272cc198e209be75": "bfe4e8e79002f75459147da15b2ebf7c",
".git/objects/e1/86e32ffa0d5fcd844f9dcbfb49d00437267f94": "876e9398d964d0e549d601191f99d18b",
".git/objects/e2/cd35c31bd812368c5e10ed339a143016170161": "8c6451b45015b6ae5323bbc1b26fd6ac",
".git/objects/e3/39ca88929efc9c3eb4db1cabcccf742db1feac": "2e387115d48432cbc0362d8aa813cacf",
".git/objects/e3/cb925c7a8c356bad3315859590a2ad789874a7": "15eaca3b4a9bc31340f46da34e3a5af6",
".git/objects/e5/20372a5bdb6f842ddd8e1587e43e02c8e5bccc": "ff1e037d7df7b62e5f3b4846f09117f4",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/f7da7a2da78c4db85a2c23afc0b4d81a91ba72": "ad9a5479ed9acfbd7eca3646cee7d578",
".git/objects/f7/6b7d6f3f876d41a84d39e5d0b655bdd4bccafc": "bdb53a98c9e5adfa02b5642f795e9c69",
".git/objects/fc/56aa4a99f6161a616f2cc08ba3e10a8b660a70": "a9325473bad65a31615161d11acfe48b",
".git/objects/pack/pack-48c74e865442472fd2f27175e45a4069eba37f4c.idx": "29bbeccca14b5f45bd046da875ea9b25",
".git/objects/pack/pack-48c74e865442472fd2f27175e45a4069eba37f4c.pack": "01d01a5ccaf109bcb6f322fdb82b2ce3",
".git/packed-refs": "38ee9d434d376ea0a0d4734fd6f3206d",
".git/refs/heads/master": "17616cf68b8f5586a55de8950d8e5a07",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "17616cf68b8f5586a55de8950d8e5a07",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0bcee3440ba5c01c592b8c7247827411",
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
"index.html": "58799bc7fa2bf87d6eef5b31819aec55",
"/": "58799bc7fa2bf87d6eef5b31819aec55",
"main.dart.js": "2db7dc740ba98d229dae9752641a81d9",
"manifest.json": "0edd0db69fe98417d9dc34533da6c9a2",
"README.md": "9f5e9c4878367d6b4b65387c4da20bbe",
"version.json": "4126d5b5d7696c05b69cb9650f3c04fa"};
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
