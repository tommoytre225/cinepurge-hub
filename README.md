# CinePurge Hub

Hub officiel et statique pour CinePurge. Point d'accès stable et sécurisé à l'adresse actuelle du service.

## Features

- 🎯 Point d'ancrage stable pour CinePurge
- 🔒 Aucune collecte de données
- 📱 Responsive et PWA-ready
- ⚡ Ultra-rapide (statique)
- 🎨 Design moderne dark theme

## Pages

- **Accueil** — domaine actif, stats, call-to-action
- **About** — explique le concept et les avantages
- **Privacy** — politique de confidentialité
- **Terms** — conditions d'utilisation
- **DMCA** — procédure de signalement

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React 19

## Development

```bash
# Install
pnpm install

# Dev server
pnpm dev

# Build
pnpm build

# Start
pnpm start
```

## Deployment

Déployé sur Vercel. Connectez simplement ce repo à un nouveau projet Vercel.

### Configuration Vercel

- Build Command: `pnpm build`
- Output Directory: `.next`
- Node.js Version: 20.x

### Domain Setup

Le hub devrait être accessible sur un domaine comme:
- `hub.cinepurge.xyz`
- `cinepurge-hub.vercel.app`

## Structure

```
cinepurge-hub/
├── app/
│   ├── page.tsx           # Accueil
│   ├── about/page.tsx     # À propos
│   ├── privacy/page.tsx   # Confidentialité
│   ├── terms/page.tsx     # CGU
│   ├── dmca/page.tsx      # DMCA
│   ├── layout.tsx         # Layout global
│   └── globals.css        # Styles globaux
├── public/
│   └── favicon.ico        # Favicon
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## Notes

- Ce hub est complètement séparé de la plateforme CinePurge
- Aucune dépendance dynamique ou base de données
- Déploiement simple et rapide
- Statique = haute disponibilité

## License

Propriété de CinePurge.
