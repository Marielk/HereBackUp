//Geolocalización del navegador
window.onload = function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        alert("Geolocalización no soportada por el navegador.");
    }
}

function showPosition(position) {
    return [latitude, longitude];
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude + '' + longitude);
}