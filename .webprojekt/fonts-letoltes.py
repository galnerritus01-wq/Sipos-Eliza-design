from pathlib import Path
import urllib.request, urllib.parse, json, re, struct

root = Path(__file__).resolve().parent.parent
base = 'https://raw.githubusercontent.com/google/fonts/main/ofl/'
items = {'lora': 'Lora', 'raleway': 'Raleway', 'sourcesans3': 'SourceSans3', 'librebaskerville': 'LibreBaskerville', 'manrope': 'Manrope'}
report = []
for folder, name in items.items():
    family = {'Lora': 'Lora', 'Raleway': 'Raleway', 'SourceSans3': 'Source Sans 3', 'LibreBaskerville': 'Libre Baskerville', 'Manrope': 'Manrope'}[name]
    css_url = 'https://fonts.googleapis.com/css2?family=' + urllib.parse.quote(family) + ':wght@400;500;600;700&display=swap'
    css = urllib.request.urlopen(css_url, timeout=30).read().decode()
    urls = re.findall(r'url\((https://[^)]+)\)', css)
    source_url = urls[0]
    target = root / 'fonts' / (name + '.ttf')
    urllib.request.urlretrieve(source_url, target)
    for weight, url in re.findall(r'font-weight:\s*(\d+);[\s\S]*?src:\s*url\((https://[^)]+)\)', css):
        urllib.request.urlretrieve(url, root / 'fonts' / (name + '-' + weight + '.ttf'))
    try:
        urllib.request.urlretrieve('https://github.com/google/fonts/raw/refs/heads/main/ofl/' + folder + '/OFL.txt', root / 'fonts' / (name + '-OFL.txt'))
    except Exception:
        (root / 'fonts' / (name + '-license-source.txt')).write_text(base + folder + '/OFL.txt', encoding='utf-8')
    data = target.read_bytes()
    u16 = lambda offset: struct.unpack_from('>H', data, offset)[0]
    u32 = lambda offset: struct.unpack_from('>I', data, offset)[0]
    cmap = next(u32(12 + i * 16 + 8) for i in range(u16(4)) if data[12 + i * 16:16 + i * 16] == b'cmap')
    offsets = [cmap + u32(cmap + 4 + i * 8 + 4) for i in range(u16(cmap + 2))]
    def glyph(cp):
        for offset in offsets:
            fmt = u16(offset)
            if fmt == 4 and cp <= 65535:
                n = u16(offset + 6) // 2
                end = offset + 14
                start = end + 2 * n + 2
                delta = start + 2 * n
                ranges = delta + 2 * n
                for i in range(n):
                    if u16(start + 2 * i) <= cp <= u16(end + 2 * i):
                        r = u16(ranges + 2 * i)
                        value = u16(ranges + 2 * i + r + 2 * (cp - u16(start + 2 * i))) if r else cp
                        result = (value + u16(delta + 2 * i)) % 65536 if value else 0
                        if result:
                            return result
            if fmt == 12:
                for i in range(u32(offset + 12)):
                    a, b, first = struct.unpack_from('>III', data, offset + 16 + 12 * i)
                    if a <= cp <= b:
                        return first + cp - a
        return 0
    chars = 'áéíóöőúüűÁÉÍÓÖŐÚÜŰ'
    missing = [char for char in chars if not glyph(ord(char))]
    report.append({'font': name, 'file': 'fonts/' + name + '.ttf', 'missing': missing, 'test': 'árnyéktűrő tükörfúrógép ÁRNYÉKTŰRŐ TÜKÖRFÚRÓGÉP', 'passed': not missing, 'source': source_url})
    print(name, 'PASS' if not missing else 'FAIL', flush=True)
(root / '.webprojekt' / 'font-ellenorzes.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
if any(not item['passed'] for item in report):
    raise RuntimeError('Missing Hungarian glyphs')
