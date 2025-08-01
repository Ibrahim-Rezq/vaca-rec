const CACHE_NAME = "vacation-pwa-v1"
const urlsToCache = [
  "/",
  "/locations",
  "/about",
  "/offline",
  "/static/js/bundle.js",
  "/static/css/main.css",
  "/manifest.json",
]

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request).catch(() => {
        if (event.request.destination === "document") {
          return caches.match("/offline")
        }
      })
    }),
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})
