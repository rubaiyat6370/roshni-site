/* ---------- Cart State ---------- */

const CART_KEY = 'roshni-cart';
const SHIPPING_FREE_THRESHOLD = 150;
const FLAT_SHIPPING = 12;
const TAX_RATE = 0.13; // Ontario HST

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCartCount();
  renderCartDrawer();
  renderCartPage();
}

function cartItemKey(slug, color, size) {
  return `${slug}::${color}::${size}`;
}

function addToCart({ slug, color, size, qty = 1 }) {
  const cart = getCart();
  const key = cartItemKey(slug, color, size);
  const existing = cart.find(i => cartItemKey(i.slug, i.color, i.size) === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ slug, color, size, qty });
  }
  saveCart(cart);
  showToast('Added to bag');
  openDrawer();
}

function updateQty(key, delta) {
  const cart = getCart();
  const item = cart.find(i => cartItemKey(i.slug, i.color, i.size) === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(cart);
}

function setQty(key, qty) {
  const cart = getCart();
  const item = cart.find(i => cartItemKey(i.slug, i.color, i.size) === key);
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
}

function removeItem(key) {
  const cart = getCart().filter(i => cartItemKey(i.slug, i.color, i.size) !== key);
  saveCart(cart);
}

function cartSubtotal() {
  return getCart().reduce((sum, i) => {
    const p = findProduct(i.slug);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}

function cartItemCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartShipping() {
  const sub = cartSubtotal();
  if (sub === 0) return 0;
  return sub >= SHIPPING_FREE_THRESHOLD ? 0 : FLAT_SHIPPING;
}

function cartTax() {
  return (cartSubtotal() + cartShipping()) * TAX_RATE;
}

function cartTotal() {
  return cartSubtotal() + cartShipping() + cartTax();
}

/* ---------- Rendering ---------- */

function renderCartCount() {
  document.querySelectorAll('[data-cart-count]').forEach(el => {
    const count = cartItemCount();
    el.setAttribute('data-count', count);
    el.textContent = count;
  });
}

function cartItemHTML(item, p, key) {
  const colorName = COLORS[item.color].name;
  return `
    <div class="cart-item">
      <div class="cart-item-thumb">${garmentSVG(p.type === 'set' ? 'top' : p.type, item.color)}</div>
      <div class="cart-item-info">
        <h4>${p.name}</h4>
        <p>${colorName} &nbsp;·&nbsp; Size ${item.size}</p>
        <div class="cart-item-qty">
          <button onclick="updateQty('${key}', -1)" aria-label="Decrease quantity">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty('${key}', 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div class="cart-item-price">
        <span class="price">${formatPrice(p.price * item.qty)}</span>
        <button class="remove" onclick="removeItem('${key}')">Remove</button>
      </div>
    </div>`;
}

function renderCartDrawer() {
  const body = document.getElementById('drawer-body');
  const foot = document.getElementById('drawer-foot');
  if (!body || !foot) return;

  const cart = getCart();
  if (cart.length === 0) {
    body.innerHTML = `
      <div class="drawer-empty">
        <svg viewBox="0 0 24 24"><path d="M6 2l1.5 4h9L18 2M3 6h18l-2 14H5L3 6zM9 10v6M15 10v6"/></svg>
        <p>Your bag is empty.</p>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">Start with <a href="shop.html" style="text-decoration: underline;">the collection</a>.</p>
      </div>`;
    foot.innerHTML = '';
    return;
  }

  body.innerHTML = cart.map(item => {
    const p = findProduct(item.slug);
    if (!p) return '';
    return cartItemHTML(item, p, cartItemKey(item.slug, item.color, item.size));
  }).join('');

  const sub = cartSubtotal();
  const ship = cartShipping();
  const toFreeShip = Math.max(0, SHIPPING_FREE_THRESHOLD - sub);

  foot.innerHTML = `
    <div class="row"><span>Subtotal</span><span>${formatPrice(sub)}</span></div>
    <div class="row"><span>Shipping</span><span>${ship === 0 ? 'Free' : formatPrice(ship)}</span></div>
    <div class="row total"><span>Total (before tax)</span><span>${formatPrice(sub + ship)}</span></div>
    <a class="btn btn-primary btn-block" href="cart.html">View Bag &amp; Checkout</a>
    ${toFreeShip > 0 ? `<p class="shipping-note">Add ${formatPrice(toFreeShip)} for free shipping</p>` : '<p class="shipping-note">You qualify for free shipping.</p>'}
  `;
}

function renderCartPage() {
  const list = document.getElementById('cart-items-list');
  const summary = document.getElementById('cart-summary');
  const wrap = document.getElementById('cart-wrap');
  if (!list || !summary || !wrap) return;

  const cart = getCart();

  if (cart.length === 0) {
    wrap.innerHTML = `
      <div class="cart-empty">
        <h2>Your bag is empty</h2>
        <p>Nothing here yet. Start with the collection.</p>
        <a class="btn btn-primary" href="shop.html">Shop the Collection</a>
      </div>`;
    return;
  }

  list.innerHTML = cart.map(item => {
    const p = findProduct(item.slug);
    if (!p) return '';
    return cartItemHTML(item, p, cartItemKey(item.slug, item.color, item.size));
  }).join('');

  const sub = cartSubtotal();
  const ship = cartShipping();
  const tax = cartTax();
  const total = cartTotal();

  summary.innerHTML = `
    <h3>Order Summary</h3>
    <div class="row"><span>Subtotal</span><span>${formatPrice(sub)}</span></div>
    <div class="row"><span>Shipping</span><span>${ship === 0 ? 'Free' : formatPrice(ship)}</span></div>
    <div class="row"><span>HST (13%)</span><span>${formatPrice(tax)}</span></div>
    <div class="row total"><span>Total</span><span>${formatPrice(total)}</span></div>
    <button class="btn btn-primary btn-block" onclick="mockCheckout()">Checkout</button>
    <p class="shipping-note" style="margin-top: 1rem; color: var(--muted); font-size: 0.78rem; text-align: center;">
      Free shipping on orders over ${formatPrice(SHIPPING_FREE_THRESHOLD)} · Free returns in Canada
    </p>
  `;
}

function mockCheckout() {
  showToast('This is a design prototype. Checkout is not live.');
}

/* ---------- Drawer control ---------- */

function openDrawer() {
  const d = document.getElementById('cart-drawer');
  const o = document.getElementById('overlay');
  if (!d || !o) return;
  d.classList.add('open');
  o.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  const d = document.getElementById('cart-drawer');
  const o = document.getElementById('overlay');
  if (!d || !o) return;
  d.classList.remove('open');
  o.classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------- Toast ---------- */

let toastTimer;
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ---------- Init ---------- */

document.addEventListener('DOMContentLoaded', () => {
  renderCartCount();
  renderCartDrawer();
  renderCartPage();
});
