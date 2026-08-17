import { MirrorsList } from './mirrors-list';
import { HeroAddress } from './hero-address';
import { ReportForm } from './report-form';

export default function Home() {
  return (
    <div className="bg-[#070709] text-white">
      {/* Hero */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="badge justify-center mx-auto">
            📍 Adresse à jour - août 2026
          </div>

          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-black leading-tight">
              Bienvenue sur <span className="text-[#FF3B30]">CinePurge</span>
            </h1>
            <p className="text-xl text-[#999999] max-w-3xl mx-auto leading-relaxed">
              Hub officiel pour accéder à CinePurge en toute sécurité.
            </p>
          </div>

          <HeroAddress />
        </div>
      </section>

      {/* Access Options (Dynamic Mirrors) */}
      <section className="py-24 px-4 border-t border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Accès</p>
            <h2 className="text-5xl font-black">Accéder à CinePurge</h2>
          </div>

          <MirrorsList />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#333333]">
            {[
              { num: '5K+', label: 'Films' },
              { num: '2K+', label: 'Séries' },
              { num: '10K+', label: 'Animés' },
              { num: '24/7', label: 'Dispo' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="stat-value">{s.num}</div>
                <p className="text-[#999999] font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-4 border-t border-[#333333]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Sécurité</p>
            <h2 className="text-5xl font-black">Comment vérifier que c'est le vrai site</h2>
          </div>

          <div className="space-y-4">
            <div className="card">
              <p className="font-bold mb-2">✓ Vérifiez l'URL</p>
              <p className="text-[#999999]">L'adresse officielle est toujours affichée sur cette page.</p>
            </div>
            <div className="card">
              <p className="font-bold mb-2">✓ Mettez en favoris</p>
              <p className="text-[#999999]">Bookmarkez cette page pour accéder à l'adresse actuelle à tout moment.</p>
            </div>
            <div className="card">
              <p className="font-bold mb-2">✗ Attention aux faux sites</p>
              <p className="text-[#999999]">Plusieurs contrefaçons existent. Ne faites confiance qu'à l'adresse sur ce hub.</p>
            </div>
            <div className="card">
              <p className="font-bold mb-2">✓ HTTPS sécurisé</p>
              <p className="text-[#999999]">CinePurge utilise toujours HTTPS. Vérifiez le cadenas dans votre navigateur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Fake Sites */}
      <section className="py-24 px-4 border-t border-[#333333]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Aide-nous</p>
            <h2 className="text-5xl font-black">Signaler un faux site</h2>
          </div>
          <ReportForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 border-t border-[#333333]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">Questions fréquentes</h2>
          </div>

          <div className="space-y-3">
            {[
              { q: 'Quelle est l\'adresse de CinePurge ?', a: 'cinepurge.xyz (consultez cette page pour l\'adresse à jour)' },
              { q: 'Pourquoi ce hub existe ?', a: 'Pour offrir un point d\'accès stable et sécurisé, même si l\'adresse change.' },
              { q: 'C\'est vraiment le vrai site ?', a: 'Oui. Mettez cette page en favoris et vous aurez toujours l\'adresse officielle.' },
              { q: 'Comment signaler un faux site ?', a: 'Remplissez le formulaire "Signaler un faux site" ci-dessus.' },
              { q: 'Y a une app mobile ?', a: 'CinePurge fonctionne en PWA, installable sur téléphone.' },
            ].map((faq, i) => (
              <details key={i} className="card cursor-pointer group">
                <summary className="font-bold flex justify-between items-center">
                  <span className="group-hover:text-[#FF3B30] transition-colors">{faq.q}</span>
                  <span className="text-[#FF3B30] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-[#999999] mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#333333] py-16 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-12">
            <div>
              <p className="text-2xl font-black mb-4"><span className="text-[#FF3B30]">▶</span> CinePurge Hub</p>
              <p className="text-[#999999]">Point d'accès officiel et sécurisé pour CinePurge.</p>
            </div>
            <div>
              <h4 className="section-label mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-[#999999] hover:text-[#FF3B30] transition-colors">Accueil</a></li>
                <li><a href="/about" className="text-[#999999] hover:text-[#FF3B30] transition-colors">À propos</a></li>
                <li><a href="/privacy" className="text-[#999999] hover:text-[#FF3B30] transition-colors">Confidentialité</a></li>
                <li><a href="/terms" className="text-[#999999] hover:text-[#FF3B30] transition-colors">CGU</a></li>
              </ul>
            </div>
            <div>
              <h4 className="section-label mb-4">API</h4>
              <ul className="space-y-3">
                <li><a href="/api/current-address" className="text-[#999999] hover:text-[#FF3B30] transition-colors">/api/current-address</a></li>
                <li><a href="/api/v1/address" className="text-[#999999] hover:text-[#FF3B30] transition-colors">/api/v1/address</a></li>
                <li><a href="/api/health" className="text-[#999999] hover:text-[#FF3B30] transition-colors">/api/health</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333333] pt-8 text-center text-[#999999] text-sm">
            <p>© 2026 CinePurge Hub. Adresse officielle: cinepurge.xyz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
