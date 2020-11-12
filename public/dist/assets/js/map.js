"use strict";

//
// map.js
//
(function () {
  var maps = document.querySelectorAll('[data-map]');
  var accessToken = 'pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg';

  function init(map) {
    var elementOptions = map.dataset.map ? JSON.parse(map.dataset.map) : {};
    var defaultOptions = {
      container: map,
      style: 'mapbox://styles/mapbox/streets-v11',
      scrollZoom: false,
      interactive: false
    };
    var options = Object.assign(defaultOptions, elementOptions); // Get access token

    mapboxgl.accessToken = accessToken; // Init map

    new mapboxgl.Map(options);
  }

  if (typeof mapboxgl !== 'undefined' && maps) {
    [].forEach.call(maps, function (map) {
      init(map);
    });
  }
})();