"use strict";

//
// typed.js
//
(function () {
  var typed = document.querySelectorAll('[data-typed]');

  if (typeof Typed !== 'undefined' && typed) {
    [].forEach.call(typed, function (el) {
      var elementOptions = el.dataset.options ? JSON.parse(el.dataset.options) : {};
      var defaultOptions = {
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
      };
      var options = Object.assign(defaultOptions, elementOptions); // Init

      new Typed(el, options);
    });
  }
})();