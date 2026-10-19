# ReuwTheDev — portfolio site

Static site. No build step, no dependencies.

## Files

| File | What it is |
|---|---|
| `index.html` | the whole page (markup + styles + rendering) |
| `plugins.js` | **edit this** — every plugin, price, link and badge comes from here |
| `assets/` | logo and plugin cover images |
| `version.txt` | first line is the version OreWatch's update checker reads |

## Editing

- **New plugin:** copy a block in `plugins.js`. `status: "soon"` shows the "Awaiting approval"
  badge, `status: "live"` shows "Available".
- **Cover image:** drop a PNG in `assets/` and set `art: "assets/name.png"`. Leave `art: null`
  and the card gets a generated tile in the plugin's accent colour.
- **Add-ons** (like WatchPanel/WatchChat under WatchBan): add an `addons: [...]` array to the
  parent plugin instead of giving them their own card.
- **Shop link:** `SHOP_URL` at the top of `plugins.js`.

## Local preview

Open `index.html` in a browser, or:

```bash
npx serve .
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. vercel.com → **Add New → Project** → import the repo.
3. Framework preset **Other**, no build command, output directory `.` (root).
4. Deploy. You get `your-project.vercel.app`; add a custom domain in **Settings → Domains**.

Every push to the repo redeploys automatically.

`version.txt` is then served at `https://your-domain/version.txt`, which is what you put into
`update-checker.url` in OreWatch's config.

Note: Vercel's free Hobby plan is for non-commercial use. A site that sells plugins may need the
Pro plan — check their current terms, or use Cloudflare Pages / Netlify instead.
