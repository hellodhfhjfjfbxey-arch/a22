(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var DN=[[8,.18,'Ultra-sheer','Barely there: a smooth, bare-leg look.','Summer evenings, weddings','Light'],[15,.32,'Sheer','The classic sheer finish, with a soft sheen.','Dresses, evenings, formal wear','Light'],[20,.42,'Sheer','A touch more coverage, still elegant.','Office and evening','Light'],[40,.62,'Semi-opaque','Everyday: hint of skin, good durability.','Work, weekends, spring and autumn','Medium'],[60,.8,'Opaque','A solid colour with a soft matt finish.','Boots, knits, cooler days','Warm'],[80,.9,'Opaque','Strong, warm and long-lasting.','Winter skirts and dresses','Warm'],[100,.96,'Thick opaque','Very warm, almost like leggings.','Cold days, wool skirts','Very warm'],[150,1,'Fleece-lined','Plush and cosy, for real cold.','Winter walks, the coldest days','Warmest']];
var ds=$('dn-s');if(ds){var cs=[].slice.call(document.querySelectorAll('input[name=dc]'));function dn(){var d=DN[+ds.value],c='#121012';cs.forEach(function(e){if(e.checked)c=e.value;});$('dn-o').textContent=d[0];$('dn-l').style.opacity=d[1];$('dn-l').setAttribute('fill',c);$('dn-k').style.opacity=d[1]>.5?.5:.15;
  $('dn-r').innerHTML='<h3>'+d[0]+' denier &middot; '+d[2]+'</h3><p>'+d[3]+'</p><dl><dt>Wear it for</dt><dd>'+d[4]+'</dd><dt>Warmth</dt><dd>'+d[5]+'</dd></dl>';}ds.addEventListener('input',dn);cs.forEach(function(e){e.addEventListener('change',dn);});dn();}
var sl=[].slice.call(document.querySelectorAll('.hs-lb-s')),th=[].slice.call(document.querySelectorAll('.hs-lb-th')),bar=$('lb-bar');if(sl.length){var k=0,t0=performance.now(),D=6000,paused=false;
 function go(i){k=(i+sl.length)%sl.length;sl.forEach(function(s,j){s.classList.toggle('on',j===k);});th.forEach(function(b,j){b.classList.toggle('on',j===k);});t0=performance.now();}
 th.forEach(function(b,i){b.addEventListener('click',function(){go(i);});});var lb=document.querySelector('.hs-lb');lb.addEventListener('mouseenter',function(){paused=true;});lb.addEventListener('mouseleave',function(){paused=false;t0=performance.now()-parseFloat(bar.style.width||0)/100*D;});
 function loop(t){if(!paused&&!rm){var p=(t-t0)/D;if(p>=1){go(k+1);p=0;}bar.style.width=(p*100)+'%';}requestAnimationFrame(loop);}requestAnimationFrame(loop);}
var sh=$('sz-h');if(sh){var sw=$('sz-w'),g=$('sz-g'),L=['S','M','L','XL','XXL'];g.innerHTML=Array.apply(null,Array(25)).map(function(_,i){return '<i>'+L[Math.min(4,Math.floor((i%5+Math.floor(i/5))/2))]+'</i>';}).join('');var cells=[].slice.call(g.children);
 function sz(){var h=+sh.value,w=+sw.value;$('sz-ho').textContent=h+' cm';$('sz-wo').textContent=w+' kg';var c=Math.min(4,Math.max(0,Math.floor((h-150)/8))),r=Math.min(4,Math.max(0,Math.floor((w-40)/14))),s=L[Math.min(4,Math.floor((c+r)/2))];
  cells.forEach(function(e,i){e.classList.toggle('on',i===r*5+c);});$('sz-o').innerHTML='Most brands would suggest <b>'+s+'</b>. If you are between sizes, choose the larger for comfort and length.';}
 sh.addEventListener('input',sz);sw.addEventListener('input',sz);sz();}
})();
