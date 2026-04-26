---
name: Clinical Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf4'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dde9ff'
  surface-container-highest: '#d5e3fd'
  on-surface: '#0d1c2f'
  on-surface-variant: '#424751'
  inverse-surface: '#233144'
  inverse-on-surface: '#ebf1ff'
  outline: '#737783'
  outline-variant: '#c2c6d3'
  surface-tint: '#255dad'
  primary: '#00346f'
  on-primary: '#ffffff'
  primary-container: '#004a99'
  on-primary-container: '#9bbdff'
  inverse-primary: '#abc7ff'
  secondary: '#00677d'
  on-secondary: '#ffffff'
  secondary-container: '#50d9fe'
  on-secondary-container: '#005c70'
  tertiary: '#323537'
  on-tertiary: '#ffffff'
  tertiary-container: '#494c4e'
  on-tertiary-container: '#babcbe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#00458f'
  secondary-fixed: '#b3ebff'
  secondary-fixed-dim: '#4cd6fb'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#004e5f'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0d1c2f'
  surface-variant: '#d5e3fd'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is built on the pillars of scientific integrity, patient-centricity, and modern medical innovation. The brand personality is professional and authoritative, yet accessible enough to build immediate trust with healthcare providers and patients alike. 

The aesthetic follows a **Corporate / Modern** movement, blending clinical cleanliness with contemporary digital patterns. It prioritizes clarity and high-signal information density without feeling cluttered. The visual direction utilizes high-quality medical photography—featuring diverse people and state-of-the-art laboratory settings—to humanize the pharmaceutical data. The overall emotional response should be one of "reliable innovation."

## Colors

The color palette is anchored by **Deep Medical Blue**, a color associated with stability, expertise, and the established pharmaceutical industry. This is balanced by **Fresh Teal**, which introduces a contemporary, energetic feel to represent modern biotechnology and "living" health.

- **Primary (#004a99):** Used for navigation, primary buttons, and authoritative headers.
- **Secondary (#00b4d8):** Used for accents, text links, and interactive elements to provide a sense of optimism and freshness.
- **Backgrounds:** Primarily clean white (#FFFFFF) to maintain a clinical feel, with very light gray/blue (#f8fafc) used to differentiate sections.
- **Subtle Gradients:** Used sparingly, transitioning from the Secondary Teal to the Primary Blue at a 135-degree angle to suggest movement and progress.

## Typography

This design system utilizes **Inter** as the sole typeface to ensure maximum legibility across clinical data tables and marketing copy. The "Sharp" quality of Inter’s letterforms reinforces the precision of the brand.

Headlines use tighter letter-spacing and heavier weights to command attention and establish hierarchy. Body text is set with generous line-height to ensure accessibility for all users, including those reading complex medical instructions or drug data. The use of an all-caps label style helps categorize content types (e.g., "RESEARCH," "PRESS RELEASE") without disrupting the visual flow.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop, centered within the viewport to maintain a structured, editorial feel. It utilizes a 12-column grid with a 24px gutter. 

The spacing rhythm is based on an 8px linear scale. Large vertical gaps (80px+) are encouraged between major sections to provide "breathing room," reinforcing the clean, clinical aesthetic. Content should be grouped logically using smaller increments (12px or 24px) to indicate relationships between headlines, text, and clinical icons.

## Elevation & Depth

To maintain a "Clinical yet Contemporary" feel, depth is created through **Ambient Shadows** and tonal layering rather than heavy borders.

Surfaces use a very subtle, multi-layered shadow (10% opacity of the Primary Blue) to appear as if they are floating slightly above the white background. This creates a tactile quality that suggests the interface is premium and well-engineered. For complex data or "Quick Reference" sections, use light-teal tinted backgrounds to separate information without adding visual weight.

## Shapes

The shape language for this design system is defined by **Rounded** corners. A standard radius of 8px (`0.5rem`) is applied to buttons, input fields, and small cards. For larger container elements or hero image sections, a radius of 16px (`1rem`) is used.

This level of roundedness softens the potentially "cold" clinical nature of the content, making the brand feel approachable and modern while remaining disciplined enough to appear professional. Circular icons should be housed in "squircle" containers (rounded squares) to maintain consistency with the UI elements.

## Components

### Buttons
Primary buttons feature a subtle gradient from Fresh Teal to Deep Medical Blue. Hover states should slightly increase the shadow depth. Secondary buttons use a "Ghost" style with a 1.5px solid Primary Blue border.

### Cards
Cards are the primary vehicle for therapeutic area information. They should have a white background, a 1px soft-gray border, and the standard 8px rounded corners. On hover, the border color shifts to Teal.

### Input Fields & Controls
Form inputs must be clearly labeled using the `body-sm` weight. Use a focus ring of 2px in Fresh Teal to ensure accessibility and clarity during data entry.

### Medical Category Icons
Icons should be "Line Art" style with consistent 2px stroke weights. Use the Primary Blue for the main icon body and a Secondary Teal dot or small element to add a branded "spark."

### Additional Components
- **Data Tables:** High-contrast headers with alternating row colors (White and Off-white).
- **Progress Steppers:** Used for clinical trial timelines, utilizing the Teal color for completed stages.
- **Alert Banners:** Soft-tinted backgrounds (Blue for info, Teal for success) with sharp, clear icons.