/* ===========================
   LensCraft – script.js (Enhanced)
   =========================== */

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

function showToast() {
  toastSub.textContent = `Lumina X1 Pro \u2014 ${selectedColor} \xd7${qty}`;
  clearTimeout(toastTimer);
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ==============================
// ADD TO CART
// ==============================
let cartCount = 2;
const cartBadge = document.getElementById('cart-count');
const addToCartBtn = document.getElementById('add-to-cart-btn');

function doAddToCart(btn) {
  cartCount += qty;
  cartBadge.textContent = cartCount;
  const original = btn.textContent;
  btn.textContent = '\u2713 Added!';
  btn.style.background = 'linear-gradient(135deg, #3dd68c, #2bc57a)';
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
  }, 1800);
  showToast();
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

// ==============================
// NEWSLETTER
// ==============================
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('newsletter-email');
  const btn = document.getElementById('newsletter-submit');
  btn.textContent = '\u2713 Subscribed!';
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

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
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
