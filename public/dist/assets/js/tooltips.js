"use strict";

//
// tooltips.js
//
(function () {
  var tooltips = document.querySelectorAll('[data-toggle="tooltip"]');

  if (tooltips) {
    $(tooltips).tooltip();
  }
})();