document
  .querySelectorAll(".content > div[uk-lightbox]")
  .forEach(function (element) {
    element.parentElement.classList.add("has-lightbox");
  });
