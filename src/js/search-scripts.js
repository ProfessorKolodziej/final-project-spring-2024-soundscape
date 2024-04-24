function toggleActive(element) {
    // Remove 'active' class from all buttons
    document.querySelectorAll('.category-card').forEach(function(card) {
      card.classList.remove('active');
    });
    // Add 'active' class to the clicked button
    element.classList.add('active');
  }

  function clearSelections() {
    document.querySelectorAll('.category-card.active').forEach(function(card) {
      card.classList.remove('active');
    });
  }
  