"use strict";

//
// flickity.js
//
(function () {
  var toggles = document.querySelectorAll('[data-toggle="flickity"]');

  if (typeof Flickity !== 'undefined') {
    // Toggle on click
    if (toggles) {
      [].forEach.call(toggles, function (toggle) {
        toggle.addEventListener('click', function () {
          var slide = parseInt(toggle.dataset.slide);
          var target = document.querySelector(toggle.dataset.target);
          var flickity = Flickity.data(target);
          flickity.selectCell(slide);
        });
      });
    }
  }
})();