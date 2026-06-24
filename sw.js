// Service worker — fonctionnement hors-ligne SANS bloquer les mises à jour.
// Stratégie : "network-first" pour la page (toujours la dernière version en ligne),
// "cache-first" pour les ressources statiques (icônes…).
const CACHE = "ma-pesee-v39";
const ASSETS = ["index.html", "manifest.json", "sw.js",
  "icon-180.png", "icon-192.png", "icon-512.png",
  "inspirations/ac-marie.webp", "inspirations/sea.webp",
  "inspirations/dialogues/talk.mp3",
  "inspirations/dialogues/choice.wav", "inspirations/dialogues/selector.wav"];

self.addEventListener("install", e => {
  // Mise en cache résiliente : un asset manquant ne fait pas échouer toute l'installation.
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const isPage = e.request.mode === "navigate"
    || url.pathname.endsWith("/") || url.pathname.endsWith("index.html");

  if (isPage) {
    // Réseau d'abord, en contournant le cache HTTP (no-store) -> la dernière version
    // s'applique dès le 1er chargement, sans avoir à vider le cache manuellement.
    e.respondWith(
      fetch(e.request, { cache: "no-store" }).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put("index.html", copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
    );
    return;
  }

  // Ressources statiques : cache d'abord, réseau en secours.
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => cached)
    )
  );
});
