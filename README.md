# Rayya Pharma Static Website

Rayya Pharma is a static, SEO-friendly Next.js website built from the supplied homepage HTML and screenshot reference. The project uses the App Router, Tailwind CSS, TypeScript, and static export so it can be hosted easily on Hostinger or any standard static hosting platform.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Local self-hosted Inter font files
- Static export via `output: 'export'`
- SEO metadata, sitemap, robots, manifest, JSON-LD, and custom 404

## Project Structure

```text
src/
  app/          App Router pages, metadata files, and global styles
  components/   Reusable UI and section components
  content/      Centralized site config and editable content
  lib/          SEO helpers
  styles/       Theme tokens and shared CSS
public/
  icons/        Favicon and app icons
  images/       Local homepage images
  seo/          Social preview assets
reference-pages/
  home_page/    Supplied source HTML and screenshot reference
```

## Main Content Update Point

Update `src/content/site.ts` first when preparing for launch. This file holds:

- site name and default SEO settings
- placeholder site URL
- navigation and footer links
- official Rayya Pharma Private Limited company details

Homepage section copy lives in `src/content/home.ts`.

## Installation Guide

1. Install Node.js 20.9 or later.
2. Open a terminal in the project folder:

   ```powershell
   cd "C:\Users\ACER\Desktop\NextJS Rayya Pharma website"
   ```

3. Install dependencies:

   ```powershell
   npm install
   ```

4. Start the local development server:

   ```powershell
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser.

## Build for Production

1. Run linting:

   ```powershell
   npm run lint
   ```

2. Build the static export:

   ```powershell
   npm run build
   ```

3. After a successful build, the deployable static site will be generated in the `out/` folder.

## Hostinger Deployment Guide

1. Build the site locally with `npm run build`.
2. Open the generated `out/` folder.
3. Upload all files and folders inside `out/` to your Hostinger `public_html` directory.
4. If `public_html` already contains old files for the same site, remove or archive them first.
5. Visit your domain after upload and verify the homepage, placeholder routes, `sitemap.xml`, and `robots.txt`.

## Domain Setup Before Launch

1. Purchase your final domain.
2. Update the `siteUrl` value in `src/content/site.ts`.
3. Rebuild the site with `npm run build`.
4. Re-upload the fresh `out/` folder to hosting.

This step is important because canonical URLs, Open Graph metadata, robots, and sitemap all depend on the final domain value.

## Placeholder Content Notes

- Rayya is the live brand for the site shell, metadata, and shared UI.
- Company-information sections have been updated with the provided Rayya Pharma Private Limited registration details and managing directors.
- All non-home routes currently ship as branded placeholder pages with `noindex` metadata.

## Adding New Pages Later

1. Add a new route folder inside `src/app/`.
2. Reuse `MarketingShell` and the shared section styles for consistency.
3. Add page metadata using `buildMetadata` from `src/lib/seo.ts`.
4. Add the new route to `src/content/site.ts` if it should appear in navigation or footer links.
5. Rebuild the project before deploying.

## Useful Commands

```powershell
npm run dev
npm run lint
npm run build
```
