"use strict";

//
// navbar-reveal.js
//
(function () {
  var navbarReveal = document.querySelectorAll('.navbar-reveal');
  var windowEvents = ['load', 'scroll'];
  var windowScroll = window.pageYOffset;

  function revealNavbar(navbar) {
    var currentScroll = window.pageYOffset;
    var navbarOffset = windowScroll >= currentScroll ? '0' : '-100%';
    var navbarCollapse = navbar.querySelector('.navbar-collapse');

    if (!navbarCollapse.classList.contains('show')) {
      navbar.style.transform = "translateY(".concat(navbarOffset, ")");
    }

    windowScroll = currentScroll;
  }

  if (navbarReveal) {
    [].forEach.call(navbarReveal, function (navbar) {
      windowEvents.forEach(function (e) {
        window.addEventListener(e, function () {
          revealNavbar(navbar);
        });
      });
    });
  }
})();