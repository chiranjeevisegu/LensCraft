# ◉ LensCraft — Premium Camera Store Product Page

> A stunning, fully interactive **e-commerce product page** mockup for a fictional camera brand, built with pure **HTML · CSS · JavaScript** — no frameworks, no dependencies.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Page-e8a045?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chiranjeevisegu.github.io/LensCraft/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📸 Screenshots

### Hero — Product Gallery & Info
![Hero section showing Lumina X1 Pro camera with ₹ price, rating, color selector and Add to Cart CTA](screenshots/hero.png)

### Cart Sidebar Panel — Slide-in Cart
![Cart sidebar panel sliding in from the right with item, quantity, and subtotal in ₹](screenshots/cart_with_item.png)

### Add-to-Cart Toast Notification
![Animated toast notification sliding up from the bottom showing item added to cart with View Cart button](screenshots/toast_notification.png)

### Related Products — You May Also Like (5 products)
![Five product cards including Lumina Z5, 50mm Prime, Battery Grip, Lumina Z3, and Lumina Pro S](screenshots/related_products.png)

### Empty Cart State
![Cart panel open showing empty cart with icon and Continue Shopping button](screenshots/cart_panel.png)

### Urgency Bar — Live Social Proof
![Live viewer count with pulsing green dot and low-stock warning below the price](screenshots/urgency.png)

### Spec Strip — Key Specifications at a Glance
![Animated spec strip showing 45MP, 8K, 10-stop IBIS, 120fps, AI AF, IP54](screenshots/specs.png)

### Full Technical Specifications — Collapsible Table
![Expanded specs table showing Sensor, Autofocus, Video and Body categories with detailed data](screenshots/specs_table.png)

### What's in the Box
![Six-card unboxing grid with emoji icons for each included item](screenshots/inbox.png)

### Customer Reviews — Rating Breakdown + Review Cards
![4.8 star rating summary with animated bars and three detailed review cards](screenshots/reviews.png)

### Shipping & Warranty Info Cards
![Two side-by-side dark cards covering shipping options and warranty terms](screenshots/shipping.png)

### FAQ Accordion — Frequently Asked Questions
![FAQ section with first question expanded showing smooth accordion animation and gold border highlight](screenshots/faq.png)

### Newsletter & Footer
![Newsletter subscription section and 4-column footer with social icons and payment methods](screenshots/footer.png)

---

## ✨ Features

### 🎨 Design
| Feature | Detail |
|---|---|
| **Dark Mode** | Full dark theme with `#0d0f14` base and layered surfaces |
| **Gold Accent System** | Gradient `#e8a045 → #f5c878` used consistently throughout |
| **Typography** | Google Fonts — `Outfit` (headings) + `Inter` (body) |
| **Glassmorphism Header** | Sticky frosted-glass navigation bar |
| **Micro-animations** | Hover lifts, scale transforms, color transitions on every element |

### 🧩 Page Sections
| Section | Description |
|---|---|
| **Header** | Sticky logo, 5-item nav, search / wishlist / cart icons with live badge |
| **Breadcrumb** | Semantic navigation trail |
| **Product Gallery** | Main image + 4 clickable thumbnails with fade transition |
| **Product Info** | Name, brand tag, 4.8★ rating, price / original price / savings badge, In Stock |
| **🔴 Urgency Bar** | Live pulsing viewer count + "Only 8 left in stock" — fluctuates every 4s via JS |
| **Color Selector** | 3 swatches (Midnight Black / Titanium Silver / Forest Green) |
| **Quantity Control** | +/− stepper capped at 1–10 |
| **CTAs** | Add to Cart, Buy Now, Wishlist heart toggle |
| **Product Description** | 60-word spec-rich copy |
| **📋 Full Specs Table** | Collapsible 16-row table: Sensor, Autofocus, Video, Body — smooth height animation |
| **Spec Strip** | 45MP · 8K · 10-stop · 120fps · AI AF · IP54 with gold gradient numbers |
| **What's in the Box** | 6-item staggered card grid |
| **Customer Reviews** | Animated rating bars + 3 verified review cards with gradient avatars |
| **Shipping & Warranty** | Two detailed info cards |
| **❓ FAQ Accordion** | 5 collapsible Q&As with gold chevron, one-at-a-time open logic |
| **🛍️ Related Products** | **5-card** cross-sell grid — Lumina Z5, LC 50mm f/1.2, Battery Grip BG-X1, Lumina Z3, Lumina Pro S |
| **Newsletter** | Email subscribe form |
| **Footer** | 4-column links, 4 social icons, 6 payment chips, copyright |

### ⚡ Interactivity
| Feature | Behaviour |
|---|---|
| **Toast Notification** | Bounces up from bottom with spring animation on cart add — shows colour × qty; "View Cart" opens the cart panel |
| **🛒 Cart Sidebar Panel** | Slide-in panel from the right: shows all items, qty controls (+/−), remove button, subtotal in ₹ |
| **Sticky Cart Bar** | Slides in from the top when you scroll past the hero — always-visible CTA |
| **Lightbox Modal** | Click zoom button or double-click image → fullscreen modal with thumbnail strip; `Esc` to close |
| **Live Urgency Counter** | "X people viewing" number increments/decrements randomly every 4 seconds |
| **Specs Table Toggle** | Click to expand/collapse full 16-row tech spec table with smooth animation |
| **FAQ Accordion** | Click any question → smooth expand, gold border on open item, one-at-a-time |
| **Related Products Cart** | 5 cross-sell cards — add-to-cart increments header badge, shows toast, adds to sidebar |
| **Back-to-Top Button** | Gold gradient circle appears after 400px scroll, smooth-scrolls to top |
| **Scroll Reveal** | Sections fade + slide up on viewport enter via `IntersectionObserver` |
| **Staggered Inbox** | "What's in the Box" cards enter with 60 ms delay between each |
| **Rating Bar Animation** | Bars animate from 0% to their value only when scrolled into view |
| **Thumbnail Switcher** | Fade-transition on main image swap |
| **Wishlist Toggle** | Heart fills red on click — synced with header wishlist icon |

---

## 🗂️ File Structure

```
LensCraft/
├── index.html          # Full page markup (semantic HTML5)
├── style.css           # All styling — design system, components, responsive, animations
├── script.js           # All interactivity — no libraries
├── camera_main.png     # AI-generated hero product image
├── camera_thumb2.png   # Lens thumbnail
├── camera_thumb3.png   # Side view thumbnail
├── camera_thumb4.png   # Rear view thumbnail
├── camera_z3.png       # AI-generated Lumina Z3 product image
├── camera_pros.png     # AI-generated Lumina Pro S product image
└── screenshots/
    ├── hero.png             # Product hero section
    ├── cart_with_item.png   # Cart sidebar with item inside
    ├── cart_panel.png       # Empty cart panel
    ├── toast_notification.png # Toast on add to cart
    ├── related_products.png # All 5 related products
    ├── urgency.png          # Live urgency bar
    ├── specs.png            # Animated spec strip
    ├── specs_table.png      # Collapsible full specs table
    ├── inbox.png            # What's in the Box grid
    ├── reviews.png          # Customer reviews
    ├── shipping.png         # Shipping & Warranty cards
    ├── faq.png              # FAQ accordion
    ├── related.png          # Related products grid
    ├── toast.png            # Toast notification
    └── footer.png           # Newsletter & Footer
```

---

## 🚀 Running Locally

No build step needed — this is pure HTML/CSS/JS.

**Option 1 — Python server:**
```bash
cd LensCraft
python -m http.server 5500
# Open http://localhost:5500
```

**Option 2 — VS Code Live Server:**
Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right-click `index.html` → *Open with Live Server*.

**Option 3 — Just open the file:**
Double-click `index.html` — works with no server for basic viewing.

---

## 🎨 Design Tokens

```css
--clr-bg:        #0d0f14   /* Page background */
--clr-surface:   #13161e   /* Card surface */
--clr-surface2:  #1a1e2a   /* Elevated surface */
--clr-accent:    #e8a045   /* Gold accent */
--clr-gold-grad: linear-gradient(135deg, #e8a045, #f5c878)
--clr-green:     #3dd68c   /* Success / In-stock / urgency dot */
--clr-text:      #f0f2f8   /* Primary text */
--clr-muted:     #8892a4   /* Secondary text */
```

---

## 📋 Product Details (Mockup Data)

**LensCraft Lumina X1 Pro** — Full-Frame Mirrorless Camera Body

| Spec | Value |
|---|---|
| Sensor | 45MP Full-Frame BSI-CMOS (36 × 24mm) |
| Video | 8K RAW @ 30fps / 4K @ 120fps (no crop) |
| Autofocus | 1,053-point Hybrid Phase/Contrast + AI Eye-Detection |
| Stabilisation | 10-stop 5-axis In-Body IBIS |
| Burst | 120 fps (electronic) / 30 fps (mechanical) |
| ISO | 100 – 102,400 (expandable 204,800) |
| Shutter | 1/8000s – 30s (electronic: 1/32000s) |
| Weather | IP54 magnesium alloy body |
| Battery | ~520 shots CIPA / ~1,800 eco mode |
| Weight | 743g body only |
| Price | ₹2,08,999 (MRP ₹2,49,999 — **Save ₹41,000**) |
| Rating | ⭐ 4.8 / 247 verified reviews |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure, ARIA labels, breadcrumb, article tags |
| **Vanilla CSS3** | Custom properties, Grid, Flexbox, `@keyframes`, `backdrop-filter`, `IntersectionObserver`-driven classes |
| **Vanilla JavaScript (ES6+)** | All interactivity — no jQuery, no frameworks |
| **Google Fonts** | Outfit + Inter via CDN |
| **Inline SVG** | All icons hand-coded SVG (no icon libraries) |

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<div align="center">
  <strong>Built with ♥ — LensCraft © 2026</strong>
</div>
