"use strict";

function getData() {
  var locAPI, res, data, latitude, longitude, map, dilat, dilng;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          locAPI = 'https://ipapi.co/json/';
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(locAPI));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;
          latitude = data.latitude, longitude = data.longitude;
          map = new google.maps.Map(document.getElementById('map'), {
            center: {
              lat: latitude,
              lng: longitude
            },
            zoom: 8
          });
          dilat = document.getElementById('lat').innerText = 'lat' + '' + latitude;
          dilng = document.getElementById('lgn').innerText = 'long' + '' + longitude;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}