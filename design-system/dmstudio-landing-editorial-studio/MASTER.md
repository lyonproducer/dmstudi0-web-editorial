# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** dmstudio-landing-editorial-studio
**Generated:** 2026-03-23 01:04:37
**Category:** Photography Studio

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#0C0A09` | `--color-primary` (Rich Dark) |
| Secondary | `#44403C` | `--color-secondary` (Stone Grey) |
| CTA/Accent | `#A16207` | `--color-cta` (Deep Gold) |
| Background | `#FAFAF9` | `--color-background` (Warm Silk) |
| Text | `#0C0A09` | `--color-text` |

**Color Notes:** High-contrast editorial style; Deep Gold used sparingly for premium accents.

### Typography

- **Heading Font:** Playfair Display
- **Body Font:** Inter
- **Mood:** elegant, luxury, sophisticated, timeless, premium, editorial
- **Google Fonts:** [Playfair Display + Inter](https://fonts.google.com/share?selection.family=Inter:wght@300;400;500;600;700|Playfair+Display:wght@400;500;600;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero padding |

### Shadow Depths (Soft Luxury)

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.03)` | Subtle lift |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)` | Cards |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.03)` | Floating elements |
| `--shadow-xl` | `0 25px 50px -12px rgba(0,0,0,0.15)` | Full-bleed hero visuals |

---

## Component Specs

### Buttons

```css
/* Primary Button: High-Contrast Dark */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-background);
  padding: 16px 32px;
  border-radius: 0px; /* Sharp corners for editorial look */
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--color-cta);
  transform: scale(1.02);
}

/* Secondary Button: Elegant Outline */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  padding: 16px 32px;
  border-radius: 0px;
  font-weight: 500;
  transition: all 400ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: var(--color-background);
}
```

### Cards & Visuals

```css
.card {
  background: var(--color-background);
  border: 1px solid rgba(0,0,0,0.05);
  padding: 0px; /* Full-bleed focus */
  overflow: hidden;
  transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
}

.card img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
}

.card:hover {
  transform: translateY(-8px);
}
```

### Typography Utilities

```css
.h1-editorial {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3.5rem, 12vw, 9rem);
  line-height: 0.9;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--color-primary);
}

.subheadline {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-secondary);
}
```

### Modals

```css
.modal-overlay {
  background: rgba(12, 10, 9, 0.8); /* Rich Dark overlay */
  backdrop-filter: blur(10px);
}

.modal {
  background: var(--color-background);
  border-radius: 0px;
  padding: 48px;
  box-shadow: var(--shadow-xl);
  max-width: 600px;
}
```

---

## Strategy & Behavior

### 1. Product Type: Hybrid Portfolio + Premium Booking
- **Core Concept:** "Art Exhibition" over stock gallery.
- **Visual Flow:** Curaduría altamente selectiva. Menos fotos, pero a pantalla completa (Full Bleed), con transiciones fluidas.
- **Conversion Strategy:** Enquiry/Booking como *Agencia Top*. El CTA será sutil pero siempre accesible (Sticky Inquiry button, minimalista).

### 2. Target Audience: Celebrities, Art Directors, High-End Clients
- **Desktop Focus (Monitores 5K):** High-res images, "zoom profundo", tipografía masiva (Playfair Display) y experiencias inmersivas con parallax scroll para oficinas de revistas.
- **Mobile Focus:** Scroll vertical sumamente veloz para directores y agentes en un set, tipografías más equilibradas, y touch-targets precisos. 
- **Psicología:** Elegancia y sobriedad tipo *Vogue / Harper's Bazaar*. El diseño grita "Exclusividad" usando mucho espacio y oscuros ricos (Rich Dark / Stone Grey / Warm Silk).

### 3. Style Guidelines: Motion-Driven Minimalism

**Style:** Liquid Glass + Exaggerated Minimalism

**Layout & Space:**
- **Full Bleed Everywhere:** Las imágenes deben ocupar el 100% del alto y ancho de la ventana (100vh) cuando son presentadas como hero o caso de estudio.
- **Galleried con Espacio Abierto:** Cuando haya grillas de proyectos, cada foto necesita mucho padding (White Space / Negative Space) para "respirar".

**Micro-interacciones y Animaciones:**
- **Cinematic Transitions:** Transiciones de página suaves (Page-Transitions) entre proyectos de 400-600ms, usando Framer Motion o View Transitions.
- **Smooth Image Reveal:** Efectos `Reveal` en scroll para texto e imágenes que suben suavemente (`transform: translateY(20px)` a 0).
- **Parallax Soft:** Scroll asíncrono en fondos (Imágenes que se mueven más lento que la página).
- **Custom Cursor:** Un cursor invertido (mix-blend-mode: difference) que se expanda cuando se pasa sobre fotos cliqueables ("View Project").

### Page Pattern

**Pattern Name:** Hero-Centric Storytelling

- **Conversion Strategy:** One primary CTA. Hero is 60-80% above fold. Mobile: same hierarchy.
- **CTA Placement:** Hero dominant (center/bottom) + Sticky nav CTA
- **Section Order:** 1. Full-bleed Hero (headline + visual), 2. Single value prop strip, 3. Key benefit or proof, 4. Primary CTA

---

## Anti-Patterns (Do NOT Use)

- ❌ Heavy text
- ❌ Poor image showcase

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
