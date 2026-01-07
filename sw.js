const CACHE_NAME = '112-asistan-v2'; // Versiyonu v3 yaptık
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './img/logo.jpg',
  './img/ant.jpg',   // Yeni eklenenler
  './img/nfr.jpg',
  './img/lateralmı.jpg',
  './img/STSEGMENT.jpg',
  './img/ekg1.jpg',
  './img/tp1.jpg',
  './img/tp2.jpg',
  './img/tp3.jpg'
'./img/svt1.jpg',
  './img/af1.jpg',
  './img/vt.jpg',
  './img/polvt.jpg'

  './sound/beep.mp3',
  './sound/wheezing.mp3',
  './sound/ronkus.mp3',
  './sound/stridor.mp3'
];
// Dosyaları hafızaya al
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// İnternet yoksa hafızadan getir
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});