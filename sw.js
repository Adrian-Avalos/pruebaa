const CACHE_NAME = "mi-pwa-cache-v1";
const URLS_TO_CACHE = [
    "/Eir3/",
    "/Eir3/index.html",
    "/Eir3/manifest.json",
    "/Eir3/icon.png"
];

// Al instalar el Service Worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("📦 Archivos cacheados");
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

// Interceptar las solicitudes y responder desde cache si está disponible
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
