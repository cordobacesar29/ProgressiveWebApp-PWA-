// cuando se instala el servis worker
self.addEventListener('install', e => {
    console.log('Instalando el Servis Worker');

    console.log(e);
});

// activar el servis worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');

    console.log(e);
});