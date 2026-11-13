# Clipzy website

Minimal coming-soon page built with React, TypeScript, Mantine and Vite.

## Local development

Requires Node.js 22.12+ (or Node.js 24).

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Upload the **contents of `dist/`** to your web host's public directory (often `public_html` or `www`). The production site is static and does not need a Node.js server. For services that build from source, use `npm run build` as the build command and `dist` as the output directory.

Contact buttons open the visitor's email app using `mailto:info@clipzy.tv`. The mailbox itself must be configured with your email provider.

The original Clipzy logo is in `public/clipzy-logo.svg`. Page content is in `src/main.tsx`; styling is in `src/styles.css`.
