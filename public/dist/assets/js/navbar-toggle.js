"use strict";

//
// navbar-toggle.js
//
(function () {
  var navbars = document.querySelectorAll('.navbar');
  var windowEvents = ['load', 'scroll'];

  function makeNavbarLight(navbar) {
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
    lightenBackground(navbar);
  }

  function makeNavbarDark(navbar) {
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
    resetBackground(navbar);
  }

  function lightenBackground(navbar) {
    navbar.style.boxShadow = 'inset 1000px 1000px 1000px white';
  }

  function resetBackground(navbar) {
    navbar.style.boxShadow = '';
  }

  function toggleNavbar(e, navbar, isLight, isTogglable, collapse) {
    var scrollTop = window.pageYOffset;
    var isCollapsed = collapse.classList.contains('show');

    if (e.type === 'show') {
      makeNavbarLight(navbar);
    }

    if (e.type === 'hidden' && isLight) {
      resetBackground(navbar);
    }

    if (e.type === 'hidden' && (!isTogglable && !isLight || isTogglable && !scrollTop)) {
      makeNavbarDark(navbar);
    }

    if ((e === 'load' || e === 'scroll') && isTogglable && !isCollapsed) {
      scrollTop ? makeNavbarLight(navbar) : makeNavbarDark(navbar);
    }
  }

  [].forEach.call(navbars, function (navbar) {
    var collapse = navbar.querySelector('.navbar-collapse');
    var isLight = navbar.classList.contains('navbar-light');
    var isTogglable = navbar.classList.contains('navbar-togglable');
    windowEvents.forEach(function (e) {
      window.addEventListener(e, function () {
        toggleNavbar(e, navbar, isLight, isTogglable, collapse);
      });
    });
    $(collapse).on('show.bs.collapse hidden.bs.collapse', function (e) {
      toggleNavbar(e, navbar, isLight, isTogglable, collapse);
    });
  });
})();