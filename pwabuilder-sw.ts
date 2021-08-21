import {precacheAndRoute, createHandlerBoundToURL} from 'workbox-precaching'
import {NavigationRoute, registerRoute} from 'workbox-routing'
import { } from 'workbox-routing';

declare const self: ServiceWorkerGlobalScope;

// Add custom service worker logic, such as a push notification serivce, or json request cache.
self.addEventListener("message", (event: any) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
     self.skipWaiting();
  }
});



// precacheAndRoute(self.__WB_MANIFEST)

try {
  //@ts-ignore
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
