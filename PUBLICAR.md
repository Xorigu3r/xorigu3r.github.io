# Pàgina de descàrregues Xoriguer

Adreça final: **https://xorigu3r.github.io/**

- `index.html`: la pàgina (4 idiomes: ca, es, fr, en).
- `productes.js`: la llista de productes. Per afegir-ne un, copia'n un bloc i posa la icona a `img/`.
- `.nojekyll`: cal perquè GitHub publiqui la carpeta `.well-known` (la necessitarà l'APK de Pressió).

## 1. Publicar la pàgina (un sol cop)

1. GitHub → **New repository** → nom exacte `xorigu3r.github.io` → **Public** → Create.
2. **Add file → Upload files** → arrossega tot el contingut d'aquesta carpeta (també `img/` i `.nojekyll`) → Commit.
3. **Settings → Pages** → Branch `main`, carpeta `/ (root)` → Save. En 1–2 minuts ja és a l'adreça.

## 2. Que surti el botó «Baixa per a Windows»

La pàgina llegeix el mateix `versio.json` que fan servir els programes (repo `Xorigu3r/xoriguer-versions`).
Plans i Acobert ja en tenen. Per a la resta, segueix els passos de `PUBLICAR_UNA_VERSIO.md` (Escriptori\XoriguerAcobert):

| Producte    | Tag de la Release   | Fitxer del versio.json      |
|-------------|---------------------|-----------------------------|
| Pressió     | `pressio-v1.2`      | `pressio/versio.json`       |
| Pla Cardíac | `placardiac-v1.1`   | `placardiac/versio.json`    |
| Botifarra   | `botifarra-v1.4.1`  | `botifarra/versio.json`     |

El `versio.json` pot portar també `"apk": "https://…/Botifarra.apk"`: la pàgina hi posarà el botó d'Android.

Fins que no existeixi el `versio.json`, Pressió i Pla Cardíac surten com «Windows: aviat», i la Botifarra fa servir
l'enllaç del Google Drive.

Quan publiquis una versió nova d'un programa, **la pàgina no s'ha de tocar**: n'agafa la versió i l'enllaç sola.
