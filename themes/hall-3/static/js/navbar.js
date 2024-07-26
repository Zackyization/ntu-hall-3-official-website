document.addEventListener("DOMContentLoaded", function () {
  // Get the navbar and offcanvas elements
  var navbar = document.querySelector("#navbar-container");
  var offcanvas = document.querySelector("#navbar-mobile");

  // Add 'uk-sticky' when offcanvas is closed
  UIkit.util.on(offcanvas, "hidden", function () {
    navbar.setAttribute(
      "uk-sticky",
      "sel-target: .uk-navbar-container; cls-inactive: uk-navbar-transparent; cls-active: uk-navbar-sticky"
    );
  });

  // Remove 'uk-sticky' when offcanvas is opened
  UIkit.util.on(offcanvas, "shown", function () {
    navbar.removeAttribute("uk-sticky");
  });
});

function openInApp(event, appUrl) {
  event.preventDefault();
  
  console.log('appUrl:', appUrl);
  var browserUrl = event.currentTarget.href;

  window.location = appUrl;
  setTimeout(function () {
    window.location = browserUrl;
  }, 500);
}
