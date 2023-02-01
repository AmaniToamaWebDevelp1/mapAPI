

async function getData(){
    const locAPI = 'https://ipapi.co/json/';
    const res = await fetch(locAPI);
    const data = await res.json();
    const {latitude,longitude} = data;
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 8
    });
    
    var dilat = document.getElementById('lat').innerText = 'lat'+'' + latitude;
    var dilng = document.getElementById('lgn').innerText = 'long' +'' + longitude;
    
}
