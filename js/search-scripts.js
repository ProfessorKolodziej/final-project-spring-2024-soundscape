function toggleActive(element) {
  // If the element is already active, remove the active class
  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    // Remove active class from all cards
    document.querySelectorAll('.category-card').forEach(function(card) {
      card.classList.remove('active');
    });
    // Add 'active' class to the clicked button
    element.classList.add('active');
  }
}

function clearSelections() {
  // This will select all elements with the 'category-card' class that also have the 'active' class
  document.querySelectorAll('.category-card.active').forEach(function(card) {
    // Remove the 'active' class from each
    card.classList.remove('active');
  });
}
