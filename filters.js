// ===== FILTERS.JS =====

let activeCategory = 'all';
let activeBrands = ['Auriva', 'Kronfeld', 'Velante', 'Norvik', 'Lúmex'];
let maxPrice = 50000;
let sortMode = 'default';

function getFilteredWatches() {
  let result = [...WATCHES];

  // Category
  if (activeCategory !== 'all') {
    result = result.filter(w => w.category === activeCategory);
  }

  // Brands
  result = result.filter(w => activeBrands.includes(w.brand));

  // Price
  result = result.filter(w => w.price <= maxPrice);

  // Sort
  if (sortMode === 'price-asc') result.sort((a, b) => a.price - b.price);
  else if (sortMode === 'price-desc') result.sort((a, b) => b.price - a.price);
  else if (sortMode === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name));

  return result;
}

function applyFilters() {
  renderGrid(getFilteredWatches());
}

function syncNavAndCategory(cat) {
  activeCategory = cat;
  // Sync filter panel radio
  const radios = document.querySelectorAll('input[name="cat"]');
  radios.forEach(r => { r.checked = r.value === cat; });
  // Sync nav tabs
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.section === cat);
  });
  applyFilters();
}

function initFilters() {
  // Nav tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => syncNavAndCategory(tab.dataset.section));
  });

  // Category radio
  document.querySelectorAll('input[name="cat"]').forEach(r => {
    r.addEventListener('change', () => syncNavAndCategory(r.value));
  });

  // Brand checkboxes
  document.querySelectorAll('#brandFilter input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      activeBrands = [...document.querySelectorAll('#brandFilter input:checked')].map(c => c.value);
      applyFilters();
    });
  });

  // Price slider
  const slider = document.getElementById('priceSlider');
  const priceMax = document.getElementById('priceMax');
  slider.addEventListener('input', () => {
    maxPrice = parseInt(slider.value);
    priceMax.textContent = '₹' + maxPrice.toLocaleString('en-IN');
    applyFilters();
  });

  // Sort
  document.getElementById('sortBy').addEventListener('change', e => {
    sortMode = e.target.value;
    applyFilters();
  });

  // Clear filters
  document.getElementById('clearFilters').addEventListener('click', () => {
    activeCategory = 'all';
    activeBrands = ['Auriva', 'Kronfeld', 'Velante', 'Norvik', 'Lúmex'];
    maxPrice = 50000;
    sortMode = 'default';
    slider.value = 50000;
    priceMax.textContent = '₹50,000';
    document.getElementById('sortBy').value = 'default';
    document.querySelectorAll('#brandFilter input').forEach(c => c.checked = true);
    syncNavAndCategory('all');
  });

  // Mobile filter toggle
  document.getElementById('filterToggleMobile').addEventListener('click', () => {
    document.getElementById('filterPanel').classList.toggle('mobile-open');
  });
}