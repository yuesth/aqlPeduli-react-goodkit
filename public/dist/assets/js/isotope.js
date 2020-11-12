"use strict";

//
// isotope.js
//
(function () {
  var isotopes = document.querySelectorAll('[data-isotope]');
  var toggles = document.querySelectorAll('[data-filter]');
  var events = ['click'];

  function layout(isotope) {
    var instance = Isotope.data(isotope);
    new imagesLoaded(isotope, function () {
      instance.layout();
    });
  }

  function filter(e, toggle) {
    e.preventDefault();
    var filter = toggle.dataset.filter;
    var target = document.querySelector(toggle.dataset.target);
    var instance = Isotope.data(target);
    instance.arrange({
      filter: filter
    });
  }

  if (isotopes && toggles && Isotope && imagesLoaded) {
    window.onload = function () {
      [].forEach.call(isotopes, function (isotope) {
        layout(isotope);
      });
      [].forEach.call(toggles, function (toggle) {
        toggle.addEventListener(events[0], function (e) {
          filter(e, toggle);
        });
      });
    };
  }
})();