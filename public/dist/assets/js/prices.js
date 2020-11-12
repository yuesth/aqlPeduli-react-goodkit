"use strict";

//
// prices.js
//
(function () {
  var toggles = document.querySelectorAll('[data-toggle="prices"]');

  if (typeof CountUp !== 'undefined' && toggles) {
    [].forEach.call(toggles, function (toggle) {
      toggle.addEventListener('change', function () {
        var target = toggle.dataset.target;
        var targetEl = document.querySelectorAll(target);
        var isChecked = toggle.checked;
        [].forEach.call(targetEl, function (el) {
          var minValue = el.dataset.minValue;
          var maxValue = el.dataset.maxValue;
          var from = el.innerHTML;
          var to = isChecked ? maxValue : minValue;
          var countUp = new CountUp(el, from, to);
          countUp.error ? console.error(countUp.error) : countUp.start();
        });
      });
    });
  }
})();