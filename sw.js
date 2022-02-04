let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/',
                '/index.html'
            ])
        })
    )
})

self.addEventListener('fetch', function(event) {});
