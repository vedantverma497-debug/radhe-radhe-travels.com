# Design Brief

## Tone & Purpose
Premium travel editorial with warm, inviting, and exploration-focused aesthetic. Luxury travel magazine meets approachable adventure — refined yet grounded.

## Color Palette (OKLCH)
| Token | Light | Dark | Purpose |
|:---|:---|:---|:---|
| primary | 0.60 0.18 25 | 0.72 0.16 25 | Terracotta accent — adventure, warmth |
| secondary | 0.72 0.08 130 | 0.58 0.10 130 | Sage/olive — supportive, organic |
| accent | 0.50 0.14 260 | 0.65 0.12 260 | Teal/peacock — emphasis, contrast |
| destructive | 0.55 0.22 25 | 0.65 0.19 22 | Error/warning (red) |
| background | 0.97 0.02 70 | 0.12 0.01 70 | Warm cream/dark slate |
| foreground | 0.25 0.02 70 | 0.92 0.01 70 | Charcoal text/light text |

## Typography
- **Display (Fraunces)**: Editorial serif for headlines, hero text, package titles. Bold, sophisticated, destination-focused.
- **Body (Lora)**: Warm serif for content, descriptions, itineraries. Premium, readable, travel magazine feel.
- **Mono (GeistMono)**: Code, structured data fallback. Technical clarity.

## Structural Zones
| Zone | Treatment | Purpose |
|:---|:---|:---|
| Header | Transparent on hero, solid bg-card on scroll | Clean nav, scroll effect |
| Hero | Full-bleed imagery, warm overlay, display text | Immersive destination experience |
| Content Sections | Alternating bg-background, bg-card/muted | Rhythm, visual hierarchy |
| Tour Cards | bg-card, shadow-card, rounded-lg, image-forward | Exploration, premium feel |
| Footer | bg-card with primary accent text, prominent CTAs | Contact, WhatsApp, phone emphasis |

## Elevation & Depth
- **Card shadow**: `shadow-card` (0 4px 12px, 6% opacity) — subtle elevation.
- **Elevated shadow**: `shadow-elevated` (0 12px 24px, 8% opacity) — modal, hero, emphasis surfaces.
- **No glow or neon** — clean, refined aesthetic.

## Shape Language
- **Border radius**: 1rem (16px) default. Generous, organic corners on cards, sections, buttons.
- **Spacing rhythm**: 8px grid. Dense on mobile, airy on desktop.

## Component Patterns
- **Buttons**: Primary (terracotta), secondary (sage), tertiary (text-only). CTAs (WhatsApp, phone) use primary with icon.
- **Cards**: Image-forward. Title/description overlay or below image. Hover: subtle scale + shadow lift.
- **Navigation**: Clean header with icon/text combo. Tour filters: sage secondary buttons, terracotta when active.
- **Forms**: Minimal, warm accents. Input borders use border token, focus ring is primary.

## Motion & Interaction
- **Default transition**: `transition-smooth` (0.3s, ease-out) for all interactive state changes.
- **Entrance animations**: Fade-in + subtle slide-up on page load. Tour cards stagger on viewport entry.
- **Hover states**: Scale 1.02, shadow elevation on cards. Button text brightens (opacity shift).
- **No bouncy or playful animations** — refinement over novelty.

## Differentiation & Signature Detail
**Warm gradient accent overlays on hero imagery** — travel destinations photographed in warm light. Subtle terracotta-to-sage gradient above images creates a cohesive, premium, editorial feel that distinguishes this from generic travel sites. Every tour card and hero section uses this treatment.

## Anti-Patterns Avoided
- No default Tailwind blues or greys.
- No corporate flatness — cards have intentional elevation.
- No rainbow palettes — 3 core + 2 semantic colors only.
- No scattered animations — all motion choreographed via transition-smooth.
- No generic AI aesthetic — warm, editorial, destination-focused branding.
