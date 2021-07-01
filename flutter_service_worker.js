'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9a108e7e88839c7e5bc9ff0c318fe39e",
"assets/assets/Ambulance.png": "0f3af9b81d3367ff85c89b1bcae26086",
"assets/assets/ambulance1.png": "b196c8d44f3eb1d1c98633680610383d",
"assets/assets/bottomcurve.png": "2ed22962c7dee2ec7502ab971e0b1a6e",
"assets/assets/button_background.png": "3b5ee735730ab54602f0a24a8e1d31af",
"assets/assets/cameraicon.png": "403a2d7f23c910ee58ff870418955a17",
"assets/assets/Cardiology.png": "f2656bebdf1485bb530a231a480592a6",
"assets/assets/contact1.png": "1eb14aa84be58d9932009d49307495be",
"assets/assets/covidperson.png": "324b43a076a833e7aba42275256d8f8b",
"assets/assets/curve1.png": "2be2366300c1c4ddb4613c302726ee19",
"assets/assets/Dentist.png": "165bad9711b1c36a7c7dbb23b98f3a2f",
"assets/assets/Dermatology.png": "f8ee366dcfee528ea791e21d718df5e6",
"assets/assets/diagnostic.png": "d1c1fe4a0350006e765b78a3a531e5bf",
"assets/assets/doctor.png": "5e69ae86dc7d3b39d524cb1fe36d92c7",
"assets/assets/doctor1.png": "ef6bb64d6e284f7dfb388c3b12688342",
"assets/assets/doctor2.png": "c07ea6317ce21407d3c3e91e004f8e80",
"assets/assets/drawerdesign.png": "417d270d2556aab6a089bb8861ea0d63",
"assets/assets/Gynecology.png": "6b8ccaca878cc5de9ec572741f30dad4",
"assets/assets/id.png": "6637a23ef42f3a243c2a034a07cb94dd",
"assets/assets/labwork.png": "c1e21b552cd7196e0b658104e7487471",
"assets/assets/logowhite.png": "17b7e9f727ed84a25b36d020932f7074",
"assets/assets/logowhitebackground.png": "b17fddb0d7f4b87c52dec678069b460c",
"assets/assets/logowithname.png": "6946a3d3fae581712c5d9282be4831ac",
"assets/assets/medicine.png": "117c8ea5866911d8b128565af3952720",
"assets/assets/Pediatrician.png": "f088a85bcfbc0c944c56ab10417fab49",
"assets/assets/person1.png": "3a18fad8cbd0c0339391a9dccb8f073d",
"assets/assets/Prescriptions.png": "e99a3e6b96d392d3e8df6abee3bc9f2c",
"assets/assets/store.png": "ac57f49191018fcf2d388209389c30e7",
"assets/assets/SVG/Ambulance.svg": "323a54e688def33c8b8972e511e7aee5",
"assets/assets/SVG/Cardiology.svg": "c008e83c2b4a7f96a21ed3d046df56c6",
"assets/assets/SVG/DiagnosticCenter.svg": "92f792bad34d3021fdf1ba77ce58f854",
"assets/assets/SVG/Doctor1.svg": "f79fd33da0eab1e328ee328e85385473",
"assets/assets/SVG/drop.svg": "a4dfc64c2bbda97a45b2f111f077f78a",
"assets/assets/SVG/Gynecology.svg": "e54afaf726b07a20e4c804a3ee926987",
"assets/assets/SVG/LabWork.svg": "50f20b3ec3c9a05671774b00ca6fad5b",
"assets/assets/SVG/LogOut.svg": "d59cde5cffdff25c15c837fbdc312b00",
"assets/assets/SVG/Medicine.svg": "a66fd6e834aa8c7d0a95b27766f85b4d",
"assets/assets/SVG/Pediatrician.svg": "b292add2a9158b490455539d34e59a75",
"assets/assets/SVG/Profile.svg": "479e237e11be42270ed3f7ea99b4f10d",
"assets/assets/SVG/Settings.svg": "f4531325725415a9f4cde338617d33c9",
"assets/assets/SVG/Store.svg": "814c26ce96100ee247d19afe0f4affd3",
"assets/assets/SVG/Vectorheight.svg": "3b57055a60a146d1e489fef8fffd9c08",
"assets/assets/SVG/Vectorkg.svg": "2a682219c5f374538fc6fe51006fa3ac",
"assets/assets/topcurve.png": "4df9a76f75e4b9b8e1cb39d83801113f",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "403b8bbfbe41a688de34be757232218c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "bae34fa5dea238224761599bb4d9b6da",
"/": "bae34fa5dea238224761599bb4d9b6da",
"main.dart.js": "172de96d8ab1fb41efc6b9cd0b121422",
"manifest.json": "338650caa3d428ff5010f66fb5dc0501",
"version.json": "59171ac8d1b2c974a2e18b1cbcc4d6f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
