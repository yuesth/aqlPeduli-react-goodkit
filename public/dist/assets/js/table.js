"use strict";

//
// table.js
//
(function () {
  var tableLinks = document.querySelectorAll('.table-clickable [data-href]');
  [].forEach.call(tableLinks, function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.location.href = link.dataset.href;
    });
  });
})();