'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e14f8b3d8197fc98b059202f6d21ce5",
".git/config": "e419ad140a17d69f0e88bb6bcf4282b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fb6b07ce052d5125b4e597a7f5bd87aa",
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
".git/index": "7be188b09793790dc3e523b34b8285fa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e0d9928b605cdd44cfc3933d676e1768",
".git/logs/refs/heads/master": "e0d9928b605cdd44cfc3933d676e1768",
".git/logs/refs/remotes/origin/HEAD": "fbacf83e81be9a8a3c326bef21846c8d",
".git/logs/refs/remotes/origin/master": "d5bd1c4e6456a534049d8006f5d3d526",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/dba8b7fc4b6bc4617a82e1c940f5e260e22764": "968352e8ed9c9382b32dc8f031412bf0",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/339ec3b6306d13a31fadc245264ea50b676081": "d5dc1e2dd94bbf4f1a1fec011e500936",
".git/objects/07/fb141f64a957d9d9d605e64d50137b8718239b": "48b1ee3997520cc7a7e750d4ad6249b1",
".git/objects/08/bc26a21ebb0a4115c0c674bdd13a4b63d65dbf": "305af9e1e04e5d69a311f4004e5e0c36",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/14/22cab3e4e68151bc661f2b61a18c11b497cb06": "100e782c70139612912a1208544a58a3",
".git/objects/1a/540baaeeaa494d06139405c493d43e22d9ddc7": "0e7ce275d0211c03f11edf3fc10d93be",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/5957140b3e9e17af07ce3269070d0d274f9b44": "69eca3150c522856a42f284db54c21c3",
".git/objects/20/fda4c64139f1948db1f8a64e5f73690e53ecf8": "4aa337c40c0cbb31a7fcf9ab65f69780",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/23/e5dd30b7fbce68834c6832b80d144efe61fb86": "84a6054c42ea2dfec4ed9a8308d3239d",
".git/objects/28/c479a6c7d175e87a212c9251a1638246518c32": "7fe7eadb3ab31154950ed6b311ca7259",
".git/objects/2a/5106c89649b7b578f42bf5f83e5f9aad62a10c": "373467bf67df9418cefa6cf672b71764",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/7cfe558dfc28c3d16fdded3fe162c4effdd9ad": "5023825d8aa3310ccc8ecfcdc0e01fb9",
".git/objects/34/8e2b6e556b5b315c1207c18f476933b212ae3d": "8386335f11a09a35e532aafa5b94e082",
".git/objects/35/0117f849ee0823cd8773788e314c896e178175": "8754775cbac14ba5f28ae611f6779609",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/38467a464217bb884dc963c535cca03fae1dd5": "060423715c761006225108d4c2320223",
".git/objects/3d/1eb83504567450a2d964369bdb7c396a7ff3d2": "af46771a7cb3c6f74f61665dae97af0a",
".git/objects/3d/fca5c212493118a6422aa8305e1bf3199efa06": "830e17420ace9b597eb6f91ffbed8aff",
".git/objects/3e/241d5715ecc6db47ab079d36fdceafee387fea": "f9f4f431a2a730493e238244b8bf2b1a",
".git/objects/42/46514be569d2645bbf07eafa3ce4bcb13974dc": "6285b45ea34786dda282ea7c26808d65",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/e37ef602bc7af22604ac104b29f6c08a5a5ced": "e03c12b883dde352803f3a9b3c4f78f2",
".git/objects/48/09861bd808d9d42801d78778cd9a80705aebb9": "2d77ba3b2e52ea3d14e6ed0c058657b2",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/8ed7f06af69087040089fd54047350f8215a00": "874d04e3db20f6a1581f3e8f816b5517",
".git/objects/4d/17bcf146bd502f88b99c77c418134a2252dde6": "b99f9905a34b67d150bbf37d999a5c99",
".git/objects/4d/aba2ae62ee044147d2ccd7589da9e25bcda889": "369cbf614f7cf659e4ec66fff4783d6e",
".git/objects/4d/ded36cea2771986efd8e0314b2a3d3fc980a41": "9fb673cad32eff0402103f85485aaeea",
".git/objects/4e/5cb867f03a575f3df6f19663d037495e5d2bee": "1a9d99d36508b2dd3c3fd8b2f4e4e829",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/11fe3d2f1de018436d01d29c7fd0fc97767bcf": "eac52146785ef3afcea377dafe9499a2",
".git/objects/56/916784c9b01758a37129ea44306f9bf8906907": "5a284d08e066ce75d4c3b3c4c855342a",
".git/objects/57/0bc62a23b0c01ebefc395f09e44a70e437ccf9": "dc3a5e6e747d1aa138666a296e4e53df",
".git/objects/58/dbe6e08f34d168e316afdc041e8c7743e7c90a": "70e1ffd1d3ae448d231a5d11c935c52e",
".git/objects/59/462b896a27f6fb210b299d9639b94624ddc0ff": "6fd7be5cffcfb1041b7ee89c66664a4f",
".git/objects/59/d95394d4842a91c815d1899603f7732072b9ad": "e9d1e04656cf11042bd6225266065799",
".git/objects/5a/c3dd1e91bb1e29f41fb0e9127fa7727ce9b2af": "79b0b8e388ce2eb973e03cd68d13535d",
".git/objects/5e/144d3847b41410f963b6aa339de7545e34d279": "3d73c06ee72248b04a75b40e753bd470",
".git/objects/63/7ae66d3f9fa4a211662ce4836c00cb9bf895af": "cc7f662120c4aef283277464a0798c09",
".git/objects/63/dd91a1b170f6d33c8baa9d9ac72db60ce6e7d3": "32bc74ffa3fcf5634c915c5e053cef00",
".git/objects/64/755005cf9c3b1028872a602b0f9363154021fb": "5384dfd429ad7f1cec02f93405ce383a",
".git/objects/67/5797e2d4ba53455048b587e36c4c69d51b23a4": "605f7ef0a3e5c97f4a029a141140971b",
".git/objects/69/8dd6c038863c15ac4d7a5839166fa556ea68c3": "604601bb8d91c6e24007f4174313496d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/fb7337ae7f01d0a994e6c0fd661f14435c0700": "be85c0500e94c6ffb12472b9c886ad14",
".git/objects/74/9b42b51ef7462a709282eb5d85b9d38edd2216": "886680cfa4112117b92259be84eaefdd",
".git/objects/76/88cc3b2a8ebb164e7d93bdea750f59f6af3489": "8d32e4c1dfa7838427ab10accb76de2a",
".git/objects/77/8b7cc970ef060fe4ccde78546efdd7c51f2c7b": "4ac922afa20a5bc94d9228d99dde025f",
".git/objects/78/9bb5c5db1faf3ba92f0dd2e434d6e2c9fa847c": "7f05456bdcc73c380b0c74b606c8f0f0",
".git/objects/7d/04e4f1b6735bedb206de77490677f2646bb968": "bcba7d3d50199f8130073375d4a2c9a4",
".git/objects/7d/f0b70eb548a50be1f894be98093424f5ac017c": "d823e7e8758f990cc80298a8a0a60e02",
".git/objects/82/7b57c3411974e13524544ce0043c0fef80832d": "8a0df4d20bca7f32ce5a46a4b7719bf1",
".git/objects/84/ecd2de959dab36b385dcff021aeb03af313321": "9b15cf19ecf48739ca856f4286798f88",
".git/objects/85/7c3135580d71a9d3606991bcaa6a886161cdc4": "60b39bf7a0e4c359caf9454e4ff87186",
".git/objects/86/80eb5e7ea5abc8415a7cb9635e5e97cf975d85": "5fa5a0975764f5ab7f37ac4796446563",
".git/objects/87/1ec739d0377b1c70f40017d2882d40b2c861f8": "91f5ddd4ae79ef5bb31d95a91e2e45e9",
".git/objects/88/830efffb6d560a8fbbeef5d6044f66121c23f7": "947a0f5ece0e4b8541a3a105d8bb0732",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bac9eeac33aa4a6628461c9e432066df6d369f": "da8ff5fc29dea08432224245a452d647",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/add9077983799f23e44b9f95546023722f4c63": "fc1c1a67726129970c2ab3b367776445",
".git/objects/8c/0abad6ede6423b51d9c69a3eb72e577880bf41": "5c3c21755167be8abf83fccec20e7a03",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/93bed5a115bf889ef4180d3d42f3db7d370c0d": "4f4bc6c0c83e580d7eb1718cb1ebac4f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/ecba5357ee0d4ffd0f436639dd87a53d6fc212": "71c384d5cefedec351dd185a6dfe78ca",
".git/objects/99/bff51c4624b75b3a1a096ba9b4dfc9a0a95b41": "3a0e58f64e6736e67e20559bac69421e",
".git/objects/99/d2a18474d87f2591e7c3f1703130251da01d8c": "a16bff08f35a7e2b90d2c9314873e424",
".git/objects/9d/f5b81ffefbebf5f97f255fe9c711e0cfa55f1d": "8cd8db1630dae34a68573684103d5596",
".git/objects/9e/701d240a6e7a0a772a073c7d7d1f640125ad9d": "ee65edfbf917d35e74cbdfd4ce0a9a56",
".git/objects/9f/1b037ee76d4bbe7712a13df54d7d1b9802736f": "536460e0a9f44f7a65365ef5817e2c0c",
".git/objects/a0/80796e0eac07720614cbf031a0525d535db466": "6a5c5858cb6f4133ac39e27f90469b6d",
".git/objects/a1/184ed176e5a740b97b1d068ab61e4b44274eb1": "c2d9701bab3ce0aed6e8fdc47c649167",
".git/objects/a4/d7993c3f4514898e2cf7f8bf2f8070264466dc": "614635a81012f93e8fa0dab08ea43852",
".git/objects/aa/918e293878fa33ec960ed6231262bcff618f01": "4138448cfd7921ed94b053ecef3fdeed",
".git/objects/ae/1c6e8d1a059bfb7024249e684d9c5568c1b658": "be01eea8f45e75bfd5a0f511e44bc194",
".git/objects/b1/924c8b751b0bc80a555838f63cae63068a9b67": "6e5a7431eb61652e6d4c15cb8181b58a",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/b3/8e223eacc7c7a238abc7c05f25cb87a8a82eb6": "103f27376c7b3ba6fcac7a988107f10b",
".git/objects/b3/ce898878f64076777456698d5051cf18817c7b": "affdd38cfcddf7b3d50c085de111f02c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a764daf1935d7934058cb8facc8d2742e19b84": "d7a406de60250cd3b6859450b9432871",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/bf354347ef1408596ca03f8eb1e206205877f0": "42ce677b22d259bec56cc7d29a1c29e7",
".git/objects/c0/a07207bd4e36af21f5b8729e311abcdd74cd0f": "375e9472d58543b8450628ce00ede2cc",
".git/objects/cc/ad02316008e1b9277df44f265426ed23d2bbee": "edc0ba05b1ecd624898f48ba3d6bbd17",
".git/objects/cf/1245a6c379a53c157062c80308e5ede93ddc7a": "102a641b94c3ccbc7c6b381ea1f92fb9",
".git/objects/d5/f8db6aa88fafe867451a5197f4866222f22e43": "2101abaa45807d694a0e18955d2228b7",
".git/objects/d6/940f7fbacdb4171aa7e705fec2afe435b38bd3": "d87b4906bfe59b0d6b47806198c575fe",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/8a98bb9ef8d584fe504d74cd90aabad3891401": "ab1a5b8b2b734ca3a3dad0f1096e86c0",
".git/objects/d8/9bd47c284aee33034148b90f7d322072689468": "3187fb4b311193451bf115d425a3cb88",
".git/objects/db/5ca829074906e0e498cae607890db40d2815b0": "75af65ef0b196ff765001c9cbf46205c",
".git/objects/db/6445fe955c65da47e4bcffdb18f35de70e89fa": "e6afdc78b4ddc22d8090749df6c6ad04",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/a52b1c48fa0538a694531d260e61b1ea65941f": "6a33e6df6d4ef15f5ad09ef02f887255",
".git/objects/e1/7d5dd4ae01dcdbeaca5d0e23c3a72ccda0ccda": "c16119689147f7d4c3f0ee8eb27461e8",
".git/objects/e2/b153c942ae7efebe9b0add9ae38ba3521cd3c0": "946096e89cddb9feb07ddcec18af43ab",
".git/objects/e3/a9af98a3b22c70ccd965c07b492e04909fe745": "b7a839a50f630936945eff6a0fe5d954",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/77d6d5c9b49e7c836423a12d34305455075cf9": "e00e015988a889fcd865cf268eb5ee4c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/356d884fc25aa39f71d09723a488af3a7d6248": "02d3f62c23a39a7de5d66ffe8fca387c",
".git/objects/f3/64d7476c3795ce03f00c1384611538255cac29": "fd8576035a1555813d6589dc8814f7c0",
".git/objects/f3/6bbe6a73d45302f3c711fec3fd80412cb143c1": "b10c2611fce9790b324ba4aed2240a66",
".git/objects/f4/b53e2a8a9c48b71577a198a9f7389acdaa2f2d": "3edc18956e826540f261008be4d51140",
".git/objects/f5/22bcf055b5fc49be1a6b406ab36ec6b71eb275": "11ec1ced851e64025e2116a88f53353f",
".git/objects/f6/6c25c038fae0763aa83386f697337f194dd3ef": "21f2742b06e29a8bf946191244f09261",
".git/objects/f9/8db0bcf6a971a404d1f532967025bba55de6bc": "f0b8602a7f1a863e9aa0c11d825aa76b",
".git/objects/fe/5e8a9e75cea616ea1df3e5a73b44639d898723": "9aa47c18935c1a6275384ec231fddca4",
".git/objects/ff/5798baffadbc05391b5c13e71292aef2207ad2": "4541023f9fe670d02713c724ea4ec889",
".git/refs/heads/master": "b96339dd29d80e274f4a440069959647",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "b96339dd29d80e274f4a440069959647",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "72ea56802dd7e73d19cbec3e0379fea3",
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
"index.html": "e1311a4329855d50e872f2dd1b84df57",
"/": "e1311a4329855d50e872f2dd1b84df57",
"main.dart.js": "8129b0e7d82352e173ad316d072947dc",
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
