/* Scroll-to-top button — appears after 700px of scroll */
(function(){
var css=document.createElement('style');
css.textContent='.to-top{position:fixed;right:clamp(18px,3vw,34px);bottom:clamp(18px,3vw,34px);z-index:900;width:46px;height:46px;border-radius:50%;border:1px solid var(--line);background:var(--paper);color:var(--ink);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .24s ease,transform .24s ease,visibility .24s,background .18s ease,color .18s ease;box-shadow:0 10px 30px rgba(0,0,0,.12);}.to-top.on{opacity:1;visibility:visible;transform:none;}.to-top:hover{background:var(--ink);color:var(--paper);border-color:var(--ink);}.to-top svg{width:17px;height:17px;}@media print{.to-top{display:none;}}';
document.head.appendChild(css);
function mount(){
  if(document.querySelector('.to-top'))return;
  var b=document.createElement('button');
  b.className='to-top';b.type='button';b.setAttribute('aria-label','Back to top');
  b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="6"/><polyline points="5 12 12 5 19 12"/></svg>';
  b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  document.body.appendChild(b);
  var tick=false;
  function upd(){b.classList.toggle('on',window.scrollY>700);tick=false;}
  window.addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});
  upd();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
