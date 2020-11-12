"use strict";

//
// fancybox.js
//
(function () {
  function globalOptions() {
    $.fancybox.defaults.image.preload = false;
    $.fancybox.defaults.toolbar = false;
    $.fancybox.defaults.clickContent = false;
  }

  if (jQuery().fancybox) {
    globalOptions();
  }
})();