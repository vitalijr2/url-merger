// Replaced with the latest app-facing commit by GitHub Actions.
const APP_VERSION = "__APP_VERSION__";
const CACHE_NAME = "url-merger-" + APP_VERSION;
const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./version.json",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
});

self.addEventListener("message", event => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith("url-merger-") && key !== CACHE_NAME)
        .map(key => caches.delete(key))
    )),
    self.clients.claim()
  ]));
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin ||
      !url.pathname.startsWith("/url-merger/")) return;

  // Always check the deployed version online, never the offline cache.
  if (url.pathname.endsWith("/version.json")) {
    event.respondWith(fetch(request, {cache: "no-store"}));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("./index.html").then(cached => cached || fetch(request))
    );
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request)));
});
