(function(){
 const c=window.SITE_CONFIG;
 const qs=(s)=>document.querySelector(s); const qsa=(s)=>[...document.querySelectorAll(s)];
 document.title=c.brand.title; qs('meta[name="description"]').content=c.brand.description;
 qsa('[data-brand-name]').forEach(e=>e.textContent=c.brand.name); qsa('[data-brand-sub]').forEach(e=>e.textContent=c.brand.sub);
 qs('[data-hero-eyebrow]').textContent=c.hero.eyebrow; qs('[data-hero-title]').innerHTML=c.hero.title; qs('[data-hero-text]').textContent=c.hero.text; qs('[data-offer]').textContent=c.hero.offer;
 qsa('[data-phone]').forEach(e=>{e.textContent=c.shop.phone;e.href='tel:'+c.shop.phoneRaw});
 qsa('[data-booking]').forEach(e=>e.href=c.links.booking);
 const menu=qs('#menuGrid'); c.menus.forEach(m=>menu.insertAdjacentHTML('beforeend',`<article class="card"><span class="tag">${m.tag}</span><h3>${m.name}</h3><p>${m.desc}</p><div class="price">${m.price} <small>/ ${m.unit}</small></div><div class="option">${m.note}</div></article>`));
 const rev=qs('#reviewGrid'); c.reviews.forEach(r=>rev.insertAdjacentHTML('beforeend',`<div class="card voice"><div class="stars">★★★★★</div><p>「${r.text}」</p><div class="meta">${r.meta}</div></div>`));
 const faq=qs('#faqList'); c.faq.forEach(x=>faq.insertAdjacentHTML('beforeend',`<details><summary>Q. ${x[0]}</summary><p>${x[1]}</p></details>`));
 qs('[data-shop-name]').textContent=c.shop.displayName; qs('[data-address]').textContent=c.shop.address; qs('[data-station]').textContent=c.shop.station; qs('[data-hours]').textContent=c.shop.hours; qs('[data-closed]').textContent=c.shop.closed; qs('[data-payment]').textContent=c.shop.payment; qs('[data-email]').textContent=c.shop.email; qs('[data-instagram]').textContent=c.shop.instagram;
 document.getElementById('bookingForm').addEventListener('submit',function(e){e.preventDefault();const n=qs('#name').value,t=qs('#tel').value,d=qs('#date').value,ti=qs('#time').value,s=qs('#service').value,note=qs('#note').value;const subject=encodeURIComponent('【'+c.brand.name+'】WEB予約希望 '+n+'様');const body=encodeURIComponent('お名前：'+n+'\n電話番号：'+t+'\n希望日：'+d+'\n希望時間：'+ti+'\nメニュー：'+s+'\n備考：'+note);location.href='mailto:'+c.shop.email+'?subject='+subject+'&body='+body;});
})();
