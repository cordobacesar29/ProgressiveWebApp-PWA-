/*if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }*/

if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('./sw.js', { scope:'public/'})
        .then( registrado => console.log('ok', registrado) )
        .catch( error => console.log('fall....', error) );
} else {
    console.log( 'Service Workers no soportados');
}
