/* Light/dark theme toggle — light is default */
(function(){
var KEY='fk-theme';
var css=document.createElement('style');
css.textContent=[
':root[data-theme="dark"]{--ink:#f3f1ee;--ink-soft:#e4e1dc;--muted:#8e8a85;--muted-2:#6d6963;--line:#2b2b29;--line-soft:#212120;--paper:#0e0e0e;--paper-2:#181817;--accent:#e2733f;}',
':root[data-theme="dark"] .nav{background:rgba(14,14,14,.86);}',
':root[data-theme="dark"] .nav-links{background:var(--paper);}',
':root[data-theme="dark"] img,:root[data-theme="dark"] image-slot{filter:brightness(.94);}',
':root[data-theme="dark"] .frame,:root[data-theme="dark"] .frame-bar{background:var(--paper-2);}',
'.theme-btn{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border:1px solid var(--line);border-radius:50%;background:none;color:var(--ink-soft);cursor:pointer;padding:0;flex:none;transition:border-color .18s ease,color .18s ease;}',
'.theme-btn:hover{border-color:var(--ink);color:var(--ink);}',
'.theme-btn svg{width:14px;height:14px;}',
'.theme-btn .ic-moon{display:none;}',
':root[data-theme="dark"] .theme-btn .ic-moon{display:block;}',
':root[data-theme="dark"] .theme-btn .ic-sun{display:none;}'
].join('');
document.head.appendChild(css);
var stored=null;try{stored=localStorage.getItem(KEY);}catch(e){}
document.documentElement.setAttribute('data-theme',stored==='dark'?'dark':'light');
function mount(){
  var nav=document.getElementById('navLinks');if(!nav||nav.querySelector('.theme-btn'))return;
  var b=document.createElement('button');
  b.className='theme-btn';b.type='button';b.setAttribute('aria-label','Toggle dark mode');
  b.innerHTML='<svg class="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><line x1="12" y1="2" x2="12" y2="4.4"/><line x1="12" y1="19.6" x2="12" y2="22"/><line x1="2" y1="12" x2="4.4" y2="12"/><line x1="19.6" y1="12" x2="22" y2="12"/><line x1="4.9" y1="4.9" x2="6.6" y2="6.6"/><line x1="17.4" y1="17.4" x2="19.1" y2="19.1"/><line x1="4.9" y1="19.1" x2="6.6" y2="17.4"/><line x1="17.4" y1="6.6" x2="19.1" y2="4.9"/></svg>'
    +'<svg class="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>';
  b.addEventListener('click',function(){
    var next=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',next);
    try{localStorage.setItem(KEY,next);}catch(e){}
  });
  nav.appendChild(b);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
