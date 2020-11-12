"use strict";

//
// price.js
//
(function () {
  var toggles = document.querySelectorAll('[data-toggle="price"]');

  if (typeof CountUp !== 'undefined' && toggles) {
    [].forEach.call(toggles, function (toggle) {
      toggle.addEventListener('click', function () {
        var target = toggle.dataset.target;
        var targetEl = document.querySelector(target);
        var from = targetEl.innerHTML;
        var to = toggle.dataset.value;
        var countUp = new CountUp(targetEl, from, to);
        countUp.error ? console.error(countUp.error) : countUp.start();
      });
    });
  }
})();