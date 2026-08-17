# Deployment Guide — CinePurge Hub

## GitHub Repository

✅ **Created**: https://github.com/tommoytre225/cinepurge-hub

Repository is public and ready for deployment.

## Vercel Deployment

### Quick Setup

1. Go to https://vercel.com/new
2. Select "Other" → "Continue with GitHub"
3. Search for `cinepurge-hub` and import
4. Configure:
   - **Project Name**: `cinepurge-hub`
   - **Framework**: `Next.js`
   - **Root Directory**: `./` (default)
   - **Build Command**: `pnpm build`
   - **Install Command**: `pnpm install`
5. Click "Deploy"

### Domain Configuration

Once deployed, configure the domain:

#### Option 1: Subdomain
- Go to project Settings → Domains
- Add: `hub.cinepurge.xyz`
- Update DNS records in Cloudflare for `cinepurge.xyz`

#### Option 2: Standalone domain
- Buy a domain or use: `cinepurge-hub.vercel.app`

### Environment Variables

No environment variables needed (this is a static hub with no backend).

## Local Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Visit http://localhost:3000
```

## Build & Test

```bash
# Build for production
pnpm build

# Test production build
pnpm start
```

## Current Stats

- **Bundle Size**: ~103 kB (First Load JS)
- **Pages**: 6 (home, about, privacy, terms, dmca, 404)
- **Build Time**: ~3-5 seconds
- **Route Types**: All pre-rendered static

## Deployment Checklist

- [x] GitHub repo created and pushed
- [x] Next.js build verified (no errors)
- [ ] Vercel project created
- [ ] Domain configured
- [ ] DNS records updated (Cloudflare)
- [ ] SSL certificate active
- [ ] Monitoring set up

## Monitoring

Once deployed, monitor:

- **Performance**: Vercel Analytics (automatic)
- **Uptime**: Vercel's built-in status
- **Error Tracking**: Vercel Error Logs

## Support

For questions on deployment, visit:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
