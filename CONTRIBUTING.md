# Contributing

*The Human Words We Give Machines* grows through pull requests. Every word is one entry in [`data.js`](data.js), and every entry lists peer-reviewed papers that use the word. Once a pull request is merged, the [site](https://ngnawejonas.github.io/ai-anthropomorphism-dictionary/) updates within a couple of minutes.

You can [add a word](#add-a-word) or [add a paper to a word](#add-a-paper-to-a-word).

## Before you start

- **Is it an anthropomorphism?** The word should describe AI systems in language borrowed from human (or animal) minds, behavior, bodies or relationships, the way *attention*, *hallucination* and *companion* do.
- **Is it new?** Search [the dictionary](https://ngnawejonas.github.io/ai-anthropomorphism-dictionary/) first. If the word is already there, improve its entry instead of adding a second one.
- **Not sure?** [Open an issue](https://github.com/ngnawejonas/ai-anthropomorphism-dictionary/issues/new) with the word and a sentence on why it belongs.

## Add a word

### From your browser (no git needed)

1. Open [`data.js` in GitHub's editor](https://github.com/ngnawejonas/ai-anthropomorphism-dictionary/edit/main/data.js). GitHub offers to fork the repository; accept.
2. Paste the [entry template](#entry-template) into the list under `window.DICTIONARY_ENTRIES = [` and fill it in. Anywhere in the list is fine: the site sorts words alphabetically.
3. Add your papers to `window.DICTIONARY_REFERENCES` at the bottom of the file, unless they're already there (see [Papers](#papers)).
4. Click **Commit changes…**, then **Propose changes**, then **Create pull request**, and complete the checklist in the description.

An automated check validates `data.js` on every pull request. If it fails, click **Details** next to the check to see what to fix, then edit `data.js` again in your fork; the pull request updates itself.

### With git

```sh
git clone https://github.com/<your-username>/ai-anthropomorphism-dictionary.git
cd ai-anthropomorphism-dictionary
# edit data.js, then:
node scripts/validate-data.mjs   # the same check the pull request runs
python3 -m http.server 8000      # preview at http://localhost:8000
```

### Entry template

```js
  {
    word: "Word", category: "behavior", kind: "Contested attribution",
    teaser: "One sentence for the word's card.",
    human: "What the word ordinarily means for people.",
    ai: "What it names in AI systems: the operation, behavior or construct.",
    analogy: "Where the resemblance genuinely helps.",
    limit: "Where the analogy stops being warranted by evidence.",
    stakes: "What changes for research, trust, products or responsibility.",
    question: "One open question worth asking.",
    refs: ["surname2024"]
  },
```

Keep the comma after the closing `}`: entries are separated by commas.

| Field | Shown on the site as | What to write |
|---|---|---|
| `word` | The headword | Capitalized like the existing words: "Hallucination", "Self-awareness". |
| `category` | Its filter tab | `technical` (Technical language), `behavior` (Attributed behavior) or `relationship` (Relationships). |
| `kind` | The label under the word | The kind of claim the word makes, e.g. *Technical analogy*, *Functional analogy*, *Contested attribution*, *Intent attribution*, *Human-role framing*. |
| `teaser` | The card's summary | One sentence. |
| `human` | The human meaning | The ordinary meaning in human life, psychology, biology or relationships. |
| `ai` | In artificial intelligence | The concrete operation, observed behavior or engineering construct the word names. |
| `analogy` | Where the analogy works | Why the borrowed word is illuminating. |
| `limit` | Where it breaks down (highlighted) | Where the resemblance stops being supported by evidence. |
| `stakes` | Why the distinction matters | How the word shapes research questions, trust, products or responsibility. |
| `question` | A question worth asking | One open question. |
| `refs` | In the literature | IDs of papers in `window.DICTIONARY_REFERENCES`; at least one. |

## Papers

Every word lists papers that use it to describe AI systems, shown in its entry under **In the literature**. A good list has the paper that introduced or popularized the AI usage and, where one exists, a paper that examines the term critically.

- **Peer-reviewed only:** journal articles and papers in peer-reviewed conference proceedings. No preprints, books, theses, blog posts or news. If a paper is also on arXiv, cite the published version.
- **Check before you cite:** only cite papers you have read, and confirm the title, authors, year and venue against the DOI record or the publisher's page.

Each paper is one line in `window.DICTIONARY_REFERENCES`:

```js
  "surname2024": { authors: "A. Surname & B. Other", year: "2024", title: "Exact title of the paper", venue: "ACL", url: "https://doi.org/10.xxxx/xxxxx", peerReviewed: true },
```

- **ID:** the first author's surname in lowercase plus the year; add `a`, `b`… if it's taken.
- **authors:** initials and surname. List up to three authors; write "A. Surname et al." for four or more.
- **venue:** the journal's or conference's short name: "NeurIPS", "CHI", "Nature".
- **url:** `https://doi.org/…` when the paper has a DOI, otherwise its official proceedings page. It must start with `https://`.
- **peerReviewed:** `true` confirms the paper is peer-reviewed. It isn't shown on the site, but the automated check only accepts papers marked this way.

## Add a paper to a word

1. Add the paper to `window.DICTIONARY_REFERENCES`, unless it's already there.
2. Add its ID to the word's `refs` list, e.g. `refs: ["jain2019", "surname2024"]`.
3. Open a pull request as described in [Add a word](#from-your-browser-no-git-needed).

## Style

- Follow the site's four steps: start with the human word, define the machine, test the analogy, ask what changes.
- Be precise and even-handed. The dictionary is neither an argument that machines are human nor a blanket rejection of analogy.
- Keep the kinds of claim apart: a mathematical term, a functional analogy and an attribution of inner experience are different things.
- One or two sentences per field, in your own words. Don't paste text from your sources.
- American spelling, to match the existing entries.
- If an AI tool helped you draft, check every claim and every paper yourself.

## Review

The maintainer reviews each pull request for accuracy, balance and fit, may suggest edits, and merges when it's ready.
