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

## GitHub Actions

The `Build Clipzy website` workflow runs on branch pushes, pull requests, and manual runs via **Actions → Build Clipzy website → Run workflow** (once the workflow is on the default branch).

It uses Node.js 24, installs the locked dependencies with `npm ci`, then runs the TypeScript check and production build with `npm run build`. Successful builds upload the contents of `dist/` as the `clipzy-hosting` artifact, retained for 14 days.

To publish a build, open its run under **Actions**, download `clipzy-hosting` from **Artifacts**, and extract the ZIP contents into your hosting public directory. No repository secrets are required. This workflow builds and packages the site; it does not deploy automatically.
