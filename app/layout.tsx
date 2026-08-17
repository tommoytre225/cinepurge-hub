import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "CinePurge Hub",
  description: "Hub officiel de CinePurge. Point d&apos;accès stable pour l&apos;adresse actuelle du service.",
  viewport: "width=device-width, initial-scale=1",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  manifest: "/manifest.json",
};

import { InstallPWA } from './install-pwa';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-[#070709]">
        <nav className="fixed top-0 w-full bg-[#070709]/95 backdrop-blur border-b border-[#333333] z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold flex items-center gap-2">
                <span className="text-[#FF3B30]">▶</span>
                <span>CinePurge</span>
              </Link>
              <div className="hidden md:flex gap-8">
                <Link href="/" className="text-sm hover:text-[#FF3B30] transition">
                  Accueil
                </Link>
                <Link href="/about" className="text-sm hover:text-[#FF3B30] transition">
                  À propos
                </Link>
                <Link href="/privacy" className="text-sm hover:text-[#FF3B30] transition">
                  Confidentialité
                </Link>
                <Link href="/terms" className="text-sm hover:text-[#FF3B30] transition">
                  CGU
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#999999] hidden sm:inline">✓ En ligne</span>
                <InstallPWA />
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
