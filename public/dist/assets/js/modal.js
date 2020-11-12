"use strict";

//
// modal.js
//
(function () {
  var modals = document.querySelectorAll('.modal');

  function overflowHide() {
    document.documentElement.style.overflowX = 'visible';
  }

  function overflowShow() {
    document.documentElement.style.overflowX = '';
  }

  $(modals).on({
    'show.bs.modal': function showBsModal() {
      overflowHide();
    },
    'hidden.bs.modal': function hiddenBsModal() {
      overflowShow();
    }
  });
})();