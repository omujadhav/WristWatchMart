// ===== MAIN.JS =====

document.addEventListener('DOMContentLoaded', () => {
  // Render hero watch
  renderHeroWatch();

  // Initialize all modules
  initFilters();
  initCart();
  initCheckout();

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Initial render
  applyFilters();
});