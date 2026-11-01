const fs=require('fs');const f='zsalyakert-kezelesek.html';let s=fs.readFileSync(f,'utf8');const opening='<section class="callout guarantee-callout"><div class="wrap">';if(!s.includes(opening))throw Error('Guarantee not found');s=s.replace(opening,`<section class="callout guarantee-callout"><div class="guarantee-product guarantee-product-left" aria-hidden="true"><img src="images/figma-belico.webp" alt="" loading="lazy"></div><div class="guarantee-product guarantee-product-right" aria-hidden="true"><img src="images/figma-mesotica.webp" alt="" loading="lazy"></div><div class="wrap">`);s=s.replace('</head>',`<style id="guarantee-product-arches">
.guarantee-callout{min-height:330px;display:flex;align-items:center;padding-block:72px}
.guarantee-callout::before,.guarantee-callout::after{display:none}
.guarantee-callout>.wrap{width:min(660px,calc(100% - 480px));margin-inline:auto}
.guarantee-callout h2{font-size:clamp(28px,3vw,42px)}
.guarantee-product{position:absolute;top:50%;width:200px;height:244px;transform:translateY(-50%);pointer-events:none}
.guarantee-product img{width:100%;height:100%;object-fit:cover;display:block}
.guarantee-product::after{content:'';position:absolute;inset:-10px;border:1px solid rgba(251,228,240,.65);pointer-events:none}
.guarantee-product-left{left:-1px}.guarantee-product-right{right:-1px}
.guarantee-product-left img,.guarantee-product-left::after{border-radius:0 130px 130px 0}
.guarantee-product-right img,.guarantee-product-right::after{border-radius:130px 0 0 130px}
@media(max-width:850px){.guarantee-product{width:140px;height:210px}.guarantee-callout>.wrap{width:calc(100% - 340px)}.guarantee-callout{padding-block:60px}}
@media(max-width:650px){.guarantee-callout{display:block;padding:36px 0 48px;min-height:0}.guarantee-callout>.wrap{width:calc(100% - 40px);padding-top:186px}.guarantee-product{top:34px;transform:none;width:132px;height:150px}.guarantee-callout h2{font-size:30px}.guarantee-product::after{inset:-7px}}
</style></head>`);fs.writeFileSync(f,s);console.log('Belico and Mesotica half-arch product images added.');
