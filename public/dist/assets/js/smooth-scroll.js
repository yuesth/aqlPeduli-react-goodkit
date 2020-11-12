"use strict";

//
// smooth-scroll.js
//
(function () {
  var scroll = '[data-scroll]';
  var header = '.navbar.fixed-top';
  var _offset = 24;

  if (typeof SmoothScroll !== 'undefined' && scroll) {
    new SmoothScroll(scroll, {
      header: header,
      offset: function offset(anchor, toggle) {
        return toggle.dataset.offset ? toggle.dataset.offset : _offset;
      }
    });
  }
})();