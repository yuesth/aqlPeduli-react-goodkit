"use strict";

//
// popovers.js
//
(function () {
  var popovers = document.querySelectorAll('[data-toggle="popover"]');

  if (popovers) {
    $(popovers).popover();
  }
})();