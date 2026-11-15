# The Human Words We Give Machines

**A Dictionary of Anthropomorphisms in Artificial Intelligence**

A responsive, searchable, dependency-free static website and editorial starter edition of a living AI dictionary (36 original sample entries).

## Run locally

Open `index.html` in a browser. The site works without a build step or a server. Fonts are requested from Google Fonts but have local fallbacks; dictionary content, search, and navigation all work offline.

For a local server instead:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish

Upload all these files together to the root of any static host, such as GitHub Pages, Cloudflare Pages, Netlify, or Vercel. No server/database is necessary. For GitHub Pages, enable deployment from the repository branch in *Settings → Pages*.

## Edit the dictionary

All entries live in `data.js`, in `window.DICTIONARY_ENTRIES`. Each entry has:

- `word`: dictionary headword
- `category`: `technical`, `behavior`, or `relationship`
- `kind`: editorial type (e.g., technical analogy, contested attribution)
- `teaser`: one-sentence description
- `human`: ordinary-language meaning
- `ai`: precise AI/ML usage
- `analogy`: why the metaphor is illuminating
- `limit`: where the analogy breaks down
- `stakes`: why that boundary matters
- `question`: further question worth asking
- `refs`: IDs of peer-reviewed papers in `window.DICTIONARY_REFERENCES` that use the word (at least one), listed in the entry under *In the literature*

Entries are sorted alphabetically automatically. The entry count is calculated dynamically including the card counters.

Each reference has `authors`, `year`, `title`, `venue`, `url` (https) and `peerReviewed`. Entries may only cite references marked `peerReviewed: true`; the flag isn't shown on the site.

Run `node scripts/validate-data.mjs` to check `data.js`. The same check runs on every pull request and every push to `main`.

`styles.css` controls design and responsiveness. `app.js` implements search, category filters, deep links (`#entry/attention`), an accessible entry panel, keyboard shortcuts (`/` or Cmd/Ctrl+K), and reference links.

## Contributing

New words and papers arrive as pull requests; see [CONTRIBUTING.md](CONTRIBUTING.md).

## Editorial status

This is a **first-edition prototype** with 36 original starter entries, not a peer-reviewed reference work. Entries are concise working drafts. Each entry lists peer-reviewed papers that use the word; the entry text itself is not yet sourced claim by claim. The reading list is verified background context, not a claim that every entry is extracted from each work.

Before a wider launch, consider adding named editorial authorship, a contact address, claim-level citations, an editorial review policy, and permanent canonical links.

## Copyright

Original site content and design were drafted for this project. External scholarly works remain the property of their respective authors/publishers. Google Fonts may be loaded from Google's CDN when online.
