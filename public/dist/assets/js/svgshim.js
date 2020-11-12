"use strict";

//
// svgshim.js
// Polyfill to solve shortcomings of SVG scaling in IE
//
(function () {
  var svgs = document.querySelectorAll('.svg-shim > svg');

  function init(svg) {
    // Get element's fill value
    var color = window.getComputedStyle(svg, null).getPropertyValue('color'); // Get SVG's outerHTML and prepare to use it in image

    var content = new XMLSerializer().serializeToString(svg);
    content = content.replace(/currentColor/g, color);
    content = content.replace(/\s\s+/g, ' ');
    content = content.replace(/</g, '%3C');
    content = content.replace(/>/g, '%3E');
    content = content.replace(/#/g, '%23');
    content = content.replace(/"/g, "'");
    content = 'data:image/svg+xml,' + content; // Create a replacer image

    var img = document.createElement('img');
    img.src = content;
    img.alt = '...'; // Replace SVG with image

    var parent = svg.parentNode;
    parent.appendChild(img);
    parent.removeChild(svg);
  } // Only has affect in IE


  if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    [].forEach.call(svgs, function (svg) {
      init(svg);
    });
  }
})();