# Portfolio

> **TODO before hosting:** replace this heading and description, and the
> `<title>` / `<meta name="description">` in `index.html`, with your own details.

Personal portfolio site — React + Vite, with a runtime theme switcher offering
seven colour palettes.

## Getting started

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # ESLint over the whole project
```

## Structure

```
src/
├── main.jsx              Entry point
├── App.jsx               Theme state + page shell
├── theme.js              Palette list, theme context, useTheme hook
├── index.css             Tailwind import, palettes, design tokens, base styles
├── components/
│   ├── Navbar.jsx
│   └── ThemePalette.jsx  Palette picker popover
└── assets/               Images and icons
```

`@/` resolves to `src/` — set in `vite.config.js` for the build and
`jsconfig.json` for editor autocomplete.

## How theming works

1. `App.jsx` holds the active theme in state.
2. An effect writes it to `<html data-theme="...">`.
3. `index.css` declares CSS custom properties per palette, keyed off that
   attribute.
4. An `@theme inline` block bridges those variables into Tailwind, so
   `bg-background`, `text-foreground` and `border-border` compile to
   `var(--background)` rather than a fixed value — which is what lets them
   change at runtime.

The theme is not persisted; every load starts on the default palette.

**Adding a palette:** add a `[data-theme="..."]` block in `index.css`, then an
entry to `THEMES` in `src/theme.js`.

### Token utilities

`primary` · `primary-hover` · `background` · `surface` · `surface-hover` ·
`foreground` · `foreground-muted` · `foreground-inverse` · `border`, plus
theme-aware `shadow-sm` / `shadow-md` / `shadow-lg`.

Use these instead of hard-coded Tailwind colours (`bg-white`, `text-slate-900`)
— anything hard-coded won't respond to the theme switcher.
