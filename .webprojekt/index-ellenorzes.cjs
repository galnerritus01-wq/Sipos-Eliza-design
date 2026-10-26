const {chromium}=require('C:/Users/HP/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs'),path=require('path');const{pathToFileURL}=require('url');
(async()=>{const b=await chromium.launch({headless:true,channel:'msedge'});const p=await b.newPage({reducedMotion:'reduce'});const report=[];
for(const file of ['index.html','koncepcio-1-puder-levendula.html','koncepcio-2-zsalyakert.html','koncepcio-3-gyongyhaz.html']){
 await p.goto(pathToFileURL(path.resolve(file)).href);await p.evaluate(()=>document.fonts.ready);
 const links=await p.locator('a[href$=".html"]').evaluateAll(items=>items.map(i=>i.getAttribute('href')));
 if(links.some(l=>!fs.existsSync(l)))throw new Error('Missing HTML link in '+file);
 for(const width of [1440,768,375,360]){await p.setViewportSize({width,height:900});const overflow=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);report.push({file,width,overflow});if(overflow)throw new Error('Overflow '+file+' '+width)}
 if(file==='index.html'){await p.setViewportSize({width:1440,height:1100});await p.screenshot({path:'.webprojekt/ellenorzes/index-desktop.png',fullPage:true});}
 else{await p.setViewportSize({width:375,height:850});await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:'.webprojekt/ellenorzes/'+file.replace('.html','')+'-mobile-hero.png'});}
}
console.log(JSON.stringify(report));await b.close()})().catch(e=>{console.error(e);process.exit(1)});
