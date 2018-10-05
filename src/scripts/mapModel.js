//Inicialización del mapa
var platform = new H.service.Platform({
    app_id: 'WbEPKWFEnfQM0IXSYfVc',
    app_code: 'vUFJOVT93XZ1xyAq4jcwzQ',
    useHTTPS: true
});

let pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
});
var mapPlaceholder = document.getElementById('mapContainer');



var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    mapOptions, {
        center: coordinates,
        zoom: 16,
        pixelRatio: pixelRatio
    });

window.addEventListener('resize', function() {
    map.getViewPort().resize();
});

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
let ui = H.ui.UI.createDefault(map, defaultLayers);

var coordinates = {
    lat: -33.4189088,
    lng: -70.6422443
};

var mapOptions = {
    center: coordinates,
    zoom: 14
}

//Marcadores
var marker = new H.map.Marker(coordinates);
map.addObject(marker);

var iconUrl = '/src/img/isotipo.png';

var iconOptions = {
    // The icon's size in pixel:
    size: new H.math.Size(26, 34),
    // The anchorage point in pixel, 
    // defaults to bottom-center
    anchor: new H.math.Point(14, 34)
};

var markerOptions = {
    icon: new H.map.Icon(iconUrl, iconOptions)
};

var marker = new H.map.Marker(coordinates, markerOptions);
map.addObject(marker);

let rutAppPlaces = [
    { position: { lat: -33.443743, lng: -70.647769 }, decripcion: "Museo de Arte Colonial", distancia: 0 },
    { position: { lat: -33.4444861, lng: -70.6508667 }, decripcion: "Universidad de Chile", distancia: 0 },
    { position: { lat: -33.4428439, lng: -70.6542201 }, decripcion: "Palacio de la Moneda", distancia: 0 },
    { position: { lat: -33.4390878, lng: -70.6524804 }, decripcion: "Museo Chileno de Arte Precolombino", distancia: 0 },
    { position: { lat: -33.4372714, lng: -70.650708 }, decripcion: "Museo Histórico Nacional", distancia: 0 },
    { position: { lat: -33.433545807755394, lng: -70.65215017256392 }, decripcion: "La Piojera", distancia: 0 }
];

rutAppPlaces.forEach(function(rutAppMarker) {
    let markerUser = new H.map.Marker(rutAppMarker.position);
    rutAppMarker["marca"] = markerUser;
    map.addObject(markerUser);

    map.addObject(rutAppMarker)
});

//Geolocalización 
function updatePosition(event) {
    var userLocation = {
        lat: event.coords.latitude,
        lng: event.coords.longitude
    };

    var markerUser = new H.map.Marker(userLocation);
    map.addObject(markerUser);
    map.setCenter(userLocation);
}

optionsGPS = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
navigator.geolocation.watchPosition(updatePosition);

var watchID = navigator.geolocation.watchPosition(function(position) {
    map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
    var userLocation = new H.map.Marker({ lat: pos.position.latitude, lng: pos.position.longitude });
    map.addObject(userLocation);
});

// … later

navigator.geolocation.clearWatch(watchID);


//fetch json

function addMarkersToMap(map, logEvent) {

    var filtrar = rutAppPlaces.then()

    var data = filtrar.then(res => res.filter(res => res.latitude && res.longitude != null))
    data.then(e => {
        for (let i = 0; i < e.length; i++) {
            var rutAppMarker = new H.map.Marker(new H.geo.Point(e[i].latitude, e[i].longitude), {

            });

            map.addObject(rutAppMarker);
            rutAppMarker.addEventListener('tap', logEvent)
            rutAppMarker.setData(e[i]);
        }
    });

}


function logEvent(e) {
    let data = e.target.getData();
    console.log(e.target.getData())
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var direccion = document.getElementById('direccion');
    var span = document.getElementById('spane');
    direccion.innerHTML = data.address;

    span.addEventListener('click', () => modal.style.display = "none")

    route(data)
}
addMarkersToMap(map, logEvent);


//Rutas
function HERERoute(map, platform, routeOptions) {
    var router = platform.getRoutingService();

    var onSuccess = function(result) {
        console.log('Route found!', result);
    };

    var onError = function(error) {
        console.error('Oh no! There was some communication error!', error);
    }

    router.calculateRoute(routeOptions, onSuccess, onError);
}

var route = new HERERoute(map, platform, {
    mode: 'fastest;car',
    representation: 'display',
    'waypoint0': 'geo!' + markerUser.getPosition().lat + ',' + markerUser.getPosition().lng,
    'waypoint1': 'geo!' + rutAppMarker.position.lat + ',' + rutAppMarker.position.lng,
});

var onSuccess = function(result) {
    var route,
        routeShape,
        startPoint,
        endPoint,
        strip;

    if (result.response.route) {
        route = result.response.route[0];
        routeShape = route.shape;

        strip = new H.geo.Strip();

        routeShape.forEach(function(point) {
            var parts = point.split(',');
            strip.pushLatLngAlt(parts[0], parts[1]);
        });

        var routeLine = new H.map.Polyline(strip, {
            style: { strokeColor: 'blue', lineWidth: 10 }
        });

        map.addObject(routeLine);

        map.setViewBounds(routeLine.getBounds());
    }
};

if (result.response.route) {
    route = result.response.route[0];
    routeShape = route.shape;

    // …
}

routeShape = route.shape;

strip = new H.geo.Strip();

routeShape.forEach(function(point) {
    var parts = point.split(',');
    strip.pushLatLngAlt(parts[0], parts[1]);
});

var routeLine = new H.map.Polyline(strip, {
    style: { strokeColor: 'blue', lineWidth: 10 }
});

map.addObject(routeLine);

map.setViewBounds(routeLine.getBounds());

function locationToWaypointString(coordinates) {
    return 'geo!' + coordinates.lat + ',' + coordinates.lng;
}

var HEREHQcoordinates = {
    lat: -33.4189088,
    lng: -70.6422443
};

var routeRendered = false;

function updatePosition(event) {
    var coordinates = {
        lat: event.coords.latitude,
        lng: event.coords.longitude
    };

    var marker = new H.map.Marker(coordinates);
    map.addObject(marker);

    // If the route has not been rendered yet, 
    // calculate and render it
    if (!routeRendered) {
        var route = new HERERoute(map, platform, {
            mode: 'fastest;car',
            representation: 'display',
            waypoint0: locationToWaypointString(coordinates),
            waypoint1: locationToWaypointString(HEREHQcoordinates)
        });

        routeRendered = true;
    }
}

navigator.geolocation.watchPosition(updatePosition);

var renderRouteElement = function(route, i) {
    var element = document.createElement('li');

    var routeSummary = route.route.summary;
    element.innerHTML = renderRouteTitle(routeSummary, i);

    var maneuvers = route.route.leg[0].maneuver;
    element.innerHTML += renderManeuvers(maneuvers);

    // …

}

var renderManeuvers = function(maneuvers) {
    return [
        '<ol class="directions">',
        maneuvers.map(function(maneuver) {
            return '<li>' + maneuver.instruction + '</li>';
        }).join(''),
        '</ol>'
    ].join('');
};