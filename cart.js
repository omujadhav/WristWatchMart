// ===== CART.JS =====

let cart = [];

function addToCart(watch) {
  const existing = cart.find(i => i.id === watch.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...watch, qty: 1 });
  }
  updateCartUI();
  openCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCartUI();
}

function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  countEl.style.display = count > 0 ? 'flex' : 'none';

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const emptyEl = document.getElementById('cartEmpty');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    footerEl.classList.add('hidden');
    emptyEl.classList.remove('hidden');
    return;
  }

  footerEl.classList.remove('hidden');
  emptyEl.classList.add('hidden');
  totalEl.textContent = '₹' + getCartTotal().toLocaleString('en-IN');

  itemsEl.innerHTML = '';
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-img">${drawWatch(item, 60)}</div>
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
          <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">✕</button>
    `;
    itemsEl.appendChild(el);
  });

  // Qty buttons
  itemsEl.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => changeQty(parseInt(btn.dataset.id), parseInt(btn.dataset.delta)));
  });

  // Remove buttons
  itemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
  });
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initCart() {
  document.getElementById('cartToggle').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCartDrawer);
  document.getElementById('cartOverlay').addEventListener('click', closeCartDrawer);

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) return;
    closeCartDrawer();
    openCheckout();
  });

  updateCartUI();
}

// ===== CHECKOUT =====
function openCheckout() {
  const overlay = document.getElementById('checkoutOverlay');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Populate summary
  const summary = document.getElementById('checkoutSummary');
  let rows = cart.map(i => `
    <div class="sum-row"><span>${i.name} × ${i.qty}</span><span>₹${(i.price*i.qty).toLocaleString('en-IN')}</span></div>
  `).join('');
  rows += `<div class="sum-row sum-total"><span>Total</span><span>₹${getCartTotal().toLocaleString('en-IN')}</span></div>`;
  summary.innerHTML = rows;
}

function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function placeOrder() {
  const name = document.getElementById('chkName').value.trim();
  const email = document.getElementById('chkEmail').value.trim();
  const phone = document.getElementById('chkPhone').value.trim();
  const address = document.getElementById('chkAddress').value.trim();
  const payment = document.getElementById('chkPayment').value;

  if (!name || !email || !phone || !address || !payment) {
    alert('Please fill in all fields before placing your order.');
    return;
  }

  closeCheckout();
  document.getElementById('successMsg').textContent =
    `Thank you, ${name}! Your order of ${getCartCount()} item(s) worth ₹${getCartTotal().toLocaleString('en-IN')} has been placed. Confirmation will be sent to ${email}.`;

  document.getElementById('successOverlay').classList.remove('hidden');

  // Clear cart
  cart = [];
  updateCartUI();

  // Clear form
  ['chkName','chkEmail','chkPhone','chkAddress'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('chkPayment').value = '';
}

function initCheckout() {
  document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
  document.getElementById('checkoutOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeCheckout();
  });
  document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);
  document.getElementById('successClose').addEventListener('click', () => {
    document.getElementById('successOverlay').classList.add('hidden');
  });
  document.getElementById('successOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) document.getElementById('successOverlay').classList.add('hidden');
  });
}