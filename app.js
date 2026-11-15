(() => {
  'use strict';
  const entries = [...window.DICTIONARY_ENTRIES].sort((a,b) => a.word.localeCompare(b.word));
  const references = window.DICTIONARY_REFERENCES;
  const categoryNames = {technical:'Technical language',behavior:'Attributed behavior',relationship:'Relationships'};
  const contributeUrl = 'https://github.com/ngnawejonas/ai-anthropomorphism-dictionary/blob/main/CONTRIBUTING.md';
  const $ = selector => document.querySelector(selector);
  const grid = $('#word-grid');
  const search = $('#word-search');
  const resultCount = $('#result-count');
  const empty = $('#empty-state');
  const overlay = $('#entry-overlay');
  const panel = $('#entry-panel');
  const panelContent = $('#entry-panel-content');
  let activeFilter = 'all';
  let activeEntry = null;
  let lastFocus = null;
  let toastTimer = null;

  const escapeHtml = (s='') => String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const searchText = entry => [entry.word,entry.teaser,entry.kind,entry.human,entry.ai,entry.analogy,entry.limit,entry.stakes,entry.question,categoryNames[entry.category]].join(' ').toLocaleLowerCase();
  const pad = n => String(n).padStart(3,'0');

  function renderWords(){
    const query = search.value.trim().toLocaleLowerCase();
    const filtered = entries.filter(entry => (activeFilter==='all'||entry.category===activeFilter) && (!query || searchText(entry).includes(query)));
    resultCount.textContent = `${pad(filtered.length)} ${filtered.length===1?'ENTRY':'ENTRIES'}${query||activeFilter!=='all'?' / FILTERED':''}`;
    grid.innerHTML = filtered.map(entry => {
      const index = entries.indexOf(entry)+1;
      return `<button class="word-card" type="button" data-open="${slug(entry.word)}" aria-label="Read ${escapeHtml(entry.word)} entry">
        <span class="word-card-top"><span class="word-number">${pad(index)} <span style="color:#b1b9b0">/ ${pad(entries.length)}</span></span><span class="word-card-icon" aria-hidden="true">↗</span></span>
        <span><span class="word-card-word">${escapeHtml(entry.word)}</span><span class="word-card-teaser">${escapeHtml(entry.teaser)}</span></span>
        <span class="word-footer">${escapeHtml(categoryNames[entry.category])}</span>
      </button>`;
    }).join('');
    empty.hidden = filtered.length!==0;
  }

  function renderReadingList(){
    const items = [references.inie2026,references.devrio2025,references.ouraiwords2026,references.jain2019,references.wiegreffe2019];
    $('#reading-list').innerHTML = items.map((ref,i)=>`<a class="reading-item" target="_blank" rel="noopener noreferrer" href="${escapeHtml(ref.url)}">
      <span class="reading-index">${String(i+1).padStart(2,'0')}</span>
      <span><span class="reading-title">${escapeHtml(ref.title)}</span><span class="reading-authors">${escapeHtml(ref.authors)} · ${escapeHtml(ref.venue)}</span></span>
      <span class="reading-year">${escapeHtml(ref.year)}</span><span class="reading-arrow" aria-hidden="true">↗</span>
    </a>`).join('');
  }

  function renderEntry(entry){
    const i = entries.indexOf(entry);
    const parts = [
      ['The human meaning',entry.human],
      ['In artificial intelligence',entry.ai],
      ['Where the analogy works',entry.analogy],
      ['Where it breaks down',entry.limit],
      ['Why the distinction matters',entry.stakes]
    ];
    const papers = (entry.refs||[]).map(id => references[id]).filter(Boolean);
    const refBlock = `<div class="entry-sources"><h4>In the literature</h4>${papers.map(ref => `<a href="${escapeHtml(ref.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ref.authors)} (${escapeHtml(ref.year)}): ${escapeHtml(ref.title)} <span class="source-venue">${escapeHtml(ref.venue)}</span> <span aria-hidden="true">↗</span></a>`).join('')}<a class="source-suggest" href="${contributeUrl}#add-a-paper-to-a-word" target="_blank" rel="noopener noreferrer">${papers.length?'Suggest another paper':'No papers listed yet. Suggest one'} <span aria-hidden="true">↗</span></a></div>`;
    panelContent.innerHTML = `
      <div class="entry-meta"><span>WORD ${pad(i+1)} / ${pad(entries.length)}</span></div>
      <h2 class="entry-title" id="entry-heading">${escapeHtml(entry.word)}</h2>
      <div class="entry-kind">${escapeHtml(entry.kind)} <span style="color:#b0b9ae">·</span> ${escapeHtml(categoryNames[entry.category])}</div>
      <p class="entry-lede">${escapeHtml(entry.teaser)}</p>
      <hr class="entry-rule">
      ${parts.map(([label,body],i)=>`<div class="entry-block ${i===3?'emphasis':''}"><span class="entry-block-label">${escapeHtml(label)}</span><p class="entry-block-text">${escapeHtml(body)}</p></div>`).join('')}
      <div class="entry-question"><span>A question worth asking</span><p>${escapeHtml(entry.question)}</p></div>
      ${refBlock}`;
    $('#previous-entry').disabled = false;
    $('#next-entry').disabled = false;
    panelContent.scrollTop=0;
    activeEntry=entry;
  }

  function openEntry(entry){
    if(!entry) return;
    if(!overlay.classList.contains('open')) lastFocus=document.activeElement;
    renderEntry(entry);
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    $('#close-entry').focus({preventScroll:true});
  }

  function hideEntry(){
    const wasOpen=overlay.classList.contains('open');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    activeEntry=null;
    if(wasOpen && lastFocus?.isConnected) lastFocus.focus({preventScroll:true});
  }

  function updateFromHash(){
    const match=location.hash.match(/^#entry\/([a-z0-9-]+)$/);
    if(match){
      const entry=entries.find(x=>slug(x.word)===match[1]);
      if(entry){openEntry(entry);return;}
    }
    hideEntry();
  }

  function goToEntry(entry){
    if(!entry)return;
    const nextHash=`#entry/${slug(entry.word)}`;
    if(location.hash===nextHash)openEntry(entry);
    else location.hash=nextHash;
  }

  function closeEntry(){
    if(location.hash.startsWith('#entry/'))location.hash='#dictionary';
    else hideEntry();
  }

  function showToast(message){
    const toast=$('#toast');
    toast.textContent=message;
    toast.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer=window.setTimeout(()=>toast.classList.remove('visible'),2600);
  }

  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-open]');
    if(button){
      lastFocus=button;
      const entry=entries.find(x=>slug(x.word)===button.dataset.open);
      goToEntry(entry);
    }
  });
  search.addEventListener('input',renderWords);
  document.querySelectorAll('.filter-tab').forEach(button=>button.addEventListener('click',()=>{
    activeFilter=button.dataset.filter;
    document.querySelectorAll('.filter-tab').forEach(tab=>{
      const active=tab===button;
      tab.classList.toggle('active',active);
      tab.setAttribute('aria-pressed',String(active));
    });
    renderWords();
  }));
  $('#clear-filters').addEventListener('click',()=>{
    search.value='';
    document.querySelector('[data-filter="all"]').click();
    search.focus();
  });
  $('#close-entry').addEventListener('click',closeEntry);
  $('#overlay-scrim').addEventListener('click',closeEntry);
  $('#previous-entry').addEventListener('click',()=>{
    const i=entries.indexOf(activeEntry);if(i>=0)goToEntry(entries[(i-1+entries.length)%entries.length]);
  });
  $('#next-entry').addEventListener('click',()=>{
    const i=entries.indexOf(activeEntry);if(i>=0)goToEntry(entries[(i+1)%entries.length]);
  });
  $('#copy-entry').addEventListener('click',async()=>{
    if(!activeEntry)return;
    const url=location.href;
    try{
      await navigator.clipboard.writeText(url);
      showToast('Entry link copied');
    }catch{
      const el=document.createElement('textarea');el.value=url;el.style.position='fixed';el.style.left='-1000px';document.body.appendChild(el);el.select();
      const success=document.execCommand('copy');el.remove();
      showToast(success?'Entry link copied':'Copy this page URL from your browser');
    }
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&overlay.classList.contains('open')){event.preventDefault();closeEntry();return;}
    if((event.key==='/' || ((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k')) && !event.altKey && !overlay.classList.contains('open') && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){
      event.preventDefault();search.focus();$('#dictionary').scrollIntoView({behavior:'smooth',block:'start'});
    }
    if(event.key==='Tab'&&overlay.classList.contains('open')){
      const focusable=Array.from(panel.querySelectorAll('button:not([disabled]),a[href]'));
      if(!focusable.length)return;
      const first=focusable[0], last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
  window.addEventListener('hashchange',updateFromHash);
  renderWords();
  renderReadingList();
  updateFromHash();
})();
