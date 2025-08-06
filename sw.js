const CACHE_NAME = "mi-pwa-cache-v1";
const URLS_TO_CACHE = [
    "index.html",
    "manifest.json",
    "icon.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("📦 Archivos cacheados");
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});



