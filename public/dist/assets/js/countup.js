"use strict";

//
// countup.js
//
(function () {
  var toggles = document.querySelectorAll('[data-toggle="countup"]');
  var toggleSelector = '.aos-animate[data-aos-id="countup:in"]:not(.counted)';
  var events = ['aos:in:countup:in'];

  function init(toggle) {
    var startVal = toggle.dataset.from ? +toggle.dataset.from : null;
    var endVal = toggle.dataset.to ? +toggle.dataset.to : null;
    var decimals = toggle.dataset.decimals ? +toggle.dataset.decimals : null;
    var duration = toggle.dataset.duration ? +toggle.dataset.duration : null;
    var options = toggle.dataset.options ? JSON.parse(toggle.dataset.options) : null;
    var countUp = new CountUp(toggle, startVal, endVal, decimals, duration, options);

    if (!countUp.error) {
      countUp.start();
      toggle.classList.add('counted');
    } else {
      console.error(countUp.error);
    }
  }

  if (typeof CountUp !== 'undefined' && toggles) {
    [].forEach.call(toggles, function (toggle) {
      if (toggle.getAttribute('data-aos-id') !== 'countup:in') {
        init(toggle);
      }
    });
  }

  document.addEventListener(events[0], function (e) {
    if (e.detail instanceof Element) {
      init(e.detail);
    } else {
      var toCount = document.querySelectorAll(toggleSelector);
      [].forEach.call(toCount, function (toggle) {
        init(toggle);
      });
    }
  });
})();