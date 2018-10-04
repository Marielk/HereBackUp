//Geolocalización del navegador
window.onload = function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        alert("Geolocalización no soportada por el navegador.");
    }
}

function showPosition(position) {
    return [lat, lng];
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    console.log(latitude + '' + longitude);
}

// function moveMapToBerlin(map){
//     map.setCenter({lat:, lng:});
//     map.setZoom(14);
//   }