const nombreCache = 'apv-v1';
const archivos = [
    '/',
    'index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

// cuando se instala el servis worker
self.addEventListener('install', e => {
    console.log('Instalando el Servis Worker');

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                cache.addAll(archivos)
            })
    )
});

// activar el servis worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    console.log(e);
});

// eventi fech para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);
});