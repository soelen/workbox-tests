import {precacheAndRoute, createHandlerBoundToURL} from 'workbox-precaching'
import {NavigationRoute, registerRoute} from 'workbox-routing'
import {CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';
import {ExpirationPlugin} from 'workbox-expiration';

declare const self: ServiceWorkerGlobalScope;

// Add custom service worker logic, such as a push notification serivce, or json request cache.
self.addEventListener("message", (event: any) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
     self.skipWaiting();
  }
});



// precacheAndRoute(self.__WB_MANIFEST)

try {

  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com',
    new StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  registerRoute(
    ({url}) => url.origin === 'https://fonts.gstatic.com',
    new CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
      cacheName: 'images',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );

  precacheAndRoute(self.__WB_MANIFEST);
  registerRoute(new NavigationRoute(createHandlerBoundToURL('/index.html')))
}
catch (err) {
  console.info("if you are in development mode this error is expected: ", err);
}

// self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.filter(function() {
//           // Return true if you want to remove this cache,
//           // but remember that caches are shared across
//           // the whole origin
//         }).map(function(cacheName) {
//           console.dir( 'ok time to clear');
//           return caches.delete(cacheName);
//         })
//       );
//     })
//   );
// });

