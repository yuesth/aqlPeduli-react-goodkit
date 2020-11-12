"use strict";

//
// navbar-dropdown.js
//
(function () {
  //
  // Variables
  //
  // Selectors
  var drops = document.querySelectorAll('.navbar-nav .dropdown, .navbar-nav .dropright');
  var dropdowns = document.querySelectorAll('.navbar-nav .dropdown');
  var droprights = document.querySelectorAll('.navbar-nav .dropright'); // Events

  var showEvents = ['mouseenter'];
  var hideEvents = ['mouseleave', 'click']; // Transition

  var transitionDuration = 200; // Positioner

  var overflowPadding = 16; // Breakpoint

  var desktopSize = 992; //
  // Functions
  //
  // Show drop

  function showDrop(menu) {
    if (window.innerWidth < desktopSize) {
      return;
    }

    menu.classList.add('showing');
    setTimeout(function () {
      menu.classList.remove('showing');
      menu.classList.add('show');
    }, 1);
    positionDrop(menu);
  } // Hide drop


  function hideDrop(e, menu) {
    if (window.innerWidth < desktopSize) {
      return;
    }

    if (!menu.classList.contains('show')) {
      return;
    }

    if (e.type === 'click' && e.target.closest('.dropdown-menu form')) {
      return;
    }

    menu.classList.add('showing');
    menu.classList.remove('show');
    setTimeout(function () {
      menu.classList.remove('showing');
    }, transitionDuration);
  } // Position drop


  function positionDrop(menu) {
    var positioner = menu.parentElement;
    var drop = positioner.parentElement;
    var isDropright = drop.classList.contains('dropright');
    var menuOffset = isDropright ? [-32, 0] : [0, 0];
    var menuPlacement = isDropright ? 'right-start' : 'auto';
    Popper.createPopper(drop, positioner, {
      placement: menuPlacement,
      modifiers: [{
        name: 'offset',
        options: {
          offset: menuOffset
        }
      }, {
        name: 'preventOverflow',
        options: {
          padding: overflowPadding
        }
      }]
    });
  } // Toggle dropright


  function toggleDroprights(e, menu) {
    if (window.innerWidth >= desktopSize) {
      return;
    }

    e.stopPropagation();
    var parentElement = menu.parentElement;
    var parentMenu = parentElement.closest('.dropdown-menu');
    var siblingMenus = parentMenu.querySelectorAll('.dropdown-menu');
    [].forEach.call(siblingMenus, function (el) {
      if (el !== menu) {
        el.classList.remove('show');
      }
    });
    menu.classList.toggle('show');
  } // Hide droprights


  function hideDroprights(menu) {
    if (window.innerWidth >= desktopSize) {
      return;
    }

    menu.classList.remove('show');
  } //
  // Listeners
  //


  [].forEach.call(drops, function (dropdown) {
    var menu = dropdown.querySelector('.dropdown-menu'); // Show drop

    showEvents.forEach(function (event) {
      dropdown.addEventListener(event, function () {
        showDrop(menu);
      });
    }); // Hide drop

    hideEvents.forEach(function (event) {
      dropdown.addEventListener(event, function (e) {
        hideDrop(e, menu);
      });
    });
  });
  [].forEach.call(droprights, function (dropright) {
    var toggle = dropright.querySelector('[data-toggle="dropdown"]');
    var menu = dropright.querySelector('.dropdown-menu'); // Toggle dropright

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      toggleDroprights(e, menu);
    });
  });
  $(dropdowns).on('hide.bs.dropdown', function () {
    var menus = this.querySelectorAll('.dropright .dropdown-menu'); // Hide droprights

    [].forEach.call(menus, function (menu) {
      hideDroprights(menu);
    });
  });
})();