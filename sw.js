let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/',
                '/index.html'
                "https://www.viijayscript.com/"
            ])
        })
    )
})

self.addEventListener('fetch', function(event) {});
