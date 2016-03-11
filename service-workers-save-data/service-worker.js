"use strict";

this.addEventListener('fetch', event => {

// Save Data support
    if(event.request.headers.get('save-data')){

    // We want to save data, so restrict icons and fonts too
    if (event.request.url.includes('fonts.googleapis.com')) {
        // return nothing
        event.respondWith(new Response('', {status: 408, statusText: 'Ignore fonts to save data.' }));
    }

    if (/\.jpg$|.gif$|.png$/.test(event.request.url)) {
        var saveDataUrl = event.request.url.substr(0, event.request.url.lastIndexOf("."));
        saveDataUrl += '-save-data';
        saveDataUrl += event.request.url.substr(event.request.url.lastIndexOf("."), event.request.url.length - 1);

        event.respondWith(
            fetch(saveDataUrl, {
                mode: 'no-cors'
            })
        );
    }
}

});