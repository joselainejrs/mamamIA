// MamamIA: guarda o app no aparelho para abrir rápido e funcionar sem internet.
const CACHE='mamamia';
const ARQUIVOS=['/','/app.css','/fonts/nunito-latin-400-normal.woff2','/fonts/nunito-latin-600-normal.woff2','/fonts/nunito-latin-700-normal.woff2','/fonts/nunito-latin-800-normal.woff2','/fonts/nunito-latin-900-normal.woff2','/icons/apple-touch-icon.png','/icons/icon-192.png','/icons/icon-512.png','/icons/maskable-512.png','/img/avatar.webp','/img/envelope.webp','/img/hero.webp','/img/laptop.webp','/img/logo.webp','/img/mia.webp','/img/video.webp','/index.html','/manifest.webmanifest','/vendor/lucide.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARQUIVOS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).catch(()=>e.request.mode==='navigate'?caches.match('/index.html'):undefined)))});
