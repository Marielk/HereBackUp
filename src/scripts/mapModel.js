platform = new H.service.Platform({
    'app_id': 'WbEPKWFEnfQM0IXSYfVc',
    'app_code': 'vUFJOVT93XZ1xyAq4jcwzQ',
    useHTTPS: true
});

let pixelRatio = window.devicePixelRatio || 1;
let defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
});

let map = new H.Map(document.getElementById('mapContainer'),
    defaultLayers.normal.map, {
        center: { lat: -33.4189088, lng: -70.6422443 },
        zoom: 16,
        pixelRatio: pixelRatio
    });

let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

let ui = H.ui.UI.createDefault(map, defaultLayers);

function errLocation(error) {
    console.log(error);
}

optionsGPS = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};


if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(location) {
        updateLocation(location);
    }, errLocation, optionsGPS);
    watchId = navigator.geolocation.watchPosition(updateLocation, errorLocation, optionsGPS);
} else {
    console.log('Geolocation API not supported.');
}

function updateLocation(position) {
    map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
    var userLocation = new H.map.Marker({ lat: pos.position.latitude, lng: pos.position.longitude });
    map.addObject(userLocation);
}

// function addMarkersToMap(map, logEvent) {

//     var filtrar = fetch('../../santiago.json').then(e => e.json()).then(e => result = e.places.filter(e => e.category == 'acceso'))

//     var data = filtrar.then(res => res.filter(res => res.latitude && res.longitude != null))
//     data.then(e => {
//       for (let i = 0; i < e.length; i++) {
//         var imageMarker = new H.map.Marker(new H.geo.Point(e[i].latitude, e[i].longitude), {
//           icon: new H.map.Icon('')
//         });
//         var image = new H.map.Marker(new H.geo.Point(e[i].latitude, e[i].longitude), {
//           icon: new H.map.Icon('')
//         });
//         map.addObject(imageMarker);
//         imageMarker.addEventListener('tap', logEvent)
//         imageMarker.setData(e[i]);
//       }
//     });

//   }