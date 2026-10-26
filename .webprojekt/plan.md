# Három főoldal-koncepció

Állapot: a felhasználó jóváhagyta mindhárom irány megvalósítását.

Véglegesített eredeti betűpáros: Lora + Raleway. A korábbi betűazonosítási bizonytalanság feloldva.

## Közös alap

Eliza Beauty Salon, személyre szabott bőrfiatalító és anti-akné kezelések. Mindhárom változat a meglévő főoldali szövegeket, véleményeket, adatokat és elérhetőségeket használja. Elsődleges cél az időpontkérés; másodlagos cél a kezelések megismerése és az Arcápolási Kisokoshoz kapcsolódó feliratkozás. A mobilos megjelenés, a nyitható GYIK és az űrlapok vizuális állapotai mindháromhoz hozzátartoznak. A prototípusok küldési integráció nélkül nem jeleznek sikeres beküldést.

A felhasználó legújabb kérése felülírja a brief korábbi egységes rózsafa-arculatát: az első változat a PNG-n látható saját tervet követi, a másik kettő szabad szín- és betűválasztást kap.

## 1. Púder és levendula

A saját Figma-terv színvilága és tipográfiai karaktere: fehér oldal, halvány rózsaszín szakaszok, levendula gombok, szürkés szilvaszínű szöveg. Kétoszlopos nyitás, korai vendégvélemények, négy előny, hangsúlyos bemutatkozás; a PNG sorrendjét követő folytatás. Mérsékelt lekerekítések, levegős térközök.

Paletta kiindulóértékek a PNG alapján: primary #765782, secondary #B196BD, accent #FBE4F0, bg #FFFFFF, surface #FBE4F0, text #5F5664, muted #685F6C. Az eredeti világos levendula fehér felirattal gyenge kontrasztot adhat: a sötétebb primary használható a kis szöveges gombokon, az eredeti világos árnyalat nagy felületeken maradhat.

A betűcsaládok pontos neve nem nyerhető ki a raszteres PNG-ből. A képen talpas címsor és geometrikus talpatlan törzsszöveg látszik; a PDF Cormorant Garamond + Jost párosa nem azonosítható bizonyossággal a PNG betűivel. Az eredeti tipográfia pontos megtartásához a Figma betűnevei szükségesek. Addig a párosítás nincs véglegesítve.

## 2. Zsályakert

Mély zsályazöld #35594D főszín, világos zöldes törtfehér #F3F6EF háttér, lágy zsálya #E1E9DD felületek, mohazöld #274237 másodlagos szín, homok #C3AA80 dekoráció, #24382F szöveg és #526257 másodlagos szöveg.

Tipográfia: Lora 400/500/600 címsorok + Source Sans 3 400/500/600 törzs. A természetes hatóanyagokat és a nyugodt, privát kezelést kiemelő koncepció: nagy, ívesen záródó kezelési kép, mellette keskenyebb szöveg; az előnyök egy nyitott, kétoszlopos kompozícióban. A bemutatkozás korábban jelenik meg, a vélemények hosszabb idézetekként kapnak helyet. Organikus formák, kevés különálló doboz, puha, tágas ritmus.

## 3. Gyöngyház stúdió

Mély petrol #285563 főszín, gyöngyszürke #F0F3F5 háttér, fehér #FFFFFF felületek, sötét petrol #1D3D49 másodlagos szín, lágy kékesszürke #CEDDE2 dekoráció, #24343C szöveg és #52616A másodlagos szöveg.

Tipográfia: Libre Baskerville 400/700 címsorok + Manrope 400/500/600 törzs. A modern technológia és a személyre szabott szakmai gondoskodás hangsúlyosabb. Széles nyitófotó, alatta nagy, balra zárt cím és két hasábba rendezett bevezetés; határozottabb, kevésbé kerekített gombok. Váltakozó szélességű szöveges és képes részek, finom keretek; a négylépéses folyamat hosszanti sáv, a vélemények aszimmetrikus idézetpár. Világos oldal, nem sötét téma.

## Betűkészlet-ellenőrzés

A Lora, Source Sans 3, Libre Baskerville és Manrope Google Fonts metaadataiban szerepel a latin-ext részhalmaz. A megvalósítás során ezen felül a tényleges betűfájlok Unicode-karaktertérképén is ellenőrizni kell az összes magyar ékezetes kis- és nagybetűt: áéíóöőúüű ÁÉÍÓÖŐÚÜŰ. Próbaszöveg: „árnyéktűrő tükörfúrógép”, valamint ugyanez nagybetűvel. A fontot tartalékbetűs helyettesítés nélkül kell megjeleníteni.

Elsődleges ellenőrzési források:
- https://raw.githubusercontent.com/google/fonts/main/ofl/lora/METADATA.pb
- https://raw.githubusercontent.com/google/fonts/main/ofl/sourcesans3/METADATA.pb
- https://raw.githubusercontent.com/google/fonts/main/ofl/librebaskerville/METADATA.pb
- https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/METADATA.pb

## Elkészülő eredmény jóváhagyás után

- Három különálló, közvetlenül megnyitható HTML-főoldal, reszponzív elrendezéssel.
- Közös index.html a koncepciók összehasonlításához és megnyitásához.
- Statikus HTML + Tailwind prototípusok, dokumentált színekkel és betűkkel.
- Asztali és mobilos böngészőellenőrzés; betűkészlet-vizsgálat.

## Nyitott pontok

Az első koncepcióhoz az eredeti Figma címsor- és törzsszöveg-betűcsalád neve szükséges. Az irányjavaslatokra a generalas skill megvalósítás előtti jóváhagyást kér. Egyelőre sem jóváhagyottként jelölt állapot, sem elkészült prototípus nincs rögzítve.
