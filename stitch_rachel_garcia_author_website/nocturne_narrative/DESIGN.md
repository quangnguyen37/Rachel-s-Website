---
name: Nocturne & Narrative
colors:
  surface: '#0d160a'
  surface-dim: '#0d160a'
  surface-bright: '#323c2e'
  surface-container-lowest: '#081006'
  surface-container-low: '#151e12'
  surface-container: '#192216'
  surface-container-high: '#232c1f'
  surface-container-highest: '#2e372a'
  on-surface: '#dbe6d2'
  on-surface-variant: '#d1c4be'
  inverse-surface: '#dbe6d2'
  inverse-on-surface: '#2a3326'
  outline: '#9a8e89'
  outline-variant: '#4e4541'
  surface-tint: '#d2c3bd'
  primary: '#d2c3bd'
  on-primary: '#382e2a'
  primary-container: '#b6a8a2'
  on-primary-container: '#473d39'
  inverse-primary: '#675c57'
  secondary: '#ffb4aa'
  on-secondary: '#52211c'
  secondary-container: '#703933'
  on-secondary-container: '#f1a59b'
  tertiary: '#e2bfb2'
  on-tertiary: '#412b22'
  tertiary-container: '#c5a497'
  on-tertiary-container: '#523a30'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#efdfd9'
  primary-fixed-dim: '#d2c3bd'
  on-primary-fixed: '#221a16'
  on-primary-fixed-variant: '#4f4540'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#370d09'
  on-secondary-fixed-variant: '#6d3730'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#e2bfb2'
  on-tertiary-fixed: '#2a170f'
  on-tertiary-fixed-variant: '#5a4137'
  background: '#0d160a'
  on-background: '#dbe6d2'
  surface-variant: '#2e372a'
  martini: '#B6A8A2'
  english-breakfast: '#471914'
  black-stallion: '#0F1E1D'
  walnut: '#3F2920'
  jedi-night: '#070F05'
typography:
  headline-display:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  quote:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is crafted for an author whose work dwells in the shadows, evoking a sense of atmospheric mystery and intellectual depth. The brand personality is scholarly yet enigmatic, sophisticated but grounded in the tactile world of ink, paper, and twilight landscapes.

The visual style leans into a **Modern Minimalist** framework infused with **Atmospheric Depth**. It prioritizes heavy whitespace (or "darkspace") and high-contrast typography to create a focused, immersive reading experience. By layering rich, deep colors with sharp, elegant serifs, the UI suggests a digital study—a private place for contemplation and storytelling. The aesthetic avoids unnecessary ornamentation, allowing the "texture" of the dark color palette and the precision of the type to provide the narrative weight.

## Colors

The palette is anchored by the near-black depth of **Jedi Night**, which serves as the primary canvas. This creates an immediate "low-light" environment that reduces eye strain and establishes a moody, late-night reading atmosphere. 

**Martini** acts as the primary lead for typography and essential UI borders, providing a soft, weathered parchment feel against the dark background. **English Breakfast** is used sparingly as a high-intent accent for critical actions, evoking the richness of old leather bindings or dried ink. **Black Stallion** and **Walnut** are utilized for subtle layering, providing depth through tonal shifts in containers and background sections rather than relying on traditional shadows.

## Typography

The typography system relies on the interplay between the dramatic, high-contrast **Playfair Display** and the clinical, contemporary clarity of **Hanken Grotesk**.

Display headings should use tight letter-spacing and substantial line heights to command the page. Body text is set in Hanken Grotesk with generous line spacing (1.6) to ensure maximum legibility against the dark background. For meta-information—such as publication dates or category tags—use the `label-caps` style to provide a structured, archival feel. Use italics in Playfair Display for quotes or excerpts to evoke the literary nature of the brand.

## Layout & Spacing

This system utilizes a **Fixed Grid** philosophy for desktop to ensure a controlled, editorial reading experience. Content is centered within a 1280px container, utilizing a 12-column grid. 

Margins and section gaps are intentionally oversized to create "breathable" darkness, guiding the user's focus toward specific content blocks. On mobile, the grid collapses to a single column with 20px side margins, while section gaps reduce to 64px to maintain momentum. Vertical rhythm is strictly managed through `stack` units, ensuring that the relationship between headers, body text, and call-to-actions remains consistent across the site.

## Elevation & Depth

To maintain the moody aesthetic, this system avoids traditional drop shadows. Instead, depth is conveyed through **Tonal Layering** and **Low-Contrast Outlines**.

Surface hierarchy is achieved by stacking colors:
1. **Level 0 (Base):** #070F05 (Jedi Night)
2. **Level 1 (Cards/Sections):** #0F1E1D (Black Stallion)
3. **Level 2 (Popovers/Overlays):** #3F2920 (Walnut)

Interactive elements use a 1px "ghost border" in #B6A8A2 at 20% opacity. For a sense of immersion, use subtle background blurs on fixed navigation bars, allowing the dark content to bleed through as the user scrolls, creating a sense of physical layering.

## Shapes

The design system employs **Sharp (0px)** corners for all primary UI elements. This choice reinforces a sense of precision, authority, and classical structure, mirroring the sharp edges of a printed book or a fountain pen nib. 

Avoid rounded buttons or containers. Every element—from book cover frames to input fields—should maintain its geometric integrity. The only exception to this "rectilinear" rule is for circular icon buttons or profile avatars, which should be kept to a minimum to maintain the architectural rigor of the layout.

## Components

### Buttons
Primary buttons are solid #B6A8A2 with #070F05 text, using the `label-caps` typographic style. Secondary buttons use a 1px border of #B6A8A2 with no fill. All buttons have a hover state that slightly shifts the background color to #471914 (English Breakfast) for a rich, warm feedback loop.

### Cards
Cards for book entries or blog posts use the #0F1E1D background. They should not have shadows. Instead, use a subtle 1px border in #B6A8A2 at low opacity. Images within cards should have a slight desaturation filter applied, returning to full color only on hover.

### Input Fields
Fields are represented by a single bottom border (1px) in #B6A8A2. Placeholder text uses #B6A8A2 at 50% opacity. This "minimalist" approach keeps the forms looking like a lined notebook.

### Chips & Tags
Small, rectangular tags using the #3F2920 (Walnut) background with #B6A8A2 text. These should be used for genre labels or reading status.

### Dividers
Use very thin (1px) horizontal lines in #471914 to separate major content sections without breaking the visual flow of the dark background.