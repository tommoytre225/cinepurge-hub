export default function Home() {
  return (
    <div className="bg-[#070709] text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-block px-3 py-1.5 bg-[#1a1a1f] border border-[#FF3B30]/30 rounded-full text-sm text-[#FF3B30]">
            📍 Adresse à jour - août 2026
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Bienvenue sur <span className="text-[#FF3B30]">CinePurge</span>
            </h1>
            <p className="text-lg text-[#999999] max-w-2xl mx-auto">
              Films, séries et animés en VF et VOSTFR. Cette page vous donne l'adresse actuelle du site, quelle que soit la rotation de domaine.
            </p>
          </div>

          {/* Main CTA Box */}
          <div className="bg-[#0a0a0d] border border-[#333333] rounded-lg p-8 space-y-4 max-w-xl mx-auto">
            <div className="text-left">
              <p className="text-xs text-[#999999] uppercase tracking-widest mb-3">🔗 Adresse actuelle</p>
              <a
                href="https://cinepurge.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-bold text-[#FF3B30] hover:text-[#FF6B50] transition-colors break-all"
              >
                https://cinepurge.xyz
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 text-xs text-[#999999]">
              <span>✓ Connexion chiffrée</span>
              <span>✓ Mis à jour automatiquement</span>
            </div>

            <a
              href="https://cinepurge.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block bg-[#FF3B30] hover:bg-[#E62B1F] text-white font-bold py-3 rounded-lg transition-colors"
            >
              Accéder à CinePurge →
            </a>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="py-20 px-4 border-t border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FF3B30] text-sm uppercase tracking-widest mb-4">LE SERVICE</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Pourquoi CinePurge Hub ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📺',
                title: 'Catalogue complet',
                desc: 'Films, séries et animés réunis au même endroit, en VF comme en VOSTFR.'
              },
              {
                icon: '⚡',
                title: 'Accès immédiat',
                desc: 'Aucune inscription nécessaire. Commencez à regarder directement.'
              },
              {
                icon: '🎬',
                title: 'Qualité HD',
                desc: 'Profitez du meilleur de la qualité vidéo en haute définition.'
              },
              {
                icon: '📱',
                title: 'Multi-appareils',
                desc: 'Regardez sur téléphone, tablette, ordinateur ou TV sans limite.'
              },
              {
                icon: '🔄',
                title: 'Synchronisation',
                desc: 'Votre progression sync automatiquement entre tous vos appareils.'
              },
              {
                icon: '⬇️',
                title: 'Téléchargement',
                desc: 'Téléchargez pour regarder hors ligne quand vous le souhaitez.'
              },
            ].map((feature, i) => (
              <div key={i} className="bg-[#0a0a0d] border border-[#1a1a1f] rounded-lg p-6 hover:border-[#FF3B30]/30 transition-colors">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-[#999999] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-t border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '5K+', label: 'Films' },
              { number: '2K+', label: 'Séries' },
              { number: '10K+', label: 'Animés' },
              { number: '24/7', label: 'Disponible' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#FF3B30] mb-2">{stat.number}</div>
                <div className="text-[#999999] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 border-t border-[#333333]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Questions fréquentes</h2>

          <div className="space-y-3">
            {[
              {
                q: 'Quelle est l\'adresse actuelle de CinePurge ?',
                a: 'L\'adresse actuelle figure sur cette page et mise à jour automatiquement à chaque changement de domaine. Mettez cette page en favoris.'
              },
              {
                q: 'Pourquoi l\'adresse du site change-t-elle ?',
                a: 'Pour assurer la continuité du service et la protection contre les blocages. Ce hub reste le point de repère stable.'
              },
              {
                q: 'Comment être sûr que j\'accède au vrai site ?',
                a: 'Vérifiez l\'URL affichée ici et mettez-la en favoris. C\'est la seule source officielle authentifiée.'
              },
              {
                q: 'Faut-il créer un compte ou payer ?',
                a: 'Non, CinePurge est 100% gratuit. Aucun compte, aucun abonnement, aucun frais caché.'
              },
              {
                q: 'Le site fonctionne-t-il sur tous les appareils ?',
                a: 'Oui. Téléphone, tablette, ordinateur et TV — tous les appareils sont supportés.'
              },
              {
                q: 'Y a-t-il une application mobile ?',
                a: 'Vous pouvez installer CinePurge en tant qu\'application (PWA) sur votre téléphone.'
              },
            ].map((faq, i) => (
              <details key={i} className="bg-[#0a0a0d] border border-[#1a1a1f] rounded-lg p-4 cursor-pointer hover:border-[#FF3B30]/30 transition-colors">
                <summary className="font-semibold flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-[#FF3B30]">▼</span>
                </summary>
                <p className="text-[#999999] text-sm mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#333333] py-12 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-[#FF3B30]">▶</span> CinePurge
              </div>
              <p className="text-[#999999] text-sm">
                Cette page publie l\'adresse actuelle de CinePurge et la met à jour à chaque changement de domaine. Mettez cette page en favoris.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-sm text-[#999999]">
                <li><a href="/" className="hover:text-[#FF3B30] transition">Accueil</a></li>
                <li><a href="/about" className="hover:text-[#FF3B30] transition">À propos</a></li>
                <li><a href="/privacy" className="hover:text-[#FF3B30] transition">Confidentialité</a></li>
                <li><a href="/terms" className="hover:text-[#FF3B30] transition">CGU</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">LE SERVICE</h4>
              <ul className="space-y-2 text-sm text-[#999999]">
                <li><a href="https://cinepurge.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3B30] transition">Accéder à CinePurge</a></li>
                <li><a href="/dmca" className="hover:text-[#FF3B30] transition">DMCA</a></li>
                <li><a href="#" className="hover:text-[#FF3B30] transition">Questions fréquentes</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#333333] pt-8 text-center text-[#999999] text-sm">
            <p>© 2026 CinePurge Hub. Tous droits réservés. — Adresse actuelle: cinepurge.xyz</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
