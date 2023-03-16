# GDevelop-documentation



## Working on the documentation

```sh
pip install -r requirements.txt
mkdocs serve
```

##

```sh
cd dokuwiki2wikijs && ./dokuwiki2wikijs.py ../../GDevelop-wiki/dokuwiki/ ../docs
```

TODO:
- ~~Add a page at the root~~
- Finish the sidebar to reorder files in sub categories
~~- Fix size of extension icons~~
- Remove old files or do redirect (example: http://localhost:8000/gdevelop5/all-features/functions/). For example:
  ~~- draft-optimization~~
  ~~- gdevelop5/objects/how-to-rotate-objects/~~
  ~~- gdevelop5/objects/admob/~~
  ~~- gdevelop5/objects/base_object/~~
  ~~- gdevelop5/events/callback-variables/~~
  ~~- gdevelop5/publishing/android_and_ios_with_cocos2d-js/~~
- ~~Fix headings without a space (search for `^#[^\s#]` in the `docs`).~~
- ~~Fix wrongly escaped characters.~~
- ~~Fix `<note>` when not starting the line (example: http://127.0.0.1:8000/gdevelop5/events/)~~
- ~~Handle youtube links~~
- ~~Fix the sidebar~~
- ~~How to handle i18n?~~
- ~~Fix examples links~~
- ~~Fix links without name or bad name (example: http://localhost:8000/fr/gdevelop5/tutorials)~~
- ~~Fix lists (example: http://localhost:8000/gdevelop5/community/sell-asset-pack-store/)~~
- ~~Fix lists again (example: http://localhost:8000/fr/gdevelop5/tutorials)~~
- ~~Fix lists again (example: http://localhost:8000/gdevelop5/behaviors/tween)~~
- ~~Fix `[![`~~
- ~~Fix size of youtube videos~~
- ~~Fix title of http://localhost:8000/gdevelop5/objects/custom-objects-prefab-template/ and http://localhost:8000/gdevelop5/objects/panel_sprite/~~

Manual TODO before replacing the old wiki:
- Remove pages:
```
rm -rf ../docs/gdevelop5/all-features/functions.md
rm -rf ../docs/gdevelop5/all-features/timers.md
rm -rf ../docs/gdevelop5/objects/admob.md
rm -rf ../docs/gdevelop5/objects/light.md
rm -rf ../docs/gdevelop5/objects/how-to-rotate-objects.md
rm -rf ../docs/gdevelop5/tutorials/piksel-sprite-sheets.md
rm -rf ../docs/gdevelop5/events/draft-optimization.md
git co ../docs/gdevelop5/extensions/**/reference.md
git co ../docs/gdevelop5/extensions/index.md
git co ../docs/gdevelop5/all-features/**/reference.md
git co ../docs/gdevelop5/all-features/index.md ../docs/gdevelop5/all-features/expressions-reference.md
git co ../docs/gdevelop5/index.md
git co ../docs/index.md
```
- Fix the table in `docs/gdevelop5/behaviors/physics2.md` once this replaces the old wiki.
- Do a last pull from the existing wiki.
- Set up GitHub pages for this repo.
- Redirect Cloudflare to the new GH pages.
- Remove the old GDevelop-documentation repo.
- Change the branch to master in CircleCI.
- Update vercel
- Change Cloudflare to point to vercel.