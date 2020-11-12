"use strict";

//
// password.js
//
(function () {
  var toggles = document.querySelectorAll('[data-toggle="password"]');
  [].forEach.call(toggles, function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(toggle.getAttribute('href'));
      var type = target.type === 'password' ? 'text' : 'password';
      target.type = type;
    });
  });
})();