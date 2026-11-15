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
- `refs`: optional array of IDs in `window.DICTIONARY_REFERENCES`

Entries are sorted alphabetically automatically. The entry count is calculated dynamically including the card counters.

`styles.css` controls design and responsiveness. `app.js` implements search, category filters, deep links (`#entry/attention`), an accessible entry panel, keyboard shortcuts (`/` or Cmd/Ctrl+K), and reference links.

## Editorial status

This is a **first-edition prototype** with 36 original starter entries, not a peer-reviewed reference work. Entries are concise working drafts. Specific reading links are included when particularly relevant; otherwise entry-level scholarly sourcing remains to be done. The reading list is verified background context, not a claim that every entry is extracted from each work.

Before public launch, consider adding named editorial authorship, a contact/contribution process, consistent entry-level citations, an editorial review policy, and permanent canonical links.

## Copyright

Original site content and design were drafted for this project. External scholarly works remain the property of their respective authors/publishers. Google Fonts may be loaded from Google's CDN when online.
