if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('ok.....', registrado) )
        .catch( error => console.log('fall....', error) );
} else {
    console.log( 'Service Workers no soportados');
}