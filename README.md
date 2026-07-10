# Jobík — verejná statická stránka

Statický Next.js web (`output: export`) verejnej časti Jobíka — **O aplikácii + demo** —
nasadzovaný na **GitHub Pages**. Toto je samostatný **verejný** repo len s webom;
backend a platená appka žijú v samostatnom **súkromnom** repe (`Marten55/Jobik`).

## Stránky
- `/` — „O aplikácii": ako to funguje, balíky (Start/Profi/Premium), rezervačný formulár
- `/demo` — jednoduchý formulár „vyskúšaj zadarmo"

Oba formuláre POSTujú na existujúci verejný endpoint backendu:
`POST {NEXT_PUBLIC_API_BASE}/api/demo-request`.

## Env premenné (build-time, nastavené vo workflowe)
| Premenná | Účel | Hodnota |
|---|---|---|
| `NEXT_PUBLIC_API_BASE` | backend appky (kam ide formulár) | `https://api.admtechnics.sk` |
| `NEXT_PUBLIC_APP_URL` | platená appka (odkazy „Prihlásiť sa") | `https://jobik.admtechnics.sk` |
| `NEXT_PUBLIC_BASE_PATH` | podcesta na Pages | *(prázdne — beží na vlastnej doméne `demo.admtechnics.sk`)* |

## Lokálne
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statický export do out/
```

## Deploy
Automaticky cez GitHub Actions (`.github/workflows/pages.yml`) pri každom push na `master`.
Výstup `out/` sa nasadí na GitHub Pages → **`https://demo.admtechnics.sk`**
(vlastná doména cez `public/CNAME`).

### Manuálne kroky (jednorazovo)
1. **DNS (Websupport, admtechnics.sk):** CNAME `demo` → `marten55.github.io`.
2. **Backend (Render):** do `FRONTEND_ORIGINS` (CORS) pridať `https://demo.admtechnics.sk`,
   inak formulár hlási „Failed to fetch".
