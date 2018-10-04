 platform = new H.service.Platform({
     'app_id': '{WbEPKWFEnfQM0IXSYfVc}',
     'app_code': '{vUFJOVT93XZ1xyAq4jcwzQ}',
     useHTTPS: true
 });

 var defaultLayers = platform.createDefaultLayers();
 var mapPlaceholder = document.getElementById('map');

 var map = new H.Map(
     mapContainer,
     defaultLayers.normal.map);

 window.addEventListener('resize', function() {
     map.getViewPort().resize();
 });