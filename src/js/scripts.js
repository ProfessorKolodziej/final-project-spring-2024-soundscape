function toggleButton(element) {
    element.classList.toggle('active');
  }


  document.addEventListener('DOMContentLoaded', (event) => {
    const openButton = document.getElementById('openModal');
    const closeButton = document.getElementById('closeModal');
    const modal = document.getElementById('searchModal');
    const overlay = document.getElementById('modalOverlay');
  
    openButton.addEventListener('click', () => {
      modal.classList.add('active');
      overlay.classList.add('active');
    });
  
    closeButton.addEventListener('click', () => {
      modal.classList.remove('active');
      overlay.classList.remove('active');
    });
  
    overlay.addEventListener('click', () => {
      modal.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
  