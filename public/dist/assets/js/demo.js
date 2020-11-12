"use strict";

//
// demo.js
//
var themeSansSerif = document.getElementById('themeSansSerif');
var familySansSerif = window.localStorage.getItem('goodkitSansSerif');

function switchFamily(checked) {
  // Update localStorage value
  window.localStorage.setItem('goodkitSansSerif', checked); // Toggle stylesheet

  themeSansSerif.disabled = !checked; // Toggle switches

  toggleSwitches(checked);
}

function toggleSwitches(checked) {
  var familySwitches = document.querySelectorAll('.family-switch');
  [].forEach.call(familySwitches, function (familySwitch) {
    familySwitch.checked = checked;
  });
} // Toggle stylesheet on load


if (familySansSerif === 'true') {
  themeSansSerif.disabled = false;
} // Toggle switches on load 


window.addEventListener('DOMContentLoaded', function () {
  toggleSwitches(familySansSerif === 'true');
});