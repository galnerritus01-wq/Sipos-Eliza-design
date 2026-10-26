# Sipos Eliza – a főoldal terve

## Vizuális koncepció

**Személyes törődés, nyugodt szakértelem.** A nyitókép egy kezelés közeli, természetes pillanata, mellette jól olvasható, balra zárt szöveg. Az oldal jellegzetes eleme az Elizát bemutató púder hátterű portrészakasz. A többi rész visszafogott, így a figyelem a szakértőn és a vendég döntésén marad.

A Figma-referenciából megtartjuk a kétoszlopos nyitást, a korai véleményeket, a négylépéses folyamatot, a külön GYIK-et, a hírlevélblokkot és az oldalvégi kapcsolatfelvételt. A lila szakaszok helyett púdert, a csillogó hátterek helyett egyszínű felületeket alkalmazunk a mellékelt arculat szerint. A PNG-n megjelenő közösségi ikonokat elhagyjuk, mert az ügyféljegyzet szerint nincs közösségi média.

## Elrendezési alapok

- Legfeljebb 1200 px tartalomszélesség; 1440 px-es nézeten 120 px oldalmargó.
- Folyó szöveg legfeljebb 680 px; kétoszlopos szakaszokban 480–560 px.
- Szakaszok közötti tér 96–128 px, mobilon 64 px; mobil oldalmargó 20 px.
- H1 64/40 px; H2 44/32 px; H3 28/24 px; törzs 18/16 px. A két érték asztali/mobil méretet jelöl.
- Rózsafa kapszulagombok, fehér felirat; másodlagos gomb rózsafa körvonallal. Minimum 44 px magas érintési célok.
- Képek 16 px, mezők 12 px lekerekítéssel. Nincs dekoratív színátmenet vagy ismétlődő árnyék.
- Alapvetően balra zárt szövegek; a folyamat és a GYIK címe lehet középre zárt. Bekezdést nem sorkizárunk.

## A főoldal felépítése és szövegei

### 1. Fejléc

Világos háttér, bal oldalon az eredeti `logo.svg`; jobb oldalon Főoldal, Kezelések, Rólunk, Kapcsolat és kiemelt **Időpontot kérek** gomb. A gomb a főoldali időpontkérőhöz visz. Az aktív menüpont vizuálisan és akadálymentes állapottal is megkülönböztethető. Mobilon logó és nyitható menü; a menüben az időpontkérés is szerepel.

### 2. Nyitószakasz

Krém háttér; bal oldalon körülbelül 52% szöveg, jobb oldalon 48% álló, kezelést ábrázoló kép. Nem írunk szöveget a fotóra.

- Kis felirat: **A szépség mindenkié**.
- Egyetlen H1: **Személyre szabott kozmetikai kezelések**.
- Az eredeti hero teljes bekezdése a `fooldal-szovegek.md` fájlból, tartalmi módosítás nélkül. A hossz miatt a szöveg a gombokkal együtt is szellős blokkot kap; nem apró betűvel fér el.
- Elsődleges gomb: **Időpontot kérek**, az időpontkérőre görget.
- Másodlagos gomb, az eredeti szöveggel: **Megnézem a kezeléseket**, a Kezelések oldalra visz.

Mobilon szöveg, gombok, majd kép; a kép legfeljebb körülbelül 360 px magas. Az első képernyőn az ajánlat és az időpontkérés kap elsőbbséget.

### 3. Vélemények

Kis felirat: **A minőség mércéje: a visszatérő vendégek**. Cím: **Valódi eredmények, elégedett vendégek**.

Fruzsi és Magdi teljes, meglévő idézete két egymás melletti, halvány púder felületen. Név az idézet alatt. Nem teszünk hozzá csillagszámot, platformlogót vagy kitalált vendégfotót. Mobilon egymás alatt; nem automatikusan forgó karusszel.

### 4. Szakértelem és előnyök

Cím: **Bízd magad szakértő kezekre**. Alatta az eredeti bevezető teljes szövege, utána négy előny: **Bőrtípushoz igazodok**, **Fájdalommentes kezelések**, **Elégedettségi garancia**, **Exkluzív környezet**. Mindegyikhez a forrásban szereplő teljes bekezdés.

Púder háttér, négy oszlop, egyszerű rózsafa vonalas ikonokkal. A garancia feltétele ugyanolyan jól olvasható törzsszöveg, mint a többi előny: 5 alkalmas kezelés után elégedetlenség esetén 50% visszatérítés. Tableten két, mobilon egy oszlop.

### 5. Bemutatkozás

Cím: **Ismerd meg a szakértődet!** Balra valódi Eliza-portré, jobbra az eredeti, „Sipos Eliza vagyok…” kezdetű teljes szöveg. Púder felület krémszínű környezettel; a hangsúlyt a portré és a cím adja.

A bekezdés alatt a forrás szerinti három adat: **14+ év tapasztalat**, **1300+ vendég**, **350+ féle kozmetikum**. Ezek forrásból átvett adatok, az évszámhoz igazítva nem növeljük őket automatikusan. Gomb: **Tovább olvasok**, a Rólunk oldalra.

Mobilon portré, cím, szöveg, adatok, gomb. Stock modell portréját nem nevezzük Elizának.

### 6. A kezelés folyamata

Cím: **Hogyan működik?** Négy lépés az eredeti leírásokkal:

1. **Időpont-egyeztetés**.
2. **Diagnosztika és kezelési terv**.
3. **Kozmetikai kezelés**.
4. **Tanácsok otthonra**.

Asztali nézetben négy oszlop. A számozás itt valódi sorrendet jelez. A Figma képes megoldása helyett első körben finom vonalas ikonokkal is működik; csak jó minőségű, összetartozó képsor esetén használunk négy fotót. Mobilon függőleges lépéssor, minden szöveg nyitva olvasható.

### 7. Időpontkérésre ösztönző sáv

Sötét kakaó háttér, krémszínű szöveg. Cím: **Fektess bőröd szépségébe – megéri!** A forrás teljes bekezdése. Mellette **Időpontot kérek** gomb az oldalvégi űrlaphoz. Mobilon a gomb a szöveg alatt. Fotós vagy csillogó háttér helyett a tipográfia és a kontraszt emeli ki.

### 8. Gyakran ismételt kérdések

Világos, keskenyebb szakasz, a négy meglévő kérdés és eredeti válasza:

- **Időpont nélkül is érkezhetek?**
- **Honnan tudjam, hogy melyik kezelés való nekem?**
- **Kapok segítséget az otthoni rutinomhoz?**
- **Hogyan tudok fizetni?**

Nyitható elemek, jól látható nyitásjelzéssel, billentyűzetről is használhatók. Az első válasz induláskor nyitva lehet. A tartalom JavaScript nélkül is elérhető megoldást kapjon.

### 9. Arcápolási Kisokos

Púder felület, két oszlop. Balra a valódi kiadvány borítója, ha rendelkezésre áll; különben egyszerű tipográfiai kiadványillusztráció, nem kitalált tartalomjegyzék. Jobbra: **Iratkozz fel és töltsd le az Arcápolási Kisokost!**, a meglévő bekezdés, teljes név és e-mail mező.

Az eredeti „Elolvastam és elfogadom az adatvédelmi nyilatkozatot.” jelölőnégyzethez kattintható tájékoztató tartozik. Éles megvalósításkor külön, egyértelmű hírlevél-hozzájárulási szöveg és nem előre bejelölt mező szükséges. Gomb: **Kérem az ingyenes kisokost**. Sikerjelzést csak ténylegesen elfogadott feliratkozás után mutatunk.

Mobilon cím, leírás, mezők, gomb; az illusztráció ezután is kerülhet, hogy az űrlap könnyen elérhető maradjon.

### 10. Kapcsolat és időpontkérés

Az oldal elsődleges célpontja, `idopontkeres` horgonyazonosítóval. Cím: **Foglalj időpontot, és induljon a változás!** Bevezető: **Kérdésed van a kezelésekről, vagy időpontot szeretnél egyeztetni? Keress bizalommal, és segítek megtalálni a számodra legjobb megoldást!**

Balra az űrlap: **Teljes név**, **E-mail cím**, **Üzenet**, **Küldés** gomb. Minden mező állandó címkével, a hibák az adott mező mellett. Az adatkezelési tájékoztató az űrlapnál is elérhető. A hírlevélhez adott hozzájárulást nem kötjük az időpontkéréshez.

Jobbra jól olvasható kapcsolati blokk:

- **1092 Budapest, Ráday u. 1.**
- **+36 20 344 9272**
- **hello.elizabeauty@gmail.com**
- **H–P: 9:00–16:00; Szo–V: zárva**.
- Kizárólag előre egyeztetett időpontra.

A cím térképre nyitható. A PNG térképes elrendezését ez a könnyebben olvasható kapcsolati blokk váltja fel. Mobilon az űrlap után az elérhetőségek következnek. A folyamat időpontkérés, ezért a sikerüzenet beérkezett megkeresést jelez, nem visszaigazolt foglalást.

### 11. Lábléc

Sötét kakaó háttér, eredeti fehér logó, a forrás teljes rövid bemutatkozása. Külön oszlopokban az elérhetőségek, nyitvatartás és oldallinkek. Alul: **© Eliza Beauty Salon – Minden jog fenntartva!**, mellette **Adatkezelési tájékoztató**. Nem szerepelnek üres közösségi ikonok.

## Egyszerű drótváz

```text
LOGÓ                         Menü               Időpontot kérek
-------------------------------------------------------------
A szépség mindenkié                  |
Személyre szabott                    | Természetes fényű
kozmetikai kezelések                 | kezelési fotó
Meglévő leírás és két gomb            |
-------------------------------------------------------------
Valódi eredmények, elégedett vendégek
Fruzsi véleménye                     | Magdi véleménye
-------------------------------------------------------------
Bízd magad szakértő kezekre
Négy előny teljes, meglévő leírásokkal
-------------------------------------------------------------
Eliza portréja                       | Ismerd meg a szakértődet!
                                     | Bemutatkozás, adatok, gomb
-------------------------------------------------------------
Hogyan működik? – négy egymást követő lépés
-------------------------------------------------------------
Fektess bőröd szépségébe – megéri!      Időpontot kérek
-------------------------------------------------------------
Gyakran ismételt kérdések – négy nyitható válasz
-------------------------------------------------------------
Kisokos illusztrációja                | Hírlevél-feliratkozás
-------------------------------------------------------------
Időpontkérő űrlap                    | Elérhetőségek, nyitvatartás
-------------------------------------------------------------
Logó, bemutatkozás | Elérhetőségek | Oldalak | Adatkezelés
```

## Tartalmi és megvalósítási ellenőrzés

A terv az összes meglévő főoldali szakaszt felhasználja; nem ad hozzá új kezelési ígéreteket, árakat vagy vendégértékeléseket. A teljes bekezdések külön forrásfájlban rendelkezésre állnak, a fenti címek nem helyettesítik azokat.

A két hasonló „foglalás” és „időpontkérés” kifejezést a meglévő címsorokban megtartjuk; az új navigációs gombok egységesen **Időpontot kérek** feliratot kapnak, mert Eliza személyesen egyeztet vissza.

A forrás hero „nincs kockázat” állítását nem erősítjük további ígéretekkel. A publikálás előtti tartalomellenőrzésben ennek pontosítása és a garanciamegfogalmazások egységesítése külön feladat; a jelen terv nem írja át önállóan a kapott szöveget.

A megvalósítás elfogadási feltételei: nincs vízszintes túlcsordulás 360 px-en sem; a menü és a GYIK billentyűzetről kezelhető; minden gomb valódi célra vezet; a fotókhoz valósághű alternatív szöveg tartozik; a mezőhibák és sikerállapotok érthetők; a sikerjelzés valós küldéshez kötött; a hírlevél és az időpontkérés külön folyamat. A homokarany csak dekoráció vagy sötét alapon szöveg, világos háttéren nem információhordozó felirat.

## A terv határa

Ez a dokumentum a főoldal részletes tartalmi, vizuális és működési terve. Még nem elkészült weboldal és nem működő űrlaprendszer. Az eredeti logók rendelkezésre állnak; külön felhasználható fotók, Kisokos és küldési integráció még szükségesek a teljes megvalósításhoz.
