"use strict";

//
// highlight.js
//
(function () {
  var highlights = document.querySelectorAll('.highlight');

  if (typeof hljs !== 'undefined' && highlights) {
    [].forEach.call(highlights, function (highlight) {
      hljs.highlightBlock(highlight);
    });
  }
})();