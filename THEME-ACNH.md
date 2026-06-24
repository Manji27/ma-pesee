# Thème « Île » — Direction Artistique (inspiré d'Animal Crossing: New Horizons)

> Deuxième thème de **Ma Pesée**, en plus du thème actuel « Nuit » (sombre, bleu).
> Objectif : une identité visuelle **douce, chaleureuse et accueillante** façon ACNH —
> papier crème, formes arrondies en galet, pastels, typo ronde et amicale.
> Référence : screenshots du jeu (interfaceingame.com — inventaire, NookPhone, Nook Miles, dialogues).

---

## 1. Esprit / mood

- **Cosy & papier.** Fond crème ivoire (comme une feuille de papier recyclé), pas de noir, pas de gris froid.
- **Tout est arrondi.** Aucun angle vif. Boutons en gélule (pill), cartes à grand rayon, certaines formes « galet » organiques.
- **Pastels doux** par catégorie (menthe, ciel, saumon, beurre, lavande) sur fond crème.
- **Deux accents de marque** : un **vert feuille / teal Nook** (action principale) + un **orange ambre** (sélection, mise en avant).
- **Texte brun chaud**, jamais noir pur.
- **Ombres légères et basses**, jamais dures. Effet « posé sur la table ».
- **Détails ludiques** : séparateurs en pointillés/tirets, petites pastilles, micro-rebond au tap.

---

## 2. Palette

### Fonds & surfaces
| Rôle | Variable | Hex | Note |
|---|---|---|---|
| Fond appli | `--bg` | `#F7EFD9` | Crème papier (chaud) |
| Fond secondaire / sheets | `--bg2` | `#FBF6E6` | Crème plus clair |
| Carte | `--card` | `#FFFDF4` | Ivoire quasi-blanc |
| Lignes / bordures | `--line` | `#E6D9B6` | Beige sable (souvent en **pointillés**) |

### Texte
| Rôle | Variable | Hex | Note |
|---|---|---|---|
| Texte principal | `--txt` | `#6B5640` | Brun chaud (jamais `#000`) |
| Texte atténué | `--muted` | `#7A6A4A` | Brun sable (assombri pour contraste 4.5:1) |

### Accents de marque
| Rôle | Variable | Hex | Note |
|---|---|---|---|
| Accent principal | `--accent` | `#15805C` | **Vert Nook profond** — boutons d'action (blanc dessus = 4.9:1) |
| Accent foncé (hover/active) | `--accent2` | `#0F7351` | Vert plus foncé |
| Texte sur accent | `--on-accent` | `#FFFFFF` | (remplace l'actuel `#04293f`) |
| Accent secondaire | `--accent3` | `#9A6308` | **Ambre profond** — objectif (4.5:1 sur carte) |

### Sémantique (tendance du poids)
| Rôle | Variable | Hex | Note |
|---|---|---|---|
| Bon (poids en baisse) | `--good` | `#277839` | Vert profond (lisible sur crème) |
| Mauvais (poids en hausse) | `--bad` | `#B8442F` | Brique / corail profond (pas rouge vif) |

### Pastels décoratifs (cartes, badges, catégories)
Utilisés pour colorer des cartes/pastilles façon Nook Miles. Fond pastel + texte brun.
| Nom | Hex fond | Hex texte/accent |
|---|---|---|
| Menthe | `#C6EBD9` | `#3E9C7A` |
| Ciel | `#BFE3F2` | `#3E8DB0` |
| Saumon | `#F6CFC6` | `#D07C68` |
| Beurre | `#F4E6A8` | `#B79A3A` |
| Lavande | `#D8D2F0` | `#7C76C4` |

### Pastille de nom / tag (façon « Rover »)
- Fond `#6C73C4` (indigo doux periwinkle), texte blanc, forme pill.

---

## 3. Typographie

- **Famille** : on garde la pile système (perf + offline), mais on **arrondit l'esprit** via le poids et l'espacement.
  - Pile : `"SF Pro Rounded", ui-rounded, "Segoe UI", system-ui, -apple-system, Roboto, sans-serif`.
  - Sur iOS/macOS, `ui-rounded` / `SF Pro Rounded` donne déjà le look ACNH gratuitement.
  - (Option « identique pixel-perfect » : charger une police ronde type *Baloo 2* / *Quicksand* en woff2 local — **non retenu par défaut** pour rester sans dépendance et offline.)
- **Graisses** : titres & valeurs en **800 (extra-bold)**, libellés en **600/700**.
- **Casse** : titres en capitales seulement pour les petits labels (`--muted`, letter-spacing .5px), reste en casse normale chaleureuse.
- **Chiffre du poids (hero)** : très gros, 800, brun foncé `--txt`, unité « kg » en `--muted`.

---

## 4. Formes & rayons

| Élément | Rayon |
|---|---|
| `--radius` (cartes principales) | **24px** (vs 18px en thème nuit) |
| Petites cartes / stats | 18px |
| Boutons d'action | **pill** (`border-radius: 999px`) |
| Champs (date, poids) | 16px |
| Pastille / tag | pill |
| Sheets (bas d'écran) | coins haut 28px |

- **Bordures** : 1px `--line`, et **idéalement en pointillés** (`border-style: dashed`) sur les séparateurs de liste et les contours secondaires — signature ACNH.
- **Onglets/segments** : le segment actif prend `--accent3` (orange) avec texte blanc, façon onglet « Everything » de l'inventaire.

---

## 5. Composants — déclinaison ACNH

### Hero (poids actuel)
- Carte ivoire `--card`, rayon 24px, ombre douce.
- Au lieu du dégradé bleu nuit : fond crème + **liseré pointillé** beige, ou léger dégradé crème→menthe très subtil.
- Valeur en brun foncé extra-bold ; tendance ▲▼ en `--good`/`--bad` corail/vert.

### Bouton « Ajouter » (#addBtn) et boutons primaires
- Fond `--accent` (vert teal), texte blanc `--on-accent`, **pill**, graisse 800.
- Ombre basse `0 3px 0 rgba(...)` possible pour effet « touche bombée » + rebond au `:active` (`transform: translateY(1px)`).

### Sélecteur de plage (.ranges) / segments
- Boutons pill, fond crème ; **actif = orange `--accent3`** texte blanc (au lieu du bleu accent).

### Liste des pesées (.list / .row)
- Lignes sur fond ivoire, **séparateurs en pointillés** beige.
- Delta en pastille colorée pastel (menthe si baisse, saumon si hausse).
- Bouton supprimer : icône discrète `--muted`, corail au survol.

### Sheets / overlay
- Overlay : `rgba(80,64,40,.45)` (brun translucide, pas noir froid).
- Sheet : fond `--bg2` crème, grip beige arrondi, coins hauts 28px.

### Pastille de synchro (.sync-pill)
- Fond crème, point coloré : `--muted` (idle) / `--good` (ok) / `--accent` (sync) / `--bad` (err).

### Graphique
- Ligne du poids : `--accent` (teal) au lieu du cyan.
- Tendance : orange ambre `--accent3` pointillé.
- Objectif : beurre `#B79A3A` pointillé.
- Grille très légère beige ; tooltip carte ivoire bord pointillé, texte brun.

### Détail « touche manette » (optionnel, fidélité max)
- ACNH affiche des badges ronds (B Close / A Select). On n'imite pas les manettes,
  mais on peut reprendre l'idée de **petites pastilles rondes** pour les icônes d'action secondaires.

---

## 6. Mouvement

- Transitions douces 120–200ms, easing `cubic-bezier(.34,1.56,.64,1)` (léger overshoot « bouncy »).
- Tap des boutons : petit `scale(.97)` + retour rebondi.
- Apparition des sheets : slide-up doux.
- Rester sobre : pas d'animation permanente qui fatigue à l'usage quotidien.

---

## 7. Architecture technique du multi-thème

Objectif : **basculer toute la palette via une seule classe/attribut**, sans dupliquer le CSS.

1. **Garder le thème actuel comme défaut** (« Nuit »). Les variables vivent déjà dans `:root` (index.html ~ligne 14).
2. **Définir le thème « Île »** dans un sélecteur surchargé, ex. :
   ```css
   :root[data-theme="ile"]{
     --bg:#F7EFD9; --bg2:#FBF6E6; --card:#FFFDF4; --line:#E6D9B6;
     --txt:#6B5640; --muted:#A1906E;
     --accent:#54C9A0; --accent2:#3FB78C; --accent3:#F5A623; --on-accent:#fff;
     --good:#6FBF73; --bad:#EF8E7E; --radius:24px;
     color-scheme: light;
   }
   ```
3. **Remplacer les couleurs « en dur »** par des variables là où c'est nécessaire :
   - Le texte sur boutons accent est codé en dur `#04293f` à de multiples endroits → introduire `--on-accent` et le substituer (`#addBtn`, `.ranges button.on`, `#saveTokenBtn`, `.primary-btn`, `.goalrow button`, `.snack button`, `.fab`).
   - Couleurs hex dans le JS du graphe/légende (`#38bdf8`, `#f97316`, `#fbbf24`, `index.html` ~528-530) → lire depuis `getComputedStyle(...).getPropertyValue('--accent'...)` ou exposer des variables JS dédiées.
   - `<meta name="theme-color">` (ligne 6) → mettre à jour dynamiquement en JS au changement de thème (`#F7EFD9` pour Île).
   - `color-scheme:dark` sur l'input date (ligne 48) → passer à `light` en thème Île.
4. **Persistance** : stocker le choix dans `localStorage["maPesee.theme"]` et l'appliquer **avant le rendu** (script inline dans `<head>`) pour éviter le flash.
5. **Sélecteur d'UI** : ajouter un choix de thème dans le menu réglages existant (sheet) — deux options « Nuit » / « Île », avec aperçu de pastille de couleur.
6. **PWA** : penser à bumper `CACHE` dans `sw.js` après modif (sinon cache obsolète).

---

## 8. Récap palette (copier-coller)

```
Thème « Île » (ACNH) — valeurs validées WCAG AA (voir §9)
--bg        #F7EFD9   crème papier
--bg2       #FBF6E6   crème clair
--card      #FFFDF4   ivoire
--line      #E6D9B6   sable (pointillés)
--txt       #6B5640   brun chaud
--muted     #7A6A4A   brun sable (assombri pour le contraste)
--accent    #15805C   vert Nook profond (action principale)
--accent2   #0F7351   vert plus foncé (hover/active)
--accent3   #9A6308   ambre profond (objectif)
--on-accent #FFFFFF   texte sur accent (blanc, ratio 4.9:1)
--trend     #A35F12   orange brûlé (courbe de tendance)
--good      #277839   vert (baisse)
--bad       #B8442F   brique/corail (hausse)
--radius    24px

Pastels décoratifs (fonds de cartes/badges, jamais sous du petit texte) :
menthe #C6EBD9 · ciel #BFE3F2 · saumon #F6CFC6 · beurre #F4E6A8 · lavande #D8D2F0
Tag/nom : indigo #6C73C4 / texte blanc
```

> **Note couleur.** Le mood ACNH penche vers des pastels très clairs, mais sur fond
> crème ils plafonnent à ~2:1 de contraste (illisibles). Les accents ont donc été
> approfondis (menthe → vert Nook, ambre clair → ambre profond) pour rester
> chaleureux **tout en passant WCAG AA**. Les pastels clairs restent réservés aux
> **fonds décoratifs**, jamais sous du petit texte.

---

## 9. Contraste (WCAG AA) — vérifié

Toutes les paires texte/fond des deux thèmes ont été mesurées. Cibles : **4.5:1**
(texte normal), **3.0:1** (texte large/gras ≥18.6px ou ≥14px gras, et objets graphiques).

| Paire (thème Île) | Ratio | Cible |
|---|---|---|
| `txt` sur `bg` / `card` | 6.0 / 6.8 | 4.5 ✓ |
| `muted` (labels, hint, dates) sur `bg` / `card` | 4.6 / 5.2 | 4.5 ✓ |
| blanc sur `accent` (boutons) | 4.9 | 4.5 ✓ |
| blanc sur `accent2` | 5.9 | 4.5 ✓ |
| `good` (baisse) sur `bg` / `card` | 4.8 / 5.4 | 4.5 ✓ |
| `bad` (hausse) sur `bg` / `card` | 4.7 / 5.3 | 4.5 ✓ |
| `accent3` « Objectif » sur `card` | 5.0 | 4.5 ✓ |
| `trend` (texte légende) sur `card` | 4.9 | 4.5 ✓ |
| `accent` titre « Pesée » (22px gras) sur `bg` | 4.3 | 3.0 ✓ |
| lignes graphe (accent / trend / objectif) sur `card` | 4.8 / 4.9 / 5.0 | 3.0 ✓ |

Thème « Nuit » : toutes les paires ≥ 5.7:1 (déjà conforme, inchangé).
