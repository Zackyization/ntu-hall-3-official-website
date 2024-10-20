// To open a specific accordion upon user triggered event
document.addEventListener("DOMContentLoaded", (event) => {
  // Function to parse query parameters
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Check if the 'action' query parameter is set to 'openAccordion'
  if (getQueryParam("action") === "openFood") {
    const targetElement = document.getElementById("food-accordion");
    if (targetElement) {
      setTimeout(() => {
        targetElement.click();
      }, 1100);
    }
  } else if (getQueryParam("action") === "openFacilities") {
    const targetElement = document.getElementById("common-facilities");
    if (targetElement) {
      setTimeout(() => {
        targetElement.click();
      }, 1100);
    }
  }
});
