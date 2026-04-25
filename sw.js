const cacheName = 'angeles-beauty-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/Imagenes/icon-192.png',
  '/Imagenes/icon-512.png'
];

// Instalar el service worker y guardar en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Activar y responder incluso sin internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});