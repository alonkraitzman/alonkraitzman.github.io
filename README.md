# Alon P. Kraitzman — portfolio

A static personal research portfolio for [alonkraitzman.github.io](https://alonkraitzman.github.io).

## Pages

- `index.html` — introduction, public reports and background
- `client-work.html` — areas of practice and selected client projects
- `research.html` — reports, peer-reviewed articles and research materials
- `teaching.html` — speaking, industry training and university teaching
- `media.html` — selected research coverage
- `contact.html` — public contact details

## Preview locally

From this directory, run `python3 -m http.server 8000 --bind 127.0.0.1`, then open `http://127.0.0.1:8000`.

No build step, package installation, external fonts or framework is required. The stylesheet is `styles.css`; `site.js` only enhances the mobile navigation. All page content and navigation remain available without JavaScript.

## Publish on GitHub Pages

Upload all files in this directory, including `.nojekyll` and `portrait.jpg`, to the root of the public `alonkraitzman.github.io` repository. In repository Settings → Pages, publish from the `main` branch and root directory. Keep the separate GitHub profile README in the `alonkraitzman` profile repository.

## Editing

Edit the standalone HTML files directly. The header and footer are repeated across the six pages; update each copy when changing shared links. Keep canonical and social metadata aligned with each page URL. Public report and publication links point to their original publishers and research repositories.

The portrait and written content are personal portfolio material. Third-party reports and articles remain with their respective publishers.
