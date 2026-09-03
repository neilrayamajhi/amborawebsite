# Ambora Social — Design Reference

Use this file as the source of truth when building Ambora’s website.
It mirrors the look and feel of the Ambora social app.

---

## 1. Fonts — the "voice" of the app

Fonts are the handwriting the site uses. Ambora uses three custom faces
(app originals live in `/assets/fonts/`):

| Font | Role |
|------|------|
| **Poppins** | Workhorse — headers, buttons, body. Clean, geometric, friendly. |
| **Hedvig Letters Sans** | Decorative accent — use sparingly. |
| **Unbounded** | Bold display — statement headings only. |

### CSS stack (web)

Grab Poppins from Google Fonts, then:

```css
body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Size hierarchy

| What it is | Size | Weight |
|------------|------|--------|
| App logo / hero | 24–28px | bold |
| Page titles | 20px | bold |
| Card titles, usernames | 16–18px | bold |
| Body text | 15–16px | 400–500 |
| Labels, timestamps | 13–14px | 600 |
| Tiny captions (counts) | 10–12px | normal |

Ambora leans hard on **bold** (`font-weight: 700`) for headings and usernames.
On the web, don’t be shy with it.

---

## 2. Colors — the "mood"

Minimal, high-contrast: black-on-white with one blue accent. **No dark mode.**

```css
:root {
  /* Foundations */
  --bg:            #ffffff;
  --bg-subtle:     #f5f5f5;   /* hover, pressed */
  --border:        #e0e0e0;
  --divider:       #eeeeee;

  /* Text hierarchy */
  --text-primary:   #000000;
  --text-strong:    #333333;
  --text-secondary: #555555;
  --text-muted:     #737373;
  --text-faint:     #999999;

  /* Accents */
  --accent-blue:   #00aced;   /* follow button, verified badge */
  --link-blue:     #2980b9;   /* @mentions, links */
  --share-cyan:    #33c1ff;

  /* Status */
  --success:       #4CAF50;
  --error:         #f44336;
  --notification:  #eb4034;
  --spotify:       #1DB954;
}
```

### Score color (signature trick)

Number badges use a red→green HSL gradient from score `0–10`:

```css
/* score is 0–10 */
background: hsl(calc(var(--score) * 12), 100%, calc(50% - pow(var(--score), 1.3) * 1%));
```

Or in JS:

```js
const hue = score * 12;
const lightness = 50 - Math.pow(score, 1.3);
```

Negative scores fall back to `#A3A3A3`. This is Ambora’s most distinctive visual touch.

---

## 3. Shape language

Everything is a soft-rounded rectangle or a full circle. No sharp corners.

```css
--radius-card:   10px;   /* tiles, cards */
--radius-button: 5px;    /* CTAs */
--radius-pill:   25px;   /* chips, filters, search bar */
--radius-round:  50%;    /* avatars, score badges */
```

---

## 4. Spacing — the rhythm

Base unit: things breathe on **5px** or **10px**. `10px` padding is the app default.

```css
--space-xs: 5px;
--space-sm: 8px;
--space-md: 10px;   /* default padding for almost everything */
--space-lg: 16px;
--space-xl: 20px;
```

---

## 5. Component recipes

### Primary button (“Save”, “Follow Back”)

```css
.btn-primary {
  background: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  border: none;
}
```

### Secondary button (outlined, “Edit Profile”)

```css
.btn-secondary {
  background: transparent;
  color: #333;
  border: 1.5px solid #333;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
}
```

### Chip / filter pill

```css
.chip { background: lightgrey; color: black; padding: 5px 12px; border-radius: 20px; }
.chip.active { background: black; color: white; }
```

### Avatar

```css
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid lightgrey;
  object-fit: cover;
}
```

### Image tile (feed / category card)

```css
.tile {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 129px;
  height: 129px;
}
.tile::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4); /* dark overlay for text legibility */
}
.tile-label {
  position: absolute;
  bottom: 8px;
  left: 8px;
  color: white;
  font-weight: bold;
  z-index: 1;
}
```

### Search input (pill)

```css
.search {
  border: 0.5px solid lightgrey;
  border-radius: 25px;
  padding: 8px 14px;
  font-size: 15px;
}
```

---

## 6. Icons

Ambora uses **Ionicons** (primary) and **MaterialIcons** (secondary).

Web equivalents:

- Ionicons → `ionicons` npm package or CDN
- Material Icons → Google Fonts Material Symbols
- Or Lucide / Heroicons for the same clean line-icon feel

Common sizes: **24–30px** for nav/action icons, **16–18px** inline with text.

---

## 7. Distinctive touches (copy these)

1. **Dynamic-color score badges** — red→green HSL gradient is the visual signature.
2. **Dark overlay on every image tile** with white bold text on top.
3. **Pill chips** with black/white active state (not a color highlight).
4. **Bold everywhere** — usernames, headers, buttons. Weight, not color, for emphasis.
5. **Hairline borders** (0.5–1px lightgrey) instead of drop shadows. Flat, no shadows.
6. **Blue verified checkmark** (`#00aced`) next to usernames.
7. **Smooth 100–200ms fade-ins** on images (`transition: opacity 200ms`).

---

## TL;DR CSS starter

```css
:root {
  --bg: #fff;
  --text: #000;
  --muted: #737373;
  --accent: #00aced;
  --link: #2980b9;
  --border: #e0e0e0;
  --divider: #eee;
  --radius-card: 10px;
  --radius-pill: 25px;
}

body {
  font-family: 'Poppins', system-ui, sans-serif;
  color: var(--text);
  background: var(--bg);
}

h1, h2, .username, .btn {
  font-weight: 700;
}

.card {
  border-radius: var(--radius-card);
  border: 0.5px solid var(--border);
  padding: 10px;
}

.pill {
  border-radius: var(--radius-pill);
  padding: 6px 14px;
}
```

Drop that in and you’re ~80% of the way to the Ambora look.

---

## 8. App screenshots (visual reference)

Real Ambora Social UI screenshots live in `reference/screenshots/`.
Match layout, spacing, and component patterns to these when building the website.

| File | Screen | What to study |
|------|--------|---------------|
| `01-feed-following.png` | Feed → Following | Header “ambora \ social”, tabs, post cards, score rings, bottom nav |
| `02-profile-grid.png` | Profile | Avatar + stats, bio + link, Unfollow pill, 3-col category tiles with count + label overlay |
| `03-list-songs.png` | Ranked list (Songs) | Italic list title, subtitle, search pill, ranked rows, score badges, bottom nav |
| `04-list-anime.png` | Ranked list (Anime) | Same list pattern with thumbnails + dates |
| `05-list-gunpla.png` | Ranked list (custom) | List title, Compare action, ranked rows with notes |
| `06-list-drinks.png` | Ranked list (Drinks) | Same list pattern; high green scores |
| `07-post-self-love.png` | Post card (Songs) | Avatar, verified badge, score ring, category/title, caption, media, reactions |
| `08-post-kinky-love.png` | Post card (Songs) | Same post anatomy with album art |
| `09-post-japanese-breakfast.png` | Post card (Songs) | Same post anatomy with session artwork |
| `11-add-rate-compare.png` | Add flow | “How was it?” Good/Mid/Bad circles; “Which do you prefer?” OR compare cards; search; + Add List |

**Logo:** `public/logo.png`

---

## 9. Website vibe — cool & interactive (NexStudio)

Use this for **marketing-site motion, scale, and scroll craft** — not for Ambora product UI chrome.
Ambora brand (Poppins, black/white, `#00aced`) still wins for product look; steal structure and interaction energy from here.

| File | What it is |
|------|------------|
| `reference/screenshots/10-nexstudio-interaction-vibe.png` | Full-page vibe: huge type, sticky scroll sections, project cards, contact curtain |
| `reference/nexstudio-interaction-styles.css` | Full CSS reference (loader, hero/WebGL scene, sticky about, work projects, contact, reduced-motion) |

### Steal these patterns

1. **Site loader** — full-screen ink curtain that clips away; wordmark + progress counter.
2. **Hero** — 100svh with interactive visual (`#scene`) + fixed nav (`mix-blend-mode: difference`).
3. **Sticky scroll storytelling** — tall sections with sticky viewports; words/progress driven by CSS vars.
4. **Work reveals** — title lines slide up; media `clip-path` opens; browser mockups fade/rise in.
5. **Contact curtain** — dark intro peels into accent sticky panel; outlined display type; pill email CTA.
6. **Respect motion** — `prefers-reduced-motion` collapses sticky theater into simple static layout.

### NexStudio token snapshot (vibe only)

```css
:root {
  --bg: #e9e9e7;
  --ink: #111;
  --muted-ink: #aeaeaa;
  --accent: #178f9d;
}
```

Do **not** replace Ambora’s product palette with these unless the brief explicitly says so.
