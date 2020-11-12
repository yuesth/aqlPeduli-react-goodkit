"use strict";

//
// card-stack.js
//
(function () {
  var stacks = document.querySelectorAll('.card-stack');
  var events = ['load', 'resize', 'scroll'];
  [].forEach.call(stacks, function (stack) {
    var items = stack.querySelectorAll('.card-stack-item');
    events.forEach(function (event) {
      window.addEventListener(event, function () {
        var arr = [].slice.call(items).reverse();
        arr.reduce(function (total, item, i) {
          var height = item.clientHeight + parseInt(window.getComputedStyle(item).getPropertyValue('margin-bottom'));
          var offset = arr[i - 1] ? arr[i - 1].offsetTop - item.offsetTop : height;
          var progress = total + (height - offset) / height; // if (progress !== total) {

          var card = item.firstElementChild;
          var cardInner = card.firstElementChild;
          var translate = 'calc(-1rem * ' + progress + ')';
          var opacity = 'calc(1 - .2 * ' + progress + ')';
          var scale = 'calc(1 - .03 * ' + progress + ')';
          card.style.transform = 'translateY(' + translate + ') scale(' + scale + ')';
          cardInner.style.opacity = opacity; // }

          return progress;
        }, 0);
      });
    });
  });
})();