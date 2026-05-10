/* ===========================
   LensCraft – script.js (Enhanced)
   =========================== */

// ==============================
// CART STATE
// ==============================
let cartItems = []; // { id, name, price, color, qty, img }
let cartIdCounter = 0;

function formatRupee(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// ==============================
// CART PANEL OPEN / CLOSE
// ==============================
const cartPanel = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
const cartPanelBody = document.getElementById('cart-panel-body');
const cartSubtotalEl = document.getElementById('cart-subtotal');

function openCartPanel() {
  cartPanel.classList.add('open');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderCartPanel();
}

function closeCartPanel() {
  cartPanel.classList.remove('open');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('cart-btn').addEventListener('click', openCartPanel);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeCartPanel();
  }
});

// ==============================
// CART RENDER
// ==============================
function renderCartPanel() {
  if (cartItems.length === 0) {
    cartPanelBody.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add some cameras to get started!</p>
      </div>`;
    cartSubtotalEl.textContent = '₹0';
    return;
  }

  cartPanelBody.innerHTML = cartItems.map(item => `
    <div class="cart-item" id="cart-item-${item.id}">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.color} · Qty: ${item.qty}</div>
        <div class="cart-item-price-row">
          <span class="cart-item-price">${formatRupee(item.price * item.qty)}</span>
          <div class="cart-item-qty">
            <button onclick="changeItemQty(${item.id}, -1)" style="background:var(--clr-surface);border:1px solid var(--clr-border);width:26px;height:26px;border-radius:6px;color:var(--clr-muted);cursor:pointer;font-size:16px;">−</button>
            <span>${item.qty}</span>
            <button onclick="changeItemQty(${item.id}, 1)" style="background:var(--clr-surface);border:1px solid var(--clr-border);width:26px;height:26px;border-radius:6px;color:var(--clr-muted);cursor:pointer;font-size:16px;">+</button>
          </div>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeCartItem(${item.id})" aria-label="Remove item">✕</button>
    </div>
  `).join('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartSubtotalEl.textContent = formatRupee(subtotal);
}

function changeItemQty(id, delta) {
  const item = cartItems.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartBadge();
  renderCartPanel();
}

function removeCartItem(id) {
  cartItems = cartItems.filter(i => i.id !== id);
  updateCartBadge();
  renderCartPanel();
}

// ==============================
// CART BADGE
// ==============================
const cartBadge = document.getElementById('cart-count');

function updateCartBadge() {
  const total = cartItems.reduce((sum, i) => sum + i.qty, 0);
  cartBadge.textContent = total;
}

// ==============================
// THUMBNAIL SWITCHER
// ==============================
const mainImg = document.getElementById('main-product-img');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    const newSrc = thumb.querySelector('img').src;
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = newSrc;
      mainImg.style.opacity = '1';
    }, 180);
  });
});
mainImg.style.transition = 'opacity 0.18s ease';

// ==============================
// COLOR SWATCH
// ==============================
const swatches = document.querySelectorAll('.swatch');
const selectedColorLabel = document.getElementById('selected-color');
let selectedColor = 'Midnight Black';

swatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    swatches.forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');
    selectedColor = swatch.dataset.color;
    selectedColorLabel.textContent = selectedColor;
  });
});

// ==============================
// QUANTITY
// ==============================
let qty = 1;
const qtyValue = document.getElementById('qty-value');
document.getElementById('qty-minus').addEventListener('click', () => {
  if (qty > 1) { qty--; qtyValue.textContent = qty; }
});
document.getElementById('qty-plus').addEventListener('click', () => {
  if (qty < 10) { qty++; qtyValue.textContent = qty; }
});

// ==============================
// TOAST NOTIFICATION
// ==============================
const toast = document.getElementById('toast');
const toastSub = document.getElementById('toast-sub');
let toastTimer;

function showToast(name, color, quantity) {
  const n = name || 'Lumina X1 Pro';
  const c = color || selectedColor;
  const q = quantity || qty;
  toastSub.textContent = `${n} — ${c} ×${q}`;
  clearTimeout(toastTimer);
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ==============================
// ADD TO CART (Main Product)
// ==============================
const MAIN_PRICE = 208999; // ₹2,08,999

const addToCartBtn = document.getElementById('add-to-cart-btn');

function doAddToCart(btn) {
  // Check if same color already in cart
  const existing = cartItems.find(i => i.name === 'Lumina X1 Pro' && i.color === selectedColor);
  if (existing) {
    existing.qty += qty;
  } else {
    cartItems.push({
      id: ++cartIdCounter,
      name: 'Lumina X1 Pro',
      price: MAIN_PRICE,
      color: selectedColor,
      qty: qty,
      img: 'camera_main.png'
    });
  }
  updateCartBadge();

  const original = btn.textContent;
  btn.textContent = '✓ Added!';
  btn.style.background = 'linear-gradient(135deg, #3dd68c, #2bc57a)';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
  }, 1800);
  showToast('Lumina X1 Pro', selectedColor, qty);
}

addToCartBtn.addEventListener('click', () => doAddToCart(addToCartBtn));

function stickyAddToCart() {
  doAddToCart(document.getElementById('sticky-add-to-cart'));
}

// ==============================
// WISHLIST TOGGLE
// ==============================
const wishlistAddBtn = document.getElementById('wishlist-add-btn');
let wishlisted = false;

wishlistAddBtn.addEventListener('click', () => {
  wishlisted = !wishlisted;
  wishlistAddBtn.style.color = wishlisted ? '#f05c5c' : '';
  wishlistAddBtn.style.background = wishlisted ? 'rgba(240,92,92,0.1)' : '';
  wishlistAddBtn.style.borderColor = wishlisted ? 'rgba(240,92,92,0.4)' : '';
  wishlistAddBtn.querySelector('svg').setAttribute('fill', wishlisted ? '#f05c5c' : 'none');
});

// Header wishlist btn
document.getElementById('wishlist-btn').addEventListener('click', () => {
  wishlistAddBtn.click();
});

// Header search btn
document.getElementById('search-btn').addEventListener('click', () => {
  const q = prompt('Search LensCraft...');
  if (q && q.trim()) {
    alert(`Searching for: "${q.trim()}"\n(This is a demo — search results would appear here)`);
  }
});

// ==============================
// NEWSLETTER
// ==============================
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('newsletter-email');
  const btn = document.getElementById('newsletter-submit');
  btn.textContent = '✓ Subscribed!';
  btn.style.background = 'linear-gradient(135deg, #3dd68c, #2bc57a)';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.background = '';
  }, 2500);
}

// ==============================
// SCROLL HEADER SHADOW
// ==============================
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 2px 30px rgba(0,0,0,0.4)'
    : 'none';
});

// ==============================
// STICKY CART BAR
// ==============================
const stickyBar = document.getElementById('sticky-bar');
const productSection = document.getElementById('product-section');

const stickyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      stickyBar.classList.add('visible');
      stickyBar.setAttribute('aria-hidden', 'false');
    } else {
      stickyBar.classList.remove('visible');
      stickyBar.setAttribute('aria-hidden', 'true');
    }
  });
}, { threshold: 0.1 });

stickyObserver.observe(productSection);

// ==============================
// LIGHTBOX
// ==============================
const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lbThumbs = document.querySelectorAll('.lb-thumb');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
  lightboxOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  lbThumbs.forEach(t => t.classList.toggle('active', t.dataset.src === src));
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('zoom-btn').addEventListener('click', () => {
  openLightbox(mainImg.src);
});

document.getElementById('main-image-wrap').addEventListener('dblclick', () => {
  openLightbox(mainImg.src);
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);

lbThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    lbThumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = thumb.dataset.src;
      lightboxImg.style.opacity = '1';
    }, 160);
  });
});

// ==============================
// SCROLL REVEAL
// ==============================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, parseInt(entry.target.dataset.delay) || 0);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el, i) => {
  el.dataset.delay = (i % 4) * 80;
  revealObserver.observe(el);
});

// Inbox items staggered reveal
document.querySelectorAll('.inbox-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 60}ms`;
  item.classList.add('reveal');
  revealObserver.observe(item);
});

// ==============================
// RATING BAR ANIMATION ON SCROLL
// ==============================
const bars = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.3 });

bars.forEach(bar => {
  bar.style.animationPlayState = 'paused';
  barObserver.observe(bar);
});

// ==============================
// LIVE VIEWER COUNT (FOMO)
// ==============================
const viewerEl = document.getElementById('viewer-count');
let viewers = 23;

setInterval(() => {
  const delta = Math.random() < 0.5 ? 1 : -1;
  viewers = Math.min(41, Math.max(11, viewers + delta));
  if (viewerEl) viewerEl.textContent = viewers;
}, 4000);

// ==============================
// SPECS TABLE TOGGLE
// ==============================
const specsBtn = document.getElementById('specs-toggle-btn');
const specsWrap = document.getElementById('specs-table');

if (specsBtn && specsWrap) {
  specsBtn.addEventListener('click', () => {
    const isOpen = specsWrap.classList.toggle('open');
    specsBtn.setAttribute('aria-expanded', isOpen);
    specsWrap.setAttribute('aria-hidden', !isOpen);
  });
}

// ==============================
// FAQ ACCORDION
// ==============================
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = document.getElementById(btn.getAttribute('aria-controls'));
    const isOpen = answer.classList.contains('open');

    document.querySelectorAll('.faq-answer').forEach(a => {
      a.classList.remove('open');
      a.setAttribute('aria-hidden', 'true');
    });
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      answer.classList.add('open');
      answer.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ==============================
// RELATED PRODUCTS CART
// ==============================
const RELATED_PRODUCTS = {
  'related-cart-1': { name: 'Lumina Z5',       price: 149999, img: 'camera_thumb3.png' },
  'related-cart-2': { name: 'LC 50mm f/1.2',   price: 108499, img: 'camera_thumb2.png' },
  'related-cart-3': { name: 'Battery Grip BG-X1', price: 29199, img: 'camera_thumb4.png' },
  'related-cart-4': { name: 'Lumina Z3',        price: 89999,  img: 'camera_z3.png' },
  'related-cart-5': { name: 'Lumina Pro S',     price: 299999, img: 'camera_pros.png' },
};

document.querySelectorAll('.related-cta').forEach(btn => {
  btn.addEventListener('click', () => {
    let product = RELATED_PRODUCTS[btn.id];
    if (!product) {
      if (!btn.dataset.name) return;
      product = {
        name: btn.dataset.name,
        price: parseInt(btn.dataset.price),
        img: btn.closest('.related-card').querySelector('img').getAttribute('src')
      };
    }

    const existing = cartItems.find(i => i.name === product.name);
    if (existing) {
      existing.qty++;
    } else {
      cartItems.push({
        id: ++cartIdCounter,
        name: product.name,
        price: product.price,
        color: 'Standard',
        qty: 1,
        img: product.img
      });
    }
    updateCartBadge();

    const orig = btn.textContent;
    btn.textContent = '✓ Added!';
    btn.style.background = 'linear-gradient(135deg, #3dd68c, #2bc57a)';
    btn.style.borderColor = '#3dd68c';
    btn.style.color = '#0d0f14';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 1800);

    showToast(product.name, 'Standard', 1);
  });
});

// ==============================
// BACK TO TOP
// ==============================
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
