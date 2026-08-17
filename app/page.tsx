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
              Films, séries et animés en VF et VOSTFR. Cette page vous donne l'adresse actuelle du site.
            </p>
          </div>

          {/* Link Box */}
          <div className="bg-[#0a0a0d] border border-[#333333] rounded-xl p-10 space-y-5 max-w-2xl mx-auto">
            <div className="space-y-3">
              <p className="section-label">Adresse actuelle</p>
              <a
                href="https://cinepurge.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-black text-[#FF3B30] hover:text-[#FF6B50] transition-colors break-all"
              >
                https://cinepurge.xyz
              </a>
            </div>

            <div className="flex gap-4 text-sm text-[#999999] pt-2">
              <span>✓ Connexion chiffrée</span>
              <span>✓ Mis à jour auto</span>
            </div>

            <a
              href="https://cinepurge.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full block text-center text-lg py-4 mt-6"
            >
              Accéder à CinePurge
            </a>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="py-24 px-4 border-t border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="section-label mb-3">Le service</p>
            <h2 className="text-5xl md:text-6xl font-black">Ce qu'on propose</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📺', title: 'Catalogue complet', desc: 'Films, séries et animés en VF et VOSTFR.' },
              { icon: '⚡', title: 'Accès immédiat', desc: 'Pas besoin de compte. Regardez directement.' },
              { icon: '🎬', title: 'Qualité HD', desc: 'Bonne qualité vidéo en haute définition.' },
              { icon: '📱', title: 'Multi-appareils', desc: 'Téléphone, tablette, PC, TV.' },
              { icon: '🔄', title: 'Synchronisation', desc: 'Votre progression sync sur tous les appareils.' },
              { icon: '⬇️', title: 'Téléchargement', desc: 'Téléchargez pour regarder hors ligne.' },
            ].map((feature, i) => (
              <div key={i} className="card hover:shadow-lg hover:shadow-[#FF3B30]/10">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[#999999] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 border-t border-[#333333]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

      {/* FAQ */}
      <section className="py-24 px-4 border-t border-[#333333]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">Questions fréquentes</h2>
          </div>

          <div className="space-y-3">
            {[
              { q: 'Quelle est l\'adresse de CinePurge ?', a: 'cinepurge.xyz (consultez cette page pour avoir l\'adresse à jour si elle change)' },
              { q: 'Pourquoi l\'adresse change ?', a: 'Pour des raisons de sécurité et d\'accessibilité. Ce hub reste votre point de repère.' },
              { q: 'C\'est vraiment le vrai site ?', a: 'Oui. Mettez cette page en favoris et vous aurez toujours l\'adresse officielle.' },
              { q: 'Il faut un compte ?', a: 'Non. Accès gratuit et direct, pas de compte.' },
              { q: 'Ça marche sur mobile ?', a: 'Oui. Téléphone, tablette, ordinateur, TV.' },
              { q: 'Y a une app ?', a: 'CinePurge fonctionne en PWA, installable sur téléphone.' },
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
              <p className="text-2xl font-black mb-4"><span className="text-[#FF3B30]">▶</span> CinePurge</p>
              <p className="text-[#999999]">Hub officiel. Consultez ici pour l'adresse actuelle.</p>
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
              <h4 className="section-label mb-4">Service</h4>
              <ul className="space-y-3">
                <li><a href="https://cinepurge.xyz" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-[#FF3B30] transition-colors">Accéder à CinePurge</a></li>
                <li><a href="/dmca" className="text-[#999999] hover:text-[#FF3B30] transition-colors">DMCA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333333] pt-8 text-center text-[#999999] text-sm">
            <p>© 2026 CinePurge Hub. Adresse actuelle: cinepurge.xyz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
