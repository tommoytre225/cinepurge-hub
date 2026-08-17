import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "CinePurge Hub",
  description: "Hub officiel de CinePurge. Point d&apos;accès stable pour l&apos;adresse actuelle du service.",
  viewport: "width=device-width, initial-scale=1",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <nav className="glass fixed top-0 w-full border-b border-[rgba(255,255,255,0.08)] z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-accent">
                CinePurge
              </Link>
              <div className="hidden md:flex gap-8">
                <Link href="/" className="hover:text-accent transition">
                  Accueil
                </Link>
                <Link href="/about" className="hover:text-accent transition">
                  À propos
                </Link>
                <Link href="/privacy" className="hover:text-accent transition">
                  Confidentialité
                </Link>
                <Link href="/terms" className="hover:text-accent transition">
                  CGU
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">{children}</main>

        <footer className="border-t border-[rgba(255,255,255,0.08)] glass-card mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4">CinePurge</h3>
                <p className="text-foreground-muted text-sm">Hub officiel. Point d&apos;accès stable et sécurisé.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Ressources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-accent transition">À propos</Link></li>
                  <li><Link href="/privacy" className="hover:text-accent transition">Confidentialité</Link></li>
                  <li><Link href="/terms" className="hover:text-accent transition">Conditions</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Légal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/terms" className="hover:text-accent transition">CGU</Link></li>
                  <li><Link href="/dmca" className="hover:text-accent transition">DMCA</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-foreground-muted text-sm">support@cinepurge.app</p>
              </div>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 text-center text-foreground-muted text-sm">
              <p>&copy; {new Date().getFullYear()} CinePurge Hub. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
