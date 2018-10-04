var platform = new H.service.Platform({
    'app_id': '{WbEPKWFEnfQM0IXSYfVc}',
    'app_code': '{vUFJOVT93XZ1xyAq4jcwzQ}'
});

// Get an object containing the default map layers:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map using the normal map as the base layer:
var map = new H.Map(document.getElementById('mapContainer',
    defaultLayers.normal.map));

// Change the map base layer to the satellite map with traffic information:
map.setBaseLayer(defaultLayers.satellite.traffic);