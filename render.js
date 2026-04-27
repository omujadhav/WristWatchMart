// ===== RENDER.JS - SVG Watch Generator & Card Renderer =====

/**
 * Draws an SVG watch face based on watch data.
 * @param {object} w - watch object
 * @param {number} size - width/height
 * @param {boolean} isHero - larger hero variant
 */
function drawWatch(w, size = 140, isHero = false) {
  const s = size;
  const cx = s / 2, cy = s / 2;
  const caseR = s * 0.42;
  const dialR = s * 0.35;
  const strapW = s * 0.22;
  const strapH = s * 0.2;
  const strapRound = s * 0.04;

  // Hour/min hand angles
  const now = new Date();
  const hrs = (now.getHours() % 12) + now.getMinutes() / 60;
  const mins = now.getMinutes() + now.getSeconds() / 60;
  const hrAngle = (hrs / 12) * 360 - 90;
  const minAngle = (mins / 60) * 360 - 90;

  const toRad = deg => deg * Math.PI / 180;
  const handX = (angle, len) => cx + Math.cos(toRad(angle)) * len;
  const handY = (angle, len) => cy + Math.sin(toRad(angle)) * len;

  // Generate indices (12 tick marks)
  let ticks = '';
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * 360;
    const rad = toRad(angle - 90);
    const outerR = dialR * 0.92;
    const innerR = i % 3 === 0 ? dialR * 0.75 : dialR * 0.83;
    const x1 = cx + Math.cos(rad) * outerR;
    const y1 = cy + Math.sin(rad) * outerR;
    const x2 = cx + Math.cos(rad) * innerR;
    const y2 = cy + Math.sin(rad) * innerR;
    const sw = i % 3 === 0 ? s * 0.025 : s * 0.012;
    ticks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${w.index}" stroke-width="${sw}" stroke-linecap="round"/>`;
  }

  const id = `grad_${w.id}`;

  return `<svg viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}">
  <defs>
    <radialGradient id="${id}" cx="40%" cy="35%" r="60%">
      <stop offset="0%" stop-color="${lighten(w.dial, 30)}"/>
      <stop offset="100%" stop-color="${w.dial}"/>
    </radialGradient>
    <filter id="shadow_${w.id}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="${s*0.02}" stdDeviation="${s*0.03}" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Top strap -->
  <rect x="${cx - strapW/2}" y="${cy - caseR - strapH + s*0.02}" width="${strapW}" height="${strapH}"
    rx="${strapRound}" fill="${w.strap}" opacity="0.9"/>

  <!-- Bottom strap -->
  <rect x="${cx - strapW/2}" y="${cy + caseR - s*0.02}" width="${strapW}" height="${strapH}"
    rx="${strapRound}" fill="${w.strap}" opacity="0.9"/>

  <!-- Case -->
  <circle cx="${cx}" cy="${cy}" r="${caseR}" fill="${w.case}" filter="url(#shadow_${w.id})"/>

  <!-- Crown -->
  <rect x="${cx + caseR - s*0.01}" y="${cy - s*0.045}" width="${s*0.045}" height="${s*0.09}"
    rx="${s*0.015}" fill="${w.case}"/>

  <!-- Dial -->
  <circle cx="${cx}" cy="${cy}" r="${dialR}" fill="url(#${id})"/>

  <!-- Indices -->
  ${ticks}

  <!-- Hour hand -->
  <line x1="${cx}" y1="${cy}"
    x2="${handX(hrAngle, dialR*0.52).toFixed(1)}" y2="${handY(hrAngle, dialR*0.52).toFixed(1)}"
    stroke="${w.hand}" stroke-width="${s*0.035}" stroke-linecap="round"/>

  <!-- Minute hand -->
  <line x1="${cx}" y1="${cy}"
    x2="${handX(minAngle, dialR*0.72).toFixed(1)}" y2="${handY(minAngle, dialR*0.72).toFixed(1)}"
    stroke="${w.hand}" stroke-width="${s*0.022}" stroke-linecap="round"/>

  <!-- Second hand -->
  <line x1="${cx}" y1="${cy}"
    x2="${handX(minAngle * 12 % 360 - 90, dialR*0.78).toFixed(1)}"
    y2="${handY(minAngle * 12 % 360 - 90, dialR*0.78).toFixed(1)}"
    stroke="#e04444" stroke-width="${s*0.012}" stroke-linecap="round"/>

  <!-- Center dot -->
  <circle cx="${cx}" cy="${cy}" r="${s*0.025}" fill="${w.hand}"/>
</svg>`;
}

function lighten(hex, pct) {
  try {
    let r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    r = Math.min(255, r + pct); g = Math.min(255, g + pct); b = Math.min(255, b + pct);
    return '#' + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join('');
  } catch(e) { return hex; }
}

/**
 * Creates a watch card element
 */
function createCard(w, delay = 0) {
  const card = document.createElement('div');
  card.className = 'watch-card';
  card.style.animationDelay = `${delay}ms`;
  card.dataset.id = w.id;

  card.innerHTML = `
    <div class="card-image-wrap">
      ${drawWatch(w, 160)}
      <div class="card-quick-view">Quick View</div>
    </div>
    <div class="card-body">
      <div class="card-brand">${w.brand}</div>
      <div class="card-name">${w.name}</div>
      <div class="card-category-tag">${w.category}'s</div>
      <div class="card-footer">
        <div class="card-price">₹${w.price.toLocaleString('en-IN')}</div>
        <button class="card-add-btn" data-id="${w.id}" title="Add to cart">+</button>
      </div>
    </div>
  `;

  // Quick view click
  card.querySelector('.card-image-wrap').addEventListener('click', () => openModal(w));
  card.querySelector('.card-quick-view').addEventListener('click', e => { e.stopPropagation(); openModal(w); });

  // Add to cart
  card.querySelector('.card-add-btn').addEventListener('click', e => {
    e.stopPropagation();
    addToCart(w);
    const btn = card.querySelector('.card-add-btn');
    btn.textContent = '✓';
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = '+'; btn.classList.remove('added'); }, 1200);
  });

  return card;
}

/**
 * Render all visible watches into grid
 */
function renderGrid(watches) {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');
  const resultsCount = document.getElementById('resultsCount');

  grid.innerHTML = '';
  noResults.classList.add('hidden');

  if (!watches.length) {
    noResults.classList.remove('hidden');
    resultsCount.textContent = '0 watches';
    return;
  }

  resultsCount.textContent = `${watches.length} watch${watches.length !== 1 ? 'es' : ''}`;
  watches.forEach((w, i) => grid.appendChild(createCard(w, i * 40)));
}

/**
 * Open product detail modal
 */
function openModal(w) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');

  body.innerHTML = `
    <div class="modal-watch-canvas">${drawWatch(w, 200)}</div>
    <div class="modal-info">
      <div class="modal-brand">${w.brand}</div>
      <div class="modal-name">${w.name}</div>
      <div class="modal-category">${w.category}'s Collection</div>
      <div class="modal-desc">${w.desc}</div>
      <div class="modal-specs">
        <div class="spec-item"><div class="spec-label">Movement</div>${w.movement}</div>
        <div class="spec-item"><div class="spec-label">Case Size</div>${w.case_size}</div>
        <div class="spec-item"><div class="spec-label">Water Resist.</div>${w.water}</div>
        <div class="spec-item"><div class="spec-label">Brand</div>${w.brand}</div>
      </div>
      <div class="modal-price">₹${w.price.toLocaleString('en-IN')}</div>
      <div class="modal-actions">
        <button class="modal-add-cart" id="modalAddCart">Add to Cart</button>
        <button class="modal-wishlist" title="Wishlist">♡</button>
      </div>
    </div>
  `;

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalAddCart').addEventListener('click', () => {
    addToCart(w);
    const btn = document.getElementById('modalAddCart');
    btn.textContent = '✓ Added';
    btn.style.background = '#4caf50';
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.style.background = '';
    }, 1500);
  });

  // Wishlist toggle
  const wlBtn = body.querySelector('.modal-wishlist');
  wlBtn.addEventListener('click', () => {
    wlBtn.textContent = wlBtn.textContent === '♡' ? '♥' : '♡';
    wlBtn.style.color = wlBtn.textContent === '♥' ? '#e53935' : '';
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

/**
 * Hero watch display
 */
function renderHeroWatch() {
  const el = document.getElementById('heroWatch');
  if (!el) return;
  const featured = WATCHES.find(w => w.id === 55) || WATCHES[0];
  el.innerHTML = drawWatch(featured, 260, true);
}