/* ---------- Product Catalogue ---------- */

const COLORS = {
  ink:    { name: 'Ink',    hex: '#0B1F2F', label: 'A deep navy, almost black — reads as formal in any setting.' },
  onyx:   { name: 'Onyx',   hex: '#121212', label: 'True black. Classic and hard-working.' },
  forest: { name: 'Forest', hex: '#2A4738', label: 'Our signature hunter green — quietly distinctive.' },
  slate:  { name: 'Slate',  hex: '#4A5560', label: 'A considered cool grey.' },
  bone:   { name: 'Bone',   hex: '#E4DDCC', label: 'Warm off-white — for the bold.' }
};

const PRODUCTS = [
  {
    slug: 'lumen-top',
    name: 'The Lumen Top',
    subtitle: "Women's V-Neck Scrub Top",
    price: 62,
    type: 'top',
    category: 'tops',
    featured: true,
    badge: 'New',
    description: "The Lumen is our signature top — cut from a four-way-stretch performance knit that moves with you through a twelve-hour shift. A flattering V-neck, four functional pockets (including one for a pen), and discreet side vents that shape the silhouette without adding bulk.",
    features: [
      'Four-way stretch performance knit',
      'Four functional pockets with reinforced stitching',
      'Discreet side vents for range of motion',
      'Fluid-resistant PFC-free finish',
      'OEKO-TEX Standard 100 certified fabric'
    ],
    fabric: '77% recycled polyester, 20% rayon, 3% spandex. 215 GSM. Finished with a fluid-resistant PFC-free treatment. OEKO-TEX Standard 100 certified mill in Dhaka.',
    fit: "Tailored through the waist with a slight A-line hem. Size up if between sizes. Model is 5'7\" wearing size Small.",
    care: 'Machine wash cold with like colours. Tumble dry low. Do not bleach. Do not iron. Wash inside out to preserve colour.',
    colors: ['ink', 'onyx', 'forest'],
    sizes: ['XS','S','M','L','XL','2XL'],
    oosSizes: []
  },
  {
    slug: 'lumen-jogger',
    name: 'The Lumen Jogger',
    subtitle: 'Tapered Scrub Jogger',
    price: 68,
    type: 'pant',
    category: 'bottoms',
    featured: true,
    description: 'A scrub pant that feels like your favourite joggers. Drawstring waist with inner elastic for a secure fit, six pockets (including two thigh cargos), and a taper that sits cleanly on the ankle.',
    features: [
      'Drawstring + inner elastic waist',
      'Six pockets including two thigh cargos',
      'Tapered leg with clean ankle break',
      'Four-way stretch performance knit',
      'Gusseted inseam for mobility'
    ],
    fabric: '77% recycled polyester, 20% rayon, 3% spandex. 230 GSM.',
    fit: "Slim through the thigh with a tapered leg. Inseam: 30\" (size M). Model is 5'7\" wearing size Small.",
    care: 'Machine wash cold. Tumble dry low. Do not bleach. Do not iron.',
    colors: ['ink', 'onyx', 'forest'],
    sizes: ['XS','S','M','L','XL','2XL'],
    oosSizes: ['XS']
  },
  {
    slug: 'lumen-set',
    name: 'The Lumen Set',
    subtitle: 'Top + Jogger Bundle',
    price: 115,
    originalPrice: 130,
    type: 'set',
    category: 'sets',
    featured: true,
    badge: 'Save $15',
    description: 'Our signature top and jogger together, saving you $15. Available in all three launch colours as a matched set.',
    features: [
      'The Lumen Top and Lumen Jogger, in one size and colour',
      'Matched dye lot',
      'Save $15 vs. buying separately',
      'Ships together'
    ],
    fabric: 'See individual product details.',
    fit: 'Select the same size for both pieces, or contact us to size separately.',
    care: 'Machine wash cold with like colours. Tumble dry low.',
    colors: ['ink', 'onyx', 'forest'],
    sizes: ['XS','S','M','L','XL','2XL'],
    oosSizes: []
  },
  {
    slug: 'lumen-classic-top',
    name: 'The Classic Top',
    subtitle: "Women's Modern V-Neck",
    price: 58,
    type: 'top',
    category: 'tops',
    description: 'A cleaner cut for those who prefer a streamlined top. Three pockets, softer shoulder line, same considered fabric as The Lumen.',
    features: [
      'Three functional pockets',
      'Softer shoulder line',
      'Four-way stretch performance knit',
      'Fluid-resistant PFC-free finish'
    ],
    fabric: '77% recycled polyester, 20% rayon, 3% spandex. 215 GSM.',
    fit: 'Slightly relaxed through the body. Runs true to size.',
    care: 'Machine wash cold. Tumble dry low.',
    colors: ['ink', 'onyx', 'slate'],
    sizes: ['XS','S','M','L','XL','2XL'],
    oosSizes: []
  },
  {
    slug: 'lumen-straight-pant',
    name: 'The Straight Pant',
    subtitle: 'Straight-Leg Scrub Pant',
    price: 68,
    type: 'pant',
    category: 'bottoms',
    description: 'A traditional straight-leg scrub pant with six pockets and a modern rise. For those who prefer a classic silhouette.',
    features: [
      'Straight leg through the ankle',
      'Six functional pockets',
      'Mid-rise waist with drawstring',
      'Four-way stretch performance knit'
    ],
    fabric: '77% recycled polyester, 20% rayon, 3% spandex. 230 GSM.',
    fit: "Straight through the leg. Inseam: 31\" (size M).",
    care: 'Machine wash cold. Tumble dry low.',
    colors: ['ink', 'onyx', 'forest', 'slate'],
    sizes: ['XS','S','M','L','XL','2XL'],
    oosSizes: []
  },
  {
    slug: 'underscrub-long-sleeve',
    name: 'The Underscrub',
    subtitle: 'Ribbed Long-Sleeve Layer',
    price: 38,
    type: 'top',
    category: 'layers',
    description: 'A ribbed-knit long-sleeve layer, cut from a softer blend and designed to sit quietly under your Lumen top through a Canadian winter shift.',
    features: [
      'Fine-gauge ribbed knit',
      'Thumbholes at the cuff',
      'Longer back hem',
      'Tagless neck'
    ],
    fabric: '92% modal, 8% spandex. 180 GSM.',
    fit: 'Close through the body and arms. Size up for a relaxed fit.',
    care: 'Machine wash cold. Lay flat to dry.',
    colors: ['ink', 'bone', 'slate'],
    sizes: ['XS','S','M','L','XL','2XL'],
    oosSizes: []
  }
];

/* ---------- SVG Garment Renderers ----------
   We generate the illustration inline so color can be driven via a CSS variable
   on the parent. No external image assets required.
----------------------------------------------- */

function garmentSVG(type, colorKey = 'ink') {
  const hex = (COLORS[colorKey] || COLORS.ink).hex;
  const shade = shadeHex(hex, -12);
  const highlight = shadeHex(hex, 10);

  if (type === 'pant') {
    return `
<svg class="garment" viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="pg-${colorKey}" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="${highlight}"/>
      <stop offset="1" stop-color="${shade}"/>
    </linearGradient>
  </defs>
  <path d="M90 30 L210 30 L220 80 L218 360 L172 362 L152 140 L148 140 L128 362 L82 360 L80 80 Z"
        fill="url(#pg-${colorKey})" stroke="${shade}" stroke-width="1.25"/>
  <path d="M90 30 L210 30 L215 52 L85 52 Z" fill="${shade}" opacity="0.35"/>
  <line x1="150" y1="30" x2="150" y2="140" stroke="${shade}" stroke-width="0.8" opacity="0.45"/>
  <path d="M108 70 L108 110 L130 110 L130 70 Z" fill="none" stroke="${shade}" stroke-width="0.9" opacity="0.5"/>
  <path d="M170 70 L170 110 L192 110 L192 70 Z" fill="none" stroke="${shade}" stroke-width="0.9" opacity="0.5"/>
  <path d="M138 42 Q150 48 162 42" fill="none" stroke="${shade}" stroke-width="1" opacity="0.7"/>
</svg>`;
  }

  // Default: top (V-neck scrub top)
  return `
<svg class="garment" viewBox="0 0 300 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="tg-${colorKey}" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="${highlight}"/>
      <stop offset="1" stop-color="${shade}"/>
    </linearGradient>
  </defs>
  <!-- sleeves + body -->
  <path d="M60 70 L110 38 L135 58 L150 90 L165 58 L190 38 L240 70 L255 150 L225 160 L220 310 L80 310 L75 160 L45 150 Z"
        fill="url(#tg-${colorKey})" stroke="${shade}" stroke-width="1.25"/>
  <!-- V-neck -->
  <path d="M135 58 L150 90 L165 58 L162 62 L150 86 L138 62 Z" fill="${shade}" opacity="0.55"/>
  <path d="M110 38 L135 58 L150 90 L165 58 L190 38" fill="none" stroke="${shade}" stroke-width="0.9" opacity="0.55"/>
  <!-- chest pocket -->
  <rect x="172" y="130" width="34" height="42" fill="none" stroke="${shade}" stroke-width="0.9" opacity="0.55"/>
  <!-- hip pockets -->
  <path d="M95 220 L95 290 L135 290 L135 220" fill="none" stroke="${shade}" stroke-width="0.9" opacity="0.45"/>
  <path d="M165 220 L165 290 L205 290 L205 220" fill="none" stroke="${shade}" stroke-width="0.9" opacity="0.45"/>
  <!-- side vent -->
  <line x1="80" y1="290" x2="80" y2="310" stroke="${shade}" stroke-width="1" opacity="0.6"/>
  <line x1="220" y1="290" x2="220" y2="310" stroke="${shade}" stroke-width="1" opacity="0.6"/>
  <!-- subtle highlight -->
  <path d="M150 90 Q130 140 115 190" fill="none" stroke="${highlight}" stroke-width="1" opacity="0.4"/>
</svg>`;
}

function shadeHex(hex, percent) {
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16);
  const g = parseInt(h.substring(2,4),16);
  const b = parseInt(h.substring(4,6),16);
  const adj = (v) => Math.max(0, Math.min(255, Math.round(v + (percent/100) * (percent < 0 ? v : 255 - v))));
  const toHex = (v) => v.toString(16).padStart(2,'0');
  return `#${toHex(adj(r))}${toHex(adj(g))}${toHex(adj(b))}`;
}

/* ---------- Helpers ---------- */

function findProduct(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}

function formatPrice(n) {
  return `$${n.toFixed(0)} CAD`;
}

function productCardHTML(p) {
  const firstColor = p.colors[0];
  const swatches = p.colors.map(c => `<span class="swatch" style="background: ${COLORS[c].hex}" title="${COLORS[c].name}"></span>`).join('');
  const badge = p.badge ? `<div class="product-badge">${p.badge}</div>` : '';
  const priceBlock = p.originalPrice
    ? `<span class="product-price">${formatPrice(p.price)} <span style="color: var(--muted); text-decoration: line-through; margin-left: 4px;">${formatPrice(p.originalPrice)}</span></span>`
    : `<span class="product-price">${formatPrice(p.price)}</span>`;

  return `
    <a class="product-card" href="product.html?p=${p.slug}">
      <div class="product-thumb">
        ${badge}
        ${garmentSVG(p.type === 'set' ? 'top' : p.type, firstColor)}
        <div class="product-quick-add">View Product</div>
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-sub">${p.subtitle}</div>
      ${priceBlock}
      <div class="product-swatches">${swatches}</div>
    </a>`;
}

function renderProductGrid(targetId, filter = () => true) {
  const container = document.getElementById(targetId);
  if (!container) return;
  const items = PRODUCTS.filter(filter);
  container.innerHTML = items.map(productCardHTML).join('');
}
