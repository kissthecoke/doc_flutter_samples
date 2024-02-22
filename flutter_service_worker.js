'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f23518ae24a114ae0027cce6b4205683",
".git/config": "e419ad140a17d69f0e88bb6bcf4282b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8a32aeed8253deaa5d93fbe99b2b46f6",
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
".git/index": "71419d7d550d452c8f19bc38d6465f55",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f177dffd2b140629e97e252e3dfdf33",
".git/logs/refs/heads/master": "5f177dffd2b140629e97e252e3dfdf33",
".git/logs/refs/remotes/origin/HEAD": "a1ae7b015146c431fb81b2088d310a28",
".git/logs/refs/remotes/origin/master": "a9ebc29c8c8c6f61f06a9c92d45422cf",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/dba8b7fc4b6bc4617a82e1c940f5e260e22764": "968352e8ed9c9382b32dc8f031412bf0",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5957140b3e9e17af07ce3269070d0d274f9b44": "69eca3150c522856a42f284db54c21c3",
".git/objects/20/fda4c64139f1948db1f8a64e5f73690e53ecf8": "4aa337c40c0cbb31a7fcf9ab65f69780",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/23/e5dd30b7fbce68834c6832b80d144efe61fb86": "84a6054c42ea2dfec4ed9a8308d3239d",
".git/objects/28/c479a6c7d175e87a212c9251a1638246518c32": "7fe7eadb3ab31154950ed6b311ca7259",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/34/8e2b6e556b5b315c1207c18f476933b212ae3d": "8386335f11a09a35e532aafa5b94e082",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/38467a464217bb884dc963c535cca03fae1dd5": "060423715c761006225108d4c2320223",
".git/objects/3d/1eb83504567450a2d964369bdb7c396a7ff3d2": "af46771a7cb3c6f74f61665dae97af0a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/09861bd808d9d42801d78778cd9a80705aebb9": "2d77ba3b2e52ea3d14e6ed0c058657b2",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/8ed7f06af69087040089fd54047350f8215a00": "874d04e3db20f6a1581f3e8f816b5517",
".git/objects/4d/17bcf146bd502f88b99c77c418134a2252dde6": "b99f9905a34b67d150bbf37d999a5c99",
".git/objects/4d/aba2ae62ee044147d2ccd7589da9e25bcda889": "369cbf614f7cf659e4ec66fff4783d6e",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/11fe3d2f1de018436d01d29c7fd0fc97767bcf": "eac52146785ef3afcea377dafe9499a2",
".git/objects/58/dbe6e08f34d168e316afdc041e8c7743e7c90a": "70e1ffd1d3ae448d231a5d11c935c52e",
".git/objects/59/d95394d4842a91c815d1899603f7732072b9ad": "e9d1e04656cf11042bd6225266065799",
".git/objects/5e/144d3847b41410f963b6aa339de7545e34d279": "3d73c06ee72248b04a75b40e753bd470",
".git/objects/63/7ae66d3f9fa4a211662ce4836c00cb9bf895af": "cc7f662120c4aef283277464a0798c09",
".git/objects/63/dd91a1b170f6d33c8baa9d9ac72db60ce6e7d3": "32bc74ffa3fcf5634c915c5e053cef00",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/fb7337ae7f01d0a994e6c0fd661f14435c0700": "be85c0500e94c6ffb12472b9c886ad14",
".git/objects/76/88cc3b2a8ebb164e7d93bdea750f59f6af3489": "8d32e4c1dfa7838427ab10accb76de2a",
".git/objects/7d/04e4f1b6735bedb206de77490677f2646bb968": "bcba7d3d50199f8130073375d4a2c9a4",
".git/objects/7d/f0b70eb548a50be1f894be98093424f5ac017c": "d823e7e8758f990cc80298a8a0a60e02",
".git/objects/82/7b57c3411974e13524544ce0043c0fef80832d": "8a0df4d20bca7f32ce5a46a4b7719bf1",
".git/objects/87/1ec739d0377b1c70f40017d2882d40b2c861f8": "91f5ddd4ae79ef5bb31d95a91e2e45e9",
".git/objects/88/830efffb6d560a8fbbeef5d6044f66121c23f7": "947a0f5ece0e4b8541a3a105d8bb0732",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/d2a18474d87f2591e7c3f1703130251da01d8c": "a16bff08f35a7e2b90d2c9314873e424",
".git/objects/9e/701d240a6e7a0a772a073c7d7d1f640125ad9d": "ee65edfbf917d35e74cbdfd4ce0a9a56",
".git/objects/ae/1c6e8d1a059bfb7024249e684d9c5568c1b658": "be01eea8f45e75bfd5a0f511e44bc194",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/b3/8e223eacc7c7a238abc7c05f25cb87a8a82eb6": "103f27376c7b3ba6fcac7a988107f10b",
".git/objects/b3/ce898878f64076777456698d5051cf18817c7b": "affdd38cfcddf7b3d50c085de111f02c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a764daf1935d7934058cb8facc8d2742e19b84": "d7a406de60250cd3b6859450b9432871",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/a07207bd4e36af21f5b8729e311abcdd74cd0f": "375e9472d58543b8450628ce00ede2cc",
".git/objects/cc/ad02316008e1b9277df44f265426ed23d2bbee": "edc0ba05b1ecd624898f48ba3d6bbd17",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/6445fe955c65da47e4bcffdb18f35de70e89fa": "e6afdc78b4ddc22d8090749df6c6ad04",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/77d6d5c9b49e7c836423a12d34305455075cf9": "e00e015988a889fcd865cf268eb5ee4c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/356d884fc25aa39f71d09723a488af3a7d6248": "02d3f62c23a39a7de5d66ffe8fca387c",
".git/objects/f3/64d7476c3795ce03f00c1384611538255cac29": "fd8576035a1555813d6589dc8814f7c0",
".git/objects/f3/6bbe6a73d45302f3c711fec3fd80412cb143c1": "b10c2611fce9790b324ba4aed2240a66",
".git/objects/f4/b53e2a8a9c48b71577a198a9f7389acdaa2f2d": "3edc18956e826540f261008be4d51140",
".git/objects/f5/22bcf055b5fc49be1a6b406ab36ec6b71eb275": "11ec1ced851e64025e2116a88f53353f",
".git/objects/ff/5798baffadbc05391b5c13e71292aef2207ad2": "4541023f9fe670d02713c724ea4ec889",
".git/refs/heads/master": "2ad6278f8fd20cec0d021482007c3774",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "2ad6278f8fd20cec0d021482007c3774",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d5df1d667faa291a917fb9d92f62afec",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"doc_flutter_samples/.git/config": "bf67343f48be094c4f2eab9b74506f40",
"doc_flutter_samples/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"doc_flutter_samples/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"doc_flutter_samples/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"doc_flutter_samples/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"doc_flutter_samples/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"doc_flutter_samples/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"doc_flutter_samples/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"doc_flutter_samples/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"doc_flutter_samples/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"doc_flutter_samples/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"doc_flutter_samples/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"doc_flutter_samples/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"doc_flutter_samples/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"doc_flutter_samples/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"doc_flutter_samples/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"doc_flutter_samples/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"doc_flutter_samples/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0345393b165aa70744b527422c744d98",
"/": "0345393b165aa70744b527422c744d98",
"main.dart.js": "3cbe93ccf93d84d336e9e1de4cbbea68",
"manifest.json": "0edd0db69fe98417d9dc34533da6c9a2",
"README.md": "9f5e9c4878367d6b4b65387c4da20bbe",
"version.json": "4126d5b5d7696c05b69cb9650f3c04fa"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
