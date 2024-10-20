document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');
  const verticalAccordions = document.querySelectorAll('.vertical-accordion');

  accordionItems.forEach((item, index) => {
      const visibleContent = item.querySelector('.visible-content');
      const hiddenContent = item.querySelector('.hidden-content');
      
      // Add click event listeners to both visible and hidden content
      visibleContent.addEventListener('click', () => toggleAccordion(index));
      hiddenContent.addEventListener('click', () => toggleAccordion(index));
  });

  function toggleAccordion(index) {
      verticalAccordions.forEach((accordion, i) => {
          if (i === index) {
              accordion.classList.toggle('active');
          } else {
              accordion.classList.remove('active');
          }
      });
  }
});
