# Regrouper les pages de vente sur l'Asset Store dans la section Monetization

## Sommaire

- [Contexte](#contexte)
- [Structure cible](#structure-cible)
- [Étapes](#etapes)
  - [1. Déplacer les pages](#1-deplacer-les-pages)
  - [2. Écrire l'aperçu de section](#2-ecrire-lapercu-de-section)
  - [3. Navigation](#3-navigation)
  - [4. Corriger les liens internes](#4-corriger-les-liens-internes)
  - [5. Redirections](#5-redirections)
- [Vérification](#verification)

## Contexte

Tout ce qui concerne la vente sur l'Asset Store vit aujourd'hui dans **Community**, aux côtés
des guides de contribution (signaler un bug, contribuer à la doc, Summer of Code). Or ces pages
parlent de **revenu** : devenir vendeur, partage de revenus, prix, licences, paiements, puis
comment livrer son produit. Et sur l'Asset Store il y a deux produits vendables, un pack
d'assets et un game template : les deux parcours doivent être visibles dans la sidebar.

De son côté, la section **Monetization** ne contient qu'une seule page
(`monetization/index.md`, titrée « Monetizing Your Games »).

Cible : une section Monetization qui regroupe les deux façons de gagner de l'argent avec
GDevelop, vendre son jeu et vendre ses créations sur l'Asset Store, avec un parcours distinct
par type de produit.

## Structure cible

```
docs/gdevelop5/monetization/
├── .pages                          (nouveau)
├── index.md                        aperçu de section, titre « Monetization » (réécrit)
├── monetizing-your-games/
│   └── index.md                    contenu actuel de monetization/index.md (déplacé)
├── sell-asset-pack-store/          déplacé depuis community/
├── contribute-to-the-assets-store/ déplacé depuis community/ (contient aussi
│                                   technical-specifications.md = « Manually package the assets »)
└── guide-for-submitting-an-example/ déplacé depuis community/
```

Sidebar résultante :

```
Monetization                    -> aperçu
  Monetizing Your Games
  Sell on the Asset Store
  Submit asset packs
    Manually package the assets
  Submit game templates
```

Les slugs de dossier et les libellés de sidebar actuels sont conservés tels quels ; seul
l'emplacement change. Community garde ses guides de contribution (doc, bugs, Summer of Code,
Season of Docs, code) et continue de pointer vers les guides de soumission depuis sa page
d'accueil.

## Étapes

### 1. Déplacer les pages

Avec `git mv`, pour conserver l'historique. Les dossiers partent avec leurs images, toutes
référencées en relatif dans les pages : rien à modifier à l'intérieur pour les images.

- `docs/gdevelop5/community/sell-asset-pack-store/` → `docs/gdevelop5/monetization/sell-asset-pack-store/`
- `docs/gdevelop5/community/contribute-to-the-assets-store/` → `docs/gdevelop5/monetization/contribute-to-the-assets-store/`
- `docs/gdevelop5/community/guide-for-submitting-an-example/` → `docs/gdevelop5/monetization/guide-for-submitting-an-example/`
- `docs/gdevelop5/monetization/index.md` → `docs/gdevelop5/monetization/monetizing-your-games/index.md`
  (contenu et front matter inchangés, titre « Monetizing Your Games » conservé ; la page n'a
  aucune image locale, juste un iframe YouTube)

### 2. Écrire l'aperçu de section

Nouveau `docs/gdevelop5/monetization/index.md`, court, sur le modèle de
[docs/gdevelop5/community/index.md](docs/gdevelop5/community/index.md) (intro + liste de liens) :

```md
---
title: Monetization
icon: material/cash-multiple
---
# Monetization

GDevelop lets you earn money from what you create, both from your games and from the game art
and templates you make. Monetizing is entirely optional.

* [Monetizing your games](/gdevelop5/monetization/monetizing-your-games/): sell your game on
  stores, display ads, or earn revenue by hosting it on gd.games.
* [Selling on GDevelop's Asset Store](/gdevelop5/monetization/sell-asset-pack-store/): become a
  seller, then submit either an [asset pack](/gdevelop5/monetization/contribute-to-the-assets-store/)
  or a [game template](/gdevelop5/monetization/guide-for-submitting-an-example/).
```

L'`icon: material/cash-multiple` reste porté par cette page, qui devient l'entrée de section.

### 3. Navigation

Nouveau `docs/gdevelop5/monetization/.pages` (style de
[docs/gdevelop5/publishing/.pages](docs/gdevelop5/publishing/.pages), indentation 4 espaces) :

```yaml
title: Monetization
nav:
    - index.md
    - Monetizing Your Games: monetizing-your-games
    - Sell on the Asset Store: sell-asset-pack-store
    - Submit asset packs: contribute-to-the-assets-store
    - Submit game templates: guide-for-submitting-an-example
```

Dans [docs/gdevelop5/community/.pages](docs/gdevelop5/community/.pages) : supprimer les lignes 2,
3 et 4 (`Sell on the Asset Store`, `Submit asset packs`, `Submit game templates`). Le reste du
fichier (`Contribute to the documentation`, `Report a bug`, `- ...`, etc.) est inchangé.

[docs/gdevelop5/.pages](docs/gdevelop5/.pages) reste inchangé (`- monetization` en ligne 14).

Aucun `.pages` à créer dans `contribute-to-the-assets-store/` : « Manually package the assets »
reste le seul enfant, listé automatiquement.

### 4. Corriger les liens internes

Toutes les URL du site portent un slash final (`vercel.json` : `trailingSlash: true`).
`mkdocs.yml` définit `validation: links: absolute_links: ignore`, donc **aucun** de ces liens
absolus ne fera échouer le build : ils doivent être corrigés à la main, puis re-grepés
(`grep -rn "gdevelop5/community/sell-asset-pack-store\|gdevelop5/community/contribute-to-the-assets-store\|gdevelop5/community/guide-for-submitting-an-example" docs`
doit ne plus rien rendre).

Vers la page de vente (`/gdevelop5/monetization/sell-asset-pack-store/`) :

| Fichier | Ligne | Remarque |
|---|---|---|
| [docs/gdevelop5/interface/index.md](docs/gdevelop5/interface/index.md#L58) | 58 | lien absolu |
| [docs/gdevelop5/objects/3d-model/index.md](docs/gdevelop5/objects/3d-model/index.md#L120) | 120 | lien **relatif** (`../../community/sell-asset-pack-store`) : le passer en absolu, comme partout ailleurs |
| `monetization/contribute-to-the-assets-store/index.md` (ex-community) | 7 | lien absolu, dans un fichier déplacé |

Vers les guides de soumission :

| Fichier | Ligne | Cible |
|---|---|---|
| [docs/gdevelop5/community/index.md](docs/gdevelop5/community/index.md#L17) | 17 | `/gdevelop5/monetization/contribute-to-the-assets-store/` |
| [docs/gdevelop5/community/index.md](docs/gdevelop5/community/index.md#L19) | 19 | `/gdevelop5/monetization/guide-for-submitting-an-example/` |
| `monetization/sell-asset-pack-store/index.md` (déplacé) | 107 et 109 | les 2 boutons en bas de page |
| `monetization/contribute-to-the-assets-store/technical-specifications.md` (déplacé) | 179 | lien avec ancre `#follow-naming-best-practices` |

Vers les ancres de « Monetizing Your Games », qui passent de `/gdevelop5/monetization/#…` à
`/gdevelop5/monetization/monetizing-your-games/#…` (ancres inchangées) :

| Fichier | Ligne | Ancre |
|---|---|---|
| [docs/gdevelop5/interface/profile/credits.md](docs/gdevelop5/interface/profile/credits.md#L27) | 27 | `#hosting-on-gdevelops-platform-gdgames` |
| [docs/gdevelop5/interface/games.md](docs/gdevelop5/interface/games.md#L27) | 27 | idem (URL absolue `https://wiki.gdevelop.io/…`) |
| [docs/gdevelop5/interface/games.md](docs/gdevelop5/interface/games.md#L57) | 57 | idem |
| [docs/gdevelop5/interface/games-dashboard/index.md](docs/gdevelop5/interface/games-dashboard/index.md#L38) | 38 | `#publishing-on-platforms-with-integrated-ads` |

Au passage, [docs/gdevelop5/community/teams.md](docs/gdevelop5/community/teams.md#L174) lignes 174,
189 et 190 pointe vers `guide-for-submitting-an-example` sur l'ancien domaine
`http://wiki.compilgames.net/doku.php/…` : les basculer sur les URL actuelles
(`/gdevelop5/monetization/guide-for-submitting-an-example/`), les ancres DokuWiki
(`#best_practices`, `#submitting_the_example`) n'existant plus telles quelles.

### 5. Redirections

Le plugin `mkdocs-redirects` est déjà configuré. Ajouter à la fin du `redirect_maps` de
[mkdocs.yml](mkdocs.yml) (après la ligne 371), sans préfixes de langue, comme les entrées
récentes du fichier (lignes 111 et suivantes) :

```yaml
        "gdevelop5/community/sell-asset-pack-store/index.md": "gdevelop5/monetization/sell-asset-pack-store/index.md"
        "gdevelop5/community/contribute-to-the-assets-store/index.md": "gdevelop5/monetization/contribute-to-the-assets-store/index.md"
        "gdevelop5/community/contribute-to-the-assets-store/technical-specifications.md": "gdevelop5/monetization/contribute-to-the-assets-store/technical-specifications.md"
        "gdevelop5/community/guide-for-submitting-an-example/index.md": "gdevelop5/monetization/guide-for-submitting-an-example/index.md"
```

Ces 4 redirections sont indispensables : ces URL sont référencées depuis l'éditeur GDevelop, le
dépôt GDevelop-assets et GDevelop-examples, et le forum.

Pas de redirection pour `/gdevelop5/monetization/` : l'URL existe toujours. Les liens externes
vers ses anciennes ancres arriveront sur l'aperçu, d'où le lien « Monetizing your games » en
première puce.

## Vérification

1. Build du site, depuis la racine du dépôt :
   ```powershell
   .venv\Scripts\activate
   mkdocs build
   ```
   Attendu : aucun warning de lien relatif cassé (celui de `3d-model` doit avoir disparu), aucun
   warning de redirection dont la cible n'existe pas.
2. `mkdocs serve`, puis dans la sidebar :
   - **Monetization** liste « Monetizing Your Games », « Sell on the Asset Store »,
     « Submit asset packs » (avec « Manually package the assets » en enfant) et
     « Submit game templates » ;
   - **Community** ne liste plus aucune de ces pages, et ses autres entrées sont intactes.
3. Ouvrir les 3 pages déplacées et vérifier que toutes les captures s'affichent (les dossiers
   `sell-asset-pack-store` et `contribute-to-the-assets-store` en contiennent beaucoup).
4. Ouvrir les 4 anciennes URL `/gdevelop5/community/…` : chacune doit rediriger vers la nouvelle.
5. Cliquer les 4 liens à ancre corrigés vers « Monetizing Your Games » et vérifier l'atterrissage
   sur la bonne section.
6. `git status` : confirmer que les déplacements apparaissent en renames et non en
   suppression + ajout.
