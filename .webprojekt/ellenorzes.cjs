const {chromium}=require('C:/Users/HP/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs');
const path=require('path');
const {pathToFileURL}=require('url');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 const directions=JSON.parse(fs.readFileSync('.webprojekt/iranyok.json','utf8')).directions;
 const results=[];
 fs.mkdirSync('.webprojekt/ellenorzes',{recursive:true});
 for(const direction of directions){
  const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve(direction.file)).href,{waitUntil:'domcontentloaded'});
  await page.evaluate(async()=>{await Promise.all([...document.images].map(async image=>{image.loading='eager';try{await image.decode()}catch{}}));});
  await page.evaluate(()=>document.fonts.ready);
  await page.screenshot({path:`.webprojekt/ellenorzes/${direction.slug}-desktop.png`,fullPage:true});
  await page.screenshot({path:`.webprojekt/ellenorzes/${direction.slug}-hero.png`});
  const desktop=await page.evaluate(()=>({title:document.title,h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.getAttribute('src')),missingAnchors:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h.length>1&&!document.getElementById(h.slice(1))),fonts:[...document.fonts].map(f=>({family:f.family,status:f.status})),forms:document.forms.length,faq:document.querySelectorAll('details').length}));
  const faq=page.locator('details').first();const wasOpen=await faq.getAttribute('open')!==null;await faq.locator('summary').click();const faqOpens=(await faq.getAttribute('open')!==null)!==wasOpen;
  await page.setViewportSize({width:375,height:850});await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:`.webprojekt/ellenorzes/${direction.slug}-mobile.png`,fullPage:true});
  const mobile=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,wideElements:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>innerWidth+1&&getComputedStyle(e).position!=='fixed').slice(0,8).map(e=>e.tagName+'.'+e.className)}));
  const toggler=page.locator('button[aria-expanded]').first();let menuOpens=false;
  if(await toggler.count()){await toggler.click();menuOpens=await toggler.getAttribute('aria-expanded')==='true';await toggler.click();}
  const forms=[];
  for(const form of await page.locator('form').all()){
   await form.locator('input:not([type=checkbox]):not([type=hidden])').evaluateAll(inputs=>inputs.forEach(i=>i.value=i.type==='email'?'teszt@example.com':'Teszt Elek'));
   await form.locator('textarea').evaluateAll(items=>items.forEach(i=>i.value='Bemutató tesztüzenet.'));
   await form.locator('input[type=checkbox]').evaluateAll(items=>items.forEach(i=>i.checked=true));
   await form.evaluate(f=>f.requestSubmit());
   forms.push(await form.innerText());
  }
  results.push({file:direction.file,desktop,mobile,faqOpens,menuOpens,errors,formMessages:forms.map(t=>t.slice(-350))});
  await page.close();
 }
 fs.writeFileSync('.webprojekt/ellenorzes/eredmenyek.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify(results,null,2));
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
