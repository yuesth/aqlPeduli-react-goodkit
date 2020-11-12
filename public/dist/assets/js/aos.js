"use strict";

//
// aos.js
//
(function () {
  function init() {
    var options = {
      duration: 700,
      easing: 'ease-out-quad',
      once: true,
      startEvent: 'load'
    };
    AOS.init(options);
  }

  if (typeof AOS !== 'undefined') {
    init();
  }
})();