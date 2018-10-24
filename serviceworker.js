importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

const staticAssets = [
    './',
    './css',
    './images',
    './scripts',
    './images/dog_fetching_ball.jpg'
];

// Shows logs, warnings and errors.
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.log);

workbox.precaching.precache(staticAssets);

workbox.precaching.addRoute();

workbox.routing.registerRoute(
    new RegExp(/.*\.(png|jpg|jpeg|gif)/),
    workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                // Only cache requests for 24 hours
                maxAgeSeconds: 24 * 60 * 60,
                // Only cache 20 requests.
                maxEntries: 20,
            }),
        ]
    })
);