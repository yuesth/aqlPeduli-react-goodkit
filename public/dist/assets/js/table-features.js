"use strict";

//
// features.scss
//
(function () {
  var toggles = document.querySelectorAll('[data-toggle="table-features"]');
  [].forEach.call(toggles, function (toggle) {
    toggle.addEventListener('change', function () {
      var target = toggle.dataset.target;
      var table = document.querySelector(target);
      table.classList.toggle('table-features-alt');
    });
  });
})();