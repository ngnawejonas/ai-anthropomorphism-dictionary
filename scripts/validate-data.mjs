// Validates data.js. The file is parsed, never executed: it may only contain
// comments and `window.NAME = <literal>;` assignments, so a pull request can't
// slip code onto the site through it.
// Usage: node scripts/validate-data.mjs [path/to/data.js]
import { readFileSync } from 'node:fs';

const GLOBALS = ['DICTIONARY_ENTRIES', 'DICTIONARY_REFERENCES'];
const CATEGORIES = ['technical', 'behavior', 'relationship'];
const ENTRY_TEXT = ['word', 'category', 'kind', 'teaser', 'human', 'ai', 'analogy', 'limit', 'stakes', 'question'];
const REFERENCE_TEXT = ['authors', 'year', 'title', 'venue', 'url'];
// Same as slug() in app.js, which builds the #entry/<slug> links.
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const isObject = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const isText = v => typeof v === 'string' && v.trim() !== '';

class ParseError extends Error {
  constructor(message, text, at) {
    super(message);
    const before = text.slice(0, at);
    this.line = before.split('\n').length;
    this.col = at - before.lastIndexOf('\n');
  }
}

function parse(text) {
  const NAME = /[A-Za-z_$][\w$]*/y, NUMBER = /-?\d+(?:\.\d+)?/y;
  const ESCAPES = {n:'\n', t:'\t', r:'\r', b:'\b', f:'\f', v:'\v', 0:'\0', '\\':'\\', "'":"'", '"':'"', '/':'/'};
  let i = 0;
  const fail = (message, at = i) => { throw new ParseError(message, text, at); };
  const read = re => { re.lastIndex = i; const m = re.exec(text); if (m) i = re.lastIndex; return m?.[0]; };
  const skip = () => {
    for (;;) {
      if (/\s/.test(text[i] ?? '')) i++;
      else if (text.startsWith('//', i)) { const end = text.indexOf('\n', i); i = end === -1 ? text.length : end; }
      else if (text.startsWith('/*', i)) { const end = text.indexOf('*/', i + 2); if (end === -1) fail('a /* comment */ is never closed'); i = end + 2; }
      else return;
    }
  };
  const string = () => {
    const quote = text[i++];
    let out = '';
    for (;;) {
      const ch = text[i++];
      if (ch === quote) return out;
      if (ch === undefined || ch === '\n') fail('text is missing its closing quote', i - 1);
      if (ch !== '\\') { out += ch; continue; }
      const esc = text[i++], hex = text.slice(i, i + 4);
      if (esc === 'u' && /^[0-9a-fA-F]{4}$/.test(hex)) { out += String.fromCharCode(parseInt(hex, 16)); i += 4; }
      else if (Object.hasOwn(ESCAPES, esc)) out += ESCAPES[esc];
      else fail(`unsupported escape "\\${esc}" in text`, i - 2);
    }
  };
  const value = () => {
    skip();
    const at = i;
    if (text[i] === '"' || text[i] === "'") return string();
    if (text[i] === '[') {
      i++;
      const list = [];
      for (skip(); text[i] !== ']'; skip()) {
        list.push(value());
        skip();
        if (text[i] === ',') i++;
        else if (text[i] !== ']') fail('expected "," or "]" here (is a comma missing?)');
      }
      i++;
      return list;
    }
    if (text[i] === '{') {
      i++;
      const object = {};
      for (skip(); text[i] !== '}'; skip()) {
        const keyAt = i;
        const key = text[i] === '"' || text[i] === "'" ? string() : read(NAME);
        if (key === undefined) fail('expected a field name');
        if (key === '__proto__') fail('"__proto__" can\'t be used as a field name', keyAt);
        if (Object.hasOwn(object, key)) fail(`field "${key}" appears twice`, keyAt);
        skip();
        if (text[i] !== ':') fail(`expected ":" after "${key}"`);
        i++;
        object[key] = value();
        skip();
        if (text[i] === ',') i++;
        else if (text[i] !== '}') fail('expected "," or "}" here (is a comma missing?)');
      }
      i++;
      return object;
    }
    const number = read(NUMBER);
    if (number !== undefined) return Number(number);
    const word = read(NAME);
    if (word === 'true' || word === 'false') return word === 'true';
    if (word === 'null') return null;
    fail('expected text in quotes, a number, true/false, a list [...] or an object {...}; code isn\'t allowed in data.js', at);
  };

  const globals = {};
  for (skip(); i < text.length; skip()) {
    const at = i;
    if (read(NAME) !== 'window' || text[i] !== '.') fail('data.js may only contain "window.NAME = ..." assignments', at);
    i++;
    const name = read(NAME);
    if (!GLOBALS.includes(name)) fail(`only ${GLOBALS.map(g => `window.${g}`).join(' and ')} belong in data.js`, at);
    if (Object.hasOwn(globals, name)) fail(`window.${name} is assigned twice`, at);
    skip();
    if (text[i] !== '=') fail('expected "="');
    i++;
    globals[name] = value();
    skip();
    if (text[i] === ';') i++;
  }
  return globals;
}

function validate({DICTIONARY_ENTRIES: entries, DICTIONARY_REFERENCES: references}) {
  const errors = [];
  if (!isObject(references)) {
    errors.push('window.DICTIONARY_REFERENCES must be an object {...} of papers');
    references = {};
  }
  for (const [id, ref] of Object.entries(references)) {
    const where = `reference "${id}"`;
    if (!isObject(ref)) { errors.push(`${where} must be an object {...}`); continue; }
    for (const field of REFERENCE_TEXT) if (!isText(ref[field])) errors.push(`${where}: "${field}" is required (text in quotes)`);
    if (typeof ref.peerReviewed !== 'boolean') errors.push(`${where}: "peerReviewed" must be true or false`);
    for (const field of Object.keys(ref)) if (![...REFERENCE_TEXT, 'peerReviewed'].includes(field)) errors.push(`${where}: unknown field "${field}"`);
    if (isText(ref.url) && !/^https:\/\/[^\s"'<>]+$/.test(ref.url)) errors.push(`${where}: "url" must be a web address starting with https://`);
  }

  if (!Array.isArray(entries)) {
    errors.push('window.DICTIONARY_ENTRIES must be a list [...] of entries');
    return {errors, entries: 0, references: Object.keys(references).length};
  }
  const slugs = new Map();
  entries.forEach((entry, n) => {
    const where = isText(entry?.word) ? `"${entry.word}"` : `entry ${n + 1}`;
    if (!isObject(entry)) { errors.push(`${where} must be an object {...}`); return; }
    for (const field of ENTRY_TEXT) if (!isText(entry[field])) errors.push(`${where}: "${field}" is required (text in quotes)`);
    for (const field of Object.keys(entry)) if (![...ENTRY_TEXT, 'refs'].includes(field)) errors.push(`${where}: unknown field "${field}"`);
    if (isText(entry.category) && !CATEGORIES.includes(entry.category)) errors.push(`${where}: "category" must be one of ${CATEGORIES.map(c => `"${c}"`).join(', ')}`);

    const refs = entry.refs ?? [];
    if (!Array.isArray(refs) || !refs.every(isText)) errors.push(`${where}: "refs" must be a list of reference IDs in quotes`);
    else {
      for (const id of refs) {
        if (!Object.hasOwn(references, id)) errors.push(`${where}: "${id}" isn't in window.DICTIONARY_REFERENCES`);
        else if (references[id]?.peerReviewed !== true) errors.push(`${where}: "${id}" must be a peer-reviewed paper (journal or conference proceedings) marked peerReviewed: true`);
      }
      if (new Set(refs).size !== refs.length) errors.push(`${where}: "refs" lists the same paper twice`);
    }

    if (isText(entry.word)) {
      const s = slug(entry.word);
      if (!s) errors.push(`${where}: the word needs at least one letter a-z or digit for its link`);
      else if (slugs.has(s)) errors.push(`${where}: already in the dictionary as "${slugs.get(s)}" (both would link to #entry/${s})`);
      else slugs.set(s, entry.word);
    }
  });
  return {errors, entries: entries.length, references: Object.keys(references).length};
}

const ci = process.env.GITHUB_ACTIONS === 'true';
const text = readFileSync(process.argv[2] ?? new URL('../data.js', import.meta.url), 'utf8');
let data;
try {
  data = parse(text);
} catch (error) {
  if (!(error instanceof ParseError)) throw error;
  console.log(ci ? `::error file=data.js,line=${error.line},col=${error.col}::${error.message}` : `data.js:${error.line}:${error.col}: ${error.message}`);
  process.exit(1);
}
const result = validate(data);
for (const message of result.errors) console.log(ci ? `::error file=data.js::${message}` : `✗ ${message}`);
if (result.errors.length) {
  console.log(`\ndata.js has ${result.errors.length} problem${result.errors.length === 1 ? '' : 's'} to fix.`);
  process.exit(1);
}
console.log(`data.js is valid: ${result.entries} entries, ${result.references} references.`);
